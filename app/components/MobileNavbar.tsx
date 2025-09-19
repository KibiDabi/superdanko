import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "./Icons";
import { NavigationItem } from "@/lib/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MobileNavbarProps {
  items: NavigationItem["mainNav"];
}

export default function MobileNavbar({ items }: MobileNavbarProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-5 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Icons.hamburgerMenu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0 pt-9">
        <div className="w-full px-7">
          <Link href="/" className="items-center space-x-2 flex">
            <Image
              src="/SUPERDANKO_piksa.png"
              alt="logo"
              width={40}
              height={40}
            />
            <span className="font-bold">Super Danko</span>
          </Link>
        </div>
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
                        key={index}
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
