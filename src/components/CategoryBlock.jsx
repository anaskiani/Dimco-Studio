import { motion } from 'framer-motion';
import ThumbnailCard from './ThumbnailCard';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function CategoryBlock({ category, onThumbnailClick }) {
  return (
    <div className="mb-16 last:mb-0">
      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="w-1 h-8 rounded-full bg-gradient-to-b from-cyan-400 to-violet-500" />
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          {category.title}
        </h3>
        <span className="text-sm text-zinc-500 font-medium">
          {category.thumbnails.length} designs
        </span>
      </motion.div>

      {/* Thumbnail Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
      >
        {category.thumbnails.map((thumb, idx) => (
          <motion.div key={thumb.id} variants={itemVariants}>
            <ThumbnailCard
              thumbnail={thumb}
              onClick={() => onThumbnailClick(category.id, idx)}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
