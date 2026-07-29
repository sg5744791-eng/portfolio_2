import { useEffect, useRef } from 'react';
import { Layers, Code, Server, Wrench } from 'lucide-react';

const skillGroups = [
  {
    category: 'Frontend',
    icon: Code,
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 80 },
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'GraphQL', level: 78 },
      { name: 'Redis', level: 72 },
    ],
  },
  {
    category: 'Design',
    icon: Layers,
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'UI/UX Design', level: 80 },
      { name: 'Design Systems', level: 82 },
      { name: 'Prototyping', level: 75 },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: Wrench,
    skills: [
      { name: 'AWS / Vercel', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'CI/CD Pipelines', level: 78 },
      { name: 'Git / GitHub', level: 95 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const bar = ref.current?.querySelector('.skill-bar-fill') as HTMLElement;
          if (bar) {
            setTimeout(() => bar.classList.add('animate'), delay);
          }
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium" style={{ color: 'rgba(192,192,210,0.8)' }}>{name}</span>
        <span className="text-xs font-semibold" style={{ color: '#a78bfa' }}>{level}%</span>
      </div>
      <div className="skill-bar-track h-1.5">
        <div
          className="skill-bar-fill h-full"
          style={{ '--target-width': `${level}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
}

export default function Skills() {
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
      { threshold: 0.05, rootMargin: '0px 0px -60px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="relative py-32 px-6" style={{ zIndex: 3 }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase mb-4 tag">
            <Layers size={12} />
            Skills
          </div>
          <h2
            className="reveal delay-2 font-black text-4xl md:text-5xl tracking-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <span className="silver-text">My Technical</span>
            <br />
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="reveal delay-3 mt-4 text-base max-w-xl mx-auto" style={{ color: 'rgba(192,192,210,0.5)' }}>
            A curated set of tools and technologies I've mastered over years of building production applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map(({ category, icon: Icon, skills }, gi) => (
            <div
              key={category}
              className={`reveal delay-${gi + 1} glass-card rounded-2xl p-8`}
            >
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #3b0764, #7c3aed)' }}
                >
                  <Icon size={18} className="text-white" />
                </div>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#e8e8f0' }}
                >
                  {category}
                </h3>
              </div>
              <div className="space-y-5">
                {skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={gi * 100 + si * 150}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 reveal">
          <div
            className="glass-card rounded-2xl p-8 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(59,7,100,0.15), rgba(124,58,237,0.08))',
              border: '1px solid rgba(124,58,237,0.15)',
            }}
          >
            <p className="text-sm font-medium mb-4" style={{ color: 'rgba(192,192,210,0.5)' }}>
              ALSO FAMILIAR WITH
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Python', 'Rust', 'Go', 'Vue.js', 'Svelte', 'MongoDB', 'Kubernetes', 'Terraform', 'Jest', 'Cypress', 'Storybook', 'Prisma'].map((tech) => (
                <span key={tech} className="tag text-xs px-3 py-1.5 rounded-full font-medium cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
