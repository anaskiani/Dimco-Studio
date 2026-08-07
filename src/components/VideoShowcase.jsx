import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import { topClassThumbnails } from '../data/portfolio';

export default function VideoShowcase() {
  const [index, setIndex] = useState(0);

  // Continuously cycle thumbnails every 1.8 seconds (between 1-2s as requested)
  useEffect(() => {
    if (!topClassThumbnails.length) return undefined;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % topClassThumbnails.length);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const current = topClassThumbnails[index];

  if (!current) return null;

  return (
    <section className="relative py-12 bg-dotted-grid overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 flex items-center justify-center">
        
        {/* Decorative Left Sketch Arrow Doodle */}
        <div className="hidden sm:block absolute left-4 md:left-12 text-slate-400 text-3xl font-extrabold select-none opacity-60 transform -rotate-12">
          ⤹
        </div>

        {/* Decorative Right Sketch Doodle */}
        <div className="hidden sm:block absolute right-4 md:right-12 text-slate-400 text-3xl font-extrabold select-none opacity-60 transform rotate-12">
          =
        </div>

        {/* Video Mockup Frame */}
        <div className="relative w-full max-w-xl aspect-video rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-slate-900/15 bg-slate-900 flex items-center justify-center group">
          
          {/* Continuous Auto-Changing Thumbnail */}
          <AnimatePresence mode="wait">
            <motion.img
              key={current.id}
              src={current.src}
              alt={current.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Dark Overlay gradient */}
          <div className="absolute inset-0 bg-slate-900/20 pointer-events-none" />

          {/* Central White Play Icon Button */}
          <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 text-slate-900 flex items-center justify-center shadow-2xl backdrop-blur-xs group-hover:scale-110 transition-transform duration-300">
            <FaPlay size={20} className="ml-1 text-slate-900" />
          </div>

          {/* Top subtle live badge */}
          <div className="absolute top-3 left-3 bg-slate-900/70 backdrop-blur-md text-amber-400 font-extrabold text-[11px] px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 z-10">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Live Preview</span>
          </div>

        </div>

      </div>
    </section>
  );
}
