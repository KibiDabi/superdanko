
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function MissionPage() {
  return (
    <main className="flex bg-gradient-to-b from-background via-muted/30 to-background min-h-screen flex-col items-center justify-center px-6 py-16 text-center h-full w-full">
      {/* Hero Section */}
      <div className="max-w-3xl space-y-6">
        <h1 className="text-5xl font-bold tracking-tight sm:text-5xl">
          Our Mission
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          At <span className="font-semibold text-primary">SuperDanko</span>, our
          mission is to empower everyday heroes with natural, energy-packed
          peanut butter that fuels both body and spirit. We believe good food
          leads to good energy — and good energy builds greatness.
        </p>

        <div className="relative z-10 mt-10 flex gap-4 justify-center">
          <Button variant='destructive' >
            <Link href="/products">Shop Now</Link>
          </Button>
          <Button variant='ghost' >
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>

      {/* Separator */}
      <Separator className="my-16 max-w-4xl mx-auto" />

      {/* Core Values */}
      <div className="max-w-4xl space-y-8">
        <h2 className="text-3xl font-semibold">Our Core Values</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md">
            <h3 className="text-xl font-semibold mb-2">Quality First</h3>
            <p className="text-muted-foreground">
              Every jar of SuperDanko is crafted with the purest ingredients —
              no shortcuts, no fillers, just honest goodness.
            </p>
          </div>
          <div className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md">
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-muted-foreground">
              We care for the planet as much as for our customers — using
              eco-friendly packaging and ethically sourced ingredients.
            </p>
          </div>
          <div className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md">
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-muted-foreground">
              We grow together. Every purchase supports local growers and global
              food initiatives.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
