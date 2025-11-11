import { SectionTextProps } from "@/lib/types";
import SectionText from "./SectionText";
import SuperCarousel from "./SuperCarousel";

export default function SuperdankoCarousel({
  align = "center",
}: SectionTextProps) {
  return (
    <section className="lg:pt-20 sm:pt-12  md:mt-22 relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#141313_1px,transparent_1px)] bg-size-[6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_100px,#434141,transparent)]"></div>
      </div>{" "}
      <div className=" px-4  flex flex-col items-center justify-center min-h-screen">
        <div className="container">
          <SectionText
            tagline="Fuel Up, Power Up, and Take on the Day!"
            title="Choose Your Superhero Butter"
            text="One tablespoon of SuperDanko butter transforms any meal into a supercharged experience. For an extra boost, melt 3-5 teaspoons in your mouth (2-3 minutes each) and feel ready to conquer anything. Pick your favorite flavor, hit Buy Now, and unleash your inner hero!"
            align={align}
            buttonText="Buy now"
            href="/products"
            animated
          />
        </div>
        <div className=" pb-8">
          <SuperCarousel />
        </div>
      </div>
    </section>
  );
}
