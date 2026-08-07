import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiCheck, HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { siteConfig } from '../data/portfolio';

const steps = [
  { icon: '🖐', title: 'Say Hello', desc: 'You can reach me via X, Instagram, email, or WhatsApp at your convenience with your request.' },
  { icon: '💬', title: 'We Discuss Your Project', desc: 'We discuss your video topic, style, pricing, and turnaround time.' },
  { icon: '📜', title: 'You Send Payment', desc: 'Once we finalize the details, you send the payment to kick off the work.' },
  { icon: '✏️', title: 'We Start Designing', desc: 'I design a scroll-stopping, high-CTR thumbnail based on our discussion.' },
  { icon: '🔄', title: 'Revision if You Need', desc: 'If you want tweaks, I make adjustments to improve the selected concept.' },
];

export default function ProcessSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="process" className="relative py-20 sm:py-28 bg-dotted-grid overflow-hidden border-t border-slate-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-300 bg-amber-50 text-slate-800 text-xs font-bold mb-4 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-amber-400" /> Process
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-16">
          Here Is How <br /> We Proceed
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 mb-16 relative">
          {steps.map((step, index) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-2xl shadow-xs mb-4">{step.icon}</div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[200px]">{step.desc}</p>
              {index < steps.length - 1 && (
                <>
                  <div className="hidden xl:flex absolute top-8 -right-5 z-10 w-9 h-9 items-center justify-center rounded-full border-2 border-white bg-amber-400 text-slate-900 shadow-md pointer-events-none">
                    <HiArrowRight size={20} strokeWidth={2.5} />
                  </div>
                  <div className="flex xl:hidden absolute -bottom-7 left-1/2 z-10 w-9 h-9 -translate-x-1/2 rotate-90 items-center justify-center rounded-full border-2 border-white bg-amber-400 text-slate-900 shadow-md pointer-events-none">
                    <HiArrowRight size={20} strokeWidth={2.5} />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-flex items-center">
          <button onClick={handleCopyEmail} className="flex items-center gap-3 px-6 py-3.5 rounded-full border border-amber-300 bg-white hover:bg-amber-50 text-slate-900 font-bold text-sm shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer" title="Click to copy email address">
            <span>{siteConfig.email}</span>
            <span className="text-slate-400 hover:text-slate-900">{copied ? <HiCheck size={18} className="text-emerald-600 font-bold" /> : <HiOutlineDocumentDuplicate size={18} />}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
