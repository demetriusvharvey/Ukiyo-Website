import Link from "next/link";

export default function Home() {
  const EVENTBRITE_LISTING = "https://www.eventbrite.com/d/va--portsmouth/ukiyo/";
  const INSTAGRAM_URL = "https://www.instagram.com/ukiyo_virginia/";

  const events = [
    {
      date: "FRI • JAN 24",
      title: "Ukiyo Fridays",
      desc: "Guest DJ • Doors 10PM",
      link: EVENTBRITE_LISTING,
    },
    {
      date: "SAT • JAN 25",
      title: "Saturday Nights",
      desc: "Live Performance • VIP Tables",
      link: EVENTBRITE_LISTING,
    },
    {
      date: "THU • JAN 30",
      title: "Industry Night",
      desc: "Hospitality • RSVP Required",
      link: EVENTBRITE_LISTING,
    },
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

  // LIV-like darker band color for Events + Instagram (same exact color)
  const BAND_BG = "#061722";

  return (
    <main className="min-h-screen bg-[#0B0D10] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute top-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-140px] h-[520px] w-[520px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* ================= HERO ================= */}
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-semibold tracking-tight text-white sm:text-7xl">
          Ukiyo
        </h1>
        <p className="mt-3 text-sm uppercase tracking-[0.4em] text-white/60">
          Virginia
        </p>
      </section>

      {/* ================= EVENTS BAND ================= */}
      <section
        id="events"
        className="px-6 pb-16 font-[var(--font-inter)]"
        style={{ backgroundColor: BAND_BG }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="space-y-6">
            {events.map((event) => (
              <a
                key={event.title}
                href={event.link}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/30 hover:bg-white/10 md:flex-row"
              >
                <div className="flex h-[240px] w-full items-center justify-center rounded-xl bg-white/10 text-xs uppercase tracking-widest text-white/40 md:h-[180px] md:w-[180px]">
                  Event Flyer
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/60">
                      {event.date}
                    </div>
                    <div className="mt-2 text-2xl font-semibold tracking-tight text-white">
                      {event.title}
                    </div>
                    <div className="mt-1 text-sm text-white/60">
                      {event.desc}
                    </div>
                  </div>

                  <span className="mt-6 inline-block w-fit rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 text-sm font-semibold shadow-xl shadow-purple-600/20 transition group-hover:brightness-110">
                    Get Tickets
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Event Calendar button */}
          <div className="mt-12 flex justify-center">
            <Link
              href="/calendar"
              className="rounded-xl border border-white/20 bg-transparent px-10 py-4 text-sm font-semibold uppercase tracking-widest text-white/90 transition hover:bg-white/10"
            >
              Event Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INSTAGRAM BAND ================= */}
      <section
        id="instagram"
        className="px-6 py-20 font-[var(--font-inter)]"
        style={{ backgroundColor: BAND_BG }}
      >
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Follow us on Instagram
          </h2>
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
                className="flex aspect-square items-center justify-center rounded-xl bg-white/10 text-xs uppercase tracking-widest text-white/40 hover:bg-white/20"
              >
                Post
              </a>
            ))}
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-10 block w-full max-w-md rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white/85 hover:bg-white/10"
          >
            Follow @ukiyo_virginia
          </a>
        </div>
      </section>

      {/* ================= FAQ BAND ================= */}
      <section
        id="faqs"
        className="border-t border-white/10 bg-[#05111A] px-6 py-20 font-[var(--font-inter)]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-white/60">
              Quick answers before you pull up.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white">
                  <span className="tracking-wide">{item.q}</span>
                  <span className="text-white/60 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-3 text-sm text-white/60">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
