'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartItemSchema } from "@/lib/types";
import { useCartStore } from "@/store/cartStore";
import { MinusIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";

interface UpdateCartItemProps {
  cartItem: CartItemSchema;
}

export default function UpdateCartItem({ cartItem }: UpdateCartItemProps) {
  const { removeItemFromCart, updateItemFromCart } = useCartStore();

  const handleQuantityChange = async (newQuantity: number) => {
    console.log("🛠️ New Quantity:", newQuantity);

    try {
      if (newQuantity <= 0) {
        console.log("🗑️ Removing item...");
        await removeItemFromCart(cartItem.product_id);
        toast.warning(`${cartItem.product_name} has been removed from your cart.`);
        
      } else {
        console.log("🔄 Updating item...");
        await updateItemFromCart(cartItem.product_id, newQuantity);
        toast.success(`${cartItem.product_name} has been updated in your cart.`);
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <div className="flex  items-center justify-between space-x-2 ">
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          className="size-6 sm:size-8 rounded-r-none"
          onClick={() => handleQuantityChange(cartItem.quantity - 1)}
        >
          <MinusIcon className="size-3" aria-hidden="true" />
        </Button>
        <Input
          type="number"
          min="0"
          className="h-6 sm:h-8 w-14 rounded-none border-x-0 text-center px-0"
          value={cartItem.quantity}
          onChange={(e) => handleQuantityChange(Number(e.target.value))}
        />
        <Button
          variant="outline"
          size="icon"
          className="size-6 sm:size-8 rounded-l-none rounded-r-none"
          onClick={() => handleQuantityChange(cartItem.quantity + 1)}
        >
          <PlusIcon className="size-3" aria-hidden="true" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="size-6 sm:size-8 rounded-l-none"
          onClick={() => handleQuantityChange(0)}
        >
          <TrashIcon className="size-4" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
