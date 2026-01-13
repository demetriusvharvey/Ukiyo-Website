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
    <main className="min-h-screen bg-black text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute top-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-140px] h-[520px] w-[520px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* ================= TOP NAV ================= */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="text-center">
            <div className="text-xl tracking-wide">Ukiyo</div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-white/60">
              Virginia
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden gap-8 text-xs uppercase tracking-widest text-white/70 md:flex">
            <a href="#events" className="transition hover:text-white">
              Events
            </a>
            <a href="#instagram" className="transition hover:text-white">
              Instagram
            </a>
            <a href="#reservations" className="transition hover:text-white">
              Reserve
            </a>
            <a href="#menu" className="transition hover:text-white">
              Menu
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          {/* Mobile quick link */}
          <a
            href="#events"
            className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/80 backdrop-blur hover:bg-white/10 md:hidden"
          >
            Events
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="flex min-h-[92vh] flex-col items-center justify-center px-6 pt-24 text-center">
        <h1 className="text-6xl font-semibold tracking-tight sm:text-7xl">
          Ukiyo
        </h1>
        <p className="mt-3 text-sm uppercase tracking-[0.4em] text-white/60">
          Virginia
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#reservations"
            className="rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-purple-600/20 transition hover:brightness-110"
          >
            Reservations
          </a>
          <a
            href="#events"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-white/10"
          >
            Upcoming Events
          </a>
        </div>

        <p className="mt-6 text-sm text-white/60">
          Concerts • Guest appearances • Weekly events
        </p>
      </section>

      {/* ================= EVENTS ================= */}
      <section id="events" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Upcoming Events
            </h2>
            <p className="mt-2 text-white/60">Tickets powered by Eventbrite</p>
          </div>

          <a
            href={EVENTBRITE_LISTING}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/10 md:inline-block"
          >
            View All Events
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
              {/* Flyer placeholder */}
              <div className="flex h-[240px] w-full items-center justify-center rounded-xl bg-white/10 text-xs uppercase tracking-widest text-white/40 md:h-[180px] md:w-[180px]">
                Event Flyer
              </div>

              {/* Event Info */}
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
          <p className="mt-2 text-white/60">Tap any tile to view the page</p>

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

      {/* ================= RESERVATIONS ================= */}
      <section id="reservations" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h3 className="text-2xl font-semibold">Reservations</h3>
          <p className="mt-2 text-white/60">
            We’ll connect your reservations link/embed here.
          </p>
        </div>
      </section>

      {/* ================= MENU ================= */}
      <section id="menu" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h3 className="text-2xl font-semibold">Menu</h3>
          <p className="mt-2 text-white/60">
            We’ll link your menu (PDF) or build it directly here.
          </p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="text-2xl font-semibold">Ukiyo</div>
              <div className="mt-2 text-sm text-white/60">
                Virginia nightlife • Events • Reservations
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-white/80">Visit</div>
              <div className="mt-3 space-y-2 text-sm text-white/60">
                <div>Address: (add client address)</div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-white"
                >
                  Directions →
                </a>
                <div>Hours: (add hours)</div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-white/80">Connect</div>
              <div className="mt-3 space-y-2 text-sm text-white/60">
                <a
                  className="block hover:text-white"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a className="block hover:text-white" href="#">
                  TikTok
                </a>
                <a className="block hover:text-white" href="#">
                  Email
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 text-xs text-white/40">
            © {new Date().getFullYear()} Ukiyo. All rights reserved.
          </div>
        </div>

        {/* Mobile bottom action bar */}
        <div className="sticky bottom-0 z-40 border-t border-white/10 bg-black/80 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-6xl items-center justify-around px-4 py-3">
            <a className="text-sm text-white/80" href="#reservations">
              Reservations
            </a>
            <a className="text-sm text-white/80" href="#menu">
              Menu
            </a>
            <a className="text-sm text-white/80" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
