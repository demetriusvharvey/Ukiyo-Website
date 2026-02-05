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
        className={`${italiana.variable} ${inter.variable} ${montserrat.variable} antialiased text-white bg-black`}
      >
        <div id="top" />

        {/* ================= HEADER ================= */}
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black">
          <div className="relative mx-auto w-full max-w-[1180px]">
            {/* LOGO — detached left like LIV */}
            <Link
              href="/"
              className="absolute left-[-48px] top-1/2 -translate-y-1/2 flex flex-col items-center"
            >
              <img
                src="/ukiyologo.PNG"
                alt="Ukiyo Virginia logo"
                className="h-11 sm:h-12 w-auto"
              />
              <div className="mt-[2px] text-center text-[9px] uppercase tracking-[0.32em] text-white/60 whitespace-nowrap">
                UKIYO VIRGINIA
              </div>
            </Link>

            {/* NAV ROW */}
            <div className="flex h-[72px] items-center px-3 sm:px-4">
              <nav className="ml-auto hidden md:flex items-center gap-12 pt-[10px] text-sm uppercase tracking-[0.25em]">
                <Link href="/calendar" className="nav-link">Events</Link>
                <Link href="/venue" className="nav-link">Venue</Link>
                <Link href="/reservations" className="nav-link">VIP</Link>
                <Link href="/menu" className="nav-link">Menu</Link>
                <Link href="/faqs" className="nav-link">FAQs</Link>
              </nav>
            </div>

            {/* MOBILE NAV */}
            <nav className="md:hidden -mt-1 pb-3 flex flex-wrap justify-center gap-x-6 gap-y-2 pt-1 text-xs uppercase tracking-[0.25em]">
              <Link href="/calendar" className="nav-link">Events</Link>
              <Link href="/venue" className="nav-link">Venue</Link>
              <Link href="/reservations" className="nav-link">VIP</Link>
              <Link href="/menu" className="nav-link">Menu</Link>
              <Link href="/faqs" className="nav-link">FAQs</Link>
            </nav>
          </div>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main className="relative z-10 min-h-screen pt-20 bg-black overflow-x-hidden">
          {children}
        </main>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-white/10 bg-black">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <div className="text-2xl font-semibold">Ukiyo</div>
                <div className="mt-2 text-sm text-white/60">
                  Virginia Nightlife • Events • Reservations
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="text-sm font-semibold">Visit</div>
                <div className="mt-3 space-y-2 text-sm text-white/80">
                  <div>4592 George Washington Hwy, Portsmouth, VA</div>
                  <div>Saturday & Sunday • 10PM–2AM</div>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="text-sm font-semibold">Connect</div>
                <div className="mt-3 space-y-2 text-sm">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="block hover:underline">
                    Instagram
                  </a>
                  <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="block hover:underline">
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 text-xs text-white/50 text-center">
              © {new Date().getFullYear()} Ukiyo. All rights reserved.
            </div>
          </div>
        </footer>

        <CookieBanner />
      </body>
    </html>
  );
}
