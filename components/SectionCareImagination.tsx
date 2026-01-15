import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const SectionCareImagination: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const t = {
    zh: {
      label: "Initial Steps",
      title: "如果你正準備面對「照顧」...",
      desc: "面對長輩的老去，不需要只有焦慮。我們為預備照顧者與新手準備了完整攻略，從心態重建到資源配置，陪你走過這段必經的人生過程。",
      btn: "閱讀新手照顧攻略：翻轉照顧想像"
    },
    jp: {
      label: "はじめの一歩",
      title: "もし「介護」に直面しようとしているなら...",
      desc: "親の老いに直面して、不安になる必要はありません。心の準備からリソースの配置まで、この人生の重要な過程を共に歩むための完全な攻略ガイドを用意しました。",
      btn: "初心者向けケアガイドを読む：介護のイメージを覆す"
    }
  };

  return (
    <section id="imagination" className="pt-8 pb-8 bg-[#faf9f6]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-12 md:p-20 shadow-sm rounded-sm">
          <div className="text-center mb-12">
            <span className="accent-text tracking-widest font-bold text-xs block mb-4 uppercase">{t[lang].label}</span>
            <h2 className="serif text-3xl md:text-4xl text-stone-900 mb-6">{t[lang].title}</h2>
            <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto">
              {t[lang].desc}
            </p>
          </div>
          
          <div className="flex justify-center pt-8 border-t border-stone-100">
            <a 
              href="https://www.notion.so/24-2e35b281b3b7802fac99de18ef97c5d4" 
              target="_blank"
              className="group flex items-center gap-4 text-stone-800 hover:text-[#c29967] transition-all"
            >
              <span className="serif text-xl md:text-2xl border-b border-stone-200 group-hover:border-[#c29967] pb-2">{t[lang].btn}</span>
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