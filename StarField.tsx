import { useMemo } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function StarField() {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.6 + 0.1,
    }));
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 12,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,7,100,0.55) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 100% 50%, rgba(26,5,51,0.4) 0%, transparent 50%),
            radial-gradient(ellipse 50% 50% at 0% 100%, rgba(45,10,78,0.35) 0%, transparent 50%),
            linear-gradient(180deg, #050508 0%, #0a0812 40%, #070510 70%, #050508 100%)
          `
        }}
      />

      <div
        className="absolute hero-orb"
        style={{
          width: '700px', height: '700px',
          top: '-200px', left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(59,7,100,0.5) 0%, rgba(26,5,51,0.3) 40%, transparent 70%)',
          animationDelay: '0s',
        }}
      />
      <div
        className="absolute hero-orb"
        style={{
          width: '500px', height: '500px',
          bottom: '10%', right: '-100px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, rgba(59,7,100,0.15) 40%, transparent 70%)',
          animationDelay: '3s',
        }}
      />
      <div
        className="absolute hero-orb"
        style={{
          width: '400px', height: '400px',
          top: '40%', left: '-80px',
          background: 'radial-gradient(circle, rgba(45,10,78,0.35) 0%, transparent 70%)',
          animationDelay: '5s',
        }}
      />

      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {stars.map((star) => (
          <circle
            key={star.id}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.size}
            fill={Math.random() > 0.7 ? '#c0c0d8' : '#ffffff'}
            style={{
              opacity: star.opacity,
              animation: `star-twinkle ${star.duration}s ${star.delay}s ease-in-out infinite`,
            }}
          />
        ))}
      </svg>

      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            bottom: '-10px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: Math.random() > 0.5 ? 'rgba(192,192,210,0.5)' : 'rgba(124,58,237,0.6)',
            animation: `particle-rise ${p.duration}s ${p.delay}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
