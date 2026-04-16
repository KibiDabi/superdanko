import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for SuperDanko.",
};

const LAST_UPDATED = "April 9, 2026";

export default function CookiePolicyPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-10 md:py-14">
      <article className="space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Cookie Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
        </header>

        <section className="space-y-3 text-muted-foreground">
          <p>
            This website uses cookies to ensure proper functionality, improve user experience, and analyze website traffic.
          </p>
          <p>
            By continuing to use this website, you consent to the use of cookies in accordance with this policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">What are cookies?</h2>
          <p className="text-muted-foreground">
            Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit a website.
            They allow the website to recognize your device and store certain information about your preferences or past actions.
          </p>
          <p className="text-muted-foreground">
            Cookies may be set directly by us (first-party cookies) or by third-party services we use.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">How we use cookies</h2>
          <p className="text-muted-foreground">We use cookies for the following purposes:</p>

          <h3 className="text-base font-semibold">1. Essential cookies</h3>
          <p className="text-muted-foreground">
            These cookies are necessary for the website to function properly and cannot be disabled.
          </p>
          <p className="text-muted-foreground">They include:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Cart functionality (storing your cart ID in cookies)</li>
            <li>Session management</li>
            <li>Security and authentication</li>
          </ul>
          <p className="text-muted-foreground">
            Without these cookies, core features like adding items to the cart or completing checkout would not work.
          </p>

          <h3 className="text-base font-semibold">2. Analytics cookies</h3>
          <p className="text-muted-foreground">
            We use analytics tools provided by our hosting platform to understand how users interact with our website.
          </p>
          <p className="text-muted-foreground">These cookies help us:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Measure traffic and usage patterns</li>
            <li>Improve website performance</li>
            <li>Optimize user experience</li>
          </ul>
          <p className="text-muted-foreground">The data collected is aggregated and does not directly identify you.</p>

          <h3 className="text-base font-semibold">3. Third-party services (Shopify checkout)</h3>
          <p className="text-muted-foreground">
            When you proceed to checkout, you are redirected to a secure checkout page hosted by Shopify.
          </p>
          <p className="text-muted-foreground">Shopify may use its own cookies to:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Process payments</li>
            <li>Prevent fraud</li>
            <li>Ensure secure transactions</li>
          </ul>
          <p className="text-muted-foreground">
            We do not control these cookies. For more information, please refer to Shopify’s privacy and cookie policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Managing cookies</h2>
          <p className="text-muted-foreground">You can control and manage cookies through your browser settings.</p>
          <p className="text-muted-foreground">Most browsers allow you to:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>View cookies stored on your device</li>
            <li>Delete cookies</li>
            <li>Block cookies entirely</li>
          </ul>
          <p className="text-muted-foreground">
            Please note that disabling essential cookies may affect the functionality of this website.
          </p>
          <p className="text-muted-foreground">For more information on managing cookies, visit:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>
              <a href="http://www.allaboutcookies.org/" className="underline underline-offset-4 hover:text-foreground" target="_blank" rel="noreferrer">
                http://www.allaboutcookies.org/
              </a>
            </li>
            <li>
              <a href="http://www.youronlinechoices.com/" className="underline underline-offset-4 hover:text-foreground" target="_blank" rel="noreferrer">
                http://www.youronlinechoices.com/
              </a>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Changes to this policy</h2>
          <p className="text-muted-foreground">
            We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our services.
          </p>
          <p className="text-muted-foreground">
            Any updates will be posted on this page.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-muted-foreground">If you have any questions about this Cookie Policy, you can contact us at:</p>
          <p className="text-muted-foreground">
            <strong className="text-foreground">[Your Company Name]</strong>
            <br />
            <strong className="text-foreground">[Your Address]</strong>
            <br />
            <strong className="text-foreground">[Your Email]</strong>
          </p>
        </section>
      </article>
    </main>
  );
}
