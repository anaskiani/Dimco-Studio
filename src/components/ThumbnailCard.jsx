import { motion } from 'framer-motion';

export default function ThumbnailCard({ thumbnail, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer bg-slate-100 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-400/60 transition-all duration-300"
    >
      {/* Thumbnail Image */}
      <img
        src={thumbnail.src}
        alt={thumbnail.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <div>
          <span className="inline-block bg-amber-400 text-slate-900 text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
            Click to view fullscreen
          </span>
        </div>
      </div>
    </motion.div>
  );
}
