"use client";

import {
  Bot,
  ChevronRight,
  CupSoda,
  Droplet,
  Flame,
  Nut,
  SquareTerminal,
  type LucideIcon,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

const iconComponentMap: Record<string, LucideIcon> = {
  nut: Nut,
  flame: Flame,
};

export function NavMainSidebar({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: string;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      items?: {
        title: string;
        url: string
      }[];
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Products</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const Icon = item.icon ? iconComponentMap[item.icon] : null;
          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        {/* <SidebarMenuSubButton asChild>
                          <a href={subItem.url}>
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton> */}
                        {/* Render products under each subcategory */}
                        {subItem.items?.length ? (
                          <SidebarMenuSub className="pl-4">
                            {subItem.items.map((product) => (
                              <SidebarMenuSubItem key={product.title}>
                                <SidebarMenuSubButton asChild>
                                  <a href={product.url}>
                                    <span>{product.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        ) : null}
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
