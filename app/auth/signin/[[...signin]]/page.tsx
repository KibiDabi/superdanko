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
import { SignInForm } from "../../sign-in-form";
import OAuthSignIn from "../../oauth-flow";

export default function SignInPage() {
  return (
    <div>
      {/*Left column container*/}

      <div className="w-full max-w-md p-8 shadow-md">
        <Card>
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl">Sign In</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <SignInForm />
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
            <OAuthSignIn />
          </CardContent>
          <CardFooter className="mt-4 items-center justify-center">
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
