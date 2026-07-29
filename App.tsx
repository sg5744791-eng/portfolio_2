import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import StarField from './components/StarField';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${cursorPos.x}px`;
      cursorRef.current.style.top = `${cursorPos.y}px`;
    }
  }, [cursorPos]);

  return (
    <div className="relative min-h-screen" style={{ background: '#050508' }}>
      <div
        ref={cursorRef}
        className="cursor-glow"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      <StarField />

      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />

        <main>
          <Hero />

          <div className="section-divider" />

          <About />

          <div className="section-divider" />

          <Skills />

          <div className="section-divider" />

          <Projects />

          <div className="section-divider" />

          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
