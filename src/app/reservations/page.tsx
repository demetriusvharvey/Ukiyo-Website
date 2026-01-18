"use client";

export default function ReservationsPage() {
  const HERO_BG = "/hero-reserve.png";

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
          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            
          </div>

          <h1 className="mt-4 text-2xl font-semibold tracking-tight md:text-4xl">
            Table Reservations
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
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight">
              Reserve Your VIP Table at Ukiyo Virginia
            </h1>

            <p className="mt-4 text-white/60">
              Planning a night out? Browse upcoming events and book your VIP
              table for your favorite night. General reservation inquiries can
              be submitted below.
            </p>

            <form className="mt-10 space-y-6">
              {/* Date */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-white/70">
                  Date <span className="text-white/40">*</span>
                </label>
                <input
                  type="date"
                  required
                  className="mt-2 w-full border border-white/20 bg-black/40 px-4 py-3 text-sm text-white outline-none backdrop-blur focus:border-white/40"
                />
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
                    Phone <span className="text-white/40">*</span>
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
                  Comments
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
