import Link from "next/link";
import EventActionsAccordion from "@/app/components/EventActionsAccordion";

type PageProps = {
  params: Promise<{ id?: string; slug?: string }>;
};

function fmtDateLong(d: Date) {
  return d.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
}

function fmtTime(d: Date) {
  return d.toLocaleString("en-US", { hour: "numeric", minute: "2-digit" });
}

export default async function EventPage({ params }: PageProps) {
  const { id } = await params;

  if (!id) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <div className="text-sm text-white/70">Missing event id in the URL.</div>
          <div className="mt-3 text-xs text-white/40">
            This page must be visited like:
            <div className="mt-2 text-white/70 break-words">/events/1980809548682/test</div>
          </div>
          <Link
            href="/"
            className="mt-6 inline-block border border-white/30 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] transition hover:bg-white/20"
          >
            Back Home
          </Link>
        </div>
      </main>
    );
  }

  const token = process.env.EVENTBRITE_PRIVATE_TOKEN;

  if (!token) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center">
          <div className="text-sm text-white/70">
            Missing <span className="text-white">EVENTBRITE_PRIVATE_TOKEN</span> in .env.local
          </div>
          <Link
            href="/"
            className="mt-6 inline-block border border-white/30 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] transition hover:bg-white/20"
          >
            Back Home
          </Link>
        </div>
      </main>
    );
  }

  const eventUrl = `https://www.eventbriteapi.com/v3/events/${id}/`;

  const res = await fetch(eventUrl, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <div className="text-sm text-white/70">Failed to load event</div>
          <div className="mt-2 text-xs text-white/40 break-words">{text}</div>
          <div className="mt-4 text-xs text-white/50">
            Tried: <span className="text-white/70">{eventUrl}</span>
          </div>
          <Link
            href="/"
            className="mt-6 inline-block border border-white/30 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] transition hover:bg-white/20"
          >
            Back Home
          </Link>
        </div>
      </main>
    );
  }

  const ev = await res.json();

  const title: string = ev?.name?.text ?? "Event";
  const summary: string = ev?.summary ?? "";
  const descriptionHtmlRaw: string = ev?.description?.html ?? "";

  const flyer: string = ev?.logo?.original?.url ?? ev?.logo?.url ?? "/hero-reserve.png";
  const eventbriteUrl: string = ev?.url ?? "#";

  const startLocal = ev?.start?.local ? new Date(ev.start.local) : null;
  const endLocal = ev?.end?.local ? new Date(ev.end.local) : null;

  const dateLine = startLocal ? fmtDateLong(startLocal) : null;
  const startTimeLine = startLocal ? fmtTime(startLocal) : null;
  const endLine = endLocal ? fmtTime(endLocal) : null;

  const venueName = "Ukiyo";
  const venueAddress = "4592 George Washington Hwy, Portsmouth, VA 23702";

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    venueAddress
  )}`;

  const appleMapsUrl =
    "https://maps.apple.com/directions?destination=Ukiyo+Va%2C+4592+George+Washington+Hwy+Portsmouth%2C+VA++23702+United+States&destination-place-id=IC1D4D0DD38EE3658&mode=driving";

  const summaryClean = (summary ?? "").trim();
  const descriptionHtml = (descriptionHtmlRaw ?? "").trim();
  const descriptionLower = descriptionHtml.toLowerCase();

  const shouldShowSummary =
    summaryClean.length > 0 &&
    !(descriptionLower && descriptionLower.includes(summaryClean.toLowerCase()));

  const dupPhrase = "Join us each and every Saturday for the hottest venue in Virginia !";

  function dedupePhrase(html: string, phrase: string) {
    if (!html || !phrase) return html;
    const lower = html.toLowerCase();
    const pLower = phrase.toLowerCase();
    const first = lower.indexOf(pLower);
    if (first === -1) return html;
    const second = lower.indexOf(pLower, first + pLower.length);
    if (second === -1) return html;
    return html.slice(0, second) + html.slice(second + phrase.length);
  }

  const cleanedDescriptionHtml = dedupePhrase(descriptionHtml, dupPhrase);

  const dressCodeText =
    "Upscale and stylish nightlife fashion. We do NOT allow athletic wear, sports jerseys, plain t-shirts, skullies, flat sandals, sneakers and/or flat boots for women. Oversized jackets and bags are prohibited.";

  const actions = [
  { key: "tickets", label: "Tickets", icon: "🎟️", href: eventbriteUrl },
  { key: "mezz", label: "Mezzanine Tables", icon: "🍾", href: "/reservations" },
  { key: "main", label: "Main Floor Tables", icon: "🪩", href: "/reservations" },
  { key: "dance", label: "Dance Floor Tables", icon: "💃", href: "/reservations" },
  { key: "stage", label: "Stage Tables", icon: "🎤", href: "/reservations" },
];


  return (
    <main className="min-h-screen bg-black text-white">
      {/* =========================
          HERO (LIV-style)
          - Sharp/dark background
          - Blur only on the far-right
          - Flyer clearly visible
         ========================= */}
      <section className="relative w-full overflow-hidden">
        {/* Base background (NOT blurred) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${flyer})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.45,
          }}
        />

        {/* LIV-style right-side blur strip */}
        <div
          className="absolute inset-y-0 right-0 w-[42%] hidden md:block"
          style={{
            backgroundImage: `url(${flyer})`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
            filter: "blur(16px)",
            transform: "scale(1.15)",
            opacity: 0.9,
          }}
        />

        {/* Dark overlays (keep it readable like LIV) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/40" />
        <div className="absolute inset-0 bg-black/35" />

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-16">
          <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-center">
            {/* Left text */}
            <div className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                Event
              </div>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                {title}
              </h1>

              {dateLine || startTimeLine ? (
                <p className="mt-5 text-sm text-white/80 md:text-base">
                  {dateLine ? dateLine : ""}
                  {startTimeLine ? ` • ${startTimeLine}` : ""}
                  {endLine ? ` — ${endLine}` : ""}
                  <span className="mx-2 text-white/40">•</span>
                  <span className="text-white/70">Ages 21 &amp; over</span>
                </p>
              ) : null}
            </div>

            {/* Right flyer in hero (like LIV) */}
            <div className="hidden md:flex justify-end">
              <div className="w-[320px]">
                <div className="rounded-sm border border-white/10 bg-black/30 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                  <img
                    src={flyer}
                    alt={title}
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: "360px" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile flyer under the hero text */}
          <div className="mt-10 md:hidden">
            <div className="rounded-sm border border-white/10 bg-black/30 p-3">
              <img
                src={flyer}
                alt={title}
                className="w-full h-auto object-contain"
                style={{ maxHeight: "420px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          BODY (LIV-style split)
         ========================= */}
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          {/* LEFT: Action list */}
          <div>
            {/* ✅ Dropdown for Tickets (widget placeholder inside) */}
            <EventActionsAccordion actions={actions} />

            {/* Event info snippet */}
            <div className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                Event Info
              </div>
              <div className="mt-2 text-sm text-white/70">{dateLine ? dateLine : "TBA"}</div>
            </div>
          </div>

          {/* RIGHT: Flyer + info panel */}
          <div className="space-y-5">
            {/* ✅ Keep only ONE flyer on mobile (hide this duplicate on mobile) */}
            <div className="hidden md:block rounded-sm border border-white/10 bg-white/[0.04] p-3">
              <img
                src={flyer}
                alt={title}
                className="w-full h-auto object-contain"
                style={{ maxHeight: "520px" }}
              />
            </div>

            <div className="rounded-sm border border-white/10 bg-white/[0.04] p-5">
              {/* ✅ Only Facebook icon, link to your FB page */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-white/70">
                  <a
                    className="text-sm hover:text-white transition"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/UkiyoVa"
                    aria-label="Ukiyo Facebook"
                  >
                    f
                  </a>
                </div>
              </div>

              <div className="my-4 h-px bg-white/10" />

              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                Date and Time
              </div>
              <div className="mt-2 text-sm text-white/80">
                {dateLine ? dateLine : "TBA"}
                {startTimeLine ? ` at ${startTimeLine}` : ""}
              </div>

              <div className="my-4 h-px bg-white/10" />

              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                Get Directions
              </div>

              <div className="mt-2 text-sm text-white/85">
                <div className="font-semibold">{venueName}</div>
                <div className="mt-1 text-white/65 text-sm">{venueAddress}</div>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/80 underline underline-offset-4 hover:text-white transition"
                  >
                    Google Maps
                  </a>
                  <span className="text-white/30">|</span>
                  <a
                    href={appleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/80 underline underline-offset-4 hover:text-white transition"
                  >
                    Apple Maps
                  </a>
                </div>
              </div>

              <div className="my-4 h-px bg-white/10" />

              <div className="flex items-center justify-between">
                <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                  Dress Code
                </div>
              </div>

              <p className="mt-3 text-sm text-white/70 leading-relaxed" id="dress-code">
                {dressCodeText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          DESCRIPTION
         ========================= */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        {shouldShowSummary ? <p className="text-white/70 leading-relaxed">{summaryClean}</p> : null}

        {cleanedDescriptionHtml ? (
          <div
            className="mt-8 prose prose-invert max-w-none prose-p:text-white/70 prose-li:text-white/70"
            dangerouslySetInnerHTML={{ __html: cleanedDescriptionHtml }}
          />
        ) : null}

        <div className="mt-12">
          <Link
            href="/"
            className="inline-block border border-white/30 bg-white/10 px-6 py-4 text-xs font-semibold uppercase tracking-[0.35em] transition hover:bg-white/20"
          >
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}
