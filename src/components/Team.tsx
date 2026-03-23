export function Team() {
  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      image: "https://i.pravatar.cc/400?img=12",
      bio: "15+ years building scaleable systems."
    },
    {
      name: "Sarah Johnson",
      role: "Head of Design",
      image: "https://i.pravatar.cc/400?img=45",
      bio: "Award-winning product designer."
    },
    {
      name: "Michael Torres",
      role: "Engineering Lead",
      image: "https://i.pravatar.cc/400?img=33",
      bio: "System architect and full-stack pro."
    },
    {
      name: "Emily Davis",
      role: "Product Strategy",
      image: "https://i.pravatar.cc/400?img=47",
      bio: "Driving product vision and growth."
    }
  ];

  return (
    <section className="py-32 px-8 bg-pineapple-dark border-y border-pineapple-primary/20">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-pineapple-surface/50 rounded-full border border-pineapple-primary/30 mb-6 shadow-[0_4px_10px_rgba(251,191,36,0.1)]">
            <span className="text-sm font-bold text-pineapple-primary font-sans tracking-widest">THE TEAM</span>
          </div>
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight font-display">
              MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-pineapple-primary to-pineapple-accent animate-pulse-warm text-glow">EXPERTS</span>
            </h2>
            <p className="text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed font-sans">
              A team of world-class engineers, designers, and strategists.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="relative mb-6 overflow-hidden rounded-3xl aspect-square border border-pineapple-primary/40 shadow-[0_4px_15px_rgba(251,191,36,0.1)] group-hover:shadow-[0_10px_30px_rgba(251,191,36,0.3)] transition-all duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pineapple-dark via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1 font-display">{member.name}</h3>
              <div className="text-sm font-bold text-pineapple-primary mb-3 font-sans border-b border-pineapple-primary/20 inline-block pb-1">{member.role}</div>
              <p className="text-sm text-stone-400 leading-relaxed font-sans">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-pineapple-surface/20 rounded-full border border-pineapple-primary/30 hover:border-pineapple-primary hover:bg-pineapple-primary/10 transition-all duration-300">
            <span className="text-sm text-stone-300 font-sans">We're recruiting!</span>
            <a href="#" className="text-sm font-bold text-pineapple-primary hover:text-white transition-colors font-sans hover:text-shadow-[0_0_5px_#FBBF24]">
              View open positions →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
