"use client";

import Image from "next/image";
import Link from "next/link";

export default function MenuPage() {
  const HERO_BG = "/hero-menu.png";

  return (
    <main className="w-full text-white">
      {/* ================= HERO (MATCHES LIV-STYLE: BLUR SIDES + SHARP CENTER) ================= */}
      <section className="relative w-full overflow-hidden h-[420px] md:h-[520px]">
        {/* Blurred full-bleed background (creates the “soft sides” look) */}
        <div className="absolute inset-0">
          <Image
            src={HERO_BG}
            alt=""
            fill
            priority
            className="object-cover blur-2xl scale-110 opacity-45"
          />
          {/* dark wash */}
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Sharp centered hero image */}
        <div className="absolute inset-0">
          <div className="relative mx-auto h-full max-w-6xl px-6">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={HERO_BG}
                alt="Ukiyo Menu"
                fill
                priority
                className="object-cover object-center"
              />

              {/* subtle contrast + top fade like the screenshot */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />

              {/* side vignettes */}
              <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-black/75 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-black/75 to-transparent" />
            </div>
          </div>
        </div>

        {/* Centered hero content */}
        <div className="relative mx-auto flex h-full max-w-6xl items-center justify-center px-6 text-center">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.45em] text-white/70">
              MENU
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Drinks, bottles, and specialty offerings
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
              Explore our drinks, bottles, and specialty offerings.
            </p>

            {/* Buttons (same vibe as screenshot) */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/reserve"
                className="inline-flex h-11 items-center justify-center border border-white/35 px-8 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                Reserve
              </Link>

              <Link
                href="#menu"
                className="inline-flex h-11 items-center justify-center border border-white/35 px-8 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MENU CONTENT (CENTERED, WATER BACKGROUND) ================= */}
      <section id="menu" className="w-full">
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
