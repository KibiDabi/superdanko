import Image from "next/image";
import { TextRevealCardPreview } from "./ui/text-reveal-preview";

export default function Home() {
  return (
    <main className=" items-start preview flex min-h-screen w-full  items-center justify-center sm:p-10 p-2">
      <TextRevealCardPreview />
    </main>
  );
}
