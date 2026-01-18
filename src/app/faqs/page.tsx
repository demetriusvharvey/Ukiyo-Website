"use client";

import { useState } from "react";
import Image from "next/image";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const HERO_BG = "/hero-faqs.png";

  const ADDRESS_LABEL = "Ukiyo Virginia";
  const FULL_ADDRESS = "4592 George Washington Hwy, Portsmouth, VA 23702";

  const MAPS_DIRECTIONS =
    "https://www.google.com/maps/dir/?api=1&destination=4592%20George%20Washington%20Hwy%2C%20Portsmouth%2C%20VA%2023702";

  const MAPS_EMBED_SRC =
    "https://www.google.com/maps?q=4592%20George%20Washington%20Hwy%2C%20Portsmouth%2C%20VA%2023702&output=embed";

  const faqs = [
    {
      q: "Dress code",
      a: "Upscale nightlife attire required. No athletic wear, slides, flip‑flops, beachwear, or excessively casual outfits. Final admission decisions are at management’s discretion.",
    },
    {
      q: "Hours of operation",
      a: "Doors typically open at 10:00 PM. Hours may vary for special events—please check the event listing for details.",
    },
    {
      q: "Age requirements",
      a: "Ukiyo is 21+ only. A valid, government‑issued photo ID is required for entry. No photos or expired IDs accepted.",
    },
    {
      q: "What type of music is featured?",
      a: "Music varies by night and may include Hip‑Hop, R&B, Afrobeats, and open‑format sets depending on the event and guest DJs.",
    },
    {
      q: "Lost items",
      a: "If you’ve lost an item, please contact us via Instagram DM with a description and the date of your visit. Items are held for a limited time.",
    },
    {
      q: "Ticket refunds",
      a: "All ticket sales are final unless an event is canceled. Please refer to the ticketing platform’s policies.",
    },
    {
      q: "Is my ticket valid?",
      a: "Tickets are valid only for the specific date and event purchased. Entry details must match your ID.",
    },
    {
      q: "How much does a table reservation cost?",
      a: "Table minimums vary by night and event. Visit the Reservations page for current pricing and availability.",
    },
    {
      q: "Private events",
      a: "Private events and venue buyouts may be available depending on the schedule. Please contact us for details.",
    },
    {
      q: "Table bookings",
      a: "VIP tables can be reserved through our Reservations page. A deposit is required and goes toward your minimum spend.",
    },
    {
      q: "General questions",
      a: "For the fastest response, please reach out via Instagram DM or through our website.",
    },
  ];

  return (
    <main className="w-full text-white">
      {/* ================= HERO (VENUE-SIZED) ================= */}
      <section className="relative w-full overflow-hidden h-[360px] md:h-[420px]">
        <Image
          src={HERO_BG}
          alt="Ukiyo FAQs"
          fill
          priority
          className="object-cover object-[50%_25%]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#070B10]/90 via-[#0A1220]/75 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-6 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            FAQs
          </h1>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-4xl">
            Everything you need to know
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            Dress code, entry, hours, tickets, and reservations.
          </p>
        </div>
      </section>

      {/* ================= FAQS (WATER BACKGROUND SHOWS) ================= */}
      <section className="w-full">
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-2xl rounded border border-white/15 bg-black/35 backdrop-blur">
            <div className="px-6 pt-10 pb-6">
              <div className="text-center text-sm font-semibold tracking-[0.35em] text-white/70">
                FAQS
              </div>

              <div className="mx-auto mt-10 max-w-xl">
                <div className="border-t border-white/15">
                  {faqs.map((item, idx) => {
                    const isOpen = openIndex === idx;

                    return (
                      <div key={item.q} className="border-b border-white/15">
                        <button
                          type="button"
                          onClick={() => setOpenIndex(isOpen ? null : idx)}
                          className="flex w-full items-center gap-6 py-4 text-left px-2"
                          aria-expanded={isOpen}
                        >
                          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
                            {item.q}
                          </span>

                          <span
                            className={`ml-auto flex h-8 w-8 items-center justify-center text-xl leading-none text-white/70 transition ${
                              isOpen ? "rotate-45" : ""
                            }`}
                            aria-hidden="true"
                          >
                            +
                          </span>
                        </button>

                        {isOpen && (
                          <div className="px-2 pb-5 pr-10 text-sm leading-relaxed text-white/65">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAP SECTION (STAYS THE SAME) ================= */}
      <section className="relative w-full bg-[#141414]">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-[1fr_320px] md:items-start">
            <div className="h-[260px] w-full overflow-hidden rounded bg-white/5">
              <iframe
                title="Ukiyo Virginia Map"
                src={MAPS_EMBED_SRC}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded border border-white/15 bg-black/40 p-5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
                {ADDRESS_LABEL}
              </div>

              <div className="mt-3 text-sm text-white/70">{FULL_ADDRESS}</div>

              <a
                href={MAPS_DIRECTIONS}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded border border-white/20 px-4 py-3 text-xs font-semibold uppercase tracking-[0.25em] transition hover:bg-white/10"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
