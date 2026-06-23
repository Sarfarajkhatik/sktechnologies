import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-30 border-b transition-all duration-300 ${
        scrolled ? 'border-slate-800/10 bg-slate-950/95 backdrop-blur-xl shadow-sm' : 'border-transparent bg-transparent'
      }`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-white md:px-8">
        <a href="#top" className="text-lg font-semibold tracking-[0.24em] text-white">
          SK TECHNOLOGIES
        </a>

        <nav>
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="text-sm font-medium text-slate-300 transition hover:text-orange-400" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400"
        >
          Contact Now
        </a>
      </div>
    </motion.header>
  );
}

export default Header;
