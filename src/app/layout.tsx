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
          <div className="mx-auto flex h-[72px] w-full items-center px-6">
            {/* LOGO — LEFT */}
            <Link href="/" className="flex flex-col items-center">
              <img
                src="/ukiyologo.PNG"
                alt="Ukiyo Virginia logo"
                className="h-9 w-auto md:h-11"
              />

              {/* Mobile subtitle */}
              <div className="mt-[2px] block md:hidden text-center text-[8px] uppercase tracking-[0.28em] text-white/60 whitespace-nowrap">
                UKIYO VIRGINIA
              </div>

              {/* Desktop subtitle */}
              <div className="mt-[2px] hidden md:block text-center text-[9px] uppercase tracking-[0.32em] text-white/60 whitespace-nowrap">
                UKIYO VIRGINIA
              </div>
            </Link>

            {/* NAV — RIGHT */}
            <nav className="ml-auto mr-[96px] hidden md:flex items-center gap-12 pt-[10px] text-sm font-semibold uppercase tracking-[0.25em]">
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
