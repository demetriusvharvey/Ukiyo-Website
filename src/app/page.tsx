export default function Home() {
  const EVENTBRITE_LISTING = "https://www.eventbrite.com/d/va--portsmouth/ukiyo/";
  const INSTAGRAM_URL = "https://www.instagram.com/ukiyo_virginia/";

  // For MVP: you can keep these manual.
  // Later: replace this array with Eventbrite API data so it auto-updates.
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

      {/* Sticky side actions (desktop) */}
      <div className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        <SideButton label="Reservations" href="#reservations" />
        <SideButton label="Menu" href="#menu" />
        <SideButton label="Contact" href="#contact" />
      </div>

      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center justify-center px-6">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-700/10 to-black" />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          {/* Swap this block with an <img> logo later (public/logo.png) */}
          <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-10 py-8 shadow-[0_0_60px_rgba(147,51,234,0.18)] backdrop-blur">
            <span className="text-5xl font-semibold tracking-tight">Ukiyo</span>
          </div>

          <div className="mb-10 font-serif text-sm tracking-[0.35em] text-white/80">
            Virginia
          </div>

          <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
            <PrimaryButton label="Reservations" href="#reservations" />
            <GhostButton label="Upcoming Events" href="#events" />
          </div>

          {/* Nav Buttons */}
          <nav className="flex gap-8 text-xs uppercase tracking-widest text-white/70">
            <a href="#events" className="hover:text-white transition">
              Events
            </a>
            <a href="#venue" className="hover:text-white transition">
              Venue
            </a>
            <a href="#reserve" className="hover:text-white transition">
              Reserve
            </a>
            <a href="#menu" className="hover:text-white transition">
              Menu
            </a>
            <a href="#faqs" className="hover:text-white transition">
              FAQs
            </a>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24">
        <h1 className="font-italiana text-7xl tracking-wider">Ukiyo</h1>
        <p className="mt-2 text-sm uppercase tracking-[0.4em] text-white/60">
          Virginia
        </p>
      </section>

      {/* Events */}
      <section id="events" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Upcoming Events</h2>
            <p className="mt-2 text-white/60">
              Tickets powered by Eventbrite
            </p>
          </div>

          <a
            className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/10 md:inline-block"
            href={EVENTBRITE_LISTING}
            target="_blank"
            rel="noreferrer"
          >
            View All Events
          </a>
        </div>

        <div className="space-y-4">
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

              {/* Info */}
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

      {/* Instagram */}
      <section id="instagram" className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Instagram</h2>
          <p className="mt-2 text-white/60">
            Tap any tile to view the latest posts
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

      {/* Reservations */}
      <section id="reservations" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h3 className="text-2xl font-semibold">Reservations</h3>
          <p className="mt-2 text-white/60">
            We’ll connect your reservations link/embed here.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h3 className="text-2xl font-semibold">Menu</h3>
          <p className="mt-2 text-white/60">
            We’ll link your menu (PDF) or build it directly here.
          </p>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-3">

            <div>
              <div className="font-italiana text-2xl tracking-wide">
                Ukiyo
              </div>
              <div className="mt-2 text-sm text-white/60">
                Virginia nightlife • Events • Reservations
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-white/80">
                Visit
              </div>
              <div className="mt-3 space-y-2 text-sm text-white/60">
                <div>Address: (add client address)</div>
                <a className="block hover:text-white" href="https://maps.google.com" target="_blank" rel="noreferrer">
                  Directions →
                </a>
                <div>Hours: (add hours)</div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-white/80">
                Connect
              </div>
              <div className="mt-3 space-y-2 text-sm text-white/60">
                <a className="block hover:text-white" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>
                <a className="block hover:text-white" href="#" target="_blank" rel="noreferrer">TikTok</a>
                <a className="block hover:text-white" href="#" target="_blank" rel="noreferrer">Email</a>
              </div>
            </div>

          </div>

          <div className="mt-10 text-xs text-white/40">
            © {new Date().getFullYear()} Ukiyo. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

function SideButton({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/85 shadow-lg shadow-purple-600/10 backdrop-blur transition hover:bg-white/10"
    >
      {label}
    </a>
  );
}

function PrimaryButton({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-purple-600/20 transition hover:brightness-110"
    >
      {label}
    </a>
  );
}

function GhostButton({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-white/10"
    >
      {label}
    </a>
  );
}
