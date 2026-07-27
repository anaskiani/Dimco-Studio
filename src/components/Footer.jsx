import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { siteConfig } from '../data/portfolio';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: FaInstagram, href: siteConfig.socials.instagram, label: 'Instagram' },
  { icon: FaXTwitter, href: siteConfig.socials.twitter, label: 'Twitter/X' },
];


export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-zinc-800/50">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center font-black text-xs text-zinc-950">
                AK
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-zinc-500 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-zinc-500 hover:text-cyan-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-zinc-500 hover:text-cyan-400 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Follow Me</h4>
            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800/50 text-center">
          <p className="text-xs text-zinc-600 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
