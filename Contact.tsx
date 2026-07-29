import { useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, MessageSquare, Clock } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'saiganeshkodidela@gmail.com', href: 'mailto:saiganeshkodidela@gmail.com' },
  { icon: Mail, label: 'Email', value: 'aravindareddysudha@gmail.com', href: 'mailto:aravindareddysudha@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 9440214064', href: 'tel:+919440214064' },
  { icon: Phone, label: 'Phone', value: '+91 8116811697', href: 'tel:+918116811697' },
  { icon: MapPin, label: 'Location', value: 'Andhra Pradesh, Kadapa', href: '#' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: '#' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
              (el as HTMLElement).classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 px-6" style={{ zIndex: 3 }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase mb-4 tag">
            <MessageSquare size={12} />
            Contact
          </div>
          <h2
            className="reveal delay-2 font-black text-4xl md:text-5xl tracking-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <span className="silver-text">Let's Build</span>
            <br />
            <span className="gradient-text">Something Great</span>
          </h2>
          <p className="reveal delay-3 mt-4 text-base max-w-xl mx-auto" style={{ color: 'rgba(192,192,210,0.5)' }}>
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-5 reveal-left">
          <div
            className="glass-card rounded-2xl p-6"
            style={{
              background: 'linear-gradient(135deg, rgba(59,7,100,0.12), rgba(124,58,237,0.06))',
              border: '1px solid rgba(124,58,237,0.12)',
            }}
          >
            <h3
              className="text-lg font-bold mb-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#e8e8f0' }}
            >
              Get in Touch
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(192,192,210,0.55)' }}>
              Whether you have a project to discuss, a question to ask, or just want to connect —
              my inbox is always open.
            </p>
          </div>

          {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
            <a
              key={label}
              href={href}
              className={`reveal delay-${i + 2} glass-card rounded-2xl p-4 flex items-center gap-4 group`}
              style={{ textDecoration: 'none' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, rgba(59,7,100,0.6), rgba(124,58,237,0.4))' }}
              >
                <Icon size={16} style={{ color: '#a78bfa' }} />
              </div>
              <div>
                <div className="text-xs font-medium mb-0.5" style={{ color: 'rgba(192,192,210,0.4)' }}>{label}</div>
                <div className="text-sm font-medium transition-colors duration-200 group-hover:text-purple-300" style={{ color: '#c0c0d8' }}>{value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
