import { useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/portfolio';

function TestimonialAvatar({ item }) {
  const [imageUnavailable, setImageUnavailable] = useState(false);
  const initials = item.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  if (imageUnavailable) {
    return (
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xs font-bold text-white shadow-xs border border-slate-100">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={item.avatar}
      alt={item.name}
      onError={() => setImageUnavailable(true)}
      className="w-10 h-10 rounded-full object-cover shadow-xs border border-slate-100"
    />
  );
}

function TestimonialCard({ item, className = '' }) {
  return (
    <div className={`bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col gap-3 text-left ${className}`}>
      <div className="flex items-center gap-3">
        <TestimonialAvatar item={item} />
        <div>
          <h4 className="font-extrabold text-slate-900 text-sm">
            {item.name}
          </h4>
          <p className="text-xs font-medium text-slate-400">{item.handle}</p>
        </div>
      </div>
      <p className="text-slate-600 text-xs font-medium leading-relaxed">
        {item.text}
      </p>
      <span className="w-fit rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-amber-700 border border-amber-200">
        {item.recommendationLevel}
      </span>
    </div>
  );
}

export default function TestimonialsSection() {
  const desktopTestimonials = [...testimonials, ...testimonials];

  // Mobile vertical marquee data
  const col1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
  const col2 = [...testimonials.slice(3, 6), ...testimonials.slice(3, 6)];
  const col3 = [...testimonials.slice(5), ...testimonials.slice(0, 2), ...testimonials.slice(5), ...testimonials.slice(0, 2)];

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 bg-dotted-grid overflow-hidden border-t border-slate-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Tag Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-300 bg-amber-50 text-slate-800 text-xs font-bold mb-4 shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>Testimonials</span>
        </motion.div>

        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-16"
        >
          What Our <br />
          Client Says
        </motion.h2>

        {/* Desktop horizontal marquee */}
        <div className="hidden md:block overflow-hidden">
          <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused] py-2">
            {desktopTestimonials.map((item, index) => (
              <TestimonialCard key={`desktop-${item.id}-${index}`} item={item} className="w-80 flex-none" />
            ))}
          </div>
        </div>

        {/* Mobile vertical marquee */}
        <div className="relative h-[480px] overflow-hidden md:hidden">
          {/* Top & Bottom Gradient Fades */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

          <div className="flex flex-col gap-4 animate-marquee-vertical-up hover:[animation-play-state:paused]">
            
            {/* Column 1: Vertical Up */}
            {col1.map((item, index) => (
              <TestimonialCard key={`mobile-${item.id}-${index}`} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
