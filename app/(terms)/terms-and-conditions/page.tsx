import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions of Sale",
  description: "Terms and Conditions of Sale for SuperDanko.",
};

const LAST_UPDATED = "April 9, 2026";

export default function TermsAndConditionsPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-10 md:py-14">
      <article className="space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight uppercase md:text-4xl">Terms and Conditions of Sale</h1>
          <p className="text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Company Information</h2>
          <p className="text-muted-foreground">
            This website is operated by:
            <br />
            <strong className="text-foreground">[COMPANY NAME]</strong>
            <br />
            <strong className="text-foreground">[ADDRESS]</strong>
            <br />
            VAT / OIB: <strong className="text-foreground">[NUMBER]</strong>
            <br />
            Email: <strong className="text-foreground">[EMAIL]</strong>
          </p>
          <p className="text-muted-foreground">These Terms govern all purchases made through this online store.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Scope</h2>
          <p className="text-muted-foreground">These Terms define:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>conditions of purchase</li>
            <li>rights and obligations of the seller and buyer</li>
            <li>delivery, returns, and complaint procedures</li>
          </ul>
          <p className="text-muted-foreground">
            By placing an order, the buyer confirms acceptance of these Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Products</h2>
          <p className="text-muted-foreground">
            The seller offers food products, including peanut-based and hazelnut-based spreads.
          </p>
          <p className="text-muted-foreground">Due to the natural composition of the products:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>oil separation may occur</li>
            <li>texture, color, and taste may vary between batches</li>
          </ul>
          <p className="text-muted-foreground">These variations are normal and do not constitute defects.</p>
          <p className="text-muted-foreground">Product images are for illustrative purposes only.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Allergen Disclaimer</h2>
          <p className="text-muted-foreground">Products may contain or come into contact with:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>peanuts</li>
            <li>hazelnuts</li>
            <li>other nuts</li>
          </ul>
          <p className="text-muted-foreground">
            Customers with allergies are responsible for reviewing product ingredients before purchase.
          </p>
          <p className="text-muted-foreground">
            The seller is not liable for allergic reactions where allergens are clearly disclosed.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Prices</h2>
          <p className="text-muted-foreground">All prices are expressed in EUR and include VAT (if applicable).</p>
          <p className="text-muted-foreground">Shipping costs are calculated and displayed during checkout.</p>
          <p className="text-muted-foreground">The seller reserves the right to change prices at any time.</p>
          <p className="text-muted-foreground">The price valid at the time of purchase applies.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Order Process</h2>
          <p className="text-muted-foreground">The purchase process includes:</p>
          <ol className="list-decimal space-y-1 pl-5 text-muted-foreground">
            <li>Selecting products</li>
            <li>Adding products to the cart</li>
            <li>Entering customer information</li>
            <li>Completing payment via Shopify</li>
          </ol>
          <p className="text-muted-foreground">
            After payment, the buyer receives an order confirmation via email.
          </p>
          <p className="text-muted-foreground">The seller reserves the right to refuse or cancel an order in case of:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>suspected fraud</li>
            <li>incorrect pricing due to technical error</li>
            <li>product unavailability</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Payment</h2>
          <p className="text-muted-foreground">Payments are securely processed via Shopify.</p>
          <p className="text-muted-foreground">The seller does not store or have access to payment card details.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">8. Shipping and Delivery</h2>
          <p className="text-muted-foreground">Delivery is available within Croatia and the European Union.</p>
          <p className="text-muted-foreground">Estimated delivery times:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Croatia: [2–5 working days]</li>
            <li>EU: [3–10 working days]</li>
          </ul>
          <p className="text-muted-foreground">Delivery times are estimates and not guaranteed.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">9. Delivery Issues</h2>

          <h3 className="text-base font-semibold">9.1 Incorrect Address</h3>
          <p className="text-muted-foreground">
            The buyer is responsible for providing accurate delivery information.
          </p>
          <p className="text-muted-foreground">
            The seller is not responsible for failed delivery due to incorrect address.
          </p>

          <h3 className="text-base font-semibold">9.2 Uncollected Packages</h3>
          <p className="text-muted-foreground">If the buyer fails to collect the package and it is returned:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>the seller may charge additional shipping costs</li>
            <li>or cancel the order and issue a refund excluding shipping</li>
          </ul>

          <h3 className="text-base font-semibold">9.3 Lost or Damaged Packages</h3>
          <p className="text-muted-foreground">If a package is lost or arrives damaged:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>the buyer must notify the seller within 48 hours</li>
            <li>the seller will initiate a claim with the courier</li>
          </ul>
          <p className="text-muted-foreground">
            Resolution (replacement or refund) will be handled after courier confirmation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">10. Storage and Handling</h2>
          <p className="text-muted-foreground">Products must be stored according to instructions on packaging.</p>
          <p className="text-muted-foreground">The seller is not responsible for quality deterioration caused by:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>exposure to heat</li>
            <li>improper storage</li>
            <li>delayed pickup from delivery point</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">11. Right of Withdrawal</h2>
          <p className="text-muted-foreground">Consumers have the right to withdraw within 14 days.</p>
          <p className="text-muted-foreground">However, this right does not apply to:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>sealed food products that have been opened</li>
            <li>products unsuitable for return due to hygiene reasons</li>
          </ul>
          <p className="text-muted-foreground">Returned products must be:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>unopened</li>
            <li>unused</li>
            <li>in original packaging</li>
          </ul>
          <p className="text-muted-foreground">Return shipping costs are borne by the buyer.</p>
          <p className="text-muted-foreground">Refunds are issued within 14 days after receiving returned goods.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">12. Complaints</h2>
          <p className="text-muted-foreground">Complaints are accepted in cases of:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>damaged products</li>
            <li>incorrect products</li>
            <li>defective products</li>
          </ul>
          <p className="text-muted-foreground">The buyer must provide:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>order details</li>
            <li>description of the issue</li>
            <li>photographic evidence</li>
          </ul>
          <p className="text-muted-foreground">
            The seller reserves the right to reject complaints resulting from improper use or storage.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">13. Limitation of Liability</h2>
          <p className="text-muted-foreground">
            The seller is not liable for:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>allergic reactions where allergens are disclosed</li>
            <li>natural product variations</li>
            <li>misuse or improper storage</li>
            <li>indirect or consequential damages</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">14. Technical Disclaimer</h2>
          <p className="text-muted-foreground">The seller is not responsible for:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>temporary website downtime</li>
            <li>technical errors</li>
            <li>failures of third-party services (Shopify, hosting, payment providers)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">15. Data Protection</h2>
          <p className="text-muted-foreground">
            Personal data is processed in accordance with the Privacy Policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">16. Changes to Terms</h2>
          <p className="text-muted-foreground">The seller reserves the right to modify these Terms at any time.</p>
          <p className="text-muted-foreground">Changes take effect upon publication on the website.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">17. Governing Law</h2>
          <p className="text-muted-foreground">These Terms are governed by the laws of the Republic of Croatia.</p>
          <p className="text-muted-foreground">Disputes shall be resolved by the competent court in Zagreb.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">18. Contact</h2>
          <p className="text-muted-foreground">For inquiries:</p>
          <p className="text-muted-foreground">
            Email: <strong className="text-foreground">[EMAIL]</strong>
          </p>
        </section>
      </article>
    </main>
  );
}
