import { motion } from 'framer-motion';
import CategoryBlock from './CategoryBlock';
import { categories } from '../data/portfolio';

export default function PortfolioSection({ onThumbnailClick }) {
  return (
    <section id="portfolio" className="relative py-20 sm:py-28">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.04)_0%,_transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-cyan-400 tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Thumbnails
            </span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Bold, eye-catching designs crafted to maximize clicks and views across every niche.
          </p>
        </motion.div>

        {/* Category Blocks */}
        {categories.map((category) => (
          <CategoryBlock
            key={category.id}
            category={category}
            onThumbnailClick={onThumbnailClick}
          />
        ))}
      </div>
    </section>
  );
}
