export default function Home() {
  const EVENTBRITE_URL = "https://www.eventbrite.com/d/va--portsmouth/ukiyo/";

  const events = [
    { date: "Fri • Jan 24", title: "Ukiyo Fridays", desc: "Guest DJ • Doors 10PM" },
    { date: "Sat • Jan 25", title: "Saturday Nights", desc: "Live Set • VIP Tables" },
    { date: "Thu • Jan 30", title: "Industry Night", desc: "Specials • RSVP Required" },
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

          <p className="mt-6 text-sm text-white/60">
            Concerts • Guest appearances • Weekly events
          </p>
        </div>
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
            href={EVENTBRITE_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/10 md:inline-block"
          >
            View All Events
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {events.map((e) => (
            <div
              key={e.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="text-xs uppercase tracking-widest text-white/60">{e.date}</div>
              <div className="mt-2 text-xl font-semibold">{e.title}</div>
              <div className="mt-1 text-sm text-white/60">{e.desc}</div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-white/50">Tickets via Eventbrite</span>
                <a
                  href={EVENTBRITE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-purple-600/20 transition group-hover:brightness-110"
                >
                  Get Tickets
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reservations */}
      <section id="reservations" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h3 className="text-2xl font-semibold">Reservations</h3>
          <p className="mt-2 text-white/60">
            We’ll connect your reservations link here.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h3 className="text-2xl font-semibold">Menu</h3>
          <p className="mt-2 text-white/60">
            Menu PDF or custom menu coming next.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-14">
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
                <a href="https://maps.google.com" target="_blank" className="block hover:text-white">
                  Directions →
                </a>
                <div>Hours: (add hours)</div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-white/80">Connect</div>
              <div className="mt-3 space-y-2 text-sm text-white/60">
                <a href="#" target="_blank" className="block hover:text-white">Instagram</a>
                <a href="#" target="_blank" className="block hover:text-white">TikTok</a>
                <a href="#" target="_blank" className="block hover:text-white">Email</a>
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
            <a className="text-sm text-white/80" href="#reservations">Reservations</a>
            <a className="text-sm text-white/80" href="#menu">Menu</a>
            <a className="text-sm text-white/80" href="#contact">Contact</a>
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











