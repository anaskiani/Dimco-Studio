import { motion } from 'framer-motion';
import { clients } from '../data/portfolio';

function ClientCard({ client }) {
  return (
    <div className="flex-shrink-0 mx-4">
      <div className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors duration-300 w-40">
        {/* Channel Avatar */}
        <div
          className={`w-16 h-16 rounded-full bg-gradient-to-br ${client.gradient} flex items-center justify-center font-bold text-white text-lg shadow-lg`}
        >
          {client.initials}
        </div>
        {/* Channel Name */}
        <h4 className="font-semibold text-white text-sm text-center leading-tight">
          {client.name}
        </h4>
      </div>
    </div>
  );
}

export default function ClientsSection() {
  // Double the clients for seamless marquee loop
  const doubled = [...clients, ...clients];

  return (
    <section id="clients" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/30 to-transparent" />

      <div className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-4"
        >
          <span className="text-sm font-semibold text-cyan-400 tracking-widest uppercase mb-4 block">
            Trusted By
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Happy{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Trusted by top creators and brands to deliver thumbnails that perform.
          </p>
        </motion.div>

        {/* Marquee Row */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
            {doubled.map((client, i) => (
              <ClientCard key={`${client.name}-${i}`} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
