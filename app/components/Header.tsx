
import MainNavbar from "@/app/components/MainNavbar";
import { navigationRoutes } from "../data/navData";
import MobileNavbar from "./MobileNavbar";
import Cart from "./Cart";
import Signin from "./Signin";

export default function Header() {
  return (
    <header className="sticky w-full top-0 z-50  py-1 border-b bg-background">
      <div className=" container h-16 items-center flex">
        <MainNavbar items={navigationRoutes.mainNav} />
        <MobileNavbar items={navigationRoutes.mainNav} />
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
