"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SubscribeModal({ open, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => {
        if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
          onClose();
        }
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      <div
        ref={panelRef}
        className="relative z-10 w-full max-w-[880px] overflow-hidden border border-white/10 bg-[#0b0f14] shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-black/40 text-white/70 hover:text-white hover:border-white/30"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2">
          <div className="hidden md:block">
            <img
              src="/moneyshot.png"
              alt="Ukiyo nightlife"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-8 sm:p-10">
            <h2 className="text-lg uppercase tracking-[0.22em]">
              Stay Updated!
            </h2>
            <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/60">
              Receive promotions, news and special events
            </p>

            <p className="mt-4 text-xs text-white/50">
              By submitting this form, you agree to our{" "}
              <Link href="/terms" className="underline hover:text-white">
                Terms
              </Link>{" "}
              &{" "}
              <Link href="/privacy" className="underline hover:text-white">
                Privacy Policy
              </Link>
              .
            </p>

            <form
              className="mt-6"
              onSubmit={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              <label className="block">
                <div className="mb-2 text-[11px] uppercase tracking-[0.22em] text-white/60">
                  Email
                </div>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="h-11 w-full bg-white px-3 text-black outline-none"
                />
              </label>

              {/* Button: centered + more spacing below input */}
              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className={[
                    "inline-flex h-10 items-center justify-center px-10",
                    "bg-transparent text-white",
                    "border-2 border-purple-500",
                    "text-xs font-semibold uppercase tracking-[0.22em]",
                    "transition-all duration-300",
                    "shadow-[0_0_10px_rgba(168,85,247,0.35)]",
                    "hover:bg-purple-600",
                    "hover:shadow-[0_0_30px_rgba(168,85,247,1),inset_0_0_14px_rgba(255,255,255,0.18)]",
                  ].join(" ")}
                >
                  Subscribe
                </button>
              </div>
            </form>

            <div className="mt-6 md:hidden">
              <img
                src="/moneyshot.png"
                alt="Ukiyo nightlife"
                className="h-56 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
