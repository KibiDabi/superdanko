"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { updateCartItemSchema } from "@/lib/validations/cart";
import { useCartStore } from "@/store/cartStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, MinusIcon, PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface AddToCartProps {
  variantId: string;
  showBuyNow: boolean;
  onSuccess?: () => void;
}

export default function AddToCartForm({
  variantId,
  showBuyNow,
  onSuccess,
}: AddToCartProps) {
  const { addItemToCart } = useCartStore();

  const rootId = useId();
  const router = useRouter();

  const [isAddingToCart, setIsAdddingToCart] = useState(false);
  const [isBuying, setIsBuying] = useState(false);

  const form = useForm<z.infer<typeof updateCartItemSchema>>({
    resolver: zodResolver(updateCartItemSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  async function onSubmit(value: z.infer<typeof updateCartItemSchema>) {
    try {
      setIsAdddingToCart(true);
      await addItemToCart(variantId, value.quantity);
      toast.success("Form added to cart!");
      onSuccess?.();
    } catch (error) {
      toast.error("Form failed to add to cart.");
    } finally {
      setIsAdddingToCart(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-xs space-y-2"
      >
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem className="space-y-6">
              <FormLabel className="text-base text-muted-foreground">
                Quantity:
              </FormLabel>
              <div className="grid grid-cols-[1fr_auto] gap-2">
                <div className="flex items-center w-full">
                  <Button
                    id={`${rootId}-decrement`}
                    type="button"
                    variant="outline"
                    size="icon"
                    className="size-8 shrink-0 rounded-r-none"
                    onClick={() =>
                      form.setValue(
                        "quantity",
                        Math.max(0, form.getValues("quantity") - 1)
                      )
                    }
                    disabled={isAddingToCart}
                  >
                    <MinusIcon className="size-3" aria-hidden="true" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                  <FormControl>
                    <Input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      {...field}
                      className="h-8 w-16 rounded-none border-x-0"
                      onChange={(e) => {
                        const val = parseInt(e.target.value, 10);
                        if (!isNaN(val) && val >= 1) return field.onChange(val);
                      }}
                    />
                  </FormControl>

                  <Button
                    id={`${rootId}-increment`}
                    type="button"
                    variant="outline"
                    size="icon"
                    className="size-8 shrink-0 rounded-l-none"
                    onClick={() =>
                      form.setValue("quantity", form.getValues("quantity") + 1)
                    }
                    disabled={isAddingToCart}
                  >
                    <PlusIcon className="size-3" aria-hidden="true" />
                    <span className="sr-only">Add item</span>
                  </Button>
                </div>

                {/* Side Button */}
                <Button
                  aria-label="Add to cart"
                  type="submit"
                  size="sm"
                  className="h-8 whitespace-nowrap w-[128px]"
                  variant="default"
                  disabled={isAddingToCart}
                >
                  {isAddingToCart && (
                    <Loader2Icon
                      className="animate-spin size-4 mr-2"
                      aria-hidden="true"
                    />
                  )}{" "}
                  Add to cart
                </Button>
              </div>

              {/* Buy it now button */}
              <Button
                aria-label="Buy it now"
                type="button"
                size="sm"
                className="w-full"
                variant="outline"
                onClick={async () => {
                  // TODO: Implement Buy it now flow
                  toast.info("Buy it now is not available yet!");
                  // setIsBuying(true);

                  // try {
                  //   await addItemToCart(variantId, form.getValues("quantity"));
                  //   toast.success("Form item added to cart!");
                  // } catch (error) {
                  //   toast.error("Form item failed to add to cart.");
                  // } finally {
                  //   router.push("/cart");
                  //   setIsBuying(false);
                  // }
                }}
                disabled={isBuying}
              >
                {isBuying && (
                  <Loader2Icon
                    className="animate-spin size-4 mr-2"
                    aria-hidden="true"
                  />
                )}{" "}
                Buy it now
              </Button>
              <FormMessage />
            </FormItem>
          )}
        />
        <div></div>
      </form>
    </Form>
  );
}
