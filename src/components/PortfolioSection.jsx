import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '../data/portfolio';
import ThumbnailCard from './ThumbnailCard';

export default function PortfolioSection({ onThumbnailClick }) {
  const [showAll, setShowAll] = useState(false);

  // Flatten all thumbnails into a single unified array (removing category dividers)
  const allThumbnails = useMemo(() => {
    const list = [];
    categories.forEach((cat) => {
      cat.thumbnails.forEach((thumb) => {
        list.push({ ...thumb, categoryId: cat.id, categoryTitle: cat.title });
      });
    });
    return list;
  }, []);

  // Split into 2 rows for the 2-way sliding marquee
  const half = Math.ceil(allThumbnails.length / 2);
  const row1Original = allThumbnails.slice(0, half);
  const row2Original = allThumbnails.slice(half);

  // Triple rows for smooth infinite seamless loop
  const row1 = [...row1Original, ...row1Original, ...row1Original];
  const row2 = [...row2Original, ...row2Original, ...row2Original];

  return (
    <section id="portfolio" className="relative py-20 sm:py-28 bg-dotted-grid overflow-hidden border-t border-slate-100">
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        {/* Top Tag Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-300 bg-amber-50 text-slate-800 text-xs font-bold mb-4 shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>Portfolio</span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-12"
        >
          Works I Did <br />
          For My Clients
        </motion.h2>

        {/* 2-Way Sliding Marquee Rows (Without Category Headings) */}
        <div className="relative mb-12 flex flex-col gap-6 overflow-hidden">
          {/* Fade edges left and right */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Row 1: Sliding Left */}
          <div className="flex animate-marquee hover:[animation-play-state:paused] w-max gap-3 sm:gap-5 items-center py-2">
            {row1.map((item, i) => (
              <div
                key={`r1-${item.id}-${i}`}
                onClick={() => onThumbnailClick && onThumbnailClick(item.categoryId, item.id)}
                className="w-56 sm:w-80 md:w-96 aspect-video flex-shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-xs hover:shadow-xl border border-slate-200/90 hover:border-amber-400 transition-all duration-300 transform hover:scale-105 bg-slate-100"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-contain sm:object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 2: Sliding Right */}
          <div className="flex animate-marquee-reverse hover:[animation-play-state:paused] w-max gap-3 sm:gap-5 items-center py-2">
            {row2.map((item, i) => (
              <div
                key={`r2-${item.id}-${i}`}
                onClick={() => onThumbnailClick && onThumbnailClick(item.categoryId, item.id)}
                className="w-56 sm:w-80 md:w-96 aspect-video flex-shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-xs hover:shadow-xl border border-slate-200/90 hover:border-amber-400 transition-all duration-300 transform hover:scale-105 bg-slate-100"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-contain sm:object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: "Show all" Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-9 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold text-base shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            {showAll ? 'Collapse Gallery ↑' : 'Show all'}
          </button>
        </motion.div>

        {/* Expanded Grid Gallery (Revealed on click) */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="pt-6 border-t border-slate-200/80"
            >
              {/* Responsive Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
                {allThumbnails.map((thumb) => (
                  <ThumbnailCard
                    key={`grid-${thumb.categoryId}-${thumb.id}`}
                    thumbnail={thumb}
                    onClick={() => onThumbnailClick && onThumbnailClick(thumb.categoryId, thumb.id)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
