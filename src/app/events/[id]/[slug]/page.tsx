import Link from "next/link";

type PageProps = {
  params: Promise<{ id?: string; slug?: string }>;
};

export default async function EventPage({ params }: PageProps) {
  // ✅ IMPORTANT: unwrap params (your Next version provides params as a Promise)
  const { id } = await params;

  // ✅ Hard stop if the route didn't receive an ID
  if (!id) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <div className="text-sm text-white/70">Missing event id in the URL.</div>

          <div className="mt-3 text-xs text-white/40">
            This page must be visited like:
            <div className="mt-2 text-white/70 break-words">
              /events/1980809548682/test
            </div>
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
            Missing <span className="text-white">EVENTBRITE_PRIVATE_TOKEN</span> in
            .env.local
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

  // ✅ Use the FULL/ORIGINAL flyer if available (fixes “banner/cropped” look)
  const flyer: string =
    ev?.logo?.original?.url ?? ev?.logo?.url ?? "/hero-reserve.png";

  const eventbriteUrl: string = ev?.url ?? "#";

  const startLocal = ev?.start?.local ? new Date(ev.start.local) : null;
  const endLocal = ev?.end?.local ? new Date(ev.end.local) : null;

  const dateLine =
    startLocal &&
    startLocal.toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "2-digit",
      year: "numeric",
    });

  const startTimeLine =
    startLocal &&
    startLocal.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });

  const endLine =
    endLocal &&
    endLocal.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });

  // ✅ Venue + directions links
  const venueName = "Ukiyo";
  const venueAddress = "4592 George Washington Hwy, Portsmouth, VA 23702";

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    venueAddress
  )}`;

  const appleMapsUrl = `https://maps.apple.com/?address=${encodeURIComponent(
    venueAddress
  )}`;

  // ✅ De-dupe summary vs description (prevents double "Join us..." issues)
  const summaryClean = (summary ?? "").trim();
  const descriptionHtml = (descriptionHtmlRaw ?? "").trim();
  const descriptionLower = descriptionHtml.toLowerCase();

  const shouldShowSummary =
    summaryClean.length > 0 &&
    !(descriptionLower && descriptionLower.includes(summaryClean.toLowerCase()));

  // ✅ Remove duplicate “Join us…” phrase if it repeats
  const dupPhrase =
    "Join us each and every Saturday for the hottest venue in Virginia !";

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

  // ✅ Dress Code (hardcoded as requested)
  const dressCodeText =
    "Upscale and stylish nightlife fashion. We do NOT allow athletic wear, sports jerseys, plain t-shirts, skullies, flat sandals, sneakers and/or flat boots for women. Oversized jackets and bags are prohibited.";

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top: split layout (details left, flyer right) */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-10 md:pt-20 md:pb-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* LEFT: Title + meta + buttons + Event Details */}
          <div className="md:pr-4">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Event
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {title}
            </h1>

            {(dateLine || startTimeLine) ? (
              <p className="mt-5 text-sm text-white/80 md:text-base">
                {dateLine ? dateLine : ""}
                {startTimeLine ? ` • ${startTimeLine}` : ""}
                {endLine ? ` — ${endLine}` : ""}
              </p>
            ) : null}

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={eventbriteUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-white/30 bg-white/10 px-6 py-4 text-xs font-semibold uppercase tracking-[0.35em] transition hover:bg-white/20"
              >
                Tickets
              </a>

              <Link
                href="/reservations"
                className="border border-purple-500 bg-black px-6 py-4 text-xs font-semibold uppercase tracking-[0.35em] transition hover:bg-purple-600"
              >
                Reserve a Table
              </Link>
            </div>

            {/* ✅ Event Details block */}
            <div className="mt-10 border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white/90">
                Event Details:
              </div>

              <ul className="mt-4 space-y-2 text-sm text-white/75 leading-relaxed">
                <li>
                  <span className="text-white/90">- Date:</span>{" "}
                  {dateLine ?? "TBA"}
                </li>
                <li>
                  <span className="text-white/90">- Time:</span>{" "}
                  Doors open at {startTimeLine ?? "TBA"}
                </li>
                <li>
                  <span className="text-white/90">- Location:</span>{" "}
                  {venueName}
                  <span className="ml-2 text-white/60">—</span>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 underline text-white/80 hover:text-white"
                  >
                    Get Directions
                  </a>
                  <span className="mx-2 text-white/40">|</span>
                  <a
                    href={appleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-white/80 hover:text-white"
                  >
                    Apple Maps
                  </a>
                </li>
                <li>
                  <span className="text-white/90">- Age Requirement:</span>{" "}
                  21 and over
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Flyer + Dress Code under it */}
          <div className="md:pl-4 space-y-6">
            {/* Flyer */}
            <div className="border border-white/10 bg-white/5 p-3">
              <img
                src={flyer}
                alt={title}
                className="w-full h-auto object-contain"
                style={{ maxHeight: "78vh" }}
              />
            </div>

            {/* ✅ Dress Code */}
            <div className="border border-white/10 bg-white/5 p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                Dress Code
              </div>

              <p className="mt-4 text-sm text-white/75 leading-relaxed">
                {dressCodeText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom: Description */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        {shouldShowSummary ? (
          <p className="text-white/70 leading-relaxed">{summaryClean}</p>
        ) : null}

        {cleanedDescriptionHtml ? (
          <div
            className="mt-10 prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: cleanedDescriptionHtml }}
          />
        ) : (
          <p className="mt-10 text-white/60">No description available.</p>
        )}

        <div className="mt-14">
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





