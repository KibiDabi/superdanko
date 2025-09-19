"use client";

import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = { selected?: boolean } & ComponentPropsWithRef<"button">;

export const DotButton: React.FC<PropType> = ({ selected, className, ...props }) => {
  const { children, ...restProps } = props;

  return (
    <Button
    variant="ghost"
    size="icon"
    type="button"
    className={cn(
      // outer button style (same for all dots)
      "rounded-full aspect-square size-4 sm:size-5 p-0",
    
      selected
        ? "bg-white-600 border border-white-800" // SELECTED
        : "bg-muted-foreground/20 border border-muted-foreground/40", // NOT SELECTED 
      className
    )}
      {...restProps}
    >
      {children}
    </Button>
  );
};
