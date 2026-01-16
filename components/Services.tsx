
import React from 'react';
import { SiteData } from '../types';

interface ServicesProps {
  data: SiteData;
}

const Services: React.FC<ServicesProps> = ({ data }) => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">PREMIUM <span className="text-purple-500">SERVICES</span></h2>
            <p className="text-gray-400 text-lg">우리는 단순한 디자인을 넘어 비즈니스의 성장과 직결되는 최상의 결과물을 만듭니다.</p>
          </div>
          <div className="text-right hidden md:block">
             <span className="text-8xl font-black text-white/5 select-none">DESIGN</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.services.map((service, idx) => (
            <div 
              key={service.id} 
              className="p-10 rounded-3xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-all group hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 group-hover:bg-purple-500 transition-colors duration-500">
                <div className="text-3xl text-purple-500 group-hover:text-white">
                  {idx === 0 ? '✒️' : idx === 1 ? '💻' : '✨'}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-500"><span className="text-purple-500 mr-2">✓</span> 맞춤형 1:1 상담</li>
                <li className="flex items-center text-sm text-gray-500"><span className="text-purple-500 mr-2">✓</span> 최고 수준의 결과물</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
