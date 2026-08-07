import { motion } from 'framer-motion';
import { testimonials } from '../data/portfolio';

function TestimonialCard({ item }) {
  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col gap-3 text-left">
      <div className="flex items-center gap-3">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-10 h-10 rounded-full object-cover shadow-xs border border-slate-100"
        />
        <h4 className="font-extrabold text-slate-900 text-sm">
          {item.name}
        </h4>
      </div>
      <p className="text-slate-600 text-xs font-medium leading-relaxed">
        {item.text}
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  // Split testimonials into 3 column sets
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

        {/* 3-Column Vertical Auto-Scrolling Slider Container */}
        <div className="relative h-[480px] overflow-hidden">
          {/* Top & Bottom Gradient Fades */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            
            {/* Column 1: Vertical Up */}
            <div className="flex flex-col gap-4 animate-marquee-vertical-up hover:[animation-play-state:paused]">
              {col1.map((item, i) => (
                <TestimonialCard key={`c1-${i}`} item={item} />
              ))}
            </div>

            {/* Column 2: Vertical Down */}
            <div className="hidden md:flex flex-col gap-4 animate-marquee-vertical-down hover:[animation-play-state:paused]">
              {col2.map((item, i) => (
                <TestimonialCard key={`c2-${i}`} item={item} />
              ))}
            </div>

            {/* Column 3: Vertical Up */}
            <div className="hidden md:flex flex-col gap-4 animate-marquee-vertical-up hover:[animation-play-state:paused]">
              {col3.map((item, i) => (
                <TestimonialCard key={`c3-${i}`} item={item} />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
