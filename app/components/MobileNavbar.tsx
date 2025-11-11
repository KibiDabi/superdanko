'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "./Icons";
import { NavigationItem } from "@/lib/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface MobileNavbarProps {
  items: NavigationItem["mainNav"];
  className?: string;
}

export default function MobileNavbar({ items, className }: MobileNavbarProps) {

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          id="mobile-navbar-button"
          aria-label="Open menu"
          variant="outline"
          size="icon"
          className={cn("size-9 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden", className)}
        >
          <Icons.hamburgerMenu className="size-5 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0 pt-9" aria-describedby={undefined} >
        <SheetHeader>
        <div className="w-full px-7">
          <SheetTitle>
          <Link href="/" className="items-center space-x-2 flex">
            <Image
              src="/SUPERDANKO_piksa.png"
              alt="logo"
              width={40}
              height={40}
            />
            <span className="font-bold">Super Danko</span>
          </Link>
          </SheetTitle>
        </div>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-8rem)] my-4 pb-10 pl-6  ">
          <div className="pl-1 pr-7">
            <Accordion type="single" collapsible className="w-full">
              {items.map((item, index) => (
                <AccordionItem value={item.title} key={index}>
                  <AccordionTrigger className="text-sm">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2">
                      {item.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="text-foreground/70 transition-colors hover:text-foreground"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
