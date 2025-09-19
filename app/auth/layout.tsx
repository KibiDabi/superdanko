import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <Link
        href="/"
        className="absolute md:hidden left-6 top-4 flex items-center text-lg font-bold tracking-tight text-foreground/85 hover:text-foreground"
      >
        <Image src="/SUPERDANKO_piksa.png" alt="logo" width={50} height={50} />
        <span className="text-2xl font-bold lg:inline-block">SuperDanko</span>
      </Link>

      {/*Left column container*/}

      <div className=" flex items-center justify-center py-16 lg:px-12">
        {children}
      </div>

      {/*Right column container*/}

      <div className="relative aspect-video size-full hidden lg:flex items-center justify-center  ">
        <Image
          src="/images/Superdanko_spray.jpg"
          alt="Peanut Butter Jar"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          fill
        />
      </div>
    </div>
  );
}
