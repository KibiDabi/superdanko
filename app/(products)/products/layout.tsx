import  AppSidebar  from "@/app/components/AppSidebar";
import { ScrollRestoration } from "@/app/components/ScrollRestoration";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <ScrollRestoration />
      <div className="flex w-full">
        <AppSidebar className="h-full z-40" style={{ position: "relative" }} />
        <SidebarInset className="flex-1 overflow-auto group-has-[[data-collapsed=true]]/sidebar-wrapper:pl-[52px]">
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
