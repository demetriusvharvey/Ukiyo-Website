import type { Metadata } from "next";
import { Italiana, Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import CookieBanner from "./components/CookieBanner";
import SiteFooter from "./components/SiteFooter";
import MobileHeader from "./components/MobileHeader";
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
            {/* LOGO */}
            <Link
              href="/"
              className="absolute left-3 md:left-[-48px] top-1/2 -translate-y-1/2 flex flex-col items-center"
            >
              {/* Logo image */}
              <img
                src="/ukiyologo.PNG"
                alt="Ukiyo Virginia logo"
                className="h-9 w-auto md:h-11"
              />

              {/* Subtitle — DESKTOP ONLY, UNDER LOGO */}
              <div className="mt-[2px] hidden md:block text-center text-[9px] uppercase tracking-[0.32em] text-white/60 whitespace-nowrap">
                UKIYO VIRGINIA
              </div>
            </Link>

            {/* NAV ROW */}
            <div className="flex h-[72px] items-center px-3 sm:px-4">
              <nav className="ml-auto hidden md:flex items-center gap-12 pt-[10px] text-sm uppercase tracking-[0.25em]">
                <Link href="/calendar" className="nav-link">
                  Events
                </Link>
                <Link href="/venue" className="nav-link">
                  Venue
                </Link>
                <Link href="/reservations" className="nav-link">
                  VIP
                </Link>
                <Link href="/menu" className="nav-link">
                  Menu
                </Link>
                <Link href="/faqs" className="nav-link">
                  FAQs
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Mobile hamburger menu */}
        <MobileHeader />

        {/* ================= PAGE CONTENT ================= */}
        <main className="relative z-10 min-h-screen pt-20 bg-black overflow-x-hidden">
          {children}
        </main>

        {/* ================= FOOTER ================= */}
        <SiteFooter
          instagramUrl={INSTAGRAM_URL}
          facebookUrl={FACEBOOK_URL}
          googleMapsUrl={GOOGLE_MAPS_URL}
          appleMapsUrl={APPLE_MAPS_URL}
        />

        <CookieBanner />
      </body>
    </html>
  );
}
