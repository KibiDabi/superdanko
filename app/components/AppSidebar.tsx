import {
  AudioWaveform,
  BookOpen,
  Bot,
  MapIcon,
  Command,
  Frame,
  GalleryVerticalEnd,
  Home,
  Inbox,
  PieChart,
  Search,
  Settings,
  Settings2,
  SquareTerminal,
  Scan,
  SquareStack,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "./TeamSwitcherSidebar";
import { NavMainSidebar } from "./NavMainSidebar";
import { NavProjectsSidebar } from "./NavProjectsSidebar";
import { NavUserSidebar } from "./NavUserSidebar";
import { getCategories, getSubcategories, getSubcategoriesWithProducts } from "@/lib/actions";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "SuperDanko",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Peanut Butters",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Classic",
          url: "#",
        },
        {
          title: "Crunchy",
          url: "#",
        },
        {
          title: "Vegan",
          url: "#",
        },
        {
          title: "Crunchy Vegan",
          url: "#",
        },
      ],
    },
    {
      title: "Hazelnuts Spreads",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Classic",
          url: "#",
        },
        {
          title: "Vegan",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Our Design",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: MapIcon,
    },
  ],
};

const iconMap: Record<string, string> = {
  "peanut-butters": "nut",
  "hazelnut-spreads": "flame",
  default: "square-terminal",
};

export default async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const [categories, subcategories] = await Promise.all([
    getCategories(),
    getSubcategoriesWithProducts(),
  ]);

  const items = categories.map((category) => ({
    title: category.name,
    url: `/products/${category.slug}`,
    icon: iconMap[category.slug] ?? iconMap.default,
    isActive: true,
    items: subcategories
      .filter((sub) => sub.category === category.name)
      .map((sub) => ({
        title: sub.name,
        url: '#',
        items: sub.products.map((product) => ({
          title: product.name,
          url: `/product/${product.id}`
        }))
      })),
  }));

  return (
    <Sidebar
      collapsible="icon"
      className="h-full z-40"
      style={{ position: "relative" }}
      {...props}
    >
      <SidebarHeader className="px-3 h-[57px] flex items-center data-[collapsed=true]:px-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <SquareStack className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">SuperDanko</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMainSidebar items={items} />
        {/* <NavProjectsSidebar projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>{/* <NavUserSidebar user={data.user} /> */}</SidebarFooter>
      <SidebarRail className="top-16" />
    </Sidebar>
  );
}
