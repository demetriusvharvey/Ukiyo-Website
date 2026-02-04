import type { Metadata } from "next";
import { Italiana, Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import CookieBanner from "./components/CookieBanner";
import "./globals.css";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Ukiyo Virginia",
  description: "Ukiyo Nightlife Virginia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const INSTAGRAM_URL = "https://www.instagram.com/ukiyo_virginia/";
  const FACEBOOK_URL = "https://www.facebook.com/UkiyoVa/";

  const GOOGLE_MAPS_URL =
    "https://www.google.com/maps/dir/?api=1&destination=4592+George+Washington+Hwy,+Portsmouth,+VA";

  const APPLE_MAPS_URL =
    "https://maps.apple.com/directions?destination=Ukiyo+Va%2C+4592+George+Washington+Hwy+Portsmouth%2C+VA++23702+United+States&destination-place-id=IC1D4D0DD38EE3658&mode=driving";

  return (
    <html lang="en">
      <body
        className={`${italiana.variable} ${inter.variable} ${montserrat.variable} antialiased text-white`}
      >
        {/* Anchor for Back to Top */}
        <div id="top" />

        {/* ================= TOP NAV ================= */}
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              {/* LOGO + CENTERED TEXT UNDERNEATH */}
              <Link
                href="/"
                className="mx-auto md:mx-0 flex flex-col items-center"
              >
                <img
                  src="/ukiyologo.PNG"
                  alt="Ukiyo Virginia logo"
                  className="h-10 sm:h-12 w-auto"
                />
                <div className="mt-1 text-[11px] sm:text-[12px] uppercase tracking-[0.35em] text-white/85 whitespace-nowrap text-center">
                  UKIYO&nbsp;VIRGINIA
                </div>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex gap-12 text-lg uppercase tracking-widest">
                <Link href="/calendar">Events</Link>
                <Link href="/venue">Venue</Link>
                <Link href="/reservations">VIP</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/faqs">FAQs</Link>
              </nav>

              {/* Mobile Nav */}
              <nav className="md:hidden flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm uppercase tracking-widest">
                <Link href="/calendar">Events</Link>
                <Link href="/venue">Venue</Link>
                <Link href="/reservations">VIP</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/faqs">FAQs</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main className="relative z-10 min-h-screen pt-24 overflow-x-hidden">
          {children}
        </main>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-white/10 bg-black/90">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <div className="text-2xl font-semibold">Ukiyo</div>
                <div className="mt-2 text-sm text-white/60">
                  Virginia Nightlife • Events • Reservations
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold">Visit</div>
                <div className="mt-3 space-y-2 text-sm text-white/80">
                  <div>4592 George Washington Hwy, Portsmouth, VA</div>
                  <div>Saturday & Sunday • 10PM–2AM</div>
                  <div className="flex gap-2">
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Google Maps
                    </a>
                    <span>|</span>
                    <a
                      href={APPLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Apple Maps
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold">Connect</div>
                <div className="mt-3 space-y-2 text-sm">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:underline"
                  >
                    Instagram
                  </a>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:underline"
                  >
                    Facebook
                  </a>
                </div>

                {/* Legal */}
                <div className="pt-6">
                  <div className="text-sm font-semibold">Legal</div>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/70">
                    <Link
                      href="/privacy"
                      className="hover:text-white hover:underline"
                    >
                      Privacy
                    </Link>
                    <Link
                      href="/cookies"
                      className="hover:text-white hover:underline"
                    >
                      Cookies
                    </Link>
                    <Link
                      href="/terms"
                      className="hover:text-white hover:underline"
                    >
                      Terms
                    </Link>
                    <Link
                      href="/accessibility"
                      className="hover:text-white hover:underline"
                    >
                      Accessibility
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-xs text-white/50">
              © {new Date().getFullYear()} Ukiyo. All rights reserved.
            </div>
          </div>
        </footer>

        {/* 🍪 COOKIE BANNER — MOUNTED GLOBALLY */}
        <CookieBanner />
      </body>
    </html>
  );
}
