"use client";

import Link from "next/link";

export default function VenuePage() {
  const HERO_BG = "/moneyshot2.png"; // venue hero image

  const highlightsLeft = [
    "Upscale nightlife atmosphere",
    "High-energy performances",
    "Premium bottle service",
    "Curated DJ programming",
  ];

  const highlightsRight = [
    "VIP seating options",
    "Immersive lighting & sound",
    "Perfect for celebrations",
    "Special event nights",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative w-full overflow-hidden bg-black h-[520px] sm:h-[560px] md:h-[420px] -mt-[72px] sm:-mt-[80px]">
        {/* blurred background fill */}
        <img
          src={HERO_BG}
          alt=""
          className="absolute inset-0 h-full w-full object-cover blur-xl scale-110 opacity-40"
        />

        {/* foreground image */}
        {/* MOBILE = COVER (prevents blurred gap) | DESKTOP = CONTAIN */}
        <img
          src={HERO_BG}
          alt="Ukiyo Venue"
          className="absolute inset-0 h-full w-full object-cover md:object-contain object-center"
        />

        <div className="absolute inset-0 bg-black/65" />

        {/* text container */}
        <div className="relative mx-auto px-6 h-full flex items-center justify-center">
          <div className="w-full max-w-[520px] sm:max-w-[560px] md:max-w-[620px] text-center">
            <h1 className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              
            </h1>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-4xl">
              The definitive Virginia nightlife experience
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              Ukiyo is designed for elevated nights—premium sound, immersive
              lighting, and an atmosphere built for unforgettable experiences.
              Discover the venue and plan your night out.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/reservations"
                className="inline-flex items-center justify-center border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] transition hover:bg-white/10"
              >
                Reserve
              </Link>
              <Link
                href="/calendar"
                className="inline-flex items-center justify-center border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] transition hover:bg-white/10"
              >
                View events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MID BAND ================= */}
      <section className="relative w-full bg-[#0B1218]">
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <div className="mx-auto w-full max-w-2xl">
            {/* 360 Tour Card */}
            <div className="relative overflow-hidden rounded border border-white/15 bg-black/30">
              <div className="aspect-video w-full flex items-center justify-center bg-black/40">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                  360 Tour Coming Soon
                </span>
              </div>

              <div className="border-t border-white/10 px-6 py-5 text-center">
                <div className="flex items-center justify-center gap-2 text-sm font-semibold tracking-tight">
                  360 TOUR
                  <span className="rounded border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-widest text-white/70">
                    Coming Soon
                  </span>
                </div>

                <p className="mt-2 text-sm text-white/65">
                  Experience the venue like never before.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-10 text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                Highlights
              </div>

              <div className="mx-auto mt-5 grid max-w-3xl gap-6 text-sm text-white/70 md:grid-cols-2">
                <ul className="space-y-2">
                  {highlightsLeft.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {highlightsRight.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
      </section>
    </main>
  );
}
