
import Hero from "./_components/hero"
import Marquee2D from "./_components/marquee"

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col w-full items-center justify-center py-20 px-4">
      <Hero />
      <div className="mt-12 w-full max-w-7xl">
        <Marquee2D />
      </div>
    </div>
  )
}
