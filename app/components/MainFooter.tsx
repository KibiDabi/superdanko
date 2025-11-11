import Image from "next/image";
import Link from "next/link";
import { getNavigationRoutes } from "../data/navData";
import { Icons } from "./Icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export async function MainFooter() {

  const navigationRoutes = await getNavigationRoutes();
  
  return (
    <footer className="w-full border-t bg-background">
      <section className="grid items-center gap-8 pb-8 pt-6 lg:py-6  px-4 sm:px-8">
        <section className="flex flex-col gap-10 lg:flex-row lg:gap-40">
          <section className="lg:pl-0">
            <Link href="/" className="flex w-fit items-center space-x-2">
              <Image
                src="/SUPERDANKO_piksa.png"
                alt="logo"
                width={19}
                height={19}
              />
              <span className="font-bold">SuperDanko</span>
              <span className="sr-only">Home</span>
            </Link>
          </section>
          <section className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-4">
            {navigationRoutes.footerNav.map((item) => (
              <div key={item.title} className="space-y-3">
                <p className="text-base font-medium">{item.title}</p>
                <ul className="space-y-2.5">
                  {item.items.map((fragment) => (
                    <li key={fragment.title}>
                      <Link
                        href={fragment.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {fragment.title}
                        <span className="sr-only">{fragment.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </section>
        <section className="flex items-center space-x-4 px-1 sm:px-2 md:px-4 lg:px-0">
          <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
            © 2025 SuperDanko™. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-1">
            <Link
              href="https://www.instagram.com/super_danko"
              aria-label="Instagram"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })
              )}
            >
              <Icons.instagram className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="https://www.instagram.com/super_danko"
              aria-label="Facebook"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })
              )}
            >
              <Icons.facebook className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="https://www.instagram.com/super_danko"
              aria-label="TikTok"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })
              )}
            >
              <Icons.tiktok className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </section>
    </footer>
  );
}
