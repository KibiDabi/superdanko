import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for SuperDanko.",
};

const LAST_UPDATED = "April 9, 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-10 md:py-14">
      <article className="space-y-11">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. General Information</h2>
          <p className="text-muted-foreground">
            This website is operated by a business owner currently in the process of registering a company.
            Once registered, full company details (company name, address, and OIB) will be provided here.
          </p>
          <p className="text-muted-foreground">
            For any questions regarding this Privacy Policy, you can contact us at:
            {" "}<strong className="text-foreground">[your email]</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Personal Data We Collect</h2>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>First name and last name</li>
            <li>Email address</li>
            <li>Shipping address</li>
            <li>Order-related information (products purchased, quantities, etc.)</li>
          </ul>
          <p className="text-muted-foreground">
            We also collect technical data through cookies, such as session identifiers used to maintain your shopping cart.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Purpose and Legal Basis for Processing</h2>
          <p className="text-muted-foreground">We process your personal data for the following purposes:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>To process and fulfill your orders</li>
            <li>To manage your shopping cart</li>
            <li>To communicate with you regarding your order</li>
            <li>To comply with legal obligations (e.g., accounting and tax regulations)</li>
          </ul>
          <p className="text-muted-foreground">The legal basis for processing your data is:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Performance of a contract (processing your order)</li>
            <li>Compliance with legal obligations</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Payments and Third-Party Services</h2>
          <p className="text-muted-foreground">
            Payments are processed securely via Shopify. We do not collect or store your payment details.
          </p>
          <p className="text-muted-foreground">
            When you proceed to checkout, your data is shared with Shopify in order to complete your purchase.
          </p>
          <p className="text-muted-foreground">We may also share your data with:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Hosting and infrastructure providers (e.g. website hosting)</li>
            <li>Analytics providers (e.g. Vercel Analytics)</li>
            <li>Delivery services (for shipping your order)</li>
          </ul>
          <p className="text-muted-foreground">
            These third parties process your data only as necessary to provide their services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Cookies</h2>
          <p className="text-muted-foreground">We use cookies to:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Maintain your shopping cart session</li>
            <li>Ensure proper functionality of the webshop</li>
          </ul>
          <p className="text-muted-foreground">
            We may also use analytics tools (such as Vercel Analytics) to understand how users interact with the website.
          </p>
          <p className="text-muted-foreground">You can control cookie settings through your browser.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Data Retention</h2>
          <p className="text-muted-foreground">
            We retain your personal data only for as long as necessary to:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Fulfill your order</li>
            <li>Comply with legal obligations (such as accounting requirements)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Your Rights</h2>
          <p className="text-muted-foreground">Under the GDPR, you have the right to:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Restrict or object to processing</li>
            <li>Request data portability</li>
          </ul>
          <p className="text-muted-foreground">
            To exercise these rights, please contact us via email.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">8. Right to Lodge a Complaint</h2>
          <p className="text-muted-foreground">
            If you believe your data is being processed unlawfully, you have the right to lodge a complaint with the supervisory authority:
          </p>
          <p className="text-muted-foreground">
            AZOP
            <br />
            Selska cesta 136, Zagreb
            <br />
            Email:{" "}
            <a href="mailto:azop@azop.hr" className="underline underline-offset-4 hover:text-foreground">
              azop@azop.hr
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">9. Data Security</h2>
          <p className="text-muted-foreground">
            We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, or misuse.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">10. Changes to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. Any changes will be published on this page.
          </p>
        </section>
      </article>
    </main>
  );
}
