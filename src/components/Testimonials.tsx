export function Testimonials() {
  const testimonials = [
    {
      quote: "Pineapple helped us ship our MVP in 6 weeks. Their technical expertise and product thinking were invaluable. Best development partner we've worked with.",
      author: "Sarah Chen",
      role: "CEO, Vertex AI",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=90"
    },
    {
      quote: "The team scaled our platform from beta to 100K users without breaking a sweat. Exceptional engineering and incredible attention to detail throughout.",
      author: "Michael Rodriguez",
      role: "CTO, StreamFlow",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=90"
    },
    {
      quote: "They don't just write code—they think strategically about product and help you make the right decisions. True partners in every sense.",
      author: "Emily Thompson",
      role: "Head of Product, CloudVault",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=90"
    }
  ];

  return (
    <section className="relative py-32 lg:py-40 px-8 lg:px-20 bg-white border-t border-luxury-200/40 overflow-hidden">
      {/* Architectural grid background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }}></div>

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,rgba(212,175,55,0.04),rgba(255,255,255,0))]"></div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Decorative AI/ML SVGs - Left Side */}
        <div className="absolute left-0 top-24 space-y-10 opacity-8">
          <img src="/svg-elements/tensorflow.svg" alt="" className="w-14 h-14" />
          <img src="/svg-elements/pytorch.svg" alt="" className="w-16 h-16" />
          <img src="/svg-elements/openai.svg" alt="" className="w-12 h-12" />
        </div>

        {/* Decorative Platform SVGs - Right Side */}
        <div className="absolute right-0 top-24 space-y-10 opacity-8">
          <img src="/svg-elements/swift.svg" alt="" className="w-16 h-16" />
          <img src="/svg-elements/kotlin.svg" alt="" className="w-14 h-14" />
          <img src="/svg-elements/graphql.svg" alt="" className="w-12 h-12" />
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-28">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/90 backdrop-blur-sm border border-luxury-200/60 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.1)] transition-all duration-300 mb-4">
            <div className="w-1.5 h-1.5 bg-premium-gold rounded-full"></div>
            <span className="text-[10px] font-bold text-luxury-900 uppercase tracking-[0.16em] leading-none">Testimonials</span>
          </div>
          <div className="space-y-6">
            <h2 className="text-7xl lg:text-8xl font-black text-luxury-950 tracking-[-0.05em] leading-[0.9] [text-wrap:balance] font-serif">
              What Clients
              <br />
              <span className="bg-gradient-to-br from-premium-gold via-accent-500 to-premium-gold-dark bg-clip-text text-transparent">Say</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-premium-gold to-accent-500 rounded-full"></div>
          </div>
          <p className="text-xl lg:text-2xl text-luxury-600 leading-[1.7] mt-10 font-light">
            Feedback from founders and engineering leaders we've partnered with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-12 bg-white border border-luxury-200/60 hover:border-premium-gold/40 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(212,175,55,0.15)] transition-all duration-700 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-2 mb-10">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-premium-gold group-hover:text-premium-gold-dark transition-colors duration-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-lg text-luxury-700 leading-[1.8] mb-12 font-light">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-10 border-t border-luxury-200/60">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-luxury-200/60 shadow-sm group-hover:border-premium-gold/60 group-hover:shadow-[0_4px_16px_rgba(212,175,55,0.2)] transition-all duration-500"
                />
                <div>
                  <div className="text-base font-bold text-luxury-950 tracking-tight">{testimonial.author}</div>
                  <div className="text-sm text-luxury-500 mt-1.5">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="mt-28 pt-28 border-t border-luxury-200/60 text-center">
          <div className="group inline-flex items-center gap-8 px-16 py-10 bg-white border border-luxury-200/80 hover:border-premium-gold/50 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_56px_rgba(212,175,55,0.2)] transition-all duration-700 hover:-translate-y-2 hover:scale-105">
            <span className="text-7xl font-black text-luxury-950 group-hover:text-premium-gold-dark tracking-tighter transition-colors duration-700 font-serif">98<span className="text-5xl text-premium-gold">%</span></span>
            <div className="text-left">
              <div className="text-lg font-bold text-luxury-950 tracking-tight">Client satisfaction</div>
              <div className="text-sm text-luxury-500 mt-2">From 150+ completed projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
