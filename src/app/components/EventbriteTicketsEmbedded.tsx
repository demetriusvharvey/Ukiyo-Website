"use client";

import { useEffect, useMemo, useState } from "react";

type TicketRow = {
  id: string;
  name: string;
  price: string;
  sales_status?: string;
  remaining: number | null;

  quantity_total: number | null;
  quantity_sold: number | null;
};

declare global {
  interface Window {
    EBWidgets?: any;
  }
}

function isDisabled(t: TicketRow) {
  const s = (t.sales_status || "").toLowerCase();
  if (s.includes("sold") || s.includes("ended") || s.includes("unavailable")) return true;
  if (typeof t.remaining === "number" && t.remaining <= 0) return true;
  return false;
}

function availabilityLabel(t: TicketRow) {
  if (typeof t.remaining === "number") {
    if (t.remaining <= 0) return "Sold Out";
    if (t.remaining <= 10) return "Almost Sold Out";
    if (t.remaining <= 25) return "Limited Availability";
  }

  const s = (t.sales_status || "").toLowerCase();
  if (s.includes("sold")) return "Sold Out";
  if (s.includes("ended")) return "Sales Ended";
  if (s.includes("unavailable")) return "Unavailable";
  return "Available";
}

function availabilityClasses(label: string) {
  if (label === "Sold Out") return "text-red-400";
  if (label === "Almost Sold Out") return "text-amber-400 font-semibold";
  if (label === "Limited Availability") return "text-yellow-300";
  if (label === "Sales Ended" || label === "Unavailable") return "text-white/50";
  return "text-white/60";
}

// ✅ REAL sold% across all tickets with totals, showing at 60%+, snapping to 5%
function soldOutBadgeText(tickets: TicketRow[]) {
  let total = 0;
  let sold = 0;

  for (const t of tickets) {
    if (typeof t.quantity_total === "number" && typeof t.quantity_sold === "number") {
      if (t.quantity_total > 0) {
        total += t.quantity_total;
        sold += t.quantity_sold;
      }
    }
  }

  if (total <= 0) return "";

  const pctRaw = Math.round((sold / total) * 100);
  if (pctRaw < 60) return "";

  const snapped = Math.min(100, Math.floor(pctRaw / 5) * 5);
  return `${snapped}% SOLD OUT`;
}

export default function EventbriteTicketsEmbedded({ eventId }: { eventId: string }) {
  const [tickets, setTickets] = useState<TicketRow[]>([]);
  const [loadingTickets, setLoadingTickets] = useState(true);

  const [widgetReady, setWidgetReady] = useState(false);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  // ✅ Eventbrite requires HTTPS for embedded checkout (modal or inline)
  const canEmbed =
    typeof window !== "undefined" && window.location && window.location.protocol === "https:";

  const modalTriggerId = useMemo(
    () => `eventbrite-widget-modal-trigger-${eventId}`,
    [eventId]
  );

  // Fetch ticket classes (prices)
  useEffect(() => {
    let alive = true;

    async function loadTickets() {
      setLoadingTickets(true);
      try {
        const res = await fetch(`/api/eventbrite/tickets/${eventId}`, { cache: "no-store" });
        const data = await res.json();
        if (!alive) return;
        setTickets(Array.isArray(data?.tickets) ? data.tickets : []);
      } catch {
        if (!alive) return;
        setTickets([]);
      } finally {
        if (!alive) return;
        setLoadingTickets(false);
      }
    }

    if (eventId) loadTickets();

    return () => {
      alive = false;
    };
  }, [eventId]);

  // Load Eventbrite widget script once (only if we can embed)
  useEffect(() => {
    if (!canEmbed) return;

    if (window.EBWidgets) {
      setWidgetReady(true);
      return;
    }

    const existing = document.querySelector('script[data-eb="widgets"]') as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => setWidgetReady(true));
      return;
    }

    const s = document.createElement("script");
    s.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
    s.async = true;
    s.setAttribute("data-eb", "widgets");
    s.onload = () => setWidgetReady(true);
    document.body.appendChild(s);
  }, [canEmbed]);

  // ✅ Create MODAL checkout widget (LIV-style popout)
  useEffect(() => {
    if (!canEmbed) return;
    if (!widgetReady) return;
    if (!eventId) return;
    if (widgetLoaded) return;

    const trigger = document.getElementById(modalTriggerId);
    if (!trigger) return;

    try {
      window.EBWidgets?.createWidget({
        widgetType: "checkout",
        eventId,
        modal: true,
        modalTriggerElementId: modalTriggerId,
        onOrderComplete: () => {},
      });

      setWidgetLoaded(true);
    } catch {
      // If modal fails (settings), fallback link will still work
    }
  }, [canEmbed, widgetReady, widgetLoaded, eventId, modalTriggerId]);

  const hasTickets = tickets.length > 0;
  const eventbriteFallbackUrl = `https://www.eventbrite.com/e/${eventId}`;

  // ✅ Badge for Tickets tab
  const badgeText = useMemo(() => soldOutBadgeText(tickets), [tickets]);

  function openModal() {
    const trigger = document.getElementById(modalTriggerId) as HTMLButtonElement | null;
    if (!trigger) return;
    trigger.click();
  }

  return (
    <div>
      {/* ✅ Expose badge for the Tickets tab */}
      <div data-ukiyo-tickets-badge={badgeText} className="hidden" aria-hidden="true" />

      {/* ✅ hidden trigger button (Eventbrite binds modal to this) */}
      {canEmbed ? (
        <button id={modalTriggerId} type="button" className="hidden" aria-hidden="true">
          Open Checkout
        </button>
      ) : null}

      {loadingTickets ? (
        <div className="text-sm text-white/60">Loading tickets…</div>
      ) : !hasTickets ? (
        <div className="text-sm text-white/60">No ticket options found for this event.</div>
      ) : (
        <div className="space-y-2">
          <div className="flex items-center justify-end">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
              Admission Fee
            </div>
          </div>

          {tickets.map((t) => {
            const disabled = isDisabled(t);
            const label = availabilityLabel(t);

            return (
              <div
                key={t.id}
                className="flex items-center justify-between gap-3 rounded-sm border border-white/10 bg-black/25 px-3 py-2"
              >
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-white">{t.name}</div>

                  <div className="mt-0.5 flex items-center gap-2 text-xs">
                    <span className={availabilityClasses(label)}>{label}</span>

                    {typeof t.remaining === "number" ? (
                      <>
                        <span className="text-white/25">•</span>
                        <span className="text-white/55">
                          {t.remaining <= 10 ? `${t.remaining} left` : "Selling fast"}
                        </span>
                      </>
                    ) : null}
                  </div>
                </div>

                {/* ✅ MOBILE FIX: stack price + Book so it never clips */}
                <div className="flex flex-col items-end gap-2 sm:flex-row sm:items-center sm:gap-3">
                  <div className="text-sm font-semibold text-white sm:order-1 order-0">
                    {t.price}
                  </div>

                  {canEmbed ? (
                    <button
                      type="button"
                      onClick={() => {
                        if (disabled) return;
                        openModal(); // ✅ POP OUT like LIV
                      }}
                      className={[
                        "inline-flex w-full sm:w-auto items-center justify-center rounded-sm px-3 py-1.5 text-xs font-semibold",
                        "transition-colors",
                        disabled
                          ? "cursor-not-allowed bg-white/10 text-white/40"
                          : "bg-white/10 text-white hover:bg-fuchsia-600",
                      ].join(" ")}
                      aria-disabled={disabled}
                    >
                      Book
                    </button>
                  ) : (
                    <a
                      href={eventbriteFallbackUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={[
                        "inline-flex w-full sm:w-auto items-center justify-center rounded-sm px-3 py-1.5 text-xs font-semibold",
                        "transition-colors",
                        disabled
                          ? "pointer-events-none bg-white/10 text-white/40"
                          : "bg-white/10 text-white hover:bg-fuchsia-600",
                      ].join(" ")}
                      aria-disabled={disabled}
                    >
                      Book
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!canEmbed ? (
        <div className="mt-3 text-[11px] text-white/50">
          Embedded checkout requires HTTPS. In production (Vercel), the popout checkout will load.
        </div>
      ) : null}
    </div>
  );
}
