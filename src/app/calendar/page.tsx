export default function CalendarPage() {
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
    <main className="min-h-screen bg-zinc-900 text-white">
      {/* ================= HEADER ================= */}
      <header className="border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <h1 className="text-3xl font-semibold tracking-tight">
            Event Calendar
          </h1>
          <p className="mt-1 text-white/60">
            Saturdays & Sundays • Upcoming Events
          </p>
        </div>
      </header>

      {/* ================= CALENDAR ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 space-y-28">
        {months.map((month) => (
          <div key={`${month.name}-${month.year}`}>
            <h2 className="mb-10 text-2xl font-semibold tracking-tight">
              {month.name} {month.year}
            </h2>

            {/* Weekend rows */}
            <div className="space-y-16">
              {month.weekends.map((week, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 gap-10 md:grid-cols-2"
                >
                  {/* ================= SATURDAY ================= */}
                  {week.saturday && (
                    <div className="border border-purple-500/40 bg-white/5 transition hover:bg-white/10">
                      {/* Flyer */}
                      <div className="aspect-square bg-white/10 flex items-center justify-center text-sm uppercase tracking-widest text-white/40">
                        Event Flyer
                      </div>

                      {/* Date */}
                      <div className="p-6 text-center">
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
                  )}

                  {/* ================= SUNDAY ================= */}
                  {week.sunday && (
                    <div className="border border-blue-500/30 bg-white/5 transition hover:bg-white/10">
                      {/* Flyer */}
                      <div className="aspect-square bg-white/10 flex items-center justify-center text-sm uppercase tracking-widest text-white/40">
                        Event Flyer
                      </div>

                      {/* Date */}
                      <div className="p-6 text-center">
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
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}






