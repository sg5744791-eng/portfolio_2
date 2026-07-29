import { useEffect, useRef } from 'react';
import { User, MapPin, Calendar, Coffee, Award, Zap } from 'lucide-react';

const stats = [
  { value: '5+', label: 'Years Experience', icon: Calendar },
  { value: '80+', label: 'Projects Completed', icon: Award },
  { value: '40+', label: 'Happy Clients', icon: User },
  { value: '∞', label: 'Cups of Coffee', icon: Coffee },
];

export default function About() {
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
    <section ref={sectionRef} id="about" className="relative py-32 px-6" style={{ zIndex: 3 }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase mb-4 tag">
            <User size={12} />
            About Me
          </div>
          <h2
            className="reveal delay-2 font-black text-4xl md:text-5xl tracking-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <span className="silver-text">The Person Behind</span>
            <br />
            <span className="gradient-text">The Code</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="reveal-left">
            <div className="relative">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(124,58,237,0.15)',
                  padding: '3px',
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59,7,100,0.5), rgba(124,58,237,0.3), rgba(192,192,210,0.1), rgba(124,58,237,0.3))',
                    backgroundSize: '300% 300%',
                    animation: 'gradient-shift 5s ease infinite',
                  }}
                />
                <img
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="AG STUDIO - Developer"
                  className="relative w-full h-80 object-cover rounded-xl"
                  style={{ objectPosition: 'center top' }}
                />
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: 'linear-gradient(180deg, transparent 50%, rgba(5,5,8,0.7) 100%)',
                  }}
                />
              </div>

              <div
                className="absolute -bottom-5 -right-5 glass-card rounded-2xl p-4 animate-float"
                style={{ border: '1px solid rgba(124,58,237,0.2)' }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #3b0764, #7c3aed)' }}
                  >
                    <Zap size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold" style={{ color: '#c0c0d8' }}>Current Status</div>
                    <div className="text-xs flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" style={{ boxShadow: '0 0 6px #4ade80' }} />
                      <span style={{ color: 'rgba(192,192,210,0.6)' }}>Open to opportunities</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-5 -left-5 glass-card rounded-2xl p-3 animate-float2"
                style={{ border: '1px solid rgba(192,192,210,0.1)' }}
              >
                <div className="flex items-center gap-2">
                  <MapPin size={14} style={{ color: '#a78bfa' }} />
                  <span className="text-xs" style={{ color: 'rgba(192,192,210,0.7)' }}>Andhra Pradesh, Kadapa</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-right space-y-6">
            <h3
              className="text-2xl font-bold"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#e8e8f0' }}
            >
              Building things that matter
            </h3>
            <p className="leading-relaxed text-base" style={{ color: 'rgba(192,192,210,0.6)' }}>
              I'm a passionate full-stack developer with a love for creating elegant, performant web experiences.
              With over 5 years in the industry, I've had the pleasure of working with startups and enterprises alike,
              helping them craft digital products that their users love.
            </p>
            <p className="leading-relaxed text-base" style={{ color: 'rgba(192,192,210,0.6)' }}>
              When I'm not pushing pixels or wrangling APIs, you'll find me contributing to open source,
              exploring new technologies, or mentoring aspiring developers. I believe great software is as much
              about the human experience as it is about the technical implementation.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Figma'].map((tech) => (
                <span key={tech} className="tag text-xs px-3 py-1.5 rounded-full font-medium cursor-default">
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-4 flex gap-4">
              <a href="#contact" className="btn-primary text-white text-sm font-semibold px-6 py-3 rounded-full">
                Let's Talk
              </a>
              <a href="#projects" className="btn-outline text-sm font-semibold px-6 py-3 rounded-full" style={{ color: 'rgba(192,192,210,0.8)' }}>
                My Projects
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <div
              key={label}
              className={`reveal delay-${i + 1} glass-card rounded-2xl p-6 text-center`}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: 'linear-gradient(135deg, rgba(59,7,100,0.6), rgba(124,58,237,0.4))' }}
              >
                <Icon size={18} style={{ color: '#a78bfa' }} />
              </div>
              <div
                className="text-3xl font-black mb-1"
                style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#e8e8f0' }}
              >
                {value}
              </div>
              <div className="text-xs" style={{ color: 'rgba(192,192,210,0.5)' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
