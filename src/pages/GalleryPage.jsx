import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { galleryCategories as categories } from '../data/portfolio';
import ThumbnailCard from '../components/ThumbnailCard';
import Lightbox from '../components/Lightbox';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    categoryId: null,
    imageIndex: 0,
    direction: 0,
  });

  // Get all thumbnails or filter by category
  const filteredCategories =
    activeFilter === 'all'
      ? categories
      : categories.filter((c) => c.id === activeFilter);

  const openLightbox = (categoryId, index) => {
    setLightbox({ isOpen: true, categoryId, imageIndex: index, direction: 0 });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const navigateLightbox = (dir) => {
    setLightbox((prev) => {
      const category = categories.find((c) => c.id === prev.categoryId);
      if (!category) return prev;
      const total = category.thumbnails.length;
      const newIndex = (prev.imageIndex + dir + total) % total;
      return { ...prev, imageIndex: newIndex, direction: dir };
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300 group"
          >
            <HiArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Full Gallery
          </h1>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            All{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Thumbnails
            </span>
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto">
            Browse the complete collection. Click any thumbnail to view it fullscreen.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20'
                : 'bg-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-700/60 border border-zinc-700/50'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-700/60 border border-zinc-700/50'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        {filteredCategories.map((category) => (
          <div key={category.id} className="mb-12 last:mb-0">
            {activeFilter === 'all' && (
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-cyan-400 to-violet-500" />
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
                <span className="text-xs text-zinc-500">{category.thumbnails.length}</span>
              </div>
            )}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={activeFilter}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4"
            >
              {category.thumbnails.map((thumb, idx) => (
                <motion.div key={`${category.id}-${thumb.id}`} variants={itemVariants}>
                  <ThumbnailCard
                    thumbnail={thumb}
                    onClick={() => openLightbox(category.id, idx)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightbox.isOpen}
        categoryId={lightbox.categoryId}
        imageIndex={lightbox.imageIndex}
        direction={lightbox.direction}
        onClose={closeLightbox}
        onPrev={() => navigateLightbox(-1)}
        onNext={() => navigateLightbox(1)}
        dataCategories={categories}
      />
    </div>
  );
}
