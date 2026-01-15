import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const SectionMission: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const t = {
    zh: {
      label: "Our Vision",
      title: "我們的初心",
      p1: "愛長照與好好園館致力於創造更有溫度、更有尊嚴的老後生活方案。",
      p2: "透過紀錄片與實地體驗，帶領大眾翻轉對老後的既定印象，找回生命的質感與趣味。"
    },
    jp: {
      label: "私たちのビジョン",
      title: "私たちの想い",
      p1: "愛長照（ilong-termcare）と好好園館（Goldenville）は、より温かく尊厳のある老後の暮らしを創造することに尽力しています。",
      p2: "ドキュメンタリーや実体験を通じて、老後に対する既成概念を覆し、人生の質と楽しさを取り戻すお手伝いをします。"
    }
  };

  return (
    <section className="pt-24 pb-8 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="mb-12">
          <span className="text-[#c29967] text-xs font-bold tracking-[0.5em] uppercase block mb-4">{t[lang].label}</span>
          <h2 className="serif text-3xl text-stone-900">{t[lang].title}</h2>
        </div>
        
        <div className="relative">
          <span className="absolute -top-8 -left-4 text-stone-100 text-8xl serif pointer-events-none">“</span>
          
          <div className="space-y-8 text-stone-700 leading-loose text-lg md:text-xl serif italic">
            <p>{t[lang].p1}</p>
            <p>{t[lang].p2}</p>
          </div>

          <span className="absolute -bottom-16 -right-4 text-stone-100 text-8xl serif pointer-events-none">”</span>
        </div>
        
        <div className="mt-16 w-12 h-px bg-stone-200 mx-auto"></div>
      </div>
    </section>
  );
};

export default SectionMission;