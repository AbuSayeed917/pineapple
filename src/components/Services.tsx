export function Services() {
  const services = [
    {
      title: "Product Development",
      description: "Full-stack engineering from concept to production. Transform your vision into sophisticated, scalable products that command market presence.",
      number: "01",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Technical Architecture",
      description: "System design and infrastructure planning. We craft resilient foundations engineered to scale with your ambitions.",
      number: "02",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Design & Experience",
      description: "Refined interfaces that captivate. We create premium digital experiences that engage and convert with elegance.",
      number: "03",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: "Cloud Infrastructure",
      description: "Production-grade deployment on AWS, GCP, or Azure. Enterprise-level infrastructure built for reliability and performance.",
      number: "04",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: "Mobile Development",
      description: "Native iOS and Android applications. Refined mobile experiences engineered for performance and user delight.",
      number: "05",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Engineering Leadership",
      description: "Fractional CTO services and technical consulting. Strategic guidance from senior engineers who've built at scale.",
      number: "06",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="relative py-32 lg:py-40 px-8 lg:px-20 bg-white">
      {/* Subtle architectural grid */}
      <div className="absolute inset-0 opacity-[0.012]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
        backgroundSize: '64px 64px'
      }}></div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-28">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-luxury-50/80 backdrop-blur-sm border border-luxury-200/50 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.12)] transition-all duration-300 mb-8">
            <div className="w-1.5 h-1.5 bg-premium-gold rounded-full"></div>
            <span className="text-[10px] font-bold text-luxury-900 uppercase tracking-[0.16em] leading-none">Our Services</span>
          </div>
          <div className="space-y-6 mb-10">
            <h2 className="text-7xl lg:text-8xl font-black text-luxury-950 tracking-[-0.05em] leading-[0.9] [text-wrap:balance] font-serif">
              Expertise
              <br />
              <span className="bg-gradient-to-br from-premium-gold via-accent-500 to-premium-gold-dark bg-clip-text text-transparent">Refined</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-premium-gold to-accent-500 rounded-full"></div>
          </div>
          <p className="text-xl lg:text-2xl text-luxury-600 leading-[1.7] max-w-2xl font-light">
            Comprehensive development services delivered with precision, sophistication, and exceptional attention to craft.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white hover:bg-gradient-to-br hover:from-luxury-50/50 hover:to-accent-50/20 p-12 transition-all duration-500 cursor-pointer border border-luxury-200/60 hover:border-premium-gold/40 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_48px_rgba(212,175,55,0.2)] hover:-translate-y-2"
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="inline-block text-[10px] font-bold text-luxury-700 group-hover:text-premium-gold-dark tracking-[0.16em] transition-colors duration-500 px-4 py-2 bg-luxury-100 group-hover:bg-premium-gold-light/50 rounded-lg border border-luxury-200/40 group-hover:border-premium-gold/30">
                  {service.number}
                </span>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-luxury-100 to-accent-50/50 group-hover:from-premium-gold-light/60 group-hover:to-accent-100/60 border border-luxury-200/60 group-hover:border-premium-gold/40 flex items-center justify-center text-luxury-700 group-hover:text-premium-gold-dark transition-all duration-500 group-hover:scale-110 shadow-[0_4px_16px_rgba(0,0,0,0.04)] group-hover:shadow-[0_6px_24px_rgba(212,175,55,0.2)]">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl lg:text-3xl font-black text-luxury-950 group-hover:text-luxury-950 mb-6 transition-colors duration-500 leading-tight tracking-tight">
                {service.title}
              </h3>
              <p className="text-base text-luxury-600 group-hover:text-luxury-700 leading-[1.7] transition-colors duration-500 mb-10 font-light">
                {service.description}
              </p>

              <div className="flex items-center gap-2.5 text-luxury-500 group-hover:text-premium-gold-dark transition-all duration-500">
                <span className="text-sm font-bold tracking-tight">Explore</span>
                <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
