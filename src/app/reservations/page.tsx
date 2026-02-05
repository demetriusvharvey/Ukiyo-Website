"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function ReservationsPage() {
  const HERO_BG = "/hero-reserve.png";

  // ✅ Eventbrite events for the "Event" dropdown
  const [eventbriteEvents, setEventbriteEvents] = useState<any[]>([]);

  // ✅ submission state + form ref
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

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

  // ✅ Dropdown options (sorted)
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
      const label = `${dateLabel.toUpperCase()} • ${title}`;

      return {
        id: ev?.id ?? "",
        label, // ✅ what we want to send
      };
    });
  }, [eventbriteEvents]);

  // ✅ Submit via fetch so we stay on our site
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Formspree endpoint
    const endpoint = "https://formspree.io/f/xaqdwqyy";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");

      // ✅ Clear form fields
      formRef.current?.reset();

      // ✅ Optional: hide success message after a few seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <main className="w-full">
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] overflow-hidden">
        <img
          src={HERO_BG}
          alt="Ukiyo Reservations"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Hero overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

        <div className="relative h-full flex items-center justify-center text-center px-6 text-white">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70"></div>

            <h1 className="mt-4 text-2xl font-semibold tracking-tight md:text-4xl">
              VIP Section Reservations
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              Submit a request and we’ll follow up to confirm availability and
              details.
            </p>
          </div>
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

            {/* ✅ success / error messages on YOUR site */}
            {status === "success" && (
              <div className="mt-8 border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/90 backdrop-blur">
                ✅ Sent! We received your request and will follow up soon.
              </div>
            )}

            {status === "error" && (
              <div className="mt-8 border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-white/90 backdrop-blur">
                ❌ Something went wrong. Please try again.
              </div>
            )}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >
              {/* Optional: better subject in the email */}
              <input
                type="hidden"
                name="_subject"
                value="Ukiyo VIP / Table Reservation"
              />

              {/* Event (replaces Date) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-white/70">
                  Event <span className="text-white/40">*</span>
                </label>

                {/* ✅ Send event name/label instead of ID */}
                <select
                  name="event"
                  required
                  className="mt-2 w-full border border-white/20 bg-black/40 px-4 py-3 text-sm text-white outline-none backdrop-blur focus:border-white/40"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an event
                  </option>
                  {eventOptions.map((opt) => (
                    <option key={opt.id || opt.label} value={opt.label}>
                      {opt.label}
                    </option>
                  ))}
                </select>

                {/* ✅ If you ALSO want the Eventbrite ID in the email, add a separate dropdown or hidden input.
                    (Hidden input can’t auto-update without extra JS state, so easiest is to keep it simple
                    and only send the label for now.) */}
              </div>

              {/* Table dropdown (under Event) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-white/70">
                  Table <span className="text-white/40">*</span>
                </label>
                <select
                  name="table_type"
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
                    name="full_name"
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
                    name="email"
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
                    name="phone"
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
                    name="guest_count"
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
                  name="comments"
                  rows={5}
                  placeholder="Tell us what you’re looking for (occasion, preferred area, arrival time, etc.)"
                  className="mt-2 w-full resize-none border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none backdrop-blur focus:border-white/40"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full border border-white/30 bg-white/10 px-6 py-4 text-xs font-semibold uppercase tracking-[0.35em] transition hover:bg-white/20 disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Submit"}
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
