"use client";

import { useEffect, useMemo, useState } from "react";

export default function ReservationsPage() {
  const HERO_BG = "/hero-reserve.png";

  // ✅ NEW: Eventbrite events for the "Event" dropdown
  const [eventbriteEvents, setEventbriteEvents] = useState<any[]>([]);

  useEffect(() => {
    async function loadEventbrite() {
      try {
        const res = await fetch("/api/eventbrite/events");
        const data = await res.json();
        setEventbriteEvents(Array.isArray(data?.events) ? data.events : []);
      } catch (err) {
        console.error("Eventbrite fetch failed:", err);
        setEventbriteEvents([]);
      }
    }

    loadEventbrite();
  }, []);

  // ✅ NEW: Dropdown options (sorted)
  const eventOptions = useMemo(() => {
    const list = [...eventbriteEvents];

    list.sort((a, b) => {
      const da = new Date(a?.start?.local || 0).getTime();
      const db = new Date(b?.start?.local || 0).getTime();
      return da - db;
    });

    return list.map((ev) => {
      const d = ev?.start?.local ? new Date(ev.start.local) : null;
      const dateLabel = d
        ? d.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "2-digit",
          })
        : "DATE TBA";

      const title = ev?.name?.text ?? "Event";
      return {
        value: ev?.id ?? `${dateLabel} • ${title}`,
        label: `${dateLabel.toUpperCase()} • ${title}`,
      };
    });
  }, [eventbriteEvents]);

  return (
    <main className="w-full">
      {/* ================= HERO ================= */}
      <section className="relative w-full overflow-hidden">
        <img
          src={HERO_BG}
          alt="Ukiyo Reservations"
          className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
        />

        {/* Hero overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B10]/90 via-[#0A1220]/75 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-24 text-center text-white">
          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70"></div>

          <h1 className="mt-4 text-2xl font-semibold tracking-tight md:text-4xl">
            VIP Section Reservations
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            Submit a request and we’ll follow up to confirm availability and
            details.
          </p>
        </div>
      </section>

      {/* ================= FORM (WATER BACKGROUND SHOWS THROUGH) ================= */}
      <section className="w-full">
        <div className="mx-auto max-w-7xl px-6 py-20 text-white">
          <div className="mx-auto max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70"></div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight">
              Reserve Your VIP Section at Ukiyo Virginia
            </h1>

            <p className="mt-4 text-white/60">
              Planning a night out? Browse upcoming events and book your VIP
              table for your favorite night. General reservation inquiries can
              be submitted below.
            </p>

            <form className="mt-10 space-y-6">
              {/* Event (replaces Date) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-white/70">
                  Event <span className="text-white/40">*</span>
                </label>
                <select
                  required
                  className="mt-2 w-full border border-white/20 bg-black/40 px-4 py-3 text-sm text-white outline-none backdrop-blur focus:border-white/40"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an event
                  </option>
                  {eventOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Table dropdown (under Event) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-white/70">
                  Table <span className="text-white/40">*</span>
                </label>
                <select
                  required
                  className="mt-2 w-full border border-white/20 bg-black/40 px-4 py-3 text-sm text-white outline-none backdrop-blur focus:border-white/40"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select table type
                  </option>
                  <option value="Stage Tables">Stage Tables</option>
                  <option value="Backwall Tables">Backwall Tables</option>
                  <option value="Dance Floor Tables">Dance Floor Tables</option>
                  <option value="Birthday Tables">Birthday Tables</option>
                </select>
              </div>

              {/* Name + Email */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-white/70">
                    Full Name <span className="text-white/40">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="mt-2 w-full border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none backdrop-blur focus:border-white/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-white/70">
                    Email <span className="text-white/40">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    required
                    className="mt-2 w-full border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none backdrop-blur focus:border-white/40"
                  />
                </div>
              </div>

              {/* Phone + Guests */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-white/70">
                    Phone Number <span className="text-white/40">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 555-5555"
                    required
                    className="mt-2 w-full border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none backdrop-blur focus:border-white/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-white/70">
                    Number of Guests <span className="text-white/40">*</span>
                  </label>
                  <input
                    type="number"
                    min={1}
                    placeholder="e.g. 6"
                    required
                    className="mt-2 w-full border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none backdrop-blur focus:border-white/40"
                  />
                </div>
              </div>

              {/* Comments */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-white/70">
                  Additional Comments
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us what you’re looking for (occasion, preferred area, arrival time, etc.)"
                  className="mt-2 w-full resize-none border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none backdrop-blur focus:border-white/40"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full border border-white/30 bg-white/10 px-6 py-4 text-xs font-semibold uppercase tracking-[0.35em] transition hover:bg-white/20"
                >
                  Submit
                </button>

                <p className="mt-3 text-xs text-white/40">
                  By submitting this form, you agree to be contacted regarding
                  your reservation request.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
