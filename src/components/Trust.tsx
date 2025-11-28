export function Trust() {
  return (
    <section className="relative py-32 lg:py-40 px-8 lg:px-20 bg-luxury-50/40 border-y border-luxury-200/40 overflow-hidden">
      {/* Architectural grid background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }}></div>

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)]"></div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/90 backdrop-blur-sm border border-luxury-200/60 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.1)] transition-all duration-300 mb-4">
            <div className="w-1.5 h-1.5 bg-premium-gold rounded-full"></div>
            <span className="text-[10px] font-bold text-luxury-900 uppercase tracking-[0.16em] leading-none">Security & Compliance</span>
          </div>
          <div className="space-y-6">
            <h2 className="text-6xl lg:text-7xl font-black text-luxury-950 tracking-[-0.05em] leading-[0.95] [text-wrap:balance] font-serif">
              Enterprise-grade
              <br />
              <span className="bg-gradient-to-br from-premium-gold via-accent-500 to-premium-gold-dark bg-clip-text text-transparent">Security</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-premium-gold to-accent-500 rounded-full mx-auto"></div>
          </div>
          <p className="text-xl lg:text-2xl text-luxury-600 leading-[1.7] mt-10 font-light">
            Trusted by Fortune 500 companies with bank-level security and industry-leading certifications
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { name: "SOC 2 Type II", icon: "shield" },
            { name: "ISO 27001", icon: "certificate" },
            { name: "GDPR Compliant", icon: "lock" },
            { name: "HIPAA Ready", icon: "medical" }
          ].map((cert, index) => (
            <div
              key={index}
              className="group relative p-10 bg-white rounded-3xl border border-luxury-200/60 hover:border-premium-gold/40 transition-all duration-700 hover:shadow-[0_12px_48px_rgba(212,175,55,0.2)] hover:-translate-y-2 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-premium-gold-light to-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-700 shadow-[0_6px_24px_rgba(212,175,55,0.3)]">
                <svg className="w-10 h-10 text-luxury-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-black text-luxury-950 mb-2 tracking-tight">{cert.name}</h3>
              <p className="text-sm text-luxury-500 font-semibold">Certified</p>
            </div>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-12 bg-white rounded-3xl border border-luxury-200/60 hover:border-premium-gold/40 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_48px_rgba(212,175,55,0.2)] transition-all duration-700 hover:-translate-y-2">
            <div className="text-7xl lg:text-8xl font-black text-luxury-950 group-hover:text-premium-gold-dark leading-none mb-6 tracking-tighter transition-colors duration-700 font-serif">
              99.99<span className="text-5xl text-premium-gold">%</span>
            </div>
            <div className="text-base font-bold text-luxury-950 mb-2 tracking-tight">Uptime SLA</div>
            <p className="text-sm text-luxury-500">Guaranteed availability</p>
          </div>

          <div className="group p-12 bg-white rounded-3xl border border-luxury-200/60 hover:border-premium-gold/40 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_48px_rgba(212,175,55,0.2)] transition-all duration-700 hover:-translate-y-2">
            <div className="text-7xl lg:text-8xl font-black text-luxury-950 group-hover:text-premium-gold-dark leading-none mb-6 tracking-tighter transition-colors duration-700 font-serif">
              24<span className="text-6xl text-luxury-600">/</span>7
            </div>
            <div className="text-base font-bold text-luxury-950 mb-2 tracking-tight">Support</div>
            <p className="text-sm text-luxury-500">Enterprise support team</p>
          </div>

          <div className="group p-12 bg-white rounded-3xl border border-luxury-200/60 hover:border-premium-gold/40 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_48px_rgba(212,175,55,0.2)] transition-all duration-700 hover:-translate-y-2">
            <div className="text-7xl lg:text-8xl font-black text-luxury-950 group-hover:text-premium-gold-dark leading-none mb-6 tracking-tighter transition-colors duration-700 font-serif">
              256<span className="text-4xl text-premium-gold">-bit</span>
            </div>
            <div className="text-base font-bold text-luxury-950 mb-2 tracking-tight">Encryption</div>
            <p className="text-sm text-luxury-500">Military-grade security</p>
          </div>
        </div>
      </div>
    </section>
  );
}
