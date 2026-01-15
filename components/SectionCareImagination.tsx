
import React from 'react';

const SectionCareImagination: React.FC = () => {
  return (
    <section id="imagination" className="py-32 bg-[#faf9f6]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-12 md:p-20 shadow-sm rounded-sm">
          <div className="text-center mb-12">
            <span className="accent-text tracking-widest font-bold text-xs block mb-4 uppercase">Initial Steps</span>
            <h2 className="serif text-3xl md:text-4xl text-stone-900 mb-6">如果你正準備面對「照顧」...</h2>
            <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto">
              面對長輩的老去，不需要只有焦慮。我們為預備照顧者與新手準備了完整攻略，從心態重建到資源配置，陪你走過這段必經的人生過程。
            </p>
          </div>
          
          <div className="flex justify-center pt-8 border-t border-stone-100">
            <a 
              href="https://www.notion.so/24-2e35b281b3b7802fac99de18ef97c5d4" 
              target="_blank"
              className="group flex items-center gap-4 text-stone-800 hover:text-[#c29967] transition-all"
            >
              <span className="serif text-xl md:text-2xl border-b border-stone-200 group-hover:border-[#c29967] pb-2">閱讀新手照顧攻略：翻轉照顧想像</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCareImagination;
