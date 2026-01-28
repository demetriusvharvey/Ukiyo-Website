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

  // fallback placeholders
  const fallbackEvents = [
    { date: "SAT • JAN 24", title: "Event Name", link: EVENTBRITE_LISTING },
    { date: "SUN • JAN 25", title: "Event Name", link: EVENTBRITE_LISTING },
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
      {/* ================= HERO ================= */}
      <section className="w-full overflow-hidden bg-black">
        <div className="sm:hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
          >
            {["/moneyshot2.png", "/moneyshot3.png", "/moneyshot.png"].map(
              (src, i) => (
                <SwiperSlide key={i}>
                  <div className="relative aspect-[16/10]">
                    <img
                      src={src}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>

        <div className="hidden sm:grid grid-cols-3">
          {["/moneyshot2.png", "/moneyshot3.png", "/moneyshot.png"].map(
            (src, i) => (
              <div key={i} className="relative h-[65vh]">
                <img
                  src={src}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* ================= EVENTS BAND ================= */}
      <section className="pt-12 sm:pt-20 pb-14 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
          >
            {displayEvents.map((event: any, idx: number) => (
              <SwiperSlide key={idx}>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  {/* ===== FIXED FLYER FIT ===== */}
                  <div className="relative h-[240px] sm:h-[320px] md:h-[360px] overflow-hidden bg-black">
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
                      <div className="absolute inset-0 flex items-center justify-center text-white/40">
                        Event Flyer
                      </div>
                    )}
                  </div>

                  <div className="bg-black p-4 flex gap-3 items-center">
                    <div className="text-xs font-bold uppercase tracking-widest">
                      {event.date}
                    </div>
                    <span className="text-white/30">|</span>
                    <div className="text-base sm:text-lg font-bold">
                      {event.title}
                    </div>
                  </div>

                  <div className="h-[2px] bg-purple-500/70 shadow-[0_0_18px_rgba(168,85,247,0.95)]" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/calendar"
            className="bg-black px-12 py-4 text-sm uppercase tracking-widest border border-purple-500 shadow-[0_0_18px_rgba(168,85,247,0.7)]"
          >
            Event Calendar
          </Link>
        </div>
      </section>

      {/* ================= INSTAGRAM ================= */}
      <section className="px-4 py-16 bg-[#12051F]/95">
        <div className="mx-auto max-w-7xl text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="text-2xl sm:text-3xl font-semibold"
          >
            Follow us on Instagram
          </a>

          <div className="mt-10">
            <Script
              src="https://cdn.lightwidget.com/widgets/lightwidget.js"
              strategy="lazyOnload"
            />
            <iframe
              src="//lightwidget.com/widgets/7ab45c70662d5a98a162ea67be210e2f.html"
              scrolling="no"
              className="w-full border-0"
              style={{ minHeight: 600 }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
