export default function Home() {
  const events = [
    {
      date: "FRI • JAN 24",
      title: "Ukiyo Fridays",
      desc: "Guest DJ • Doors 10PM",
      link: "https://www.eventbrite.com",
    },
    {
      date: "SAT • JAN 25",
      title: "Saturday Nights",
      desc: "Live Performance • VIP Tables",
      link: "https://www.eventbrite.com",
    },
    {
      date: "THU • JAN 30",
      title: "Industry Night",
      desc: "Hospitality • RSVP Required",
      link: "https://www.eventbrite.com",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= TOP NAV ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="text-center">
            <div className="font-italiana text-xl tracking-wide">Ukiyo</div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-white/60">
              Virginia
            </div>
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

      {/* ================= EVENTS ================= */}
      <section id="events" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-italiana mb-14 text-center text-4xl tracking-wide">
          Upcoming Events
        </h2>

        <div className="space-y-10">
          {events.map((event) => (
            <a
              key={event.title}
              href={event.link}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/30 hover:bg-white/10 md:flex-row"
            >
              {/* Flyer Placeholder */}
              <div className="h-[240px] w-full md:w-[180px] flex items-center justify-center rounded-xl bg-white/10 text-xs uppercase tracking-widest text-white/40">
                Event Flyer
              </div>

              {/* Event Info */}
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="text-xs tracking-widest text-white/60">
                    {event.date}
                  </div>
                  <div className="font-italiana mt-2 text-2xl tracking-wide">
                    {event.title}
                  </div>
                  <div className="mt-1 text-sm text-white/60">
                    {event.desc}
                  </div>
                </div>

                <span className="mt-6 inline-block w-fit rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 text-sm font-semibold shadow-xl transition group-hover:brightness-110">
                  Get Tickets
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ================= INSTAGRAM (UNCHANGED) ================= */}
      <section id="instagram" className="border-t border-white/10 py-20 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-italiana text-4xl tracking-wide mb-10">
            Instagram
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <a
                key={i}
                href="https://www.instagram.com/ukiyo_virginia/"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square rounded-xl bg-white/10 flex items-center justify-center text-xs uppercase tracking-widest text-white/40 hover:bg-white/20"
              >
                Instagram Post
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
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
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  className="block hover:text-white"
                >
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
                <a
                  href="https://www.instagram.com/ukiyo_virginia/"
                  target="_blank"
                  className="block hover:text-white"
                >
                  Instagram
                </a>
                <a href="#" className="block hover:text-white">
                  TikTok
                </a>
                <a href="#" className="block hover:text-white">
                  Email
                </a>
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











