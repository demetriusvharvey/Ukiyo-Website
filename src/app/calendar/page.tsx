export default function CalendarPage() {
  const months = [
    { name: "January", days: 31 },
    { name: "February", days: 28 },
    { name: "March", days: 31 },
  ];

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <h1 className="text-3xl font-semibold tracking-tight">
            Event Calendar
          </h1>
          <p className="mt-1 text-white/60">
            Upcoming weekends at Ukiyo
          </p>
        </div>
      </header>

      {/* Calendar Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 space-y-20">
        {months.map((month) => (
          <div key={month.name}>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight">
              {month.name}
            </h2>

            <div className="grid grid-cols-7 gap-3 text-center text-sm">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-xs uppercase tracking-widest text-white/40"
                >
                  {day}
                </div>
              ))}

              {Array.from({ length: month.days }).map((_, i) => {
                const dayOfWeek = (i + 1) % 7;
                const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

                return (
                  <div
                    key={i}
                    className={`h-24 rounded-xl border p-2 text-xs transition ${
                      isWeekend
                        ? "border-purple-500/40 bg-white/5 hover:bg-white/10"
                        : "border-white/10 text-white/30"
                    }`}
                  >
                    <div className="text-left text-white/50">
                      {i + 1}
                    </div>

                    {isWeekend && (
                      <div className="mt-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 px-2 py-1 text-[10px] font-semibold">
                        Ukiyo Nights
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
