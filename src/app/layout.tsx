import type { Metadata } from "next";
import { Italiana, Inter } from "next/font/google";
import Link from "next/link";
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

  return (
    <html lang="en">
      <body
        className={`${italiana.variable} ${inter.variable} antialiased text-white`}
      >
        {/* Anchor target for back-to-top */}
        <div id="top" />

        {/* 🌊 OCEAN VIDEO BACKGROUND */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/ocean.mp4" type="video/mp4" />
          </video>

          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-black/65" />
        </div>

        {/* ================= TOP NAV ================= */}
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            {/* Logo - left aligned */}
            <Link href="/" className="text-left">
              <div className="text-3xl font-semibold tracking-wide text-white">
                Ukiyo
              </div>
              <div className="text-[12px] uppercase tracking-[0.35em] text-white/80 mt-1">
                Virginia
              </div>
            </Link>

            {/* Navigation - larger font only */}
            <nav className="flex gap-12 text-lg uppercase tracking-widest text-white">
              <Link href="/calendar">Events</Link>
              <Link href="/venue">Venue</Link>
              <Link href="/reservations">Reserve</Link>
              <Link href="/menu">Menu</Link>
              <Link href="/faqs">FAQs</Link>
            </nav>
          </div>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main className="relative z-10 min-h-screen pt-24">{children}</main>

        {/* ================= FOOTER ================= */}
        <footer className="relative border-t border-white/10 bg-black/90">
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
                  <div>Address: 4592 George Washington Hwy, Portsmouth, VA</div>
                  <div>Hours: Saturday & Sunday 10PM til 2AM</div>
                  <a
                    href="https://www.google.com/maps/place/Ukiyo+VA"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    Directions →
                  </a>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold">Connect</div>
                <div className="mt-3 space-y-2 text-sm">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Back to Top Button */}
            <div className="absolute right-10 bottom-12 flex flex-col items-center">
              <span className="mb-1 text-xs text-white/70 uppercase tracking-wide">
                Back to Top
              </span>
              <a
                href="#top"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition text-2xl"
                aria-label="Back to top"
              >
                ↑
              </a>
            </div>

            <div className="mt-10 text-xs text-white/50">
              © {new Date().getFullYear()} Ukiyo. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}







