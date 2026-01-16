
import React, { useState, useEffect } from 'react';
import { SiteData, ViewType } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';

const DEFAULT_DATA: SiteData = {
  heroTitle: "디자인의 가치를 높이는 Chokho's Studio",
  heroSubtitle: "세련된 로고 디자인과 프리미엄 웹사이트 제작을 통해 당신의 비즈니스를 한 차원 더 높여드립니다.",
  heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
  themeColor: "#7c3aed",
  portfolio: [
    {
      id: '1',
      title: '현대적인 테크 로고',
      category: 'Logo Design',
      imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop',
      description: '미니멀한 감각의 기술 기업 브랜딩'
    },
    {
      id: '2',
      title: '럭셔리 코스메틱 웹사이트',
      category: 'Web Design',
      imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop',
      description: '고급스러운 무드의 이커머스 솔루션'
    },
    {
      id: '3',
      title: '친환경 푸드 패키징',
      category: 'Branding',
      imageUrl: 'https://images.unsplash.com/photo-1556761175-5973cf0f32e7?q=80&w=2032&auto=format&fit=crop',
      description: '자연의 색감을 담은 패키지 디자인'
    },
    {
      id: '4',
      title: '미니멀 건축 포트폴리오',
      category: 'Web Design',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
      description: '건축가의 철학을 담은 깔끔한 레이아웃'
    }
  ],
  services: [
    {
      id: 's1',
      title: '로고 디자인',
      description: '브랜드의 본질을 꿰뚫는 감각적이고 상징적인 로고를 제작합니다.',
      iconName: 'PenTool'
    },
    {
      id: 's2',
      title: '홈페이지 제작',
      description: '사용자 경험(UX)을 최우선으로 고려한 반응형 고성능 웹사이트를 구축합니다.',
      iconName: 'Layout'
    },
    {
      id: 's3',
      title: '브랜딩 컨설팅',
      description: '통합적인 브랜드 아이덴티티 수립을 위한 디자인 가이드를 제안합니다.',
      iconName: 'Sparkles'
    }
  ],
  contactEmail: 'contact@chokho.com',
  contactPhone: '010-1234-5678'
};

const App: React.FC = () => {
  const [siteData, setSiteData] = useState<SiteData>(() => {
    try {
      const saved = localStorage.getItem('chokho_site_data');
      return saved ? JSON.parse(saved) : DEFAULT_DATA;
    } catch (e) {
      return DEFAULT_DATA;
    }
  });

  const [view, setView] = useState<ViewType>('HOME');

  useEffect(() => {
    localStorage.setItem('chokho_site_data', JSON.stringify(siteData));
  }, [siteData]);

  const handleUpdateData = (newData: SiteData) => {
    setSiteData(newData);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white">
      <Navbar view={view} setView={setView} />
      
      {view === 'HOME' ? (
        <main>
          <Hero data={siteData} />
          <Services data={siteData} />
          <Portfolio data={siteData} />
          <Contact data={siteData} />
          <footer className="py-12 border-t border-gray-900 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Chokho's Studio. All Rights Reserved.</p>
          </footer>
        </main>
      ) : (
        <AdminDashboard data={siteData} onUpdate={handleUpdateData} />
      )}
    </div>
  );
};

export default App;
