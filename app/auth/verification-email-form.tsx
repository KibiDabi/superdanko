"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Icons } from "../components/Icons";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// 1. Create a form shema
const formSchema = z.object({
  pin: z
    .string()
    .min(6, { message: "Your one-time password must be 6 characters" }),
});

export function VerifyInputOTPForm() {
  const [loading, setLoading] = useState(false);
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  // 2. Define a form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pin: "",
    },
  });

  // 3. Define a submit handler
  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!isLoaded) return;

    setLoading(true);

    try {
      const SignUpAttempt = await signUp.attemptEmailAddressVerification({
        code: data.pin,
      });

      if (SignUpAttempt.status === "complete") {
        await setActive({ session: SignUpAttempt.createdSessionId });
        router.push("/");
      }
      // If the status is not complete, check why. User may need to
      // complete further steps.
      if (SignUpAttempt.status !== "complete") {
        console.error(JSON.stringify(SignUpAttempt, null, 2));
      }
    } catch (err: any) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  }

  // 4. Build your form
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" grid gap-4  space-y-6"
      >
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>One-time password</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading && (
            <Icons.spinner
              className="mr-3 size-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Verify
        </Button>
      </form>
    </Form>
  );
}
