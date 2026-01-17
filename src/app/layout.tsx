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

  const GOOGLE_MAPS_URL =
    "https://www.google.com/maps/dir/?api=1&destination=4592+George+Washington+Hwy,+Portsmouth,+VA";

  const APPLE_MAPS_URL =
    "https://maps.apple.com/directions?destination=Ukiyo+Va%2C+4592+George+Washington+Hwy+Portsmouth%2C+VA++23702+United+States&destination-place-id=IC1D4D0DD38EE3658&mode=driving";

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
          <div className="absolute inset-0 bg-black/65" />
        </div>

        {/* ================= TOP NAV ================= */}
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-left">
              <div className="text-3xl font-semibold tracking-wide">
                Ukiyo
              </div>
              <div className="mt-1 text-[12px] uppercase tracking-[0.35em] text-white/80">
                Virginia
              </div>
            </Link>

            <nav className="flex gap-12 text-lg uppercase tracking-widest">
              <Link href="/calendar">Events</Link>
              <Link href="/venue">Venue</Link>
              <Link href="/reservations">Reserve</Link>
              <Link href="/menu">Menu</Link>
              <Link href="/faqs">FAQs</Link>
            </nav>
          </div>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main className="relative z-10 min-h-screen pt-24">
          {children}
        </main>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-white/10 bg-black/90">
          {/* ⬇️ Center wrapper */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-7xl px-6 py-16">
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
                    <div>
                      Address: 4592 George Washington Hwy, Portsmouth, VA
                    </div>
                    <div>
                      Hours: Saturday & Sunday 10PM til 2AM
                    </div>

                    <div className="flex items-center gap-2">
                      <span>Directions →</span>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white underline"
                      >
                        Google Maps
                      </a>
                      <span className="text-white/40">|</span>
                      <a
                        href={APPLE_MAPS_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white underline"
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
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              {/* Back to Top — now centered relative to footer container */}
              <div className="absolute right-6 bottom-12 flex flex-col items-center">
                <span className="mb-1 text-xs uppercase tracking-wide text-white/70">
                  Back to Top
                </span>
                <a
                  href="#top"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl transition hover:bg-white/20"
                  aria-label="Back to top"
                >
                  ↑
                </a>
              </div>

              <div className="mt-10 text-xs text-white/50">
                © {new Date().getFullYear()} Ukiyo. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}














