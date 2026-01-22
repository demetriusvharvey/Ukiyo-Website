"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  const EVENTBRITE_LISTING = "https://www.eventbrite.com/d/va--portsmouth/ukiyo/";
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

  return (
    <main className="min-h-screen bg-transparent text-white overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="w-full overflow-hidden bg-black">
        {/* Mobile: carousel (starts on far-right image) */}
        <div className="sm:hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            loop
            initialSlide={2} // far-right image first
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

        {/* Desktop: 3 columns (unchanged) */}
        <div className="hidden sm:grid grid-cols-3">
          <div className="relative sm:aspect-auto sm:h-[65vh]">
            <img
              src="/moneyshot2.png"
              alt="Ukiyo hero left"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

          <div className="relative sm:aspect-auto sm:h-[65vh]">
            <img
              src="/moneyshot3.png"
              alt="Ukiyo hero middle"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

          <div className="relative sm:aspect-auto sm:h-[65vh]">
            <img
              src="/moneyshot.png"
              alt="Ukiyo hero right"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ================= EVENTS BAND ================= */}
      <section
        id="events"
        className="pt-12 sm:pt-20 pb-14 sm:pb-16 font-[var(--font-inter)]"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={16}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              640: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20 },
              1024: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 24 },
            }}
            className="overflow-hidden"
          >
            {events.map((event, idx) => (
              <SwiperSlide key={idx}>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block transition hover:brightness-105"
                >
                  {/* Flyer: responsive height so it’s not huge on mobile */}
                  <div className="h-[240px] sm:h-[320px] md:h-[360px] w-full bg-white/10 flex items-center justify-center text-xs uppercase tracking-widest text-white/40">
                    Event Flyer
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

                  {/* wipe glow */}
                  <div className="relative h-[2px] w-full overflow-hidden bg-purple-500/70 shadow-[0_0_18px_rgba(168,85,247,0.95)]">
                    <span className="absolute inset-0 origin-left scale-x-0 bg-black transition-transform duration-500 ease-out group-hover:scale-x-100" />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* EVENT CALENDAR BUTTON */}
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
              <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608C4.57 2.62 5.837 2.332 7.203 2.27 8.469 2.212 8.853 2.2 12 2.2Zm0 3.3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm0 10.7a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4Zm6.75-11.05a1.55 1.55 0 1 1-3.1 0 1.55 1.55 0 0 1 3.1 0Z" />
            </svg>

            <span>Follow us on Instagram</span>
          </a>

          <p className="mt-2 text-white/60">Tap any tile to view @ukiyo_virginia</p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <a
                key={i}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="flex aspect-square items-center justify-center bg-white/10 text-xs uppercase tracking-widest text-white/40 hover:bg-white/20 transition"
              >
                Post
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}






