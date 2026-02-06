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
          {/* LIV-style column sizing */}
          <div className="grid items-start gap-10 text-center md:grid-cols-[180px_1.1fr_0.75fr_0.75fr_1.4fr] md:text-left">
            {/* BRAND */}
            <div className="flex flex-col items-center md:items-start">
              <Link href="/" className="flex flex-col items-center md:items-start">
                <img
                  src="/ukiyologo.PNG"
                  alt="Ukiyo Virginia logo"
                  className="h-14 sm:h-16 w-auto"
                />
                <div className="mt-1 text-[10px] uppercase tracking-[0.32em] text-white/60 whitespace-nowrap">
                  UKIYO VIRGINIA
                </div>
              </Link>
            </div>

            {/* VISIT */}
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em]">
                Visit
              </div>
              <div className="mt-4 space-y-2 text-sm text-white/80">
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
              <div className="mt-4 space-y-2 text-sm">
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

            {/* LEARN MORE (now closer to Connect) */}
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em]">
                Learn More
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <Link href="/venue" className="block hover:underline">
                  Venue
                </Link>
              </div>
            </div>

            {/* SUBSCRIBE */}
            <div className="flex flex-col items-center md:items-start md:text-left">
              <div className="text-sm font-semibold uppercase tracking-[0.22em]">
                Subscribe
              </div>

              <p className="mt-4 max-w-[42ch] text-sm text-white/60">
                Stay ahead of the nightlife curve — subscribe for exclusive
                updates.
              </p>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className={[
                  "mt-6 inline-flex h-12 items-center justify-center px-12",
                  "bg-transparent text-white",
                  "border-2 border-purple-500",
                  "text-xs font-semibold uppercase tracking-[0.3em]",
                  "transition-all duration-300",
                  "shadow-[0_0_12px_rgba(168,85,247,0.4)]",
                  "hover:bg-purple-600",
                  "hover:shadow-[0_0_36px_rgba(168,85,247,1),inset_0_0_14px_rgba(255,255,255,0.18)]",
                ].join(" ")}
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="mt-16 border-t border-white/10 pt-8">
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
