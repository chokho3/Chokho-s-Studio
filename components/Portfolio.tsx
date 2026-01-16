
import React from 'react';
import { SiteData } from '../types';

interface PortfolioProps {
  data: SiteData;
}

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">SELECTED <span className="text-purple-500">WORKS</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto">초코 스튜디오가 진행한 혁신적인 디자인 및 웹 개발 프로젝트를 소개합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.portfolio.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-900 border border-gray-800">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2 block">{item.category}</span>
                <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.description}</p>
              </div>
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform rotate-45 group-hover:rotate-0 duration-500">
                <span className="text-2xl">→</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-8 py-3 rounded-full border border-gray-800 hover:border-purple-500 transition-colors text-sm font-semibold text-gray-400 hover:text-white">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
