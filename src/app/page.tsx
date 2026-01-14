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

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute top-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-140px] h-[520px] w-[520px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* ================= HERO ================= */}
      <section className="flex min-h-[92vh] flex-col items-center justify-center px-6 pt-24 text-center">
        <h1 className="text-6xl font-semibold tracking-tight sm:text-7xl">
          Ukiyo
        </h1>
        <p className="mt-3 text-sm uppercase tracking-[0.4em] text-white/60">
          Virginia
        </p>
      </section>

      {/* ================= EVENTS ================= */}
      <section id="events" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Upcoming Events
            </h2>
            <p className="mt-2 text-white/60">
              Tickets powered by Eventbrite
            </p>
          </div>

          <a
            href="/calendar"
            className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/10 md:inline-block"
          >
            View Calendar
          </a>
        </div>

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
                  <div className="mt-2 text-2xl font-semibold tracking-tight">
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
      </section>

      {/* ================= INSTAGRAM ================= */}
      <section id="instagram" className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Instagram</h2>
          <p className="mt-2 text-white/60">
            Tap any tile to view the page
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <a
                key={i}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="flex aspect-square items-center justify-center rounded-xl bg-white/10 text-xs uppercase tracking-widest text-white/40 hover:bg-white/20"
              >
                Instagram Post
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


