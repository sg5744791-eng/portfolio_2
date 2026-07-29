import { useEffect, useRef } from 'react';
import { ExternalLink, Github, Layers, Star, GitFork } from 'lucide-react';

const projects = [
  {
    title: 'Lumina Dashboard',
    description: 'A real-time analytics platform with AI-powered insights, custom data visualizations, and multi-tenant architecture serving 50k+ active users.',
    image: 'https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'TypeScript', 'D3.js', 'PostgreSQL', 'Redis'],
    stars: 248,
    forks: 43,
    live: '#',
    repo: '#',
    featured: true,
  },
  {
    title: 'Nexus E-Commerce',
    description: 'Full-stack e-commerce platform with seamless checkout, inventory management, and intelligent recommendation engine powered by machine learning.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Stripe', 'Prisma', 'AWS S3'],
    stars: 186,
    forks: 31,
    live: '#',
    repo: '#',
    featured: true,
  },
  {
    title: 'Orbit CMS',
    description: 'Headless content management system with a visual builder, real-time collaboration, and a powerful plugin ecosystem for developers.',
    image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Node.js', 'GraphQL', 'React', 'MongoDB'],
    stars: 312,
    forks: 67,
    live: '#',
    repo: '#',
    featured: false,
  },
  {
    title: 'Pulse Chat',
    description: 'End-to-end encrypted messaging app with voice/video calls, custom reactions, and smart message threading for teams.',
    image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['WebRTC', 'Socket.io', 'React Native', 'Node.js'],
    stars: 421,
    forks: 89,
    live: '#',
    repo: '#',
    featured: false,
  },
  {
    title: 'Aurora Design System',
    description: 'A comprehensive component library with 80+ accessible components, dark/light mode support, and detailed documentation.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Storybook', 'Figma', 'TypeScript'],
    stars: 534,
    forks: 112,
    live: '#',
    repo: '#',
    featured: false,
  },
  {
    title: 'Synapse AI',
    description: 'Developer toolkit for integrating LLMs into web apps with smart context management, streaming responses, and rate limiting.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['OpenAI', 'Python', 'FastAPI', 'React'],
    stars: 677,
    forks: 134,
    live: '#',
    repo: '#',
    featured: false,
  },
];

export default function Projects() {
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

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section ref={sectionRef} id="projects" className="relative py-32 px-6" style={{ zIndex: 3 }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase mb-4 tag">
            <Layers size={12} />
            Projects
          </div>
          <h2
            className="reveal delay-2 font-black text-4xl md:text-5xl tracking-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <span className="silver-text">Selected</span>
            <br />
            <span className="gradient-text">Work</span>
          </h2>
          <p className="reveal delay-3 mt-4 text-base max-w-xl mx-auto" style={{ color: 'rgba(192,192,210,0.5)' }}>
            A collection of projects that showcase our range of skills and passion for crafting excellent software.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <div
              key={project.title}
              className={`reveal delay-${i + 1} glass-card rounded-2xl overflow-hidden group`}
            >
              <div className="project-card-inner">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, transparent 30%, rgba(5,5,8,0.85) 100%)',
                    }}
                  />
                  <div className="absolute top-3 right-3">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, #3b0764, #7c3aed)',
                        color: 'rgba(255,255,255,0.9)',
                      }}
                    >
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-purple-300"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#e8e8f0' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(192,192,210,0.55)' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag text-xs px-2.5 py-1 rounded-full font-medium cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs" style={{ color: 'rgba(192,192,210,0.4)' }}>
                      <span className="flex items-center gap-1">
                        <Star size={12} style={{ color: '#fbbf24' }} />
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={12} />
                        {project.forks}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.repo}
                        className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 hover:text-purple-300"
                        style={{ color: 'rgba(192,192,210,0.5)' }}
                      >
                        <Github size={14} />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="btn-primary text-xs font-semibold px-4 py-2 rounded-full text-white flex items-center gap-1.5"
                      >
                        <ExternalLink size={12} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((project, i) => (
            <div
              key={project.title}
              className={`reveal delay-${i + 1} glass-card rounded-2xl overflow-hidden group`}
            >
              <div className="project-card-inner">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, transparent 20%, rgba(5,5,8,0.75) 100%)' }}
                  />
                </div>
                <div className="p-5">
                  <h3
                    className="text-base font-bold mb-2 transition-colors duration-300 group-hover:text-purple-300"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#e8e8f0' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-3 line-clamp-2" style={{ color: 'rgba(192,192,210,0.5)' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="tag text-xs px-2 py-0.5 rounded-full cursor-default" style={{ fontSize: '10px' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs" style={{ color: 'rgba(192,192,210,0.35)' }}>
                      <span className="flex items-center gap-0.5">
                        <Star size={10} style={{ color: '#fbbf24' }} />
                        {project.stars}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <a href={project.repo} className="transition-colors duration-200 hover:text-purple-400" style={{ color: 'rgba(192,192,210,0.4)' }}>
                        <Github size={14} />
                      </a>
                      <a href={project.live} className="transition-colors duration-200 hover:text-purple-400" style={{ color: 'rgba(192,192,210,0.4)' }}>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
