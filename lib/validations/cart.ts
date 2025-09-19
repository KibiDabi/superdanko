import { z } from "zod";

export const updateCartItemSchema = z.object({
  quantity: z.number().min(1, "Quantity must be at least 1."),
});
