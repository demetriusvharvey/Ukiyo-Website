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
      <body className={`${italiana.variable} ${inter.variable} antialiased text-white`}>
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
            <Link href="/" className="text-center">
              <div className="text-xl tracking-wide text-white">Ukiyo</div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-white/80">
                Virginia
              </div>
            </Link>

            <nav className="hidden gap-8 text-xs uppercase tracking-widest text-white md:flex">
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

            <div className="mt-10 text-xs text-white/50">
              © {new Date().getFullYear()} Ukiyo. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
