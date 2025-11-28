export function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "Deep-dive workshops to understand your vision, users, and market positioning. We align on goals and define success metrics.",
      duration: "1 week"
    },
    {
      number: "02",
      title: "Design & Prototype",
      description: "User-centric design sprints creating high-fidelity prototypes. Validate concepts before development begins.",
      duration: "1-2 weeks"
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Agile development with continuous integration and rigorous quality assurance. Ship with confidence.",
      duration: "3-4 weeks"
    },
    {
      number: "04",
      title: "Launch & Scale",
      description: "Strategic launch planning with ongoing optimization and feature expansion. We're partners for the long term.",
      duration: "1 week+"
    }
  ];

  return (
    <section className="relative py-32 lg:py-40 px-8 lg:px-20 bg-gradient-to-br from-luxury-950 via-luxury-900 to-luxury-950 overflow-hidden">
      {/* Architectural grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '64px 64px'
      }}></div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(212,175,55,0.1),transparent_70%)]"></div>

      {/* Light beams */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-premium-gold/10 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent-500/8 to-transparent"></div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Decorative DevOps SVGs - Left Side */}
        <div className="absolute left-0 top-32 space-y-10 opacity-5">
          <img src="/svg-elements/git.svg" alt="" className="w-16 h-16" />
          <img src="/svg-elements/github.svg" alt="" className="w-14 h-14" />
          <img src="/svg-elements/gitlab.svg" alt="" className="w-12 h-12" />
        </div>

        {/* Decorative Tools SVGs - Right Side */}
        <div className="absolute right-0 top-48 space-y-10 opacity-5">
          <img src="/svg-elements/jest.svg" alt="" className="w-14 h-14" />
          <img src="/svg-elements/cypress.svg" alt="" className="w-16 h-16" />
          <img src="/svg-elements/playwright.svg" alt="" className="w-12 h-12" />
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-28">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-premium-gold/10 backdrop-blur-sm border border-premium-gold/20 rounded-full shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_6px_28px_rgba(212,175,55,0.3)] transition-all duration-300 mb-8">
            <div className="w-1.5 h-1.5 bg-premium-gold rounded-full"></div>
            <span className="text-[10px] font-bold text-premium-gold-light uppercase tracking-[0.16em] leading-none">How We Work</span>
          </div>
          <div className="space-y-6 mb-10">
            <h2 className="text-7xl lg:text-8xl font-black text-white tracking-[-0.05em] leading-[0.9] [text-wrap:balance] font-serif">
              A Proven
              <br />
              <span className="bg-gradient-to-br from-premium-gold via-accent-500 to-premium-gold-dark bg-clip-text text-transparent">Process</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-premium-gold to-accent-500 rounded-full"></div>
          </div>
          <p className="text-xl lg:text-2xl text-luxury-200 leading-[1.7] font-light">
            Strategic thinking combined with agile execution. Transparency, quality, and speed at every stage.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative p-10 lg:p-12 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-premium-gold/30 hover:bg-white/10 rounded-3xl transition-all duration-500 hover:-translate-y-2 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_48px_rgba(212,175,55,0.2)]"
            >
              {/* Number badge */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-premium-gold-light to-accent-100 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_6px_24px_rgba(212,175,55,0.3)]">
                <span className="text-2xl font-black text-luxury-950 font-serif">{step.number}</span>
              </div>

              {/* Duration badge */}
              <div className="absolute top-10 right-10 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
                <span className="text-xs font-bold text-luxury-200 uppercase tracking-wider">{step.duration}</span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-black text-white mb-5 leading-tight tracking-tight group-hover:text-premium-gold-light transition-colors duration-500">
                {step.title}
              </h3>
              <p className="text-base lg:text-lg text-luxury-300 leading-[1.7] font-light">
                {step.description}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-premium-gold/30 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6 p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-6xl font-black text-premium-gold leading-none mb-3 tracking-tighter font-serif">6-8</div>
                <div className="text-xs text-luxury-300 font-bold uppercase tracking-widest">Weeks Average</div>
              </div>
              <div className="w-px h-16 bg-white/20"></div>
              <div className="text-center">
                <div className="text-6xl font-black text-premium-gold leading-none mb-3 tracking-tighter font-serif">100%</div>
                <div className="text-xs text-luxury-300 font-bold uppercase tracking-widest">On-Time Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
