"use client";

import Image from "next/image";

export default function MenuPage() {
  const HERO_BG = "/hero-menu.png";

  return (
    <main className="w-full text-white">
      {/* ================= HERO (CENTERED LIKE FAQS) ================= */}
      <section className="relative w-full overflow-hidden h-[360px] md:h-[420px]">
        <Image
          src={HERO_BG}
          alt="Ukiyo Menu"
          fill
          priority
          className="object-cover object-[50%_25%]"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B10]/90 via-[#0A1220]/75 to-transparent" />

        {/* centered content */}
        <div className="relative mx-auto max-w-5xl h-full px-6 flex flex-col items-center justify-center text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Menu
          </div>

          <h1 className="mt-4 text-2xl font-semibold tracking-tight md:text-4xl">
            Drinks, bottles, and specialty offerings
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            Explore our drinks, bottles, and specialty offerings.
          </p>
        </div>
      </section>

      {/* ================= MENU CONTENT (CENTERED GLASS, WATER SHOWS) ================= */}
      <section className="w-full">
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-3xl rounded border border-white/15 bg-black/35 backdrop-blur p-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Menu</h2>

            <p className="mt-4 text-white/60">
              Explore our drinks, bottles, and specialty offerings.
            </p>

            {/* menu items go here */}
          </div>
        </div>
      </section>
    </main>
  );
}
