"use client";

export default function MenuPage() {
  const HERO_BG = "/hero-menu.png";

  return (
    <main className="w-full">
      {/* ================= HERO ================= */}
      <section className="relative w-full overflow-hidden">
        <img
          src={HERO_BG}
          alt="Ukiyo Menu"
          className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
        />

        {/* Hero overlay tone (same one we locked in) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B10]/90 via-[#0A1220]/75 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-24 text-center text-white">
          <h1 className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Menu
          </h1>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-4xl">
            Drinks, bottles, and specialty offerings
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            Explore our drinks, bottles, and specialty offerings.
          </p>
        </div>
      </section>

      {/* ================= CONTENT BACKGROUND (SOLID) ================= */}
      <section className="w-full min-h-screen bg-[#070B10]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-white">
          <h1 className="text-4xl font-semibold tracking-tight">Menu</h1>
          <p className="mt-4 text-white/60">
            Explore our drinks, bottles, and specialty offerings.
          </p>

          {/* your menu content goes here */}
        </div>
      </section>
    </main>
  );
}
