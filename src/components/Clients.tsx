export function Clients() {
  const clients = [
    { name: "Stripe" },
    { name: "Shopify" },
    { name: "Airbnb" },
    { name: "Netflix" },
    { name: "Spotify" },
    { name: "Uber" },
  ];

  return (
    <section className="py-20 px-8 lg:px-20 bg-white border-y border-luxury-200/20">
      <div className="max-w-[1800px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[9px] font-bold text-luxury-400 uppercase tracking-[0.2em]">
            Trusted by Industry Leaders
          </p>
        </div>

        {/* Logo Grid */}
        <div className="flex flex-wrap items-center justify-center gap-x-16 lg:gap-x-24 gap-y-10">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex items-center justify-center opacity-20 hover:opacity-100 transition-all duration-500 cursor-default"
            >
              <div className="text-xl lg:text-2xl font-black text-luxury-950 tracking-tight font-serif hover:text-premium-gold-dark transition-colors duration-500 hover:scale-110">
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
