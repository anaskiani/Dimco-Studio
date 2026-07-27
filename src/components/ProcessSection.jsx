import { motion } from 'framer-motion';

export default function ProcessSection() {
  const steps = [
    {
      title: 'Turnaround time?',
      items: [
        'Usually 24 hours',
        'But can do within 8 hours in emergency cases'
      ]
    },
    {
      title: 'Process?',
      items: [
        'You send me video details',
        'I draft concept sketches',
        'You approve the concepts',
        'Payment received',
        'I design',
        'You upload',
        ';)'
      ]
    },
    {
      title: 'Do I get revision?',
      items: [
        "Of course, I offer unlimited revisions to ensure you're fully satisfied and I'm confident you'll love the result"
      ]
    }
  ];

  return (
    <section id="process" className="relative py-20 sm:py-28 bg-zinc-950/50">
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
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            The{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Procedure
            </span>
          </h2>
        </motion.div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-8 hover:border-zinc-700/50 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                {step.title}
              </h3>
              <ul className="space-y-3">
                {step.items.map((item, i) => (
                  <li key={i} className="text-zinc-400 flex items-start gap-3">
                    <span className="text-cyan-400 mt-1.5 text-xs">●</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
