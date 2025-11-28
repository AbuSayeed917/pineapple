export function Features() {
  return (
    <section className="relative py-32 lg:py-40 px-8 lg:px-20 bg-gradient-to-b from-white via-luxury-50/30 to-white border-t border-luxury-200/30">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(212,175,55,0.04),transparent_70%)]"></div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-28">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/90 backdrop-blur-sm border border-luxury-200/50 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.12)] transition-all duration-300 mb-8">
            <div className="w-1.5 h-1.5 bg-premium-gold rounded-full"></div>
            <span className="text-[10px] font-bold text-luxury-900 uppercase tracking-[0.16em] leading-none">Why Choose Us</span>
          </div>
          <div className="space-y-6 mb-10">
            <h2 className="text-7xl lg:text-8xl font-black text-luxury-950 tracking-[-0.05em] leading-[0.9] [text-wrap:balance] font-serif">
              Excellence
              <br />
              <span className="bg-gradient-to-br from-premium-gold via-accent-500 to-premium-gold-dark bg-clip-text text-transparent">By Design</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-20 h-1 bg-gradient-to-r from-premium-gold to-accent-500 rounded-full"></div>
            </div>
          </div>
          <p className="text-xl lg:text-2xl text-luxury-600 leading-[1.7] font-light">
            Precision engineering, refined quality, and exceptional outcomes delivered consistently.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <div className="group space-y-10">
            <div className="relative inline-flex px-12 py-8 bg-white border border-luxury-200/60 group-hover:border-premium-gold/50 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] group-hover:shadow-[0_12px_48px_rgba(212,175,55,0.25)] transition-all duration-500 group-hover:-translate-y-2">
              <span className="text-8xl font-black text-luxury-950 group-hover:text-premium-gold-dark leading-none tracking-tighter transition-colors duration-500 font-serif">6-8</span>
              <div className="absolute -top-5 -right-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-premium-gold-light to-accent-100 border border-premium-gold/40 flex items-center justify-center shadow-[0_6px_24px_rgba(212,175,55,0.3)] group-hover:scale-110 transition-transform duration-500">
                <svg className="w-7 h-7 text-premium-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-3xl lg:text-4xl font-black text-luxury-950 mb-5 leading-tight tracking-tight">
                Weeks to Excellence
              </h3>
              <p className="text-base lg:text-lg text-luxury-600 leading-[1.7] font-light">
                Accelerated delivery without compromise. Most projects move from concept to production in 6-8 meticulously crafted weeks.
              </p>
            </div>
          </div>

          <div className="group space-y-10">
            <div className="relative inline-flex px-12 py-8 bg-white border border-luxury-200/60 group-hover:border-premium-gold/50 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] group-hover:shadow-[0_12px_48px_rgba(212,175,55,0.25)] transition-all duration-500 group-hover:-translate-y-2">
              <span className="text-8xl font-black text-luxury-950 group-hover:text-premium-gold-dark leading-none tracking-tighter transition-colors duration-500 font-serif">99.9<span className="text-5xl">%</span></span>
              <div className="absolute -top-5 -right-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-premium-gold-light to-accent-100 border border-premium-gold/40 flex items-center justify-center shadow-[0_6px_24px_rgba(212,175,55,0.3)] group-hover:scale-110 transition-transform duration-500">
                <svg className="w-7 h-7 text-premium-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-3xl lg:text-4xl font-black text-luxury-950 mb-5 leading-tight tracking-tight">
                Premium Reliability
              </h3>
              <p className="text-base lg:text-lg text-luxury-600 leading-[1.7] font-light">
                Production-ready code built to last. We engineer software that's maintainable, performant, and consistently reliable.
              </p>
            </div>
          </div>

          <div className="group space-y-10">
            <div className="relative inline-flex px-12 py-8 bg-white border border-luxury-200/60 group-hover:border-premium-gold/50 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] group-hover:shadow-[0_12px_48px_rgba(212,175,55,0.25)] transition-all duration-500 group-hover:-translate-y-2">
              <span className="text-8xl font-black text-luxury-950 group-hover:text-premium-gold-dark leading-none tracking-tighter transition-colors duration-500 font-serif">150<span className="text-6xl text-premium-gold">+</span></span>
              <div className="absolute -top-5 -right-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-premium-gold-light to-accent-100 border border-premium-gold/40 flex items-center justify-center shadow-[0_6px_24px_rgba(212,175,55,0.3)] group-hover:scale-110 transition-transform duration-500">
                <svg className="w-7 h-7 text-premium-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-3xl lg:text-4xl font-black text-luxury-950 mb-5 leading-tight tracking-tight">
                Projects Delivered
              </h3>
              <p className="text-base lg:text-lg text-luxury-600 leading-[1.7] font-light">
                A portfolio of distinction. You benefit from battle-tested methodologies and refined development processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
