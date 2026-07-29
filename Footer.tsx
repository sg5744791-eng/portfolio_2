import { useState } from 'react';
import { Code2, Linkedin, Heart } from 'lucide-react';
import LinkedInProfiles from './LinkedInProfiles';

export default function Footer() {
  const [linkedinOpen, setLinkedinOpen] = useState(false);
  return (
    <footer className="relative py-12 px-6" style={{ zIndex: 3 }}>
      <div className="section-divider mb-12" />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #3b0764, #7c3aed)' }}
            >
              <Code2 size={14} className="text-white" />
            </div>
            <span
              className="font-bold tracking-tight shimmer-text"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              AG Studio
            </span>
          </div>

          <p className="text-xs flex items-center gap-1.5" style={{ color: 'rgba(192,192,210,0.35)' }}>
            Crafted with
            <Heart size={10} style={{ color: '#7c3aed', fill: '#7c3aed' }} />
            by AG STUDIO &mdash; {new Date().getFullYear()}
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setLinkedinOpen(true);
              }}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(192,192,210,0.08)',
                color: 'rgba(192,192,210,0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(124,58,237,0.15)';
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.35)';
                e.currentTarget.style.color = '#a78bfa';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderColor = 'rgba(192,192,210,0.08)';
                e.currentTarget.style.color = 'rgba(192,192,210,0.4)';
              }}
            >
              <Linkedin size={13} />
            </a>
          </div>
        </div>
      </div>

      <LinkedInProfiles open={linkedinOpen} onClose={() => setLinkedinOpen(false)} />
    </footer>
  );
}
