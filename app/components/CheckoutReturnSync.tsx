"use client";

import { useCartStore } from "@/store/cartStore";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const CHECKOUT_FLAG_KEY = "sd_checkout_started";

export function CheckoutReturnSync() {
	const clearCartAfterCheckout = useCartStore((state) => state.clearCartAfterCheckout);
	const pathname = usePathname();

	useEffect(() => {
		const checkoutStarted = sessionStorage.getItem(CHECKOUT_FLAG_KEY) === "1";
		if (!checkoutStarted) {
			return;
		}

		void clearCartAfterCheckout();
		sessionStorage.removeItem(CHECKOUT_FLAG_KEY);
	}, [clearCartAfterCheckout, pathname]);

	return null;
}
