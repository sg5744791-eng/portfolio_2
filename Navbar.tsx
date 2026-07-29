import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(5,5,8,0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(124,58,237,0.12)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 font-bold text-sm"
            style={{
              background: 'linear-gradient(135deg, #3b0764, #7c3aed)',
              color: '#fff'
            }}
          >
            AG
          </div>
          <span
            className="font-bold text-lg tracking-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <span className="shimmer-text">AG</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-sm font-medium tracking-wide"
              style={{ color: active === l.href ? '#d0b8ff' : 'rgba(192,192,210,0.7)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary text-sm font-medium px-5 py-2 rounded-full text-white"
          >
            Hire Me
          </a>
        </div>

        <button
          className="md:hidden text-silver-light transition-colors duration-200 hover:text-purple-400"
          onClick={() => setOpen(!open)}
          style={{ color: 'rgba(192,192,210,0.8)' }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: open ? '300px' : '0',
          background: 'rgba(5,5,8,0.95)',
          backdropFilter: 'blur(24px)',
          borderBottom: open ? '1px solid rgba(124,58,237,0.12)' : 'none',
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium py-2 transition-colors duration-200"
              style={{ color: 'rgba(192,192,210,0.8)' }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary text-sm font-medium px-5 py-2.5 rounded-full text-white text-center"
            onClick={() => setOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
