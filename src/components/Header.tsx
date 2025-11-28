export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-luxury-200/30 transition-all duration-500">
      <nav className="max-w-[1800px] mx-auto px-8 lg:px-20 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 bg-gradient-to-br from-luxury-950 via-luxury-900 to-luxury-950 rounded-xl flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.08)] group-hover:shadow-[0_6px_24px_rgba(212,175,55,0.2)] transition-all duration-500 group-hover:scale-105 border border-luxury-800/40 group-hover:border-premium-gold/30">
            <div className="w-1.5 h-1.5 bg-premium-gold rounded-full shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
          </div>
          <span className="text-lg font-black text-luxury-950 tracking-tight font-serif">Pineapple</span>
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-2">
          <li>
            <a href="#services" className="px-5 py-2.5 text-[13px] font-semibold text-luxury-600 hover:text-luxury-950 rounded-xl hover:bg-luxury-50 transition-all duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="px-5 py-2.5 text-[13px] font-semibold text-luxury-600 hover:text-luxury-950 rounded-xl hover:bg-luxury-50 transition-all duration-300">
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="px-5 py-2.5 text-[13px] font-semibold text-luxury-600 hover:text-luxury-950 rounded-xl hover:bg-luxury-50 transition-all duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="px-5 py-2.5 text-[13px] font-semibold text-luxury-600 hover:text-luxury-950 rounded-xl hover:bg-luxury-50 transition-all duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="group relative inline-flex items-center justify-center gap-2 px-7 py-3 bg-luxury-950 text-white text-[13px] font-bold rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-500 hover:scale-105 border border-luxury-800/50"
        >
          <span className="relative z-10">Start Project</span>
          <svg className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-br from-premium-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-premium-gold/40 to-transparent"></div>
        </a>
      </nav>
    </header>
  );
}
