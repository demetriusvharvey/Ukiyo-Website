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
    <html lang="en" className="bg-[#0B0D10]">
      <body
        className={`${italiana.variable} ${inter.variable} antialiased bg-zinc-900 text-white`}
      >
        {/* ================= TOP NAV ================= */}
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-center transition hover:opacity-90">
              <div className="text-xl tracking-wide text-white">Ukiyo</div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-white/90">
                Virginia
              </div>
            </Link>

            <nav className="hidden gap-8 text-xs uppercase tracking-widest text-white/90 md:flex">
              <Link href="/calendar" className="transition hover:text-white">
                Events
              </Link>
              <Link href="/venue" className="transition hover:text-white">
                Venue
              </Link>
              <Link href="/reservations" className="transition hover:text-white">
                Reserve
              </Link>
              <Link href="/menu" className="transition hover:text-white">
                Menu
              </Link>
              <Link href="/faqs" className="transition hover:text-white">
                FAQs
              </Link>
            </nav>

            <a
              href="#events"
              className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10 md:hidden"
            >
              Events
            </a>
          </div>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main className="min-h-screen bg-zinc-900 pt-18">{children}</main>

        {/* ================= FOOTER ================= */}
        <footer id="contact" className="border-t border-white/10 bg-black">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <div className="text-2xl font-semibold text-white">Ukiyo</div>
                <div className="mt-2 text-sm text-white/60">
                  Virginia Nightlife • Events • Reservations
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-white/90">Visit</div>
                <div className="mt-3 space-y-2 text-sm text-white/90">
                  <div>Address: 4592 George Washington Hwy, Portsmouth, VA 23702</div>
                  <a
                    href="https://www.google.com/maps/place/Ukiyo+VA/@36.7993748,-76.3295071,17z/data=!3m1!4b1!4m6!3m5!1s0x89baa300754dc2e3:0xe0168d819f872700!8m2!3d36.7993705!4d-76.3269322!16s%2Fg%2F11vrfshwf0?entry=ttu&g_ep=EgoyMDI2MDExMS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-white"
                  >
                    Directions →
                  </a>
                  <div>Hours: Saturday & Sunday 10PM til 2AM</div>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-white">
                  Connect
                </div>
                <div className="mt-3 space-y-2 text-sm text-white">
                  <a
                    className="block hover:text-white"
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                  <a className="block hover:text-white" href="#">
                    TikTok
                  </a>
                  <a className="block hover:text-white" href="#">
                    Email
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 text-xs text-white">
              © {new Date().getFullYear()} Ukiyo. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
