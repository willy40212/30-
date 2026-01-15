
import React from 'react';

const SectionMission: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="mb-12">
          <span className="text-[#c29967] text-xs font-bold tracking-[0.5em] uppercase block mb-4">Our Vision</span>
          <h2 className="serif text-3xl text-stone-900">我們的初心</h2>
        </div>
        
        <div className="relative">
          {/* 裝飾性引號 */}
          <span className="absolute -top-8 -left-4 text-stone-100 text-8xl serif pointer-events-none">“</span>
          
          <div className="space-y-8 text-stone-700 leading-loose text-lg md:text-xl serif italic">
            <p>
              愛長照與好好園館致力於創造更有溫度、更有尊嚴的老後生活方案。
            </p>
            <p>
              透過紀錄片與實地體驗，帶領大眾翻轉對老後的既定印象，找回生命的質感與趣味。
            </p>
          </div>

          <span className="absolute -bottom-16 -right-4 text-stone-100 text-8xl serif pointer-events-none">”</span>
        </div>
        
        <div className="mt-16 w-12 h-px bg-stone-200 mx-auto"></div>
      </div>
    </section>
  );
};

export default SectionMission;
