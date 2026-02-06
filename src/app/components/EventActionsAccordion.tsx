"use client";

import { useState } from "react";
import Link from "next/link";

type ActionItem = {
  key: string;
  label: string;
  href: string;
  icon?: string;
};

export default function EventActionsAccordion({ actions }: { actions: ActionItem[] }) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="rounded-sm border border-white/10 bg-white/[0.04] overflow-hidden">
      {actions.map((item, idx) => {
        const isExternal = item.href.startsWith("http");
        const isOpen = openKey === item.key;

        const rowClasses = `flex items-center justify-between px-5 py-4 ${
          idx !== 0 ? "border-t border-white/10" : ""
        }`;

        const labelNode = (
          <span className="text-sm font-semibold text-white/90 flex items-center gap-2">
            <span className="text-base leading-none">{item.icon ?? ""}</span>
            {item.label}
          </span>
        );

        // ✅ Treat ALL items as dropdown toggles
        return (
          <div key={item.key}>
            <button
              type="button"
              onClick={() => setOpenKey((v) => (v === item.key ? null : item.key))}
              className="w-full text-left hover:bg-white/[0.06] transition"
            >
              <div className={rowClasses}>
                {labelNode}
                <span
                  className={`text-white/60 transition-transform duration-200 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                >
                  ›
                </span>
              </div>
            </button>

            {isOpen && (
              <div className="border-t border-white/10 px-5 py-4 bg-white/[0.02]">
                <div className="text-xs uppercase tracking-[0.28em] text-white/60">
                  {item.label}
                </div>

                {/* Tickets: keep the widget placeholder + link */}
                {item.key === "tickets" ? (
                  <>
                    <div className="mt-3 text-sm text-white/70">
                      Checkout widget will go here.
                    </div>

                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block text-sm text-white/80 underline underline-offset-4 hover:text-white transition"
                    >
                      Open Eventbrite Checkout
                    </a>
                  </>
                ) : (
                  <>
                    {/* Tables: show a reserve link (same destination you already use) */}
                    {isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-block text-sm text-white/80 underline underline-offset-4 hover:text-white transition"
                      >
                        Reserve {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="mt-4 inline-block text-sm text-white/80 underline underline-offset-4 hover:text-white transition"
                      >
                        Reserve {item.label}
                      </Link>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
