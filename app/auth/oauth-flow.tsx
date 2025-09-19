"use client";

import { OAuthStrategy } from "@clerk/types";
import { useSignIn } from "@clerk/nextjs";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Icons } from "../components/Icons";
import { useState } from "react";

export default function OAuthSignIn() {
  const { signIn } = useSignIn();
  const [loadingState, setLoadingState] = useState<string | null>(null);

  const oauthProviders = [
    { strategy: "oauth_google" as OAuthStrategy, label: "Google", icon: Icons.google },
    { strategy: "oauth_facebook" as OAuthStrategy, label: "Facebook", icon: Icons.facebook },
  ];

  async function signInWith(strategy: OAuthStrategy) {
    if (!signIn) return null;

    try {
      setLoadingState(strategy);
      console.log("Starting OAuth with:", strategy);
      await signIn.authenticateWithRedirect({
        strategy,
        redirectUrl: "/auth/sso-callback",
        redirectUrlComplete: "/",
      });
      console.log("Redirect initiated successfully");
    } catch (err: any) {
      setLoadingState(null);
      console.error("OAuth sign in failed:", err);
      toast.error(err);
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3">
      {oauthProviders.map(({ strategy, label, icon: IconComponent }) => (
        <Button
          key={strategy}
          variant="outline"
          className="w-full"
          disabled={loadingState === strategy}
          onClick={() => signInWith(strategy)}
        >
            {loadingState === strategy ? (
          <Icons.spinner className="mr-2 size-4 animate-spin" />
        ) : (
          <IconComponent className="size-4 mr-2" aria-hidden="true" />
        )}
        {label}
        </Button>
      ))}
    </div>
  );
}
