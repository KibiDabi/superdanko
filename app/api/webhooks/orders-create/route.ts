import { NextRequest, NextResponse } from "next/server";
import { db } from "@vercel/postgres";
import crypto from "crypto";

type OrderAttribute = {
    name?: string;
    key?: string;
    value?: string;
};

type ShopifyOrderWebhook = {
    id?: string | number;
    note_attributes?: OrderAttribute[];
};

// VERIFY THE REQ IS GENUINELY FROM SHOPIFY
function verifyShopifyWebhook(body: string, hmacHeader: string): boolean {
        const secret = process.env.SHOPIFY_WEBHOOK_SECRET;
        if (!secret || !hmacHeader) {
            return false;
        }

        const digest = crypto
      .createHmac("sha256", secret)
      .update(body, "utf8")
      .digest("base64");

        const digestBuffer = Buffer.from(digest, "utf8");
        const headerBuffer = Buffer.from(hmacHeader, "utf8");

        if (digestBuffer.length !== headerBuffer.length) {
            return false;
        }

        return crypto.timingSafeEqual(digestBuffer, headerBuffer);
}

export async function POST(req: NextRequest) {

    const rawBody = await req.text();
    const hmac = req.headers.get('x-shopify-hmac-sha256') ?? '';

    // Security check - reject requests not from Shopify
    if (!verifyShopifyWebhook(rawBody, hmac)) {

        console.warn("⚠️ Invalid Shopify webhook signature");
        return NextResponse.json({ ok: false }, { status: 401 });

    }

    let order: ShopifyOrderWebhook;
    try {
      order = JSON.parse(rawBody) as ShopifyOrderWebhook;
    } catch {
      return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
    }

    // Extract your DB cart ID from order note_attributes
    const cartIdAttr = order.note_attributes?.find(
        (attr) => attr.name === "cart_id" || attr.key === "cart_id" || attr.name === "cartId" || attr.key === "cartId",
    );

    if (!cartIdAttr?.value) {
        
        console.warn("⚠️ No cartId found in order note_attributes");
        return NextResponse.json({ ok: true }); // Still return 200 to Shopify to avoid retries

    }
    
    const cartId = cartIdAttr.value;

    try {
        await db.query(`DELETE FROM cart_items WHERE cart_id = $1`, [cartId]);
        console.log(`✅ Cart ${cartId} cleared after order ${order.id}`);
    } catch (err) {
        console.error("❌ Failed to clear cart:", err)
        return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true });



}












