'use client';

import { useClerk } from "@clerk/nextjs";
import { useEffect } from "react";
import { type HandleOAuthCallbackParams } from "@clerk/types"

interface SSOCallbackProps {
    searchParams: HandleOAuthCallbackParams
  }


export default function SSOCallback({searchParams}: SSOCallbackProps) {
  const { handleRedirectCallback, signOut, session } = useClerk();

  useEffect(() => {

    async function handleCallback() {
        console.log("Session before callback:", session);

      try {
        await handleRedirectCallback(searchParams);

      } catch (err) {
        console.error("OAuth callback failed:", err);
        // Sign out the user and redirect to the sign-in page
        await signOut();
        window.location.href = "/auth/signin";
      }
      console.log("Session after callback:", session);
    }

    handleCallback();
  }, [handleRedirectCallback, signOut, session, searchParams]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Processing OAuth...</p>
    </div>
  );
}
