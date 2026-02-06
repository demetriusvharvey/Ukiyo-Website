"use client";

import { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function slugify(text: string) {
  return (text || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function splitDateLabel(dateLabel: string) {
  const parts = (dateLabel || "").split("•").map((s) => s.trim());
  const top = parts[0] || "";
  const bottom = parts.slice(1).join(" • ") || "";
  return { top, bottom };
}

type Props = {
  events: any[];
  currentEventId: string;
};

export default function RelatedEventsCarousel({ events, currentEventId }: Props) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const cards = useMemo(() => {
    const list = Array.isArray(events) ? [...events] : [];

    list.sort((a, b) => {
      const da = new Date(a?.start?.local || 0).getTime();
      const db = new Date(b?.start?.local || 0).getTime();
      return da - db;
    });

    return list
      .map((ev) => {
        const d = new Date(ev?.start?.local);
        const dateLabel = d
          .toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "2-digit",
          })
          .toUpperCase()
          .replace(",", " •");

        const timeLabel = d.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        });

        const title = ev?.name?.text ?? "Event";

        return {
          id: ev?.id,
          slug: slugify(title),
          date: dateLabel,
          time: timeLabel,
          title,
          link: ev?.url ?? "#",
          flyer: ev?.logo?.original?.url ?? ev?.logo?.url ?? null,
        };
      })
      .filter((e) => String(e?.id) !== String(currentEventId)); // ✅ exclude current
  }, [events, currentEventId]);

  if (!cards.length) return null;

  return (
    <div className="mt-12">
      <div className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
  Related Events
</div>

<div className="mt-2 text-center text-2xl sm:text-3xl font-bold text-white">
    YOU MAY ALSO LIKE
  </div>

      <div className="relative overflow-hidden mt-12">
        {/* PREV */}
        <button
          ref={prevRef}
          className="group flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10
            h-9 w-9 sm:h-10 sm:w-10 rounded-full
            bg-black/70 border border-white/15
            transition-colors duration-200
            hover:bg-purple-500 hover:border-purple-500"
          aria-label="Previous"
          type="button"
        >
          <span className="text-white/90 text-lg sm:text-xl leading-none group-hover:text-white">
            ‹
          </span>
        </button>

        {/* NEXT */}
        <button
          ref={nextRef}
          className="group flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10
            h-9 w-9 sm:h-10 sm:w-10 rounded-full
            bg-black/70 border border-white/15
            transition-colors duration-200
            hover:bg-purple-500 hover:border-purple-500"
          aria-label="Next"
          type="button"
        >
          <span className="text-white/90 text-lg sm:text-xl leading-none group-hover:text-white">
            ›
          </span>
        </button>

        <div className="px-12">
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper: any) => {
              swiper.params.navigation = swiper.params.navigation || {};
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            centeredSlides={false}
            rewind={true}
            watchOverflow={true}
            loop={false}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            className="overflow-hidden"
          >
            {cards.map((event: any, idx: number) => {
              const { top, bottom } = splitDateLabel(event?.date || "");
              const href =
                event?.id && event?.slug
                  ? `/events/${event.id}/${event.slug}`
                  : event.link;

              const isInternal = Boolean(event?.id && event?.slug);

              return (
                <SwiperSlide key={`${event?.id ?? "x"}-${idx}`}>
                  <a
                    href={href}
                    target={isInternal ? undefined : "_blank"}
                    rel={isInternal ? undefined : "noreferrer"}
                    className="group block"
                  >
                    <div className="relative bg-black overflow-hidden">
                      <div className="relative aspect-[1/1] w-full bg-black overflow-hidden">
                        {event.flyer ? (
                          <img
                            src={event.flyer}
                            alt={event.title}
                            className="absolute inset-0 h-full w-full object-cover object-center"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-white/40">
                            Event Flyer
                          </div>
                        )}

                        <div className="absolute left-0 bottom-0 bg-black/90 border-t border-white/10 border-r border-white/10 px-3 py-2">
                          <div className="text-[10px] uppercase tracking-widest text-white/80">
                            {top}
                          </div>
                          <div className="text-[12px] font-semibold uppercase tracking-widest">
                            {bottom}
                          </div>
                        </div>
                      </div>

                      <div className="bg-black px-4 py-3 border-t border-white/10">
                        <div className="text-sm font-semibold uppercase tracking-wide line-clamp-1">
                          {event.title}
                        </div>
                        <div className="mt-1 text-[11px] text-white/70">
                          Ukiyo Virginia • {event?.time ? event.time : "10:00 PM"}
                        </div>
                      </div>

                      <div className="relative h-[2px] w-full overflow-hidden bg-purple-500/70">
                        <span className="absolute inset-0 origin-left scale-x-0 bg-black transition-transform duration-500 ease-out group-hover:scale-x-100" />
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
