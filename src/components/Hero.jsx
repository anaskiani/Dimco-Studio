import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { siteConfig, categories } from '../data/portfolio';

export default function Hero() {
  const handleCTA = (e) => {
    e.preventDefault();
    const el = document.querySelector('#portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Pick featured thumbnails for the animated background collage
  const featured = categories.flatMap((c) => c.thumbnails.slice(0, 2));

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-12"
    >
      {/* Animated Background Collage */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.12]">
        <div className="absolute inset-0 grid grid-cols-5 grid-rows-4 gap-2 p-4 rotate-[-8deg] scale-125">
          {featured.map((thumb, i) => (
            <motion.div
              key={`bg-${i}`}
              className="rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.95, 1.05, 0.95],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6 + (i % 3),
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut',
              }}
            >
              <img
                src={thumb.src}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.08)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(139,92,246,0.08)_0%,_transparent_50%)]" />

      {/* Animated Orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '10%', left: '10%' }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-violet-500/10 blur-[100px]"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ bottom: '10%', right: '10%' }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-zinc-700/50 bg-zinc-800/50 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-medium text-zinc-400">
            Available for freelance work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {siteConfig.tagline.split(' ').map((word, i) => {
            const highlight = ['thumbnails', 'clicks'].includes(word.toLowerCase());
            return (
              <span key={i}>
                {highlight ? (
                  <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent font-semibold">
                    {word}
                  </span>
                ) : (
                  word
                )}{' '}
              </span>
            );
          })}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={handleCTA}
            className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            View My Work
            <HiArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-full border border-zinc-700 text-zinc-300 font-semibold text-lg hover:bg-zinc-800/50 hover:border-zinc-600 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-8 sm:gap-16"
        >
          {[
            { value: '500+', label: 'Thumbnails' },
            { value: '98%', label: 'Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>



    </section>
  );
}
