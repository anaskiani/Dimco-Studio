import { useState } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { clients } from '../data/portfolio';

function ClientAvatar({ client }) {
  const [imageUnavailable, setImageUnavailable] = useState(false);
  const initials = client.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  if (imageUnavailable) {
    return (
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center font-bold text-white text-lg shadow-sm ring-2 ring-slate-100 group-hover:ring-amber-400 transition-all duration-300">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={client.image}
      alt={client.name}
      onError={() => setImageUnavailable(true)}
      className="w-16 h-16 rounded-full object-cover shadow-sm ring-2 ring-slate-100 group-hover:ring-amber-400 transition-all duration-300"
    />
  );
}

function ClientCard({ client }) {
  return (
    <a
      href={client.channelUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 mx-3 group block"
    >
      <div className="relative flex flex-col items-center gap-3 p-6 rounded-3xl border border-slate-200/80 bg-white shadow-xs hover:shadow-md hover:border-amber-300 transition-all duration-300 w-52 text-center">
        {/* Avatar */}
        <div className="relative">
          <ClientAvatar client={client} />
          {/* Online red YouTube icon badge */}
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-red-600 border-2 border-white flex items-center justify-center shadow-xs">
            <FaYoutube size={10} className="text-white" />
          </div>
        </div>

        {/* Channel Name */}
        <h4 className="font-extrabold text-slate-900 text-sm leading-tight group-hover:text-amber-500 transition-colors duration-300">
          {client.name}
        </h4>

        {/* Subscriber Count Pill */}
        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/60 text-slate-600 text-xs font-bold">
          <span>{client.subscribers}</span>
          <span className="text-[11px] font-medium text-slate-400">subs</span>
        </div>
      </div>
    </a>
  );
}

export default function ClientsSection() {
  const doubled = [...clients, ...clients, ...clients];

  return (
    <section id="clients" className="relative py-20 bg-dotted-grid overflow-hidden border-t border-slate-100">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Marquee Row */}
        <div className="relative">
          <div className="flex animate-marquee hover:[animation-play-state:paused] w-max items-center">
            {doubled.map((client, i) => (
              <ClientCard key={`${client.name}-${i}`} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
