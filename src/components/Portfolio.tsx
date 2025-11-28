export function Portfolio() {
  const projects = [
    {
      title: "FinTech Platform",
      description: "Payment processing infrastructure handling $2B+ in annual transaction volume. Built with React, Node.js, and PostgreSQL for maximum performance and reliability.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop&q=90",
      tags: ["React", "Node.js", "PostgreSQL"],
      metric: "$2B+ volume",
      year: "2024"
    },
    {
      title: "Healthcare SaaS",
      description: "HIPAA-compliant patient management system serving 50+ clinics nationwide. Secure, scalable, and user-friendly platform.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=900&fit=crop&q=90",
      tags: ["Vue.js", "Python", "AWS"],
      metric: "50+ clinics",
      year: "2023"
    },
    {
      title: "E-commerce Platform",
      description: "Multi-vendor marketplace with 100K+ daily active users. Powered by modern stack for exceptional performance.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=900&fit=crop&q=90",
      tags: ["Next.js", "GraphQL", "Stripe"],
      metric: "100K+ DAU",
      year: "2024"
    }
  ];

  return (
    <section id="portfolio" className="relative py-32 lg:py-40 px-8 lg:px-20 bg-luxury-50/40 overflow-hidden">
      {/* Architectural grid background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }}></div>

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(212,175,55,0.06),transparent_70%)]"></div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Decorative E-commerce SVGs - Top Left */}
        <div className="absolute left-4 top-10 space-x-6 flex opacity-8">
          <img src="/svg-elements/stripe.svg" alt="" className="w-14 h-14" />
          <img src="/svg-elements/shopify.svg" alt="" className="w-12 h-12" />
        </div>

        {/* Decorative Mobile SVGs - Top Right */}
        <div className="absolute right-4 top-10 space-x-6 flex opacity-8">
          <img src="/svg-elements/android.svg" alt="" className="w-12 h-12" />
          <img src="/svg-elements/apple.svg" alt="" className="w-14 h-14" />
          <img src="/svg-elements/flutter.svg" alt="" className="w-10 h-10" />
        </div>

        {/* Header */}
        <div className="flex items-end justify-between mb-28 flex-wrap gap-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/90 backdrop-blur-sm border border-luxury-200/60 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.1)] transition-all duration-300 mb-4">
              <div className="w-1.5 h-1.5 bg-premium-gold rounded-full"></div>
              <span className="text-[10px] font-bold text-luxury-900 uppercase tracking-[0.16em] leading-none">Portfolio</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-7xl lg:text-8xl font-black text-luxury-950 tracking-[-0.05em] leading-[0.9] [text-wrap:balance] font-serif">
                Selected
                <br />
                <span className="bg-gradient-to-br from-premium-gold via-accent-500 to-premium-gold-dark bg-clip-text text-transparent">Work</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-premium-gold to-accent-500 rounded-full"></div>
            </div>
            <p className="text-xl lg:text-2xl text-luxury-600 leading-[1.7] mt-10 font-light">
              Recent projects for funded startups and enterprise clients.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-xl border-2 border-luxury-300/60 hover:border-premium-gold/50 text-luxury-950 text-base font-semibold rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(212,175,55,0.12)] transition-all duration-700 hover:scale-105"
          >
            <span>View all projects</span>
            <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center"
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-luxury-100 border border-luxury-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] group-hover:shadow-[0_16px_56px_rgba(212,175,55,0.2)] transition-all duration-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-950/40 via-luxury-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>

                {/* Metric badge */}
                <div className="absolute top-8 left-8 px-5 py-3 bg-white/95 backdrop-blur-md rounded-2xl border border-luxury-200/60 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                  <span className="text-sm font-bold text-luxury-950 tracking-tight">{project.metric}</span>
                </div>

                {/* Year badge */}
                <div className="absolute bottom-8 right-8 px-5 py-3 bg-luxury-950/95 backdrop-blur-md rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
                  <span className="text-sm font-bold text-premium-gold tracking-tight">{project.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-xs font-bold text-luxury-400 uppercase tracking-[0.18em]">
                    0{index + 1}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-luxury-300 via-premium-gold/30 to-transparent"></div>
                </div>
                <h3 className="text-5xl lg:text-6xl font-black text-luxury-950 mb-8 leading-[1] tracking-[-0.04em] font-serif">
                  {project.title}
                </h3>
                <p className="text-lg lg:text-xl text-luxury-600 leading-[1.75] mb-10 font-light">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-12">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-5 py-3 bg-white border border-luxury-200/80 hover:border-premium-gold/50 text-luxury-700 hover:text-luxury-950 text-sm font-semibold rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)] transition-all duration-500 hover:-translate-y-1 hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="group/link inline-flex items-center gap-3 px-9 py-4 bg-luxury-950 text-white text-base font-semibold rounded-2xl shadow-[0_8px_28px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)] transition-all duration-700 hover:scale-105 border border-luxury-800/60"
                >
                  <span>View case study</span>
                  <svg className="w-4 h-4 group-hover/link:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-br from-premium-gold/15 via-transparent to-transparent opacity-0 group-hover/link:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
