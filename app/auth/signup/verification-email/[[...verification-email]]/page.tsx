import { VerifyInputOTPForm } from "@/app/auth/verification-email-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function VerificationEmailPage() {
  return (
    <div className="w-full max-w-md p-8 shadow-md">
      <Card>
        <CardHeader className="space-y-3">
          <CardTitle className="text-2xl">Please check your email</CardTitle>
          <CardDescription>
            A verification code has been sent to your email. Please put the code
            here
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <VerifyInputOTPForm />
        </CardContent>
      </Card>
    </div>
  );
}
