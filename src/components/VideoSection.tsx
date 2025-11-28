export function VideoSection() {
  return (
    <section className="py-32 px-8 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-semibold text-white">See It In Action</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              Watch How We
              <span className="block mt-2 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Transform Ideas
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              See our process in action. From discovery to deployment, we maintain transparency and collaboration every step of the way.
            </p>

            <div className="space-y-4 pt-4">
              {[
                { label: "Discovery & Planning", time: "Week 1-2" },
                { label: "Design & Prototyping", time: "Week 3-4" },
                { label: "Development & Testing", time: "Week 5-10" },
                { label: "Launch & Support", time: "Ongoing" }
              ].map((phase, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-white font-medium">{phase.label}</span>
                    <span className="text-gray-400 text-sm">{phase.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video placeholder */}
          <div className="relative group">
            <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
              {/* Simulated video thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20"></div>

              {/* Grid overlay for design effect */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

              {/* Centered play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <svg className="w-8 h-8 text-amber-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* Mock UI elements */}
              <div className="absolute inset-8 border-2 border-white/10 rounded-lg"></div>
              <div className="absolute top-12 left-12 right-12 space-y-3">
                <div className="h-3 bg-white/10 rounded-full w-1/2"></div>
                <div className="h-3 bg-white/10 rounded-full w-1/3"></div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl opacity-50 blur-2xl group-hover:opacity-70 transition-opacity"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl opacity-50 blur-2xl group-hover:opacity-70 transition-opacity"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
