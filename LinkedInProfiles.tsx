import { useEffect, useState } from 'react';
import { Linkedin, X, ExternalLink } from 'lucide-react';

export interface LinkedInProfile {
  name: string;
  role: string;
  url: string;
}

const profiles: LinkedInProfile[] = [
  {
    name: 'Sai Ganesh Kodidela',
    role: 'View LinkedIn Profile',
    url: 'https://www.linkedin.com/in/sai-ganesh-kodidela-64480b374?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    name: 'Aravinda Reddy Sudha',
    role: 'View LinkedIn Profile',
    url: 'https://www.linkedin.com/in/aravinda-reddy-sudha-9755a536b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
];

export default function LinkedInProfiles({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', onKey);
        document.body.style.overflow = '';
      };
    }
    setMounted(false);
  }, [open, onClose]);

  if (!open) return null;

  const openProfile = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-6"
      style={{ zIndex: 100 }}
      onClick={onClose}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(5,5,8,0.85)',
          backdropFilter: 'blur(8px)',
          opacity: mounted ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      <div
        className="relative w-full max-w-lg rounded-3xl p-8"
        style={{
          background: 'linear-gradient(160deg, rgba(26,5,51,0.95), rgba(13,13,24,0.98))',
          border: '1px solid rgba(124,58,237,0.3)',
          boxShadow: '0 30px 80px rgba(59,7,100,0.5)',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
          transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(192,192,210,0.12)',
            color: 'rgba(192,192,210,0.6)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(124,58,237,0.2)';
            e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)';
            e.currentTarget.style.color = '#a78bfa';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
            e.currentTarget.style.borderColor = 'rgba(192,192,210,0.12)';
            e.currentTarget.style.color = 'rgba(192,192,210,0.6)';
          }}
        >
          <X size={16} />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #3b0764, #7c3aed)' }}
          >
            <Linkedin size={20} className="text-white" />
          </div>
          <h2
            className="text-2xl font-bold tracking-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            LinkedIn Profiles
          </h2>
        </div>

        <p
          className="text-sm mb-7"
          style={{ color: 'rgba(192,192,210,0.55)' }}
        >
          Choose a profile to open on LinkedIn.
        </p>

        <div className="flex flex-col gap-4">
          {profiles.map((profile, idx) => (
            <button
              key={profile.url}
              onClick={() => openProfile(profile.url)}
              className="group flex items-center gap-4 rounded-2xl p-4 text-left transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(192,192,210,0.08)',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.4s cubic-bezier(0.4,0,0.2,1) ${0.15 + idx * 0.1}s, background 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(124,58,237,0.12)';
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(59,7,100,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.025)';
                e.currentTarget.style.borderColor = 'rgba(192,192,210,0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #1a0533, #3b0764)',
                  border: '1px solid rgba(124,58,237,0.3)',
                }}
              >
                <span
                  className="font-bold text-lg"
                  style={{ color: '#c4b5fd', fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {profile.name.charAt(0)}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <p
                  className="font-semibold text-base truncate"
                  style={{ color: '#e8e8f0' }}
                >
                  {profile.name}
                </p>
                <p
                  className="text-xs truncate"
                  style={{ color: 'rgba(192,192,210,0.5)' }}
                >
                  {profile.role}
                </p>
              </div>

              <ExternalLink
                size={16}
                className="shrink-0 transition-colors duration-300"
                style={{ color: 'rgba(192,192,210,0.4)' }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
