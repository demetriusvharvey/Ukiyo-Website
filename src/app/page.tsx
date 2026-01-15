"use client";

import Link from "next/link";

export default function Home() {
  const EVENTBRITE_LISTING = "https://www.eventbrite.com/d/va--portsmouth/ukiyo/";
  const INSTAGRAM_URL = "https://www.instagram.com/ukiyo_virginia/";

  const events = [
    { date: "FRI • JAN 24", title: "Ukiyo Fridays", link: EVENTBRITE_LISTING },
    { date: "SAT • JAN 25", title: "Saturday Nights", link: EVENTBRITE_LISTING },
    { date: "SUN • JAN 26", title: "Sunday Sessions", link: EVENTBRITE_LISTING },
    { date: "FRI • JAN 31", title: "Neon Fridays", link: EVENTBRITE_LISTING },
    { date: "SAT • FEB 01", title: "Saturday Nights", link: EVENTBRITE_LISTING },
    { date: "SUN • FEB 02", title: "Ukiyo Sundays", link: EVENTBRITE_LISTING },
    { date: "FRI • FEB 07", title: "Ukiyo Fridays", link: EVENTBRITE_LISTING },
    { date: "SAT • FEB 08", title: "Saturday Nights", link: EVENTBRITE_LISTING },
    { date: "SUN • FEB 09", title: "Sunday Sessions", link: EVENTBRITE_LISTING },
  ];

  const faqs = [
    { q: "Dress code", a: "Upscale nightlife attire recommended. No athletic wear, beachwear, or excessively casual outfits." },
    { q: "Age requirement", a: "21+ with valid government-issued ID required for entry." },
    { q: "VIP / Table reservations", a: "Reserve VIP seating and tables on the Reservations page. Availability varies by event." },
    { q: "Parking", a: "Street and nearby lot parking available. Please plan ahead for peak nights." },
    { q: "Entry time", a: "Doors typically open at 10PM. Event times may vary—check the event listing for details." },
  ];

  const scrollStrip = (dir: "left" | "right") => {
    const el = document.getElementById("events-strip");
    if (!el) return;
    const amount = 520;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-transparent text-white">
      {/* ================= HERO ================= */}
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-semibold tracking-tight text-white sm:text-7xl">Ukiyo</h1>
        <p className="mt-3 text-sm uppercase tracking-[0.4em] text-white/60">Virginia</p>
      </section>

      {/* ================= EVENTS BAND ================= */}
      <section id="events" className="pt-20 pb-16 font-[var(--font-inter)]">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/60 to-transparent opacity-80" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/60 to-transparent opacity-80" />

          <button
            type="button"
            aria-label="Scroll events left"
            onClick={() => scrollStrip("left")}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-white/80 backdrop-blur hover:bg-black/60"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Scroll events right"
            onClick={() => scrollStrip("right")}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-white/80 backdrop-blur hover:bg-black/60"
          >
            ›
          </button>

          <div className="flex justify-center px-6">
            <div
              id="events-strip"
              onWheel={(e) => {
                const el = e.currentTarget;
                if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                  e.preventDefault();
                  el.scrollLeft += e.deltaY;
                }
              }}
              className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory touch-pan-x
              [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-w-[90vw]"
              style={{ overscrollBehaviorX: "contain" }}
            >
              {events.map((event, idx) => (
                <a
                  key={`${event.title}-${idx}`}
                  href={event.link}
                  target="_blank"
                  rel="noreferrer"
                  className="snap-start group min-w-[320px] sm:min-w-[360px] md:min-w-[420px] transition hover:brightness-105"
                >
                  <div className="h-[350px] w-full bg-white/10 flex items-center justify-center text-xs uppercase tracking-widest text-white/40">
                    Event Flyer
                  </div>

                  <div className="bg-black p-4 flex items-center gap-3">
                    <div className="flex flex-col text-xs uppercase tracking-widest text-white font-bold">
                      <div>{event.date}</div>
                    </div>
                    <span className="text-white/30">|</span>
                    <div className="text-lg font-bold tracking-tight text-white">{event.title}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center px-6">
          <Link
            href="/calendar"
            className="border border-white/20 bg-transparent px-10 py-4 text-sm font-semibold uppercase tracking-widest text-white/90 transition hover:bg-white/10"
          >
            Event Calendar
          </Link>
        </div>
      </section>

      {/* ================= INSTAGRAM BAND ================= */}
      <section id="instagram" className="px-6 py-20 font-[var(--font-inter)] bg-[#0A0F2C]">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white">Follow us on Instagram</h2>
          <p className="mt-2 text-white/60">Tap any tile to view @ukiyo_virginia</p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <a
                key={i}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="flex aspect-square items-center justify-center bg-white/10 text-xs uppercase tracking-widest text-white/40 hover:bg-white/20"
              >
                Post
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ SMALL OCEAN GAP */}
      <div className="h-4 md:h-6 bg-transparent" />

      {/* ================= FAQ BAND ================= */}
      <section id="faqs" className="border-t border-white/10 bg-[#05111A] px-6 py-20 font-[var(--font-inter)]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white">Frequently Asked Questions</h2>
            <p className="mt-2 text-white/60">Quick answers before you pull up.</p>
          </div>

          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="group border border-white/10 bg-white/5 p-5 backdrop-blur">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white">
                  <span className="tracking-wide">{item.q}</span>
                  <span className="text-white/60 transition group-open:rotate-45">+</span>
                </summary>
                <div className="mt-3 text-sm text-white/60">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ SMALL OCEAN GAP BEFORE FOOTER */}
      <div className="h-4 md:h-6 bg-transparent" />
    </main>
  );
}








