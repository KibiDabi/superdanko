
import MainNavbar from "@/app/components/MainNavbar";
import { getNavigationRoutes } from "../data/navData";
import MobileNavbar from "./MobileNavbar";
import Cart from "./Cart";
import Signin from "./Signin";

export default async function Header() {
  const navigationRoutes = await getNavigationRoutes();

  const siteMeta = {
    name: navigationRoutes.name ?? "SuperDanko",
    description: navigationRoutes.description ?? "An online web shop for peanut butters",
  };

  return (
    <header className="sticky w-full top-0 z-50  py-1 border-b bg-background">
      <div className=" mx-auto justify-between px-4 sm:px-6 lg:px-8 h-16 items-center flex">
        <MainNavbar items={navigationRoutes.mainNav} siteMeta={siteMeta} className="hidden lg:flex" />
        <MobileNavbar items={navigationRoutes.mainNav} className="lg:hidden flex" />
        <div className="flex flex-1 items-center space-x-4 justify-end">
          <nav className="flex items-center space-x-2">
            <Cart />
            <Signin />
          </nav>
        </div> 
      </div>
    </header>
  );
}
