"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSignIn } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Icons } from "../components/Icons";
import { ClerkAPIError } from "@clerk/types";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(100, {
      message: "Password must be at most 100 characters long",
    }),
});

export function SignInForm() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [errors, setErrors] = useState<ClerkAPIError[]>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Form submission handler
  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!isLoaded) return;

    setLoading(true);
    setErrors(undefined);

    try {
      // Clerk's sign-in API call
      const signInAttempt = await signIn.create({
        identifier: data.email,
        password: data.password,
      });

      // If sign-in is successfull, activate the session and redirect
      // the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.push("/");
      } else {
        // If the status is not complete, check why.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      // Handle error using a custom function or inline logic
      if (isClerkAPIResponseError(err)) {
        setErrors(err.errors);
        err.errors.forEach((error) => toast.error(error.longMessage));
      } else {
        toast.error("An unexpected error occured. Please try again.");
        console.log(err);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form className="grid gap-2" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input id="password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full mt-2" disabled={loading}>
          {loading && (
            <Icons.spinner
              className="mr-2 size-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Sign In
        </Button>
      </form>
    </Form>
  );
}
