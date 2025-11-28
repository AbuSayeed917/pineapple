export function Contact() {
  return (
    <>
      {/* CTA Section */}
      <section id="contact" className="relative py-40 lg:py-48 px-8 lg:px-20 bg-gradient-to-br from-luxury-950 via-luxury-900 to-luxury-950 overflow-hidden">
        {/* Architectural grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}></div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(212,175,55,0.12),rgba(0,0,0,0))]"></div>

        {/* Light beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-premium-gold/10 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent-500/8 to-transparent"></div>

        <div className="max-w-[1800px] mx-auto text-center relative z-10">
          {/* Decorative Communication SVGs - Left */}
          <div className="absolute left-8 top-20 space-y-12 opacity-5">
            <img src="/svg-elements/slack.svg" alt="" className="w-14 h-14" />
            <img src="/svg-elements/notion.svg" alt="" className="w-16 h-16" />
            <img src="/svg-elements/trello.svg" alt="" className="w-12 h-12" />
          </div>

          {/* Decorative Platform SVGs - Right */}
          <div className="absolute right-8 top-20 space-y-12 opacity-5">
            <img src="/svg-elements/vercel.svg" alt="" className="w-16 h-16" />
            <img src="/svg-elements/netlify.svg" alt="" className="w-14 h-14" />
            <img src="/svg-elements/firebase.svg" alt="" className="w-12 h-12" />
          </div>

          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-premium-gold/10 backdrop-blur-sm border border-premium-gold/20 rounded-full shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_6px_28px_rgba(212,175,55,0.3)] transition-all duration-300 mb-12">
            <div className="w-1.5 h-1.5 bg-premium-gold rounded-full"></div>
            <span className="text-[10px] font-bold text-premium-gold-light uppercase tracking-[0.16em] leading-none">Let's Connect</span>
          </div>

          <div className="space-y-8 mb-16">
            <h2 className="text-7xl lg:text-8xl xl:text-[120px] font-black text-white tracking-[-0.05em] leading-[0.9] max-w-5xl mx-auto [text-wrap:balance] font-serif">
              Transform Your
              <br />
              <span className="bg-gradient-to-br from-premium-gold via-accent-500 to-premium-gold-dark bg-clip-text text-transparent">Vision</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-premium-gold to-accent-500 rounded-full"></div>
            </div>
          </div>

          <p className="text-xl lg:text-2xl text-luxury-200 leading-[1.7] mb-20 max-w-3xl mx-auto font-light">
            Ready to build something exceptional? Let's discuss your project and craft a solution that exceeds expectations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24">
            <a
              href="mailto:hello@pineapple.dev"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-luxury-950 text-base font-bold rounded-2xl shadow-[0_8px_32px_rgba(255,255,255,0.25)] hover:shadow-[0_12px_48px_rgba(255,255,255,0.35)] transition-all duration-500 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>hello@pineapple.dev</span>
            </a>
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 backdrop-blur-sm hover:bg-premium-gold/15 text-white text-base font-bold rounded-2xl border border-white/10 hover:border-premium-gold/40 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(212,175,55,0.25)] transition-all duration-500 hover:scale-105"
            >
              <span>Schedule Call</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-16 max-w-4xl mx-auto pt-20 border-t border-premium-gold/15">
            <div className="group cursor-default">
              <div className="text-6xl lg:text-7xl font-black text-premium-gold leading-none mb-5 tracking-tighter group-hover:scale-110 transition-transform duration-500 font-serif">24<span className="text-4xl">h</span></div>
              <div className="text-[10px] text-luxury-200 font-bold uppercase tracking-[0.16em]">Response Time</div>
            </div>
            <div className="group cursor-default">
              <div className="text-6xl lg:text-7xl font-black text-premium-gold leading-none mb-5 tracking-tighter group-hover:scale-110 transition-transform duration-500 font-serif">6-8<span className="text-3xl">wk</span></div>
              <div className="text-[10px] text-luxury-200 font-bold uppercase tracking-[0.16em]">Avg. Delivery</div>
            </div>
            <div className="group cursor-default">
              <div className="text-6xl lg:text-7xl font-black text-premium-gold leading-none mb-5 tracking-tighter group-hover:scale-110 transition-transform duration-500 font-serif">98<span className="text-5xl">%</span></div>
              <div className="text-[10px] text-luxury-200 font-bold uppercase tracking-[0.16em]">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-950 px-8 lg:px-20 py-24 border-t border-luxury-800/30">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-4 gap-20 mb-24">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-luxury-900 via-luxury-900 to-luxury-950 rounded-xl flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-luxury-800/40">
                  <div className="w-1.5 h-1.5 bg-premium-gold rounded-full shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
                </div>
                <span className="text-xl font-black text-white tracking-tight font-serif">Pineapple</span>
              </div>
              <p className="text-base text-luxury-300 leading-[1.7] max-w-md font-light">
                We partner with visionary founders to create sophisticated, production-grade software. From concept to market in 6-8 weeks.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.16em] mb-7">Services</h3>
              <ul className="space-y-4">
                <li><a href="#services" className="text-sm text-luxury-300 hover:text-premium-gold transition-colors duration-300 font-light">Product Development</a></li>
                <li><a href="#services" className="text-sm text-luxury-300 hover:text-premium-gold transition-colors duration-300 font-light">Technical Architecture</a></li>
                <li><a href="#services" className="text-sm text-luxury-300 hover:text-premium-gold transition-colors duration-300 font-light">Design & Experience</a></li>
                <li><a href="#services" className="text-sm text-luxury-300 hover:text-premium-gold transition-colors duration-300 font-light">Cloud Infrastructure</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.16em] mb-7">Company</h3>
              <ul className="space-y-4">
                <li><a href="#about" className="text-sm text-luxury-300 hover:text-premium-gold transition-colors duration-300 font-light">About</a></li>
                <li><a href="#portfolio" className="text-sm text-luxury-300 hover:text-premium-gold transition-colors duration-300 font-light">Work</a></li>
                <li><a href="#contact" className="text-sm text-luxury-300 hover:text-premium-gold transition-colors duration-300 font-light">Contact</a></li>
                <li><a href="#" className="text-sm text-luxury-300 hover:text-premium-gold transition-colors duration-300 font-light">Careers</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-12 border-t border-luxury-800/30 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-sm text-luxury-400 font-light">
              © 2024 Pineapple. All rights reserved.
            </div>

            <div className="flex gap-5">
              <a href="#" className="w-11 h-11 rounded-xl bg-luxury-900/50 hover:bg-luxury-800 flex items-center justify-center text-luxury-400 hover:text-premium-gold transition-all duration-300 hover:scale-110 border border-luxury-800/30 hover:border-premium-gold/30">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-luxury-900/50 hover:bg-luxury-800 flex items-center justify-center text-luxury-400 hover:text-premium-gold transition-all duration-300 hover:scale-110 border border-luxury-800/30 hover:border-premium-gold/30">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-luxury-900/50 hover:bg-luxury-800 flex items-center justify-center text-luxury-400 hover:text-premium-gold transition-all duration-300 hover:scale-110 border border-luxury-800/30 hover:border-premium-gold/30">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
