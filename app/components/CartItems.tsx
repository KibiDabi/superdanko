import { ScrollArea } from "@/components/ui/scroll-area";
import { CartItemSchema } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import UpdateCartItem from "./CartItemActions";
import { Badge } from "@/components/ui/badge";
import { MilkIcon } from "lucide-react";

interface CartItemProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  items: CartItemSchema[];
}

export default function CartItems({ items, className }: CartItemProps) {
    console.log('Cart items:',items);
  return (
    <ScrollArea className="max-h-[300px] pr-2">
      <div className="flex flex-col space-y-4">
        {items.map((item) => (
          <div key={item.cart_item_id} className="flex items-center justify-between">
            <div className="relative aspect-square size-14 sm:size-16 min-w-fit overflow-hidden rounded">
              <Image
                src={item.product_image}
                alt={item.product_name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                fill
                loading="lazy"
              />
            </div>

            {/*Product Details*/}
            <div className="flex-1 space-y-1 pl-4 min-w-0">
              <span className="line-clamp-1 text-sm font-medium truncate block">
                {item.product_name}
              </span>
              
              
              <span className="text-xs text-muted-foreground line-clamp-1 block">
                {/* {formatPrice(item.variant_price)} x {item.quantity} ={" "} */}
                {formatPrice((item.variant_price * item.quantity).toFixed(2))}
              </span>
              <Badge className="font-extralight px-2 py-0.5 text-[10px] sm:text-xs sm:px-2.5 text-muted-foreground gap-1" variant='outline'> {item.variant_size}</Badge>
            </div>

            {/*Update Cart Actions*/}
            <UpdateCartItem cartItem={item} />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
