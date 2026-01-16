
import React, { useState, useEffect, useRef } from 'react';
import { SiteData } from '../types';

interface HeroProps {
  data: SiteData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setMousePos({ x, y });
    }
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Dramatic Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-1000"
        style={{ 
          backgroundImage: `url(${data.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.35,
          filter: 'grayscale(30%)'
        }}
      />

      {/* Dynamic Interaction: Spotlight Overlay */}
      <div 
        className="absolute inset-0 z-1 pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(124, 58, 237, 0.15) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 1) 100%)`
        }}
      />

      {/* Decorative Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-2" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-2" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-8 px-5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-[10px] font-bold uppercase tracking-[0.3em] animate-fade-in">
          Premium Identity & Web Experience
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-10 leading-[0.9] tracking-tighter drop-shadow-2xl">
          {data.heroTitle.split(' ').map((word, i) => (
            <span key={i} className="inline-block hover:scale-105 transition-transform duration-500 cursor-default">
              <span className={word.includes("Chokho") ? 'text-purple-gradient' : 'text-white'}>
                {word}
              </span>
              <span className="inline-block w-2 sm:w-4"></span>
            </span>
          ))}
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-14 max-w-2xl mx-auto font-light leading-relaxed tracking-tight">
          {data.heroSubtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#portfolio"
            className="group relative px-12 py-5 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold text-lg transition-all overflow-hidden shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)]"
          >
            <span className="relative z-10">포트폴리오 보기</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a 
            href="#contact"
            className="px-12 py-5 bg-transparent border border-gray-800 hover:border-purple-500 text-white rounded-full font-bold text-lg transition-all backdrop-blur-sm"
          >
            상담 신청하기
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-purple-500 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-line" />
        </div>
      </div>

      <style>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scroll-line {
          animation: scroll-line 2s infinite cubic-bezier(0.65, 0, 0.35, 1);
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
