import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Blog() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto flex flex-col gap-14">
        <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <h4 className="text-3xl md:text-5xl tracking-tight max-w-xl font-display font-semibold">
            Latest articles
          </h4>
          <Button className="gap-4 font-semibold">
            View all articles <MoveRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
            <div className="bg-muted rounded-md aspect-video mb-4"></div>
            <h3 className="text-xl tracking-tight">Behind the Scenes</h3>
            <p className="text-muted-foreground text-base">
            Discover the technology and creativity behind SuperDanko&apos;s immersive experiences.
            </p>
          </div>
          <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
            <div className="bg-muted rounded-md aspect-video mb-4"></div>
            <h3 className="text-xl tracking-tight">Community Highlights</h3>
            <p className="text-muted-foreground text-base">
            Celebrating the most memorable moments from the SuperDanko community.
            </p>
          </div>
          <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
            <div className="bg-muted rounded-md aspect-video mb-4"></div>
            <h3 className="text-xl tracking-tight">Upcoming Features</h3>
            <p className="text-muted-foreground text-base">
            Get a sneak peek at the exciting new features coming to SuperDanko.
            </p>
          </div>
          <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
            <div className="bg-muted rounded-md aspect-video mb-4"></div>
            <h3 className="text-xl tracking-tight">Enhancing User Experience</h3>
            <p className="text-muted-foreground text-base">
            Discover how SuperDanko is revolutionizing user experience with innovative features and seamless design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
