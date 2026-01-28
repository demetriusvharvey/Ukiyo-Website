"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  const EVENTBRITE_LISTING =
    "https://www.eventbrite.com/d/va--portsmouth/ukiyo/";
  const INSTAGRAM_URL = "https://www.instagram.com/ukiyo_virginia/";

  // fallback placeholders (used only if API hasn’t loaded / returns empty)
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
      const dateLabel = d.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
      });

      return {
        date: dateLabel.toUpperCase().replace(",", " •"),
        title: ev?.name?.text ?? "Event",
        link: ev?.url ?? EVENTBRITE_LISTING,
        flyer: ev?.logo?.original?.url ?? ev?.logo?.url ?? null,
      };
    });
  }, [eventbriteEvents]);

  const displayEvents = cards.length ? cards : fallbackEvents;

  return (
    <main className="min-h-screen bg-transparent text-white overflow-x-hidden">
      {/* ================= HERO (AUTO-SLIDES) ================= */}
      <section className="w-full overflow-hidden bg-black">
        <div className="sm:hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            loop
            initialSlide={2}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="w-full"
          >
            <SwiperSlide>
              <div className="relative aspect-[16/10]">
                <img
                  src="/moneyshot2.png"
                  alt="Ukiyo hero left"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative aspect-[16/10]">
                <img
                  src="/moneyshot3.png"
                  alt="Ukiyo hero middle"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative aspect-[16/10]">
                <img
                  src="/moneyshot.png"
                  alt="Ukiyo hero right"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="hidden sm:grid grid-cols-3">
          <div className="relative sm:h-[65vh]">
            <img
              src="/moneyshot2.png"
              alt="Ukiyo hero left"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative sm:h-[65vh]">
            <img
              src="/moneyshot3.png"
              alt="Ukiyo hero middle"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative sm:h-[65vh]">
            <img
              src="/moneyshot.png"
              alt="Ukiyo hero right"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ================= EVENTS BAND (DOES NOT AUTO-SLIDE) ================= */}
      <section
        id="events"
        className="pt-12 sm:pt-20 pb-14 sm:pb-16 font-[var(--font-inter)]"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Swiper
            modules={[Navigation]} // ✅ Autoplay NOT enabled here
            autoplay={false} // ✅ hard-force OFF
            navigation
            loop={false} // ✅ ensure it doesn't "keep moving" like autoplay
            spaceBetween={16}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              640: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20 },
              1024: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 24 },
            }}
            className="overflow-hidden"
          >
            {displayEvents.map((event: any, idx: number) => (
              <SwiperSlide key={idx}>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block transition hover:brightness-105"
                >
                  {/* Flyer (Eventbrite-style fit) */}
                  <div className="h-[240px] sm:h-[320px] md:h-[360px] w-full overflow-hidden bg-black relative">
                    {event.flyer ? (
                      <>
                        <img
                          src={event.flyer}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover blur-lg scale-110 opacity-50"
                        />
                        <img
                          src={event.flyer}
                          alt={event.title}
                          className="absolute inset-0 h-full w-full object-contain"
                        />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-white/40">
                        Event Flyer
                      </div>
                    )}
                  </div>

                  <div className="bg-black p-4 flex items-center gap-3">
                    <div className="text-xs font-bold uppercase tracking-widest">
                      {event.date}
                    </div>
                    <span className="text-white/30">|</span>
                    <div className="text-base sm:text-lg font-bold tracking-tight">
                      {event.title}
                    </div>
                  </div>

                  <div className="relative h-[2px] w-full overflow-hidden bg-purple-500/70 shadow-[0_0_18px_rgba(168,85,247,0.95)]">
                    <span className="absolute inset-0 origin-left scale-x-0 bg-black transition-transform duration-500 ease-out group-hover:scale-x-100" />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-8 flex justify-center px-4 sm:px-6">
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
        className="px-4 sm:px-6 py-16 sm:py-20 font-[var(--font-inter)] bg-[#12051F]/95"
      >
        <div className="mx-auto max-w-7xl text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-semibold tracking-tight hover:opacity-80 transition"
          >
            <svg
              className="h-6 w-6 sm:h-7 sm:w-7"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5A3.95 3.95 0 0 0 7.75 20.2h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5A3.95 3.95 0 0 0 16.25 3.8h-8.5Zm4.25 3.2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Zm5.25-2.05a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
            </svg>

            <span>Follow us on Instagram</span>
          </a>

          <p className="mt-2 text-white/60">
            Tap any tile to view @ukiyo_virginia
          </p>

          <div className="mt-10">
            <Script
              src="https://cdn.lightwidget.com/widgets/lightwidget.js"
              strategy="lazyOnload"
            />
            <iframe
              src="//lightwidget.com/widgets/7ab45c70662d5a98a162ea67be210e2f.html"
              scrolling="no"
              className="lightwidget-widget w-full border-0 overflow-hidden"
              style={{ minHeight: 600 }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
