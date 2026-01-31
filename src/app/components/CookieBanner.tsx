"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "ukiyo_cookie_consent"; // "accepted" | "rejected"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-white/10 bg-black/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/80">
          We use cookies to enhance your experience and analyze site traffic.{" "}
          <Link href="/cookies" className="underline hover:text-white">
            Learn more
          </Link>
          .
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={reject}
            className="bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white/20"
          >
            Reject
          </button>

          <button
            onClick={accept}
            className="bg-purple-600 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-purple-500"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
