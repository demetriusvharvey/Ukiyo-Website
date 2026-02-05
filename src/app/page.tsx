"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function splitDateLabel(dateLabel: string) {
  const parts = (dateLabel || "").split("•").map((s) => s.trim());
  const top = parts[0] || "";
  const bottom = parts.slice(1).join(" • ") || "";
  return { top, bottom };
}

export default function Home() {
  const EVENTBRITE_LISTING =
    "https://www.eventbrite.com/d/va--portsmouth/ukiyo/";
  const INSTAGRAM_URL = "https://www.instagram.com/ukiyo_virginia/";

  const fallbackEvents = [
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

  const [eventbriteEvents, setEventbriteEvents] = useState<any[]>([]);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    async function loadEventbrite() {
      try {
        const res = await fetch("/api/eventbrite/events");
        const data = await res.json();
        setEventbriteEvents(Array.isArray(data?.events) ? data.events : []);
      } catch (err) {
        console.error("Eventbrite fetch failed:", err);
      }
    }
    loadEventbrite();
  }, []);

  const cards = useMemo(() => {
    const list = [...eventbriteEvents];

    list.sort((a, b) => {
      const da = new Date(a?.start?.local || 0).getTime();
      const db = new Date(b?.start?.local || 0).getTime();
      return da - db;
    });

    return list.slice(0, 9).map((ev) => {
      const d = new Date(ev?.start?.local);
      const dateLabel = d
        .toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "2-digit",
        })
        .toUpperCase()
        .replace(",", " •");

      const timeLabel = d.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      });

      const title = ev?.name?.text ?? "Event";

      return {
        id: ev?.id,
        slug: slugify(title),
        date: dateLabel,
        time: timeLabel,
        title,
        link: ev?.url ?? EVENTBRITE_LISTING,
        flyer: ev?.logo?.original?.url ?? ev?.logo?.url ?? null,
      };
    });
  }, [eventbriteEvents]);

  const displayEvents = cards.length ? cards : fallbackEvents;

  const faqItems = [
    {
      q: "Dress Code",
      a: "Upscale nightlife attire. Management reserves the right to refuse entry.",
    },
    {
      q: "Hours of Operation",
      a: "Saturday & Sunday • 10PM–2AM (hours may vary for special events).",
    },
    {
      q: "Age Requirements",
      a: "21+ with valid government-issued ID required.",
    },
    {
      q: "What type of music is featured at Ukiyo?",
      a: "High-energy nightlife with rotating DJs and special guest performances.",
    },
  ];

  return (
    <main className="min-h-screen bg-transparent text-white overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[78vh] sm:h-[86vh] bg-black overflow-hidden">
        {/* ✅ HERO-ONLY TICKETS BUTTON (scrolls away after hero) */}
        <Link
          href="/calendar"
          aria-label="Tickets and Tables"
          className="
    absolute right-10 top-4 z-[60]
    hidden sm:flex

    h-36 w-36
    items-center justify-center
    rounded-full

    bg-white/20
    backdrop-blur-md

    transition-all duration-300 ease-out
    hover:rotate-[2deg] hover:scale-105

    hover:bg-purple-600/60
    hover:shadow-[0_0_40px_rgba(168,85,247,0.95)]
  "
        >
          <span className="text-center uppercase tracking-widest font-semibold text-white/95 leading-[1.1] text-[18px]">
            TICKETS&nbsp;&amp;
            <br />
            TABLES
          </span>
        </Link>

        <img
          src="/moneyshot3.png"
          alt="Ukiyo hero"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/35 to-black/85" />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* ✅ FIX: nudge whole hero stack up so it matches your “awesome” screenshot at 100% zoom */}
          <div className="flex flex-col items-center -translate-y-8 sm:-translate-y-10 md:-translate-y-12">
            <img
              src="/ukiyologo.PNG"
              alt="Ukiyo logo"
              className="w-[300px] sm:w-[380px] md:w-[440px] drop-shadow-[0_0_26px_rgba(0,0,0,0.8)]"
            />

            <div className="mt-6 ml-0 sm:ml-24 text-[16px] sm:text-4xl md:text-5xl uppercase whitespace-nowrap text-center tracking-[0.25em] sm:tracking-[0.6em]">
              <span>UKIYO</span>
              <span className="inline-block mx-4 sm:mx-16 md:mx-20">
                VIRGINIA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EVENTS ================= */}
      <section id="events" className="pt-12 pb-16 bg-[#0b0b0f]">
        {/* LIV-tight: nearly no side padding + wider max width */}
        <div className="mx-auto max-w-[1600px] px-0 sm:px-1">
          <div className="relative">
            <button
              ref={prevRef}
              className="flex items-center justify-center absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/70 border border-white/15 hover:bg-black/90"
              aria-label="Previous"
              type="button"
            >
              <span className="text-white/90 text-lg sm:text-xl leading-none">
                ‹
              </span>
            </button>

            <button
              ref={nextRef}
              className="flex items-center justify-center absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/70 border border-white/15 hover:bg-black/90"
              aria-label="Next"
              type="button"
            >
              <span className="text-white/90 text-lg sm:text-xl leading-none">
                ›
              </span>
            </button>

            <Swiper
  modules={[Navigation]}
  onBeforeInit={(swiper: any) => {
    swiper.params.navigation = swiper.params.navigation || {};
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
  }}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  centeredSlides={false}
  rewind={true}
  watchOverflow={true}
  loop={false}

  /* 🔥 HALF-INCH SPACING */
  spaceBetween={48}

  slidesPerView={1}
  breakpoints={{
    640: { slidesPerView: 2, spaceBetween: 48 },
    1024: { slidesPerView: 3, spaceBetween: 48 },
  }}

  className="overflow-hidden"
>

              {displayEvents.map((event: any, idx: number) => {
                const { top, bottom } = splitDateLabel(event?.date || "");
                const href =
                  event?.id && event?.slug
                    ? `/events/${event.id}/${event.slug}`
                    : event.link;

                const isInternal = Boolean(event?.id && event?.slug);

                return (
                  <SwiperSlide key={idx}>
                    <a
                      href={href}
                      target={isInternal ? undefined : "_blank"}
                      rel={isInternal ? undefined : "noreferrer"}
                      className="group block"
                    >
                      <div className="mx-auto w-full">
                        <div className="relative bg-black overflow-hidden">
                          <div className="relative aspect-[1/1] w-full bg-black overflow-hidden">
                            {event.flyer ? (
                              <img
                                src={event.flyer}
                                alt={event.title}
                                className="absolute inset-0 h-full w-full object-cover object-center"
                              />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-white/40">
                                Event Flyer
                              </div>
                            )}

                            <div className="absolute left-0 bottom-0 bg-black/90 border-t border-white/10 border-r border-white/10 px-3 py-2">
                              <div className="text-[10px] uppercase tracking-widest text-white/80">
                                {top}
                              </div>
                              <div className="text-[12px] font-semibold uppercase tracking-widest">
                                {bottom}
                              </div>
                            </div>
                          </div>

                          <div className="bg-black px-4 py-3 border-t border-white/10">
                            <div className="text-sm font-semibold uppercase tracking-wide line-clamp-1">
                              {event.title}
                            </div>
                            <div className="mt-1 text-[11px] text-white/70">
                              Ukiyo Virginia •{" "}
                              {event?.time ? event.time : "10:00 PM"}
                            </div>
                          </div>

                          <div className="relative h-[2px] w-full overflow-hidden bg-purple-500/70 shadow-[0_0_18px_rgba(168,85,247,0.95)]">
                            <span className="absolute inset-0 origin-left scale-x-0 bg-black transition-transform duration-500 ease-out group-hover:scale-x-100" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/calendar"
            className="relative bg-black px-10 sm:px-12 py-4 text-sm font-semibold uppercase tracking-widest border border-purple-500 text-white transition-all duration-300 shadow-[0_0_18px_rgba(168,85,247,0.7)] hover:bg-purple-600 hover:shadow-[0_0_32px_rgba(168,85,247,1)]"
          >
            Event Calendar
          </Link>
        </div>
      </section>

      {/* ================= INSTAGRAM ================= */}
      <section
        id="instagram"
        className="px-4 py-16 bg-[#12051F]/95 text-center"
      >
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-3 text-2xl sm:text-3xl font-semibold hover:opacity-80"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-7 w-7 sm:h-8 sm:w-8"
            fill="none"
          >
            <path
              d="M7.5 2.75h9A4.75 4.75 0 0 1 21.25 7.5v9A4.75 4.75 0 0 1 16.5 21.25h-9A4.75 4.75 0 0 1 2.75 16.5v-9A4.75 4.75 0 0 1 7.5 2.75Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M12 16.25A4.25 4.25 0 1 0 12 7.75a4.25 4.25 0 0 0 0 8.5Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M17.2 6.9h.01"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
          <span>Follow us on Instagram</span>
        </a>

        <p className="mt-2 text-white/60">
          Tap any tile to view @ukiyo_virginia
        </p>

        <div className="mt-8 mx-auto max-w-[900px]">
          <Script src="https://cdn.lightwidget.com/widgets/lightwidget.js" />
          <iframe
            src="//lightwidget.com/widgets/7703c72f62a85e5987e6218ad79d594f.html"
            scrolling="no"
            allowtransparency="true"
            className="lightwidget-widget w-full border-0 overflow-hidden"
          />
        </div>
      </section>

      {/* ================= FAQ (LIV-STYLE) ================= */}
      <section className="bg-[#0b0b0f]">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-12 text-center lg:grid-cols-2 lg:items-start lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <div className="text-2xl sm:text-3xl font-semibold uppercase tracking-widest">
                Frequently Asked
                <br />
                Questions
              </div>
              <p className="mt-4 text-sm text-white/60 max-w-md">
                Answers to all your Ukiyo nightlife questions and more. If you
                haven’t found what you’re looking for, please contact us or
                visit the FAQs page.
              </p>

              <div className="mt-8">
                <Link
                  href="/faqs"
                  className="inline-flex items-center justify-center px-10 py-3 text-xs font-semibold uppercase tracking-widest border border-white/30 hover:border-white/60 hover:bg-white/5 transition"
                >
                  All FAQs
                </Link>
              </div>
            </div>

            <div className="divide-y divide-white/15 border-t border-white/15 mx-auto w-full max-w-xl lg:max-w-none text-left">
              {faqItems.map((item) => (
                <details key={item.q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white/85">
                      {item.q}
                    </span>

                    <span className="relative h-6 w-6 shrink-0 text-white/70">
                      <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-current" />
                      <span className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-current transition-transform duration-200 group-open:scale-y-0" />
                    </span>
                  </summary>

                  <div className="mt-4 text-sm text-white/60 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
