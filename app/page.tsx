"use client";

import Lottie from "lottie-react";
import animationData from "../json/bodybuilder-animation.json";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center sm:p-10 p-2">
      <div className="text-center space-y-4 sm:flex sm:items-center sm:space-x-4">
        <div className="sm:w-1/2">
          <h1 className="font-geistSans leading-tight text-gradient text-4xl sm:text-7xl font-normal  relative bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-300  py-8">
            SUPERDANKO WEB SHOP
          </h1>
          <p className="font-normal text-xs md:text-xl text-neutral-400  max-w-lg mx-auto">
          Please wait, we&apos;re building up!
          </p>
        </div>
        <div className="sm:w-1/2">
          <Lottie animationData={animationData} />
        </div>
      </div>
    </main>
  );
}
