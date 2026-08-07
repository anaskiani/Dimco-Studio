import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { siteConfig } from '../data/portfolio';

const navLinks = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-xs' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center group"
              whileHover={{ scale: 1.02 }}
            >
              <img src="/dimco-studio-logo.svg" alt={siteConfig.name} className="h-11 w-auto" />
            </motion.a>

            {/* Desktop Nav - Clean Pill Container */}
            <div className="hidden md:flex items-center gap-1 border border-slate-200 bg-white/90 backdrop-blur-md rounded-full px-5 py-1.5 shadow-xs">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100/70"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100/70"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="ml-2 px-5 py-1.5 text-sm font-bold rounded-full bg-amber-400 text-slate-900 hover:bg-amber-300 transition-all shadow-xs hover:shadow-md"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors rounded-xl bg-slate-100 border border-slate-200"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs md:hidden"
              style={{ zIndex: 60 }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white border-l border-slate-200 md:hidden flex flex-col pt-6 px-6 shadow-2xl"
              style={{ zIndex: 70 }}
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="self-end p-2 mb-6 text-slate-500 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-100"
                aria-label="Close menu"
              >
                <HiX size={24} />
              </button>
              {navLinks.map((link, i) =>
                link.isRoute ? (
                  <motion.div key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
                    <Link
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 text-base font-semibold text-slate-700 hover:text-amber-500 transition-colors border-b border-slate-100"
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
                    transition={{ delay: i * 0.08 }}
                    className="py-4 text-base font-semibold text-slate-700 hover:text-amber-500 transition-colors border-b border-slate-100"
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
                transition={{ delay: 0.3 }}
                className="mt-6 px-6 py-3 text-center font-bold rounded-xl bg-amber-400 text-slate-900 hover:bg-amber-300 shadow-md"
              >
                Hire Me
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
