import { motion } from 'framer-motion';
import { FaBriefcase, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiMail } from 'react-icons/hi';
import { siteConfig } from '../data/portfolio';

const socialLinks = [
  { icon: FaBriefcase, href: siteConfig.socials.ytjobs, label: 'YT Jobs', color: 'hover:text-amber-600 hover:border-amber-300' },
  { icon: FaXTwitter, href: siteConfig.socials.twitter, label: 'X', color: 'hover:text-slate-900 hover:border-slate-400' },
  { icon: FaInstagram, href: siteConfig.socials.instagram, label: 'Instagram', color: 'hover:text-pink-500 hover:border-pink-300' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 bg-dotted-grid overflow-hidden border-t border-slate-100">
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-amber-300 bg-amber-50 text-slate-800 text-xs font-bold mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-amber-400" /> Contact Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
            Let's Make Your Videos <br />
            <span className="inline-block mt-2 bg-amber-400 text-slate-900 px-3 py-1 rounded-xl">Go Viral Together</span>
          </h2>
          <p className="text-slate-600 max-w-md mx-auto text-base font-medium">
            Ready to boost your YouTube channel CTR with high-converting thumbnail designs?
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-amber-400 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-slate-900 group-hover:bg-amber-400 transition-colors"><HiMail size={20} /></div>
            <span className="text-slate-900 font-bold text-sm">{siteConfig.email}</span>
          </a>
          <a href={siteConfig.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-amber-400 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-slate-900 group-hover:bg-amber-400 transition-colors"><FaWhatsapp size={20} /></div>
            <div className="text-left">
              <span className="block text-slate-900 font-bold text-sm">WhatsApp</span>
              <span className="block text-[11px] text-slate-500 font-medium">{siteConfig.phone}</span>
            </div>
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-4">Connect On Social Media</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className={`w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-slate-700 ${social.color} transition-all duration-300 hover:scale-110`}>
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
