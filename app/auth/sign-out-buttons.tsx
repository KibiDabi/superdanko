"use client";

import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row w-full gap-4">
      <Button
        onClick={() => router.back()}
        variant="secondary"
        className="mt-4 w-full"
      >
        Go back
      </Button>
      <Button
        onClick={() => signOut({ redirectUrl: "/" })}
        className="mt-4 w-full"
      >
        Log out
      </Button>
    </div>
  );
}
