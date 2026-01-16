
import React, { useState } from 'react';
import { SiteData } from '../types';

interface ContactProps {
  data: SiteData;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mreeebnd", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        e.currentTarget.reset();
        // Reset submitted state after 5 seconds to allow another message
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const responseData = await response.json();
        // Fix: Replace Object.hasOwn with Object.prototype.hasOwnProperty.call for better compatibility with older ES versions
        if (responseData && typeof responseData === 'object' && Object.prototype.hasOwnProperty.call(responseData, 'errors')) {
          alert((responseData as any)["errors"].map((error: any) => error["message"]).join(", "));
        } else {
          alert("문의 전송 중 문제가 발생했습니다. 다시 시도해 주세요.");
        }
      }
    } catch (error) {
      alert("네트워크 오류가 발생했습니다. 인터넷 연결을 확인해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">LET'S <span className="text-purple-500">TALK</span></h2>
            <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">
              새로운 프로젝트를 계획 중이신가요? 초코 스튜디오와 함께 비즈니스의 미래를 디자인하세요.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h4 className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">Email Us</h4>
                  <p className="text-xl font-medium">{data.contactEmail}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h4 className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">Call Us</h4>
                  <p className="text-xl font-medium">{data.contactPhone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/40 p-10 rounded-3xl border border-gray-800 backdrop-blur-sm">
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">✓</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">상담 신청 완료!</h3>
                <p className="text-gray-400">빠른 시일 내에 연락드리겠습니다. 감사합니다.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">이름</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-white" 
                      placeholder="성함을 입력하세요" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">연락처/이메일</label>
                    <input 
                      type="text" 
                      name="email_or_phone" 
                      required 
                      className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-white" 
                      placeholder="연락처 또는 이메일" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">서비스 선택</label>
                  <select 
                    name="service" 
                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors appearance-none text-white"
                  >
                    <option value="logo">로고 디자인</option>
                    <option value="web">홈페이지 제작</option>
                    <option value="branding">브랜딩 컨설팅</option>
                    <option value="other">기타 문의</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">문의 내용</label>
                  <textarea 
                    name="message" 
                    rows={4} 
                    required 
                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-white" 
                    placeholder="문의하실 내용을 자유롭게 작성해주세요"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-500/20 transform hover:-translate-y-1 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      전송 중...
                    </span>
                  ) : '메시지 보내기'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
