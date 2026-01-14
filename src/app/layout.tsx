import type { Metadata } from "next";
import { Italiana } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana",
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
  return (
    <html lang="en">
      <body className={`${italiana.variable} antialiased bg-zinc-900 text-white`}>
        {/* ================= HEADER / NAV ================= */}
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-center hover:opacity-90 transition">
              <div className="text-xl tracking-wide">Ukiyo</div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-white/60">
                Virginia
              </div>
            </Link>

            <nav className="hidden gap-8 text-xs uppercase tracking-widest text-white/70 md:flex">
              <a href="/events" className="transition hover:text-white">Events</a>
              <a href="/venue" className="transition hover:text-white">Venue</a>
              <a href="/reservations" className="transition hover:text-white">Reserve</a>
              <a href="/menu" className="transition hover:text-white">Menu</a>
              <a href="/faqs" className="transition hover:text-white">FAQs</a>
            </nav>
          </div>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main className="pt-24">{children}</main>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-white/10 bg-black/70 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <div className="text-2xl font-semibold">Ukiyo</div>
                <div className="mt-2 text-sm text-white/60">
                  Virginia Nightlife • Events • Reservations
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-white/80">Visit</div>
                <div className="mt-3 space-y-2 text-sm text-white/60">
                  <div>Address: (add client address)</div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-white"
                  >
                    Directions →
                  </a>
                  <div>Hours: (add hours)</div>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-white/80">Connect</div>
                <div className="mt-3 space-y-2 text-sm text-white/60">
                  <a
                    href="https://www.instagram.com/ukiyo_virginia/"
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-white"
                  >
                    Instagram
                  </a>
                  <a className="block hover:text-white" href="#">TikTok</a>
                  <a className="block hover:text-white" href="#">Email</a>
                </div>
              </div>
            </div>

            <div className="mt-10 text-xs text-white/40">
              © {new Date().getFullYear()} Ukiyo. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}





