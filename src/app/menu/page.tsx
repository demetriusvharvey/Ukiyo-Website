"use client";

import Image from "next/image";
import Link from "next/link";

export default function MenuPage() {
  const HERO_BG = "/hero-menu.png";

  return (
    <main className="w-full text-white">
      {/* ================= HERO ================= */}
      <section className="relative w-full overflow-hidden h-[420px] md:h-[520px]">
        {/* Full hero image — fills hero, NO distortion */}
        <Image
          src={HERO_BG}
          alt="Ukiyo Menu"
          fill
          priority
          quality={100}
          className="object-cover object-top"
          sizes="100vw"
        />

        {/* Centered hero content */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-center px-6 text-center">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.45em] text-white/80">
              MENU
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Explore our food, drinks, bottles, and specialty offerings.
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
            
            </p>
          </div>
        </div>
      </section>

      {/* ================= MENU CONTENT ================= */}
      <section id="menu" className="w-full">
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-3xl rounded border border-white/15 bg-black/35 backdrop-blur p-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Menu</h2>

            <p className="mt-4 text-white/60">
              Menu coming soon!
            </p>

            {/* menu items go here */}
          </div>
        </div>
      </section>
    </main>
  );
}
