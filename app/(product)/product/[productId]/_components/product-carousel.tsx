"use client";

import { StoredFile } from "@/lib/types";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { DotButton, useDotButton } from "./embla-carousel-dot-button";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./embla-carousel-arrow-buttons";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProductCarouselProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  images: StoredFile[];
  options?: EmblaOptionsType;
}

export default function ProductCarousel({
  images,
  options,
  className,
  ...props
}: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      <div ref={emblaRef} className="overflow-hidden max-h-[80vh]">
        <div
          className="flex touch-pan-y -ml-4"
          style={{ backfaceVisibility: "hidden" }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square min-w-0 flex-[0_0_100%] pl-4"
            >
              <Image
                key={index}
                role="group"
                aria-roledescription="slide"
                src={image.image_url}
                alt={image.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="grid w-full items-center justify-content gap-2">
        <div className="flex items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />

          <div className="flex flex-wrap flex-1 justify-end items-center gap-1.5 mr-2">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                selected={ index === selectedIndex }
                className="cursor-pointer bg-transparent flex items-center justify-center rounded-2xl"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
