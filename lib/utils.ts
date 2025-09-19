import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | string,
  options: Intl.NumberFormatOptions & { locale?: string } = {}
) {
  const { locale = "de-DE" } = options;

  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: options.currency ?? "EUR",
    notation: options.notation ?? "standard",
    ...options,
  });

  return formatter.format(Number(price));
}
