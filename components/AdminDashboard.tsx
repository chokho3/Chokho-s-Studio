
import React, { useState } from 'react';
import { SiteData, PortfolioItem, ServiceItem } from '../types';

interface AdminDashboardProps {
  data: SiteData;
  onUpdate: (data: SiteData) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ data, onUpdate }) => {
  const [localData, setLocalData] = useState<SiteData>(data);
  const [activeTab, setActiveTab] = useState<'GENERAL' | 'PORTFOLIO' | 'SERVICES'>('GENERAL');

  const save = () => {
    onUpdate(localData);
    alert('설정이 저장되었습니다!');
  };

  const handlePortfolioChange = (id: string, field: keyof PortfolioItem, value: string) => {
    const newList = localData.portfolio.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    );
    setLocalData({ ...localData, portfolio: newList });
  };

  const deletePortfolioItem = (id: string) => {
    setLocalData({ ...localData, portfolio: localData.portfolio.filter(p => p.id !== id) });
  };

  const addPortfolioItem = () => {
    const newItem: PortfolioItem = {
      id: Date.now().toString(),
      title: '새 프로젝트',
      category: '카테고리',
      imageUrl: 'https://picsum.photos/600/400',
      description: '설명을 입력하세요'
    };
    setLocalData({ ...localData, portfolio: [...localData.portfolio, newItem] });
  };

  return (
    <div className="pt-24 pb-24 min-h-screen bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold">Admin <span className="text-purple-500">Dashboard</span></h1>
            <p className="text-gray-500">사이트의 모든 콘텐츠를 직접 관리하세요.</p>
          </div>
          <button 
            onClick={save}
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-bold transition-all"
          >
            변경사항 저장하기
          </button>
        </div>

        <div className="flex space-x-2 mb-8 p-1 bg-gray-900 rounded-xl w-fit">
          <button 
            onClick={() => setActiveTab('GENERAL')}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'GENERAL' ? 'bg-purple-600 text-white' : 'text-gray-500 hover:text-white'}`}
          >
            기본 정보
          </button>
          <button 
            onClick={() => setActiveTab('SERVICES')}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'SERVICES' ? 'bg-purple-600 text-white' : 'text-gray-500 hover:text-white'}`}
          >
            서비스 관리
          </button>
          <button 
            onClick={() => setActiveTab('PORTFOLIO')}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'PORTFOLIO' ? 'bg-purple-600 text-white' : 'text-gray-500 hover:text-white'}`}
          >
            포트폴리오
          </button>
        </div>

        <div className="bg-gray-900/30 border border-gray-800 rounded-3xl p-8 backdrop-blur-sm">
          {activeTab === 'GENERAL' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Hero Title</label>
                  <input 
                    type="text" 
                    value={localData.heroTitle}
                    onChange={(e) => setLocalData({...localData, heroTitle: e.target.value})}
                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:border-purple-500 outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Hero Image URL</label>
                  <input 
                    type="text" 
                    value={localData.heroImage}
                    onChange={(e) => setLocalData({...localData, heroImage: e.target.value})}
                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:border-purple-500 outline-none" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Hero Subtitle</label>
                <textarea 
                  rows={3}
                  value={localData.heroSubtitle}
                  onChange={(e) => setLocalData({...localData, heroSubtitle: e.target.value})}
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:border-purple-500 outline-none" 
                ></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Contact Email</label>
                  <input 
                    type="email" 
                    value={localData.contactEmail}
                    onChange={(e) => setLocalData({...localData, contactEmail: e.target.value})}
                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:border-purple-500 outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Contact Phone</label>
                  <input 
                    type="text" 
                    value={localData.contactPhone}
                    onChange={(e) => setLocalData({...localData, contactPhone: e.target.value})}
                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:border-purple-500 outline-none" 
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'SERVICES' && (
            <div className="space-y-6">
              {localData.services.map((service, idx) => (
                <div key={service.id} className="p-6 bg-black rounded-2xl border border-gray-800 flex gap-6">
                  <div className="flex-1 space-y-4">
                    <input 
                      type="text" 
                      value={service.title}
                      onChange={(e) => {
                        const s = [...localData.services];
                        s[idx].title = e.target.value;
                        setLocalData({...localData, services: s});
                      }}
                      className="text-lg font-bold bg-transparent border-b border-gray-800 focus:border-purple-500 outline-none w-full"
                    />
                    <textarea 
                      rows={2}
                      value={service.description}
                      onChange={(e) => {
                        const s = [...localData.services];
                        s[idx].description = e.target.value;
                        setLocalData({...localData, services: s});
                      }}
                      className="text-gray-400 bg-transparent outline-none w-full resize-none"
                    ></textarea>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'PORTFOLIO' && (
            <div className="space-y-8">
              <button 
                onClick={addPortfolioItem}
                className="w-full py-4 border-2 border-dashed border-gray-800 hover:border-purple-500/50 rounded-2xl text-gray-500 hover:text-purple-400 transition-all font-bold"
              >
                + 새 프로젝트 추가
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {localData.portfolio.map((item) => (
                  <div key={item.id} className="bg-black border border-gray-800 rounded-2xl overflow-hidden">
                    <img src={item.imageUrl} className="w-full h-40 object-cover opacity-50" alt="" />
                    <div className="p-6 space-y-4">
                      <input 
                        type="text" 
                        value={item.title}
                        onChange={(e) => handlePortfolioChange(item.id, 'title', e.target.value)}
                        className="w-full bg-transparent border-b border-gray-800 focus:border-purple-500 outline-none font-bold"
                        placeholder="제목"
                      />
                      <input 
                        type="text" 
                        value={item.imageUrl}
                        onChange={(e) => handlePortfolioChange(item.id, 'imageUrl', e.target.value)}
                        className="w-full text-xs text-gray-500 bg-transparent border-b border-gray-800 outline-none"
                        placeholder="이미지 URL"
                      />
                      <textarea 
                        value={item.description}
                        onChange={(e) => handlePortfolioChange(item.id, 'description', e.target.value)}
                        className="w-full text-sm text-gray-400 bg-transparent outline-none h-16 resize-none"
                        placeholder="설명"
                      ></textarea>
                      <button 
                        onClick={() => deletePortfolioItem(item.id)}
                        className="text-red-500 text-xs font-bold hover:underline"
                      >
                        삭제하기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
