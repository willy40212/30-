import React from 'react';

const SectionDocumentary: React.FC = () => {
  return (
    <section id="documentary" className="py-24 bg-white border-y border-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="mb-6">
              <span className="text-[#c29967] text-xs font-bold tracking-[0.4em] uppercase block mb-2">The Documentary</span>
              <h2 className="serif text-4xl text-stone-900 leading-tight">
                關於《30》さんまる<br />
                一場跨越圍牆的生活實驗
              </h2>
            </div>
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
              <p>
                「30」不僅是一個數字，它是神戶『はっぴーの家』的生活核心。在那個地方，老人、小孩、鄰居，甚至是外來者，都共享著一段無邊界的時光。
              </p>
              <p>
                如果您剛看完這部紀錄片，或許心中正湧動著某種暖意，或是對未來產生了新的疑問。這個網站是我們為您準備的後續指引。
              </p>
              <div className="pt-6">
                <blockquote className="border-l-4 border-[#c29967] pl-6 italic text-stone-500 serif">
                  「這不只是關於長照，而是關於我們想如何活著。」
                </blockquote>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative aspect-video bg-stone-100 rounded-sm overflow-hidden shadow-2xl group">
              <img 
                src="https://i.ibb.co/HTLQbG6n/2025-12-08-4-07-18.png" 
                alt="紀錄片 30 場景" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-all duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white cursor-pointer hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-stone-400 text-center tracking-widest uppercase">
              神戶『はっぴーの家』實景紀錄
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDocumentary;