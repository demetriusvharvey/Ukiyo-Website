"use client";

import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  const EVENTBRITE_LISTING =
    "https://www.eventbrite.com/d/va--portsmouth/ukiyo/";
  const INSTAGRAM_URL = "https://www.instagram.com/ukiyo_virginia/";

  const events = [
    { date: "SAT • JAN 24", title: "Event Name", link: EVENTBRITE_LISTING },
    { date: "SUN • JAN 25", title: "Event Name", link: EVENTBRITE_LISTING },
    { date: "SAT • JAN 31", title: "Event Name", link: EVENTBRITE_LISTING },
    { date: "SUN • FEB 01", title: "Event Name", link: EVENTBRITE_LISTING },
    { date: "SAT • FEB 07", title: "Event Name", link: EVENTBRITE_LISTING },
    { date: "SUN • FEB 08", title: "Event Name", link: EVENTBRITE_LISTING },
    { date: "SAT • FEB 14", title: "Event Name", link: EVENTBRITE_LISTING },
    { date: "SUN • FEB 15", title: "Event Name", link: EVENTBRITE_LISTING },
    { date: "SAT • FEB 21", title: "Event Name", link: EVENTBRITE_LISTING },
  ];

  const faqs = [
    {
      q: "Dress code",
      a: "Upscale nightlife attire recommended. No athletic wear, beachwear, or excessively casual outfits.",
    },
    {
      q: "Age requirement",
      a: "21+ with valid government-issued ID required for entry.",
    },
    {
      q: "VIP / Table reservations",
      a: "Reserve VIP seating and tables on the Reservations page. Availability varies by event.",
    },
    {
      q: "Parking",
      a: "Street and nearby lot parking available. Please plan ahead for peak nights.",
    },
    {
      q: "Entry time",
      a: "Doors typically open at 10PM. Event times may vary—check the event listing for details.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-transparent text-white">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[100vh] w-full overflow-hidden">
        <img
          src="/moneyshot.png"
          alt="Ukiyo"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/25" />
      </section>

      {/* ================= EVENTS BAND ================= */}
      <section id="events" className="pt-20 pb-16 font-[var(--font-inter)]">
        <div className="relative mx-auto max-w-7xl px-6">
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={2}
            slidesPerGroup={2}
            spaceBetween={24}
            className="overflow-hidden"
          >
            {events.map((event, idx) => (
              <SwiperSlide key={idx}>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block transition hover:brightness-105"
                >
                  <div className="h-[360px] w-full bg-white/10 flex items-center justify-center text-xs uppercase tracking-widest text-white/40">
                    Event Flyer
                  </div>

                  <div className="bg-black p-4 flex items-center gap-3">
                    <div className="text-xs font-bold uppercase tracking-widest">
                      {event.date}
                    </div>
                    <span className="text-white/30">|</span>
                    <div className="text-lg font-bold tracking-tight">
                      {event.title}
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-6 flex justify-center px-6">
          <Link
            href="/calendar"
            className="border border-white/20 px-10 py-4 text-sm font-semibold uppercase tracking-widest transition hover:bg-white/10"
          >
            Event Calendar
          </Link>
        </div>
      </section>

      {/* ================= INSTAGRAM BAND ================= */}
      <section
        id="instagram"
        className="px-6 py-20 font-[var(--font-inter)] bg-[#0A0F2C]"
      >
        <div className="mx-auto max-w-7xl text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-3xl font-semibold tracking-tight hover:opacity-80 transition"
          >
            <span>Follow us on Instagram</span>
          </a>

          <p className="mt-2 text-white/60">
            Tap any tile to view @ukiyo_virginia
          </p>

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

      {/* ================= FAQ BAND ================= */}
      <section
        id="faqs"
        className="border-t border-white/10 bg-[#05111A] px-6 py-20 font-[var(--font-inter)]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-3xl font-semibold tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
                Quick answers before you pull up.
              </p>

              <div className="mt-6">
                <Link
                  href="/faqs"
                  className="inline-flex items-center justify-center border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-widest transition hover:bg-white/10"
                >
                  All FAQs
                </Link>
              </div>
            </div>

            <div>
              {faqs.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div key={item.q} className="border-b border-white/10 py-5">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="flex w-full items-center gap-6 text-left text-sm font-semibold"
                      aria-expanded={isOpen}
                    >
                      <span className="tracking-wide">{item.q}</span>
                      <span
                        className={`ml-auto flex h-8 w-8 items-center justify-center text-xl text-white/70 transition ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
