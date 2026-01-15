
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* 背景圖片層 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/HTLQbG6n/2025-12-08-4-07-18.png" 
          alt="重新想像老後生活" 
          className="w-full h-full object-cover"
        />
        {/* 背景刷淡效果 */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]"></div>
      </div>

      <div className="max-w-4xl relative z-10 text-center px-6 pt-12">
        <div className="mb-6 inline-block">
          <span className="inline-block text-stone-700 tracking-[0.4em] text-xs md:text-sm font-bold uppercase border-b border-[#c29967] pb-1">
            紀錄片《30》後的行動指南
          </span>
        </div>
        
        <div className="relative mb-12">
          <h1 className="serif text-4xl md:text-6xl text-stone-900 leading-tight">
            重新想像老後：<br />
            <span className="accent-text inline-block mt-3">
              不分年紀，活出理想中的自己
            </span>
          </h1>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="https://pinnate-sundae-143.notion.site/2e65b281b3b7809ebd7fe2f3fe2a36c4" 
            target="_blank"
            className="btn-gold px-10 py-4 rounded-sm text-base font-bold shadow-lg hover:scale-105 transition-all duration-300"
          >
            參與神戶生活實驗旅行
          </a>
          <a 
            href="https://www.notion.so/24-2e35b281b3b7802fac99de18ef97c5d4" 
            target="_blank"
            className="bg-white/90 backdrop-blur-md border border-stone-800 text-stone-800 px-10 py-4 rounded-sm text-base font-bold hover:bg-stone-800 hover:text-white transition-all duration-300 shadow-md"
          >
            新手照顧者準備攻略
          </a>
        </div>
      </div>

      {/* 底部融合裝飾 */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#faf9f6] to-transparent"></div>
    </section>
  );
};

export default Hero;
