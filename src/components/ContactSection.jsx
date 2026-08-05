import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiMail, HiPhone, HiCheck, HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { siteConfig } from '../data/portfolio';

const socialLinks = [
  { icon: FaInstagram, href: siteConfig.socials.instagram, label: 'Instagram', color: 'hover:text-pink-400 hover:border-pink-500/30' },
  { icon: FaXTwitter, href: siteConfig.socials.twitter, label: 'Twitter/X', color: 'hover:text-zinc-100 hover:border-zinc-500/30' },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(siteConfig.socials.discordUsername);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(139,92,246,0.06)_0%,_transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-semibold text-cyan-400 tracking-widest uppercase mb-4 block">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Let's{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Ready to boost your channel with stunning thumbnails? Get in touch!
          </p>
        </motion.div>

        {/* Email, Phone & Discord */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/50 hover:border-cyan-500/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
              <HiMail size={20} />
            </div>
            <span className="text-white font-medium text-sm">{siteConfig.email}</span>
          </a>

          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/50 hover:border-violet-500/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 group-hover:bg-violet-500/20 transition-colors">
              <HiPhone size={20} />
            </div>
            <span className="text-white font-medium text-sm">{siteConfig.phone}</span>
          </a>

          {/* Discord copy button */}
          <button
            onClick={handleCopyDiscord}
            className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/50 hover:border-indigo-500/40 transition-all duration-300 group relative cursor-pointer"
            title="Click to copy Discord username"
          >
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
              <FaDiscord size={20} />
            </div>
            <div className="text-left">
              <span className="block text-white font-medium text-sm">{siteConfig.socials.discordUsername}</span>
              <span className="block text-[11px] text-zinc-500">
                {copied ? 'Copied to clipboard!' : 'Click to copy username'}
              </span>
            </div>
            <div className="ml-1 text-zinc-400 group-hover:text-indigo-400 transition-colors">
              {copied ? <HiCheck size={18} className="text-green-400" /> : <HiOutlineDocumentDuplicate size={18} />}
            </div>
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm font-semibold text-zinc-400 mb-5">Find me on</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-14 h-14 rounded-xl bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center text-zinc-400 ${social.color} transition-all duration-300 hover:scale-110`}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
