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

      {/* Column layout: sidebar+content + footer */}
      <div className="flex flex-col min-h-screen w-full">
        {/* Row: sidebar + page content */}
        <div className="flex flex-1 w-full">
          <AppSidebar className="shrink-0 h-full z-40" />
          <SidebarInset className="flex-1 overflow-auto">
            {children}
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
