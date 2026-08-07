import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';

const faqs = [
  {
    question: '1. How do I start working with you?',
    answer: "Just send me a message with your channel, video idea, or thumbnail needs. I'll review your content, suggest a direction, and we can start right away with a simple workflow."
  },
  {
    question: '2. How will we talk to each other?',
    answer: 'We can communicate via X, email, Instagram, or WhatsApp—whatever is most convenient for you.'
  },
  {
    question: '3. How do I ask for a Thumbnail?',
    answer: "Simply send over your video topic, draft title, or any references you like. I'll take it from there and craft high-CTR options."
  },
  {
    question: '4. How many times can I ask for changes?',
    answer: "I offer unlimited revisions to ensure you're 100% satisfied and confident that your thumbnail will perform well."
  },
  {
    question: '5. What is A/B testing, and how do you count different Thumbnails?',
    answer: 'A/B testing lets you upload multiple thumbnail options to YouTube so the algorithm can automatically measure which version earns a higher click-through rate (CTR).'
  },
  {
    question: '6. How do you make thumbnails and titles?',
    answer: 'I analyze top-performing videos in your niche, focusing on strong visual hooks, color contrast, facial expressions, and curiosity-inducing titles that compel viewers to click.'
  },
  {
    question: '7. Can you make new thumbnails for old videos?',
    answer: 'Yes! Updating thumbnails on existing videos is one of the fastest ways to revive dormant content and generate thousands of new views.'
  },
  {
    question: '8. How long does it take to get a thumbnail?',
    answer: 'Standard turnaround time is 24 hours. Rush delivery within 8 hours is also available for urgent video releases.'
  },
  {
    question: '9. Do you do A/B testing to make thumbnails better?',
    answer: 'Yes, I can design multiple distinct thumbnail variants optimized specifically for YouTube A/B testing.'
  },
  {
    question: '10. How much do I need to do?',
    answer: "Very little! Just share your video concept or title ideas, and I'll take care of all the creative strategy and graphic design."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-dotted-grid overflow-hidden border-t border-slate-100">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Tag Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-300 bg-amber-50 text-slate-800 text-xs font-bold mb-4 shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>FAQ</span>
        </motion.div>

        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-12"
        >
          Got Any <br />
          Questions?
        </motion.h2>

        {/* Accordion List */}
        <div className="space-y-3 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={`bg-white border rounded-2xl transition-all duration-200 overflow-hidden shadow-xs ${
                  isOpen ? 'border-amber-400 ring-2 ring-amber-400/20' : 'border-slate-200/90 hover:border-amber-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-extrabold text-slate-900 text-sm sm:text-base cursor-pointer focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <div className={`ml-4 w-7 h-7 rounded-full flex items-center justify-center text-slate-500 transition-colors ${isOpen ? 'bg-amber-100 text-amber-600' : 'bg-slate-100'}`}>
                    {isOpen ? <HiMinus size={16} /> : <HiPlus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
