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
  const descriptionHtml: string = ev?.description?.html ?? "";
  const flyer: string = ev?.logo?.url ?? "/hero-reserve.png";
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
      hour: "numeric",
      minute: "2-digit",
    });

  const endLine =
    endLocal &&
    endLocal.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative w-full overflow-hidden">
        <img
          src={flyer}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B10]/90 via-[#0A1220]/75 to-black" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-24">
          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Event
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h1>

          {dateLine ? (
            <p className="mt-5 text-sm text-white/80 md:text-base">
              {dateLine}
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
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        {summary ? (
          <p className="text-white/70 leading-relaxed">{summary}</p>
        ) : null}

        {descriptionHtml ? (
          <div
            className="mt-10 prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
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
