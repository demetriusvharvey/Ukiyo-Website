"use client";

import { useEffect, useState } from "react";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

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

            const title = ev?.name?.text ?? "Ukiyo Event";

            return {
              id: ev?.id,
              slug: slugify(title),
              date: d,
              ms,
              flyer: ev?.logo?.original?.url ?? ev?.logo?.url ?? null,
              title,
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
            
          </h1>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold">
            Upcoming Events
          </h2>
        </div>
      </section>

      {/* ================= EVENTS GRID (4 PER ROW ON MD+ / LIV-ISH) ================= */}
      <section className="w-full py-10">
        <div className="mx-auto max-w-6xl px-0 sm:px-4">
          <div className="grid grid-cols-2 gap-[2px] sm:gap-3 md:grid-cols-4">
            {events.map((event: any, idx: number) => {
              const d: Date = event.date;

              return (
                <a
                  key={idx}
                  href={
                    event?.id && event?.slug
                      ? `/events/${event.id}/${event.slug}`
                      : event.link
                  }
                  target={event?.id && event?.slug ? undefined : "_blank"}
                  rel={event?.id && event?.slug ? undefined : "noreferrer"}
                  className="group block select-none touch-manipulation active:scale-[0.98] transition-transform duration-150"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  {/* ✅ same “card feel” + hover treatment like homepage */}
                  <div className="border border-white/10 bg-black transition-transform duration-200 group-hover:brightness-110">
                    {/* ================= FLYER ================= */}
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

                    {/* ================= TITLE ================= */}
                    <div className="p-3 text-center bg-black border-t border-white/10">
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

                    {/* ✅ same purple “underline/glow” hover effect as homepage cards */}
                    <div className="relative h-[2px] w-full overflow-hidden bg-purple-500/70 shadow-[0_0_18px_rgba(168,85,247,0.95)]">
                      <span className="absolute inset-0 origin-left scale-x-0 bg-black transition-transform duration-500 ease-out group-hover:scale-x-100" />
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
