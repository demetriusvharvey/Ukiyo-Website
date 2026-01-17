export default function ReservationsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
          Table Reservations
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Reserve Your VIP Table at Ukiyo Virginia
        </h1>

        <p className="mt-4 text-white/60">
          Planning a night out? Browse upcoming events and book your VIP table
          for your favorite night. General reservation inquiries can be
          submitted below.
        </p>

        <form className="mt-10 space-y-6">
          {/* Date */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-white/70">
              Date <span className="text-white/40">*</span>
            </label>
            <input
              type="date"
              name="date"
              required
              className="mt-2 w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30"
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
                name="fullName"
                required
                placeholder="Your name"
                className="mt-2 w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/30"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-white/70">
                Email <span className="text-white/40">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                className="mt-2 w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/30"
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
                name="phone"
                required
                placeholder="(555) 555-5555"
                className="mt-2 w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/30"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-white/70">
                Number of Guests <span className="text-white/40">*</span>
              </label>
              <input
                type="number"
                name="guests"
                min={1}
                required
                placeholder="e.g. 6"
                className="mt-2 w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/30"
              />
            </div>
          </div>

          {/* Comments */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-white/70">
              Comments
            </label>
            <textarea
              name="comments"
              rows={5}
              placeholder="Tell us what you’re looking for (occasion, preferred area, arrival time, etc.)"
              className="mt-2 w-full resize-none border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/30"
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full border border-white/20 bg-white/10 px-6 py-4 text-xs font-semibold uppercase tracking-[0.35em] transition hover:bg-white/15"
            >
              Submit
            </button>

            <p className="mt-3 text-xs text-white/40">
              By submitting this form, you agree to be contacted regarding your
              reservation request.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}


