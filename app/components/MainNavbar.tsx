"use client"

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavigationItem } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SiteMeta {
  name: string;
  description: string;
}

interface NavbarProps {
  items: NavigationItem["mainNav"];
  siteMeta?:  SiteMeta;
  className?: string;
}

export default function MainNavbar({ items, siteMeta, className }: NavbarProps) {
  console.log(items.map((item) => item.items.map((item) => item.description)));
  return (
    <div className={cn("hidden gap-6 lg:flex", className)}>
      <Link href="/" className="hidden items-center space-x-2 lg:flex">
        <Image src="/SUPERDANKO_piksa.png" alt="logo" width={50} height={50} />
        <span className="hidden text-2xl font-bold lg:inline-block">
          SuperDanko
        </span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="h-auto">
              {items[0].title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="flex size-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <Image
                        src="/SUPERDANKO_piksa.png"
                        alt="logo"
                        width={80}
                        height={80}
                        className="h-12 w-10"
                        aria-hidden="true"
                      />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        {siteMeta?.name ?? 'SuperDanko'}
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        {siteMeta?.description ?? 'An online web shop for peanut butters'}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                {items[0].items.map((item) => (
                  <ListItem
                    key={item.title}
                    href={item.href}
                    title={item.title}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {items
            .filter((item) => item.title !== items[0].title)
            .map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="h-auto">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.items.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

interface ListItemProps {
  href: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

function ListItem({ href, title, children, className }: ListItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={String(href)}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-snug">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

ListItem.displayName = "ListItem";
