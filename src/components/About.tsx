"use client";

import { Player } from '@lottiefiles/react-lottie-player';

export function About() {
  return (
    <section id="about" className="relative py-32 lg:py-40 px-8 lg:px-20 bg-luxury-50/40 overflow-hidden">
      {/* Architectural grid background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }}></div>

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_40%,rgba(212,175,55,0.06),transparent_70%)]"></div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-24 lg:gap-32 items-center">
          {/* Left - Content */}
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/90 backdrop-blur-sm border border-luxury-200/60 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.1)] transition-all duration-300 mb-4">
              <div className="w-1.5 h-1.5 bg-premium-gold rounded-full"></div>
              <span className="text-[10px] font-bold text-luxury-900 uppercase tracking-[0.16em] leading-none">About us</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-7xl lg:text-8xl font-black text-luxury-950 tracking-[-0.05em] leading-[0.9] [text-wrap:balance] font-serif">
                Engineering
                <br />
                <span className="bg-gradient-to-br from-premium-gold via-accent-500 to-premium-gold-dark bg-clip-text text-transparent">Excellence</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-premium-gold to-accent-500 rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg lg:text-xl text-luxury-600 leading-[1.7] max-w-2xl font-light">
              <p>
                A collective of senior engineers and designers from <span className="font-semibold text-luxury-950">Google</span>, <span className="font-semibold text-luxury-950">Stripe</span>, and <span className="font-semibold text-luxury-950">Airbnb</span>—united by a commitment to exceptional craft.
              </p>

              <p>
                We partner with ambitious founders to build production-ready software. From concept through scale, we deliver with precision, speed, and uncompromising quality.
              </p>

              <p className="font-semibold text-luxury-950 text-xl">
                Our clients have raised $62M+ and serve millions globally.
              </p>
            </div>
          </div>

          {/* Right - Animated Scene */}
          <div className="relative">
            {/* Lottie Animation - Team Collaboration Scene */}
            <div className="relative w-full aspect-square bg-gradient-to-br from-white to-luxury-50/50 rounded-3xl border border-luxury-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden p-8">
              <Player
                autoplay
                loop
                src="https://lottie.host/b7456e3d-8c42-4b0b-a5e7-c6d8f9b0c5d4/xJZqK8f3Xh.json"
                style={{ height: '100%', width: '100%' }}
              />
            </div>

            {/* Stats Overlay */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="group cursor-default p-8 bg-white/90 backdrop-blur-sm border border-luxury-200/60 hover:border-premium-gold/40 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(212,175,55,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="text-5xl lg:text-6xl font-black text-luxury-950 group-hover:text-premium-gold-dark leading-none mb-3 tracking-tighter transition-colors duration-500 font-serif">8<span className="text-3xl text-premium-gold">+</span></div>
                <div className="text-[9px] text-luxury-500 font-bold uppercase tracking-[0.18em]">Years experience</div>
              </div>
              <div className="group cursor-default p-8 bg-white/90 backdrop-blur-sm border border-luxury-200/60 hover:border-premium-gold/40 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(212,175,55,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="text-5xl lg:text-6xl font-black text-luxury-950 group-hover:text-premium-gold-dark leading-none mb-3 tracking-tighter transition-colors duration-500 font-serif">150<span className="text-3xl text-premium-gold">+</span></div>
                <div className="text-[9px] text-luxury-500 font-bold uppercase tracking-[0.18em]">Projects shipped</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Showcase - Beautiful Grid */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-black text-luxury-950 mb-4">Technology Stack</h3>
            <p className="text-lg text-luxury-600 font-light">Powered by industry-leading tools and frameworks</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-8 items-center justify-items-center">
            {[
              { name: 'react', label: 'React' },
              { name: 'nextjs', label: 'Next.js' },
              { name: 'typescript', label: 'TypeScript' },
              { name: 'nodejs', label: 'Node.js' },
              { name: 'python', label: 'Python' },
              { name: 'docker', label: 'Docker' },
              { name: 'kubernetes', label: 'Kubernetes' },
              { name: 'aws', label: 'AWS' },
              { name: 'postgresql', label: 'PostgreSQL' },
              { name: 'mongodb', label: 'MongoDB' },
              { name: 'graphql', label: 'GraphQL' },
              { name: 'tailwind', label: 'Tailwind' },
              { name: 'figma', label: 'Figma' },
              { name: 'git', label: 'Git' },
              { name: 'github', label: 'GitHub' },
              { name: 'vercel', label: 'Vercel' },
              { name: 'firebase', label: 'Firebase' },
              { name: 'stripe', label: 'Stripe' },
              { name: 'tensorflow', label: 'TensorFlow' },
              { name: 'openai', label: 'OpenAI' },
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="group relative flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-white hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100">
                  <img src={`/svg-elements/${tech.name}.svg`} alt={tech.label} className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] font-semibold text-luxury-600 group-hover:text-luxury-950 uppercase tracking-wider transition-colors duration-300 opacity-0 group-hover:opacity-100 absolute -bottom-6">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
