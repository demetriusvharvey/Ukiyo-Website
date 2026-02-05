"use client";

import { useState } from "react";
import Link from "next/link";
import SubscribeModal from "./SubscribeModal";

export default function SiteFooter({
  instagramUrl,
  facebookUrl,
  googleMapsUrl,
  appleMapsUrl,
}: {
  instagramUrl: string;
  facebookUrl: string;
  googleMapsUrl: string;
  appleMapsUrl: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 text-center md:grid-cols-4 md:text-left">
            {/* BRAND / LOGO */}
            <div className="flex flex-col items-center">
              <Link href="/" className="flex flex-col items-center">
                <img
                  src="/ukiyologo.PNG"
                  alt="Ukiyo Virginia logo"
                  className="h-14 sm:h-16 w-auto mx-auto"
                />
                <div className="mt-1 text-center text-[10px] uppercase tracking-[0.32em] text-white/60 whitespace-nowrap">
                  UKIYO VIRGINIA
                </div>
              </Link>
            </div>

            {/* VISIT */}
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em]">
                Visit
              </div>
              <div className="mt-3 space-y-2 text-sm text-white/80">
                <div>4592 George Washington Hwy, Portsmouth, VA</div>
                <div>Saturday & Sunday • 10PM–2AM</div>

                <div>
                  Directions →{" "}
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    Google Maps
                  </a>{" "}
                  <span className="text-white/30">|</span>{" "}
                  <a
                    href={appleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    Apple Maps
                  </a>
                </div>
              </div>
            </div>

            {/* CONNECT */}
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em]">
                Connect
              </div>
              <div className="mt-3 space-y-2 text-sm">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:underline"
                >
                  Instagram
                </a>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:underline"
                >
                  Facebook
                </a>
              </div>
            </div>

            {/* SUBSCRIBE (FIXED CENTERING) */}
            <div className="flex flex-col items-center text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.22em]">
                Subscribe
              </div>

              <p className="mt-3 max-w-[34ch] text-sm text-white/60">
                Stay ahead of the nightlife curve — subscribe for exclusive
                updates.
              </p>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className={[
                  "mt-5 inline-flex h-10 items-center justify-center px-6",
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
          </div>

          {/* BOTTOM BAR */}
          <div className="mt-14 border-t border-white/10 pt-8">
            {/* Legal row */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-white/55 md:justify-end">
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
              <Link href="/accessibility" className="hover:text-white">
                Accessibility
              </Link>
              <Link href="/cookie-settings" className="hover:text-white">
                Cookie Settings
              </Link>
            </div>

            {/* Copyright */}
            <div className="mt-6 text-center text-xs text-white/50 md:mt-3 md:text-left">
              © {new Date().getFullYear()} Ukiyo. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <SubscribeModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
