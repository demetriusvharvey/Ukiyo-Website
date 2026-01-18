"use client";

export default function CalendarPage() {
  const HERO_BG = "/hero-events.png";

  const getWeekendsForMonth = (year: number, month: number) => {
    const weekends: { saturday?: Date; sunday?: Date }[] = [];
    let currentWeek: { saturday?: Date; sunday?: Date } = {};

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dayOfWeek = date.getDay();

      if (dayOfWeek === 6) currentWeek.saturday = date;
      if (dayOfWeek === 0) {
        currentWeek.sunday = date;
        weekends.push(currentWeek);
        currentWeek = {};
      }
    }

    if (currentWeek.saturday) weekends.push(currentWeek);
    return weekends;
  };

  const today = new Date();
  const months = Array.from({ length: 3 }).map((_, i) => {
    const date = new Date(today.getFullYear(), today.getMonth() + i, 1);
    return {
      name: date.toLocaleString("en-US", { month: "long" }),
      year: date.getFullYear(),
      month: date.getMonth(),
      weekends: getWeekendsForMonth(date.getFullYear(), date.getMonth()),
    };
  });

  return (
    <div className="w-full">
      {/* ================= HERO ================= */}
      <section className="relative w-full overflow-hidden">
        <img
          src={HERO_BG}
          alt="Ukiyo Event Calendar"
          className="absolute inset-0 h-full w-full object-cover object-bottom"
        />

        {/* Hero overlay color (your tone) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B10]/90 via-[#0A1220]/75 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-24 text-center text-white">
          <h1 className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Events
          </h1>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-4xl">
            Event Calendar
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            Saturdays & Sundays • Upcoming Events
          </p>
        </div>
      </section>

      {/* ================= CARDS BACKGROUND (FULL PAGE) ================= */}
      <section className="w-full min-h-screen bg-[#070B10]">
        {/* subtle depth like your reference */}
        <div className="pointer-events-none absolute inset-x-0 -mt-24 h-24 bg-gradient-to-b from-transparent to-[#070B10]" />

        <div className="flex w-full flex-col items-center px-6 py-16 space-y-28 pb-28 text-white">
          {months.map((month) => (
            <div key={`${month.name}-${month.year}`} className="w-full max-w-5xl">
              <h2 className="mb-10 text-2xl font-semibold tracking-tight text-center">
                {month.name} {month.year}
              </h2>

              <div className="space-y-16">
                {month.weekends.map((week, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:justify-center md:gap-10 gap-6"
                  >
                    {/* SATURDAY */}
                    {week.saturday && (
                      <div className="group transition hover:brightness-105 w-full md:w-64">
                        <div className="border border-purple-500/40 bg-white/5 transition hover:bg-white/10 w-full">
                          <div className="aspect-square bg-white/10 flex items-center justify-center text-sm uppercase tracking-widest text-white/40">
                            Event Flyer
                          </div>

                          <div className="p-4 text-center">
                            <div className="text-2xl font-bold uppercase tracking-widest text-purple-400">
                              {week.saturday.toLocaleDateString("en-US", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                              })}
                            </div>
                            <div className="mt-2 text-sm text-white/70">
                              Ukiyo Saturdays • 10PM
                            </div>
                          </div>
                        </div>

                        {/* Glowing purple line under event (wipes out left -> right on hover) */}
                        <div className="relative h-[2px] w-full overflow-hidden bg-purple-500/70 shadow-[0_0_18px_rgba(168,85,247,0.95)]">
                          <span className="absolute inset-0 origin-left scale-x-0 bg-[#070B10] transition-transform duration-500 ease-out group-hover:scale-x-100" />
                        </div>
                      </div>
                    )}

                    {/* SUNDAY */}
                    {week.sunday && (
                      <div className="group transition hover:brightness-105 w-full md:w-64">
                        <div className="border border-blue-500/30 bg-white/5 transition hover:bg-white/10 w-full">
                          <div className="aspect-square bg-white/10 flex items-center justify-center text-sm uppercase tracking-widest text-white/40">
                            Event Flyer
                          </div>

                          <div className="p-4 text-center">
                            <div className="text-2xl font-bold uppercase tracking-widest text-blue-400">
                              {week.sunday.toLocaleDateString("en-US", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                              })}
                            </div>
                            <div className="mt-2 text-sm text-white/70">
                              Sunday Vibes • 9PM
                            </div>
                          </div>
                        </div>

                        {/* Same wipe animation */}
                        <div className="relative h-[2px] w-full overflow-hidden bg-purple-500/70 shadow-[0_0_18px_rgba(168,85,247,0.95)]">
                          <span className="absolute inset-0 origin-left scale-x-0 bg-[#070B10] transition-transform duration-500 ease-out group-hover:scale-x-100" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}



