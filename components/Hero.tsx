import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Hero: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const t = {
    zh: {
      label: "紀錄片《30》映後限定導讀",
      title1: "看見 30 之後的",
      title2: "新生活實踐",
      desc: "我們將感動轉化為行動。從神戶的共生智慧出發，陪您在台灣找到優雅老後的可能方案。",
      btn1: "神戶生活實驗旅行",
      btn2: "照顧資源規劃指引"
    },
    jp: {
      label: "ドキュメンタリー『30』上映後限定ガイド",
      title1: "30の先に見える",
      title2: "新しい生活の実踐",
      desc: "感動を行動に変える。神戸の共生の知恵から出発し、台湾で優雅な老後のための解決策を見つけるお手伝いをします。",
      btn1: "神戸生活実験旅行",
      btn2: "ケアリソース計画ガイド"
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/HTLQbG6n/2025-12-08-4-07-18.png" 
          alt="重新想像老後生活" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-4xl relative z-10 text-center px-6 pt-12">
        <div className="mb-8 inline-block">
          <span className="inline-block text-stone-700 tracking-[0.5em] text-xs md:text-sm font-bold uppercase border-b-2 border-[#c29967] pb-2">
            {t[lang].label}
          </span>
        </div>
        
        <div className="relative mb-12">
          <h1 className="serif text-5xl md:text-7xl text-stone-900 leading-[1.15]">
            {t[lang].title1}<br />
            <span className="accent-text inline-block mt-4 italic">
              {t[lang].title2}
            </span>
          </h1>
          <p className="mt-8 text-stone-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t[lang].desc}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#trip" 
            className="btn-gold px-12 py-5 rounded-sm text-base font-bold shadow-[0_15px_30px_rgba(194,153,103,0.3)] hover:scale-105 transition-all duration-300"
          >
            {t[lang].btn1}
          </a>
          <a 
            href="#imagination" 
            className="bg-white/90 backdrop-blur-md border-2 border-stone-800 text-stone-800 px-12 py-5 rounded-sm text-base font-bold hover:bg-stone-800 hover:text-white transition-all duration-300 shadow-sm"
          >
            {t[lang].btn2}
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#faf9f6] to-transparent"></div>
    </section>
  );
};

export default Hero;