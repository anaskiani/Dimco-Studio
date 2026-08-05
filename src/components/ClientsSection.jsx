import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import { clients } from '../data/portfolio';

function ClientCard({ client }) {
  // Determine if this is a "big" channel (1M+) for visual emphasis
  const isBig = client.subscribers.includes('M');

  return (
    <a
      href={client.channelUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 mx-3 group block"
    >
      <div
        className={`relative flex flex-col items-center gap-4 p-6 rounded-2xl border transition-all duration-300 w-52 h-full
          ${isBig
            ? 'bg-zinc-900/80 border-zinc-700/60 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10'
            : 'bg-zinc-900/60 border-zinc-800/50 hover:border-zinc-600/60 hover:shadow-lg hover:shadow-white/5'
          }
        `}
      >
        {/* Avatar */}
        <div className="relative">
          {client.image ? (
            <img
              src={client.image}
              alt={client.name}
              className="w-18 h-18 rounded-full object-cover shadow-lg ring-2 ring-zinc-700/50 group-hover:ring-cyan-500/40 transition-all duration-300"
            />
          ) : (
            <div
              className={`w-18 h-18 rounded-full bg-gradient-to-br ${client.gradient} flex items-center justify-center font-bold text-white text-xl shadow-lg`}
            >
              {client.initials}
            </div>
          )}
          {/* Online dot */}
          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-red-500 border-2 border-zinc-900 flex items-center justify-center">
            <FaYoutube size={8} className="text-white" />
          </div>
        </div>

        {/* Channel Name */}
        <h4 className="font-semibold text-white text-sm text-center leading-tight group-hover:text-cyan-300 transition-colors duration-300">
          {client.name}
        </h4>

        {/* Subscriber Count */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700/40">
          <FaYoutube size={12} className="text-red-500" />
          <span className="text-xs font-semibold text-zinc-300">{client.subscribers}</span>
          <span className="text-[10px] text-zinc-500">subs</span>
        </div>

        {/* Visit link */}
        <div className="flex items-center gap-1 text-[11px] text-zinc-500 group-hover:text-cyan-400 transition-colors duration-300">
          <span>Visit Channel</span>
          <HiExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </div>
      </div>
    </a>
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

          <div className="flex animate-marquee hover:[animation-play-state:paused] w-max items-stretch">
            {doubled.map((client, i) => (
              <ClientCard key={`${client.name}-${i}`} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
