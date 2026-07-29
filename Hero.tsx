import { useEffect, useState } from 'react';
import { ArrowDown, Linkedin } from 'lucide-react';
import LinkedInProfiles from './LinkedInProfiles';

const roles = ['a Frontend Developer', 'a Problem Solver'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [linkedinOpen, setLinkedinOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20" id="hero">
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 2 }}
      >
        <div
          className="absolute animate-rotate-slow"
          style={{
            width: '600px', height: '600px',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            border: '1px solid rgba(124,58,237,0.06)',
            borderRadius: '50%',
          }}
        />
        <div
          className="absolute animate-rotate-reverse"
          style={{
            width: '400px', height: '400px',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            border: '1px solid rgba(192,192,210,0.04)',
            borderRadius: '50%',
          }}
        />
        <div
          className="absolute animate-rotate-slow"
          style={{
            width: '800px', height: '800px',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            border: '1px dashed rgba(124,58,237,0.04)',
            borderRadius: '50%',
            animationDuration: '40s',
          }}
        />
      </div>

      <div
        className="relative text-center max-w-4xl mx-auto"
        style={{ zIndex: 3 }}
      >
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-medium tracking-widest uppercase"
          style={{
            background: 'rgba(124,58,237,0.1)',
            border: '1px solid rgba(124,58,237,0.2)',
            color: '#a78bfa',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-green-400"
            style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
          />
          Available for hire
        </div>

        <h1
          className="font-black leading-none mb-6 tracking-tight"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s cubic-bezier(0.4,0,0.2,1) 0.4s',
          }}
        >
          <span className="gradient-text">AG STUDIO</span>
        </h1>

        <div
          className="text-xl md:text-2xl mb-8 h-8 flex items-center justify-center gap-2"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.4,0,0.2,1) 0.65s',
          }}
        >
          <span style={{ color: 'rgba(192,192,210,0.5)' }}>We're</span>
          <span
            className="font-semibold"
            style={{ color: '#c4b5fd', minWidth: '260px', textAlign: 'left' }}
          >
            {displayed}
            <span
              className="inline-block w-0.5 h-6 ml-0.5 align-middle"
              style={{
                background: '#7c3aed',
                animation: 'blink-cursor 1s ease-in-out infinite',
              }}
            />
          </span>
        </div>

        <p
          className="text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{
            color: 'rgba(192,192,210,0.55)',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.4,0,0.2,1) 0.85s',
          }}
        >
          Crafting digital experiences that blend elegant design with robust engineering.
          Passionate about turning complex problems into beautiful, intuitive solutions.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.4,0,0.2,1) 1.05s',
          }}
        >
          <a
            href="#projects"
            className="btn-primary text-white font-semibold px-8 py-3.5 rounded-full flex items-center gap-2"
          >
            View Our Work
            <ArrowDown size={16} />
          </a>
        </div>

        <div
          className="flex items-center justify-center gap-5"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s cubic-bezier(0.4,0,0.2,1) 1.2s',
          }}
        >
          <a
            href="#"
            aria-label="LinkedIn"
            onClick={(e) => {
              e.preventDefault();
              setLinkedinOpen(true);
            }}
            className="group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(192,192,210,0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(124,58,237,0.2)';
              e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(59,7,100,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              e.currentTarget.style.borderColor = 'rgba(192,192,210,0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Linkedin size={16} style={{ color: 'rgba(192,192,210,0.6)' }} />
          </a>
        </div>

        <div
          className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{
            opacity: mounted ? 0.5 : 0,
            transition: 'opacity 1s ease 1.5s',
          }}
        >
          <div
            className="w-px h-12"
            style={{
              background: 'linear-gradient(180deg, transparent, rgba(124,58,237,0.6))',
              animation: 'float 2s ease-in-out infinite',
            }}
          />
          <ArrowDown size={12} style={{ color: 'rgba(124,58,237,0.6)' }} />
        </div>
      </div>

      <LinkedInProfiles open={linkedinOpen} onClose={() => setLinkedinOpen(false)} />
    </section>
  );
}
