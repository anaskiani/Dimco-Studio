import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { categories } from '../data/portfolio';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function Lightbox({
  isOpen,
  categoryId,
  imageIndex,
  direction,
  onClose,
  onPrev,
  onNext,
}) {
  // Find current category and thumbnail
  const category = categories.find((c) => c.id === categoryId);
  const thumbnails = category?.thumbnails || [];
  const currentThumb = thumbnails[imageIndex];
  const total = thumbnails.length;

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      switch (e.key) {
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case 'Escape':
          onClose();
          break;
        default:
          break;
      }
    },
    [isOpen, onPrev, onNext, onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('lightbox-open');
    } else {
      document.body.classList.remove('lightbox-open');
    }
    return () => document.body.classList.remove('lightbox-open');
  }, [isOpen]);

  // Swipe handling
  const handleDragEnd = (e, info) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      onPrev();
    } else if (info.offset.x < -threshold) {
      onNext();
    }
  };

  if (!isOpen || !currentThumb) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="lightbox-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-8 py-4 z-10">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-cyan-400">
                {category?.title}
              </span>
              <span className="text-sm text-zinc-500">
                {imageIndex + 1} / {total}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors duration-200"
              aria-label="Close lightbox"
            >
              <HiX size={20} />
            </button>
          </div>

          {/* Image Container */}
          <div className="relative flex items-center justify-center w-full h-full px-4 sm:px-16 py-20">
            {/* Prev Arrow (desktop) */}
            <button
              onClick={onPrev}
              className="hidden sm:flex absolute left-4 lg:left-8 z-10 p-3 rounded-full bg-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-700/80 transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous thumbnail"
            >
              <HiChevronLeft size={28} />
            </button>

            {/* Image with swipe */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={`${categoryId}-${imageIndex}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={handleDragEnd}
                className="max-w-5xl max-h-[75vh] w-full flex items-center justify-center cursor-grab active:cursor-grabbing"
              >
                <img
                  src={currentThumb.src}
                  alt={currentThumb.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl shadow-black/50 select-none pointer-events-none"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>

            {/* Next Arrow (desktop) */}
            <button
              onClick={onNext}
              className="hidden sm:flex absolute right-4 lg:right-8 z-10 p-3 rounded-full bg-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-700/80 transition-all duration-200 backdrop-blur-sm"
              aria-label="Next thumbnail"
            >
              <HiChevronRight size={28} />
            </button>
          </div>

          {/* Bottom Title */}
          <div className="absolute bottom-0 left-0 right-0 text-center pb-6">
            <p className="text-white font-semibold text-lg">
              {currentThumb.title}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
