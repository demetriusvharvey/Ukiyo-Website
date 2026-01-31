import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.EVENTBRITE_PRIVATE_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "Missing EVENTBRITE_PRIVATE_TOKEN" },
      { status: 500 }
    );
  }

  const ORG_ID = "252110687260";
  const UKIYO_KEYWORD = "ukiyo";

  const url =
    `https://www.eventbriteapi.com/v3/organizations/${ORG_ID}/events/` +
    `?status=live,started&order_by=start_asc`;

  const r = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  const data = await r.json();

  // ✅ FILTER SERVER-SIDE
  const events = Array.isArray(data?.events) ? data.events : [];

  const filteredEvents = events.filter((e: any) => {
    const title = (e?.name?.text ?? "").toLowerCase();
    const summary = (e?.summary ?? "").toLowerCase();
    return title.includes(UKIYO_KEYWORD) || summary.includes(UKIYO_KEYWORD);
  });

  return NextResponse.json(
    { ...data, events: filteredEvents },
    { status: r.ok ? 200 : r.status }
  );
}

