import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const SectionJapanTrip: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const t = {
    zh: {
      label: "特別企劃",
      title: "日本優雅老後生活體驗：\n走進《30》紀錄片的共生場景",
      desc: "您是否也被神戶「はっぴーの家」那種打破圍牆、充滿歡笑與溫度的生活方式所打動？我們邀請您一同開啟這場翻轉想像的生活實驗！",
      dateLabel: "預計時間",
      date: "115 年 6 月",
      itineraryLabel: "行程安排",
      itinerary: "七天六夜深度遊",
      btn: "獲取詳細行程與預約報名"
    },
    jp: {
      label: "特別企画",
      title: "日本の優雅な老後生活体験：\nドキュメンタリー『30』の共生シーンへ",
      desc: "神戸『はっぴーの家』の、垣根を壊し、笑顔と温かさに満ちた生き方に感動しませんか？想像を覆すこの生活実験に、ぜひご参加ください！",
      dateLabel: "予定時期",
      date: "2026年 6月",
      itineraryLabel: "ツアープラン",
      itinerary: "6泊7日ディープツアー",
      btn: "詳細スケジュール確認・お申込み"
    }
  };

  return (
    <section id="trip" className="relative py-32 overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/4wSjcRgT/image.jpg" 
          alt="Peaceful Aging Environment" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-stone-900/65 backdrop-blur-[4px] transition-all duration-700"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-stone-900/80"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#c29967] tracking-[0.5em] font-bold text-xs block mb-6 uppercase drop-shadow-sm">{t[lang].label}</span>
          <h2 className="serif text-4xl md:text-5xl text-white mb-8 leading-[1.6] drop-shadow-2xl whitespace-pre-line">
            {t[lang].title}
          </h2>
          <div className="w-16 h-1.5 bg-[#c29967] mx-auto mb-10 shadow-xl"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl leading-relaxed text-stone-50 mb-14 serif italic drop-shadow-lg opacity-95">
            {t[lang].desc}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/30 backdrop-blur-sm p-10 rounded-sm border border-white/30 group/card hover:border-[#c29967]/70 hover:bg-white/40 transition-all duration-500 shadow-[0_12px_40px_0_rgba(0,0,0,0.5)]">
              <span className="text-[#c29967] text-xs mb-3 block font-bold tracking-widest uppercase opacity-100">{t[lang].dateLabel}</span>
              <span className="text-3xl serif text-white font-bold group-hover/card:text-[#c29967] transition-colors drop-shadow-md">{t[lang].date}</span>
            </div>
            <div className="bg-white/30 backdrop-blur-sm p-10 rounded-sm border border-white/30 group/card hover:border-[#c29967]/70 hover:bg-white/40 transition-all duration-500 shadow-[0_12px_40px_0_rgba(0,0,0,0.5)]">
              <span className="text-[#c29967] text-xs mb-3 block font-bold tracking-widest uppercase opacity-100">{t[lang].itineraryLabel}</span>
              <span className="text-3xl serif text-white font-bold group-hover/card:text-[#c29967] transition-colors drop-shadow-md">{t[lang].itinerary}</span>
            </div>
          </div>
          
          <div className="pt-4">
            <a 
              href="https://pinnate-sundae-143.notion.site/2e65b281b3b7809ebd7fe2f3fe2a36c4?pvs=143"
              target="_blank"
              className="bg-[#c29967] text-white px-16 py-6 rounded-sm font-bold text-xl inline-block shadow-[0_20px_50px_rgba(194,153,103,0.4)] hover:bg-[#af8656] hover:scale-105 transition-all duration-300 transform active:scale-95"
            >
              {t[lang].btn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionJapanTrip;