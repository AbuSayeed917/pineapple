export function Team() {
  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      image: "https://i.pravatar.cc/400?img=12",
      bio: "15+ years building products at Google and Stripe"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Design",
      image: "https://i.pravatar.cc/400?img=45",
      bio: "Former design lead at Airbnb, IDEO alumnus"
    },
    {
      name: "Michael Torres",
      role: "Engineering Director",
      image: "https://i.pravatar.cc/400?img=33",
      bio: "Tech lead from Amazon, MIT Computer Science"
    },
    {
      name: "Emily Davis",
      role: "Head of Product",
      image: "https://i.pravatar.cc/400?img=47",
      bio: "Product strategy from Meta and Y Combinator"
    }
  ];

  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-amber-50 rounded-full border border-amber-200/50 mb-6">
            <span className="text-sm font-medium text-amber-900">Our Team</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Meet the people
            <span className="block text-gray-400">building the future</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A team of world-class engineers, designers, and strategists from leading tech companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <div className="text-sm font-medium text-amber-600 mb-3">{member.role}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-full border border-gray-200">
            <span className="text-sm text-gray-600">We're hiring!</span>
            <a href="#" className="text-sm font-semibold text-gray-900 hover:text-amber-600 transition-colors">
              View open positions →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
