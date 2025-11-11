"use client";

import { Button } from "@/components/ui/button";
import { blurInUp } from "@/lib/animations";
import { SectionTextProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SectionText({
  tagline,
  title,
  text,
  buttonText,
  href,
  align = "left",
  animated = false,
}: SectionTextProps) {
  // Ensure title is string before splitting
  const titleText = typeof title === "string" ? title : "";

  // Wrap container in motion only if animated
  const Container = animated ? motion.div : "div";
  const TaglineWrapper = animated ? motion.div : "div";
  const TitleWrapper = animated ? motion.h2 : "h2";
  const Paragraph = animated ? motion.p : "p";
  const ButtonWrapper = animated ? motion.div : "div";

  return (
    <Container
      {...(animated
        ? {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, amount: 0.4 },
          }
        : {})}
      className={cn(
        "flex flex-col",
        align === "left" && "md:mr-12 lg:mr-16 md:order-first md:w-6/12",
        align === "center" && "items-center md:w-full",
        align === "right" && "md:ml-12 lg:ml-16 md:order-last md:w-6/12"
      )}
    >
      {/* Tagline */}
      <TaglineWrapper
        {...(animated ? { variants: blurInUp, custom: 0 } : {})}
        className={cn(
          "font-bold text-red-600 text-sm text-center uppercase py-1",
          align === "left" && "md:text-left",
          align === "center" && "md:text-center",
          align === "right" && "md:text-left"
        )}
      >
        {tagline}
      </TaglineWrapper>

      {/* Title (staggered lines) */}
      <TitleWrapper
        className={cn(
          "text-4xl font-display font-semibold text-center text-pretty md:text-3xl lg:text-5xl md:text-left mt-4 bg-linear-to-br bg-gradient-stop bg-clip-text from-black via-gray to-white/30 leading-none lg:leading-tight",
          align === "left" && "text-center",
          align === "center" && "text-center",
          align === "right" && "text-center"
        )}
      >
        {animated && titleText
          ? titleText.split("\n").map((line, i) => (
              <motion.span
                key={i}
                variants={blurInUp}
                custom={i + (tagline ? 1 : 0)} // 👈 offset if Tagline exists
                className="block"
              >
                {line}
              </motion.span>
            ))
          : title}
      </TitleWrapper>

      {/* Text */}
      {text && (
        <Paragraph
          {...(animated
            ? { variants: blurInUp, custom: titleText.split("\n").length }
            : {})}
          className={cn(
            "text-sm text-muted-foreground max-w-sm md:text-base leading-7 py-8 md:max-w-md lg:max-w-2xl xl:max-w-4xl",
            align === "left" && "text-center md:text-left",
            align === "center" && "text-center md:text-center",
            align === "right" && "text-center md:text-left"
          )}
        >
          {text}
        </Paragraph>
      )}

      {/* Button */}
      <ButtonWrapper
        {...(animated
          ? { variants: blurInUp, custom: titleText.split("\n").length + 1 }
          : {})}
        className={cn(
          "items-center justify-center flex mt-6 mb-10 space-x-6",
          align === "left" && "md:justify-start",
          align === "center" && "md:justify-center",
          align === "right" && "md:justify-start"
        )}
      >
        <Link href={href}>
          <Button variant="destructive">{buttonText}</Button>
        </Link>
      </ButtonWrapper>
    </Container>
  );
}
