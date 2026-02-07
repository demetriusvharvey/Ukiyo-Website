import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ eventId: string }> }
) {
  const token = process.env.EVENTBRITE_PRIVATE_TOKEN;
  if (!token) {
    return NextResponse.json(
      { ok: false, error: "Missing EVENTBRITE_PRIVATE_TOKEN" },
      { status: 500 }
    );
  }

  const { eventId } = await ctx.params;

  const url = `https://www.eventbriteapi.com/v3/events/${eventId}/ticket_classes/`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return NextResponse.json(
      { ok: false, error: `Eventbrite ticket_classes failed (${res.status})`, detail: text },
      { status: 500 }
    );
  }

  const data = await res.json();

  const tickets = (Array.isArray(data?.ticket_classes) ? data.ticket_classes : [])
    .filter((t: any) => !t?.hidden)
    .map((t: any) => {
      const cost = t?.cost;
      const currency = cost?.currency || "USD";
      const value = typeof cost?.value === "number" ? cost.value : null;

      const price =
        value === null
          ? t?.is_free
            ? "Free"
            : "—"
          : new Intl.NumberFormat("en-US", {
              style: "currency",
              currency,
            }).format(value / 100);

      const quantity_total =
        typeof t?.quantity_total === "number" ? t.quantity_total : null;

      const quantity_sold =
        typeof t?.quantity_sold === "number" ? t.quantity_sold : null;

      const remaining =
        typeof quantity_total === "number" && typeof quantity_sold === "number"
          ? Math.max(0, quantity_total - quantity_sold)
          : null;

      return {
        id: t?.id,
        name: t?.name,
        price,
        currency,
        is_free: !!t?.is_free,
        sales_status: t?.sales_status,
        remaining,

        // ✅ Added for REAL sold % calculations
        quantity_total,
        quantity_sold,
      };
    });

  return NextResponse.json({ ok: true, eventId, tickets });
}
