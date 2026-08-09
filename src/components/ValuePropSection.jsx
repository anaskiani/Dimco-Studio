import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

export default function ValuePropSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-dotted-grid overflow-hidden border-t border-slate-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Your Videos Are Great <br />
            But <span className="underline decoration-amber-400 decoration-wavy decoration-2">“No” VIEWS?</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Don't Let Bad Thumbnails Hold You Back! Every creator wants more views, more engagement, more growth but the harsh truth? Great content alone isn't enough.
          </p>
        </motion.div>

        {/* 3 Color Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 text-left">
          
          {/* Card 1: Beige / Yellow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-amber-50/90 border border-amber-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 min-h-[380px]"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-8">
                If people don't click, they'll never watch.
              </h3>
            </div>

            {/* Thumbnail Mockup Box */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md border-2 border-white bg-slate-900 group">
              <img
                src="/images/avatar.jpeg"
                alt="Dimco Studio thumbnail example"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <FaPlay size={16} className="ml-1 text-slate-900" />
                </div>
              </div>
              <div className="absolute top-3 left-3 bg-red-600 text-white font-extrabold text-xs px-2.5 py-1 rounded-md shadow-xs">
                Conspiracy?
              </div>
            </div>
          </motion.div>

          {/* Card 2: Lavender / Blue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-indigo-50/90 border border-indigo-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 min-h-[380px]"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-8">
                If your thumbnail blends in, your video disappears.
              </h3>
            </div>

            {/* 3x3 Grid showing center highlighted */}
            <div className="grid grid-cols-3 gap-2 bg-indigo-100/60 p-4 rounded-2xl border border-indigo-200/50">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`aspect-video rounded-lg ${
                    i === 4
                      ? 'bg-amber-400 ring-2 ring-amber-500 shadow-md scale-105 z-10 overflow-hidden flex items-center justify-center'
                      : 'bg-indigo-200/70'
                  }`}
                >
                  {i === 4 && (
                    <img
                      src="/images/avatar.jpeg"
                      alt="Dimco Studio"
                      className="w-full h-full object-cover object-center"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Light Green */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-emerald-50/90 border border-emerald-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 min-h-[380px]"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-8">
                If your title doesn't spark curiosity, they scroll past.
              </h3>
            </div>

            {/* Title Bounding Box Editor Mockup */}
            <div className="bg-white p-6 rounded-2xl border-2 border-purple-500 relative flex items-center justify-center shadow-xs">
              {/* Bounding box corner handles */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-purple-600 border border-white" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-purple-600 border border-white" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-purple-600 border border-white" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-purple-600 border border-white" />
              
              <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Title
              </span>
            </div>
          </motion.div>

        </div>

        {/* Bottom Explanatory Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Big creators invest in their thumbnails because they know the first impression makes or breaks a video. You've put in the effort—don't let a bad thumbnail cost you thousands of views.
        </motion.p>

        {/* Callout Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-amber-300 bg-amber-50 text-slate-900 font-extrabold text-sm sm:text-base shadow-xs"
        >
          <span>⏳</span>
          <span>Get a high-performing thumbnail today before your competition beats you to it!</span>
        </motion.div>

      </div>
    </section>
  );
}
