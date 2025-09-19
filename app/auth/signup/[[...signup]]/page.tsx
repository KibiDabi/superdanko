import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../../../components/Icons";
import { SignUpForm } from "@/app/auth/sign-up-form";

export default function SignUpPage() {
  return (
    <div>
      {/*Left column container*/}

      <div className="w-full max-w-md p-8 shadow-md">
        <Card>
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <SignUpForm />
            <div className="relative mt-4 mb-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or login with
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Button variant="outline" className="w-full">
                <Icons.google className="size-4 mr-2" aria-hidden="true" />{" "}
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <Icons.facebook className="size-4 mr-2" aria-hidden="true" /> Facebook
              </Button>
            </div>
          </CardContent>
          <CardFooter className="mt-4 items-center justify-center">
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/auth/signin" className="underline">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
