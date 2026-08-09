import { motion } from 'framer-motion';

export default function AboutSection() {
  const handleCTA = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-dotted-grid overflow-hidden border-t border-slate-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left"
          >
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-300 bg-amber-50 text-slate-800 text-xs font-bold mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>About me</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
              Who's Making <br />
              Your Thumbnails?
            </h2>

            {/* Paragraphs */}
            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-4 max-w-lg">
              Welcome to <span className="font-extrabold text-slate-900">Dimco Studio</span>, where thumbnails are designed to make people stop, look, and click.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-lg">
              I've worked with YouTube creators to create scroll-stopping thumbnails. My goal? To make your content impossible to ignore.
            </p>

            {/* CTA Button */}
            <button
              onClick={handleCTA}
              className="px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-base shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              Get Your Thumbnail Done!
            </button>
          </motion.div>

          {/* Right Illustration Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center p-6"
          >
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              {/* Outer Decorative Orbit Lines & Icons */}
              <div className="absolute inset-0 rounded-full border border-dashed border-amber-300/60 animate-[spin_40s_linear_infinite]" />
              
              {/* Floating Orbit Icons */}
              <div className="absolute top-4 left-6 text-amber-500 text-2xl font-bold bg-white p-3 rounded-2xl shadow-xs border border-slate-100">⭐</div>
              <div className="absolute top-12 right-4 text-amber-500 text-2xl font-bold bg-white p-3 rounded-2xl shadow-xs border border-slate-100">🎨</div>
              <div className="absolute bottom-8 left-4 text-amber-500 text-2xl font-bold bg-white p-3 rounded-2xl shadow-xs border border-slate-100">🖌️</div>
              <div className="absolute bottom-4 right-10 text-amber-500 text-2xl font-bold bg-white p-3 rounded-2xl shadow-xs border border-slate-100">🖼️</div>

              {/* Main Character Illustration Card */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl bg-amber-50/80 border border-amber-200 shadow-lg p-6 flex flex-col items-center justify-center text-center relative overflow-hidden backdrop-blur-xs">
                <div className="w-28 h-28 rounded-full bg-amber-400 p-1 mb-4 shadow-md flex items-center justify-center">
                  <img
                    src="/images/avatar.jpeg"
                    alt="Dimco Studio designer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-1">Dimco Studio</h3>
                <p className="text-xs font-bold text-amber-600 bg-amber-100 px-3 py-1 rounded-full border border-amber-200 mb-2">
                  Thumbnail Specialist
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  Crafting high-CTR visuals daily
                </p>
              </div>

              {/* Shadow Base */}
              <div className="absolute -bottom-4 w-48 h-4 rounded-[100%] bg-slate-900/10 blur-xs" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
