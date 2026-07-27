import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { siteConfig } from '../data/portfolio';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Gallery', href: '/gallery', isRoute: true },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center font-black text-sm text-zinc-950">
              AK
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </a>
              )
            )}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-4 px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
              style={{ top: 0 }}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-zinc-950/95 backdrop-blur-xl border-l border-zinc-800/50 md:hidden flex flex-col pt-20 px-6"
            >
              {navLinks.map((link, i) =>
                link.isRoute ? (
                  <motion.div key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                    <Link
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 text-lg font-medium text-zinc-300 hover:text-cyan-400 transition-colors border-b border-zinc-800/50"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="py-4 text-lg font-medium text-zinc-300 hover:text-cyan-400 transition-colors border-b border-zinc-800/50"
                  >
                    {link.label}
                  </motion.a>
                )
              )}
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 px-6 py-3 text-center font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white"
              >
                Hire Me
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
