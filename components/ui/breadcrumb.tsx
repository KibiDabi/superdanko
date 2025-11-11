import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { ChevronRightIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"

const Breadcrumb = (
  {
    ...props
  }: React.ComponentPropsWithoutRef<"nav">
) => <nav data-slot="breadcrumb" aria-label="breadcrumb" {...props} />
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = (
  {
    className,
    ...props
  }: React.ComponentPropsWithoutRef<"ol">
) => (<ol
  data-slot="list"
  className={cn(
    "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
    className
  )}
  {...props}
/>)
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = (
  {
    className,
    ...props
  }: React.ComponentPropsWithoutRef<"li">
) => (<li
  data-slot="item"
  className={cn("inline-flex items-center gap-1.5", className)}
  {...props}
/>)
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = (
  {
    asChild,
    className,
    ...props
  }: {
    asChild?: boolean;
    className?: string;
  } & React.ComponentPropsWithoutRef<"a">
) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="link"
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
}
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = (
  {
    className,
    ...props
  }: React.ComponentPropsWithoutRef<"span">
) => (<span
  data-slot="page"
  role="link"
  aria-disabled="true"
  aria-current="page"
  className={cn("font-normal text-foreground", className)}
  {...props}
/>)
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRightIcon />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <DotsHorizontalIcon className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
