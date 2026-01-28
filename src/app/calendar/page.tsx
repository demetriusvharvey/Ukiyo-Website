"use client";

import { useEffect, useState } from "react";

export default function CalendarPage() {
  const HERO_BG = "/hero-events.png";
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    async function loadEvents() {
      try {
        const res = await fetch("/api/eventbrite/events");
        const data = await res.json();

        if (!Array.isArray(data?.events)) return;

        const now = Date.now();

        const upcoming = data.events
          .map((ev: any) => {
            const d = new Date(ev?.start?.local);
            const ms = d.getTime();
            if (!Number.isFinite(ms)) return null;

            return {
              date: d,
              ms,
              flyer: ev?.logo?.original?.url ?? ev?.logo?.url ?? null,
              title: ev?.name?.text ?? "Ukiyo Event",
              link: ev?.url ?? "#",
            };
          })
          .filter(Boolean)
          .filter((e: any) => e.ms >= now)
          .sort((a: any, b: any) => a.ms - b.ms);

        setEvents(upcoming);
      } catch (e) {
        console.error("Eventbrite error", e);
      }
    }

    loadEvents();
  }, []);

  return (
    <div className="w-full bg-[#070B10] text-white">
      {/* ================= HERO ================= */}
      <section className="relative w-full overflow-hidden">
        <img
          src={HERO_BG}
          alt="Ukiyo Events"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
          <h1 className="text-xs uppercase tracking-[0.35em] text-white/70">
            Events
          </h1>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold">
            Upcoming Events
          </h2>
        </div>
      </section>

      {/* ================= EVENTS GRID (LIV-ISH SIZE + TOUCH) ================= */}
      <section className="w-full py-10">
        {/* edge-to-edge like LIV */}
        <div className="mx-auto max-w-6xl px-0 sm:px-4">
          {/* tighter grid spacing like LIV */}
          <div className="grid grid-cols-2 gap-[2px] sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
            {events.map((event: any, idx: number) => {
              const d: Date = event.date;

              return (
                <a
                  key={idx}
                  href={event.link}
                  target="_blank"
                  rel="noreferrer"
                  // tap/press feedback like LIV
                  className="group block select-none touch-manipulation active:scale-[0.98] active:brightness-110 transition-transform duration-150"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <div className="border border-white/10 bg-black">
                    {/* ================= FLYER (same fit fix, but LIV-ish sizing) ================= */}
                    <div className="relative h-[210px] sm:h-[240px] md:h-[260px] overflow-hidden bg-black">
                      {event.flyer ? (
                        <>
                          {/* background fill */}
                          <img
                            src={event.flyer}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover blur-lg scale-110 opacity-50"
                          />
                          {/* foreground perfect fit */}
                          <img
                            src={event.flyer}
                            alt={event.title}
                            className="absolute inset-0 h-full w-full object-contain"
                          />
                        </>
                      ) : (
                        <div className="flex h-full items-center justify-center text-white/40">
                          Event Flyer
                        </div>
                      )}
                    </div>

                    {/* ================= TITLE (UNCHANGED LOOK) ================= */}
                    <div className="p-3 text-center bg-black">
                      <div className="text-xs uppercase tracking-widest text-white/60">
                        {d.toLocaleDateString("en-US", { weekday: "short" })}
                      </div>

                      <div className="text-2xl font-bold uppercase tracking-widest">
                        {d.toLocaleDateString("en-US", { month: "short" })}{" "}
                        {d.getDate()}
                      </div>

                      <div className="mt-2 text-sm font-semibold uppercase">
                        {event.title}
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {!events.length && (
            <div className="mt-10 text-center text-white/60">
              No upcoming events found yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
