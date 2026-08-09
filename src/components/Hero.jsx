import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { siteConfig } from '../data/portfolio';

export default function Hero() {
  const handleSeeWorks = (e) => {
    e.preventDefault();
    const el = document.querySelector('#portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 bg-dotted-grid overflow-hidden"
    >
      {/* Content Container */}
      <div className="relative z-10 text-center max-w-4xl mx-auto w-full flex flex-col items-center">
        
        {/* Avatar Image in Yellow Circle Frame */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-8"
        >
          <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border-4 border-amber-400 p-1 shadow-xl bg-amber-400 flex items-center justify-center overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src="/images/avatar.jpeg"
              alt={siteConfig.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.15] mb-8 max-w-3xl"
        >
          I Design Thumbnails <br />
          That Make People{' '}
          <span className="inline-block bg-amber-400 text-slate-900 px-4 sm:px-6 py-1.5 rounded-2xl font-black shadow-sm transform -rotate-1 hover:rotate-0 transition-transform">
            Click!
          </span>
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <button
            onClick={handleSeeWorks}
            className="px-8 py-3.5 rounded-2xl bg-zinc-100 hover:bg-zinc-200 text-slate-800 font-bold text-base border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            See works
          </button>
          <button
            onClick={handleContact}
            className="px-8 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Rating & Social Proof Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 bg-white/80 border border-slate-200/80 rounded-full px-5 py-2 shadow-xs backdrop-blur-xs"
        >
          {/* Black circle icon pill */}
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900 text-white text-xs font-black">
            <span>Up</span>
            <span className="text-amber-400 text-sm font-extrabold">+</span>
          </div>

          {/* Stars and rating text */}
          <div className="flex items-center gap-2">
            <div className="flex items-center text-amber-500 gap-0.5">
              <FaStar size={13} />
              <FaStar size={13} />
              <FaStar size={13} />
              <FaStar size={13} />
              <FaStar size={13} />
            </div>
            <span className="text-xs font-bold text-slate-900">5 Stars</span>
            <span className="text-xs text-slate-500 font-medium">On Upwork & Contra</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
