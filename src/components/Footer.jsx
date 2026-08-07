import { FaBriefcase, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { siteConfig } from '../data/portfolio';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Clients', href: '#clients' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: FaBriefcase, href: siteConfig.socials.ytjobs, label: 'YT Jobs' },
  { icon: FaXTwitter, href: siteConfig.socials.twitter, label: 'X' },
  { icon: FaInstagram, href: siteConfig.socials.instagram, label: 'Instagram' },
  { icon: FaWhatsapp, href: siteConfig.socials.whatsapp, label: 'WhatsApp' },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <img src="/dimco-studio-logo.svg" alt={siteConfig.name} className="h-9 w-auto mb-4" />
            <p className="text-xs text-slate-500 leading-relaxed font-medium max-w-xs">{siteConfig.description}</p>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}><a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-xs text-slate-600 hover:text-amber-500 font-semibold transition-colors duration-200">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-xs">
              <li><a href={`mailto:${siteConfig.email}`} className="text-slate-600 hover:text-amber-500 font-semibold transition-colors">Email: {siteConfig.email}</a></li>
              <li><a href={siteConfig.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-amber-500 font-semibold transition-colors">WhatsApp: {siteConfig.phone}</a></li>
              <li><a href={siteConfig.socials.ytjobs} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-amber-500 font-semibold transition-colors">YT Jobs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-4">Follow Me</h4>
            <div className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-amber-400 hover:border-amber-400 transition-all duration-300"><social.icon size={16} /></a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200/80 text-center">
          <p className="text-xs text-slate-500 font-semibold">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
