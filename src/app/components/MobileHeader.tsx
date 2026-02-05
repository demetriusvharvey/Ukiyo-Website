"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      {/* Hamburger button (sits in the header area) */}
      <div className="md:hidden fixed top-0 right-0 z-[60] h-[72px] px-4 flex items-center">
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative inline-flex h-10 w-10 items-center justify-center"
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-4 w-6">
            <span
              className={[
                "absolute left-0 top-0 h-[2px] w-full bg-white/85 transition-transform duration-200",
                open ? "translate-y-[7px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[7px] h-[2px] w-full bg-white/70 transition-opacity duration-200",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 bottom-0 h-[2px] w-full bg-white/85 transition-transform duration-200",
                open ? "-translate-y-[7px] -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      {/* Overlay menu */}
      {open && (
        <>
          {/* Backdrop */}
          <button
            aria-label="Close menu backdrop"
            onClick={() => setOpen(false)}
            className="md:hidden fixed inset-0 z-[55] bg-black/70"
          />

          {/* Panel */}
          <div className="md:hidden fixed inset-x-0 top-[72px] z-[60] border-t border-white/10 bg-black">
            <div className="px-6 py-8">
              {/* Optional subtle divider line to feel more “premium” */}
              <div className="mx-auto mb-7 h-px w-16 bg-white/15" />

              <nav className="flex flex-col items-center gap-6 text-xs uppercase tracking-[0.25em] text-white/85">
                <Link
                  href="/calendar"
                  className="hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="/venue"
                  className="hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  Venue
                </Link>
                <Link
                  href="/reservations"
                  className="hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  VIP
                </Link>
                <Link
                  href="/menu"
                  className="hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  Menu
                </Link>
                <Link
                  href="/faqs"
                  className="hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  FAQs
                </Link>
              </nav>

              {/* Reserve button (optional but feels LIV-ish) */}
              <div className="mt-8 flex justify-center">
                <Link
                  href="/reservations"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 items-center justify-center border border-white/25 px-10 text-[11px] font-semibold uppercase tracking-[0.25em] transition hover:bg-white/10"
                >
                  Reserve
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
