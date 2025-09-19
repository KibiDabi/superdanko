import * as React from "react";

import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Ingredients from "./components/Ingredients";
import SuperdankoBrain from "./components/SuperdankoBrain";
import SuperdankoArm from "./components/SuperdankoArm";
import { MainFooter } from "./components/MainFooter";
import SuperdankoCarousel from "./components/SuperdankoCarousel";
import AnimatedTextSection from "./components/AnimatedTextSection";

export default function Home() {
  return (
    <div className="mx-auto relative space-y-12 lg:space-y-0 flex min-h-screen flex-col ">
      
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#1a1919_1px,transparent_1px),linear-gradient(to_bottom,#1a1919_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_75%_300px,#661919,transparent)]"></div>
      </div>

      <main className="flex flex-col lg:flex-row items-center w-full ">
        <Hero />
      </main>
      <div className=" mb-20 px-4 space-y-5 py-9 dark:bg-transparent md:py-11 lg:py-22">
        <AnimatedTextSection />
        <div className=" grid mx-auto  items-center justify-center md:max-w-[64rem] gap-4 sm:grid-cols-2 md:grid-cols-3">
          <ProductList />
        </div>
      </div>
      <div className=" pb-15 flex flex-col  overflow-hidden sm:pt-12 sm:pb-32 sm:gap-y-32  md:pb-40 md:gap-y-40">
        <Ingredients />
        <SuperdankoBrain />
        <SuperdankoArm />
        <SuperdankoCarousel href="/products" />
      </div>
      <MainFooter />
    </div>
  );
}

// If I add container class into this div -> <div className=" mb-20 space-y-5 bg-slate-100 py-9 dark:bg-transparent md:py-11 lg:py-22">
// this means that the background will not goes till the end of the app on both sides
