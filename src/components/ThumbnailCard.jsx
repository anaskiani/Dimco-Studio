import { motion } from 'framer-motion';

export default function ThumbnailCard({ thumbnail, onClick }) {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer bg-zinc-800/50"
    >
      {/* Thumbnail Image */}
      <img
        src={thumbnail.src}
        alt={thumbnail.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <div>
          <p className="text-white text-sm font-semibold leading-tight">
            {thumbnail.title}
          </p>
          <p className="text-cyan-400 text-xs mt-1 font-medium">
            Click to view →
          </p>
        </div>
      </div>

      {/* Glow border on hover */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-white/5 group-hover:ring-cyan-400/30 transition-all duration-300" />
    </motion.div>
  );
}
