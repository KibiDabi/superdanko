"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useUser } from "@clerk/clerk-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";
import { GearIcon, ExitIcon } from "@radix-ui/react-icons";

export default function Signin() {
  const { isSignedIn, user } = useUser();
  return (
    <>
      {isSignedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" className={cn("size-8 rounded-full")}>
              <Avatar className="size-8">
                <AvatarImage src={user?.imageUrl} alt={user?.username ?? ""} />
                <AvatarFallback>
                  {user?.firstName?.[0]}
                  {user?.lastName?.[0]}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col">
              {user?.firstName} {user?.lastName}
              <span className="text-muted-foreground text-xs">
                {user?.primaryEmailAddress?.emailAddress}
              </span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <GearIcon className="mr-2 size-4" />
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icons.billing className="mr-2 size-4" />
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href='/auth/logout'>
                <ExitIcon className="mr-2 size-4" aria-hidden='true' />
                Logout
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button size="sm" variant="destructive">
          <Link href="/auth/signin">Sign In</Link>
        </Button>
      )}
    </>
  );
}
