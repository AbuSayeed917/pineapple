export function Stats() {
  const stats = [
    {
      value: "150+",
      label: "Missions Complete",
      description: "Deployed across 20+ star systems",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      color: "text-onyx-primary"
    },
    {
      value: "98%",
      label: "Success Rate",
      description: "Based on encrypted logs",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "text-onyx-secondary"
    },
    {
      value: "10+",
      label: "Years Data",
      description: "Building galaxy-class software",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "text-purple-400"
    },
    {
      value: "50+",
      label: "Operatives",
      description: "Designers, engineers, & pilots",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "text-white"
    }
  ];

  return (
    <section className="py-32 px-8 bg-onyx-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="relative p-8 bg-onyx-surface/30 rounded-lg border border-white/10 hover:border-onyx-primary transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm">
                <div>
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-lg bg-onyx-black/50 border border-white/5 ${stat.color} mb-6 transition-shadow`}>
                    {stat.icon}
                  </div>

                  {/* Value */}
                  <div className={`text-5xl font-black mb-3 text-white font-display`}>
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-xl font-bold text-onyx-primary mb-2 font-mono">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-sm text-onyx-dim font-mono">
                    {stat.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
