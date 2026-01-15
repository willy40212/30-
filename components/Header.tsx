import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Header: React.FC = () => {
  const { lang, setLang } = useContext(LanguageContext);

  const t = {
    zh: {
      nav1: "紀錄片專區",
      nav2: "照顧攻略",
      nav3: "工具包",
      nav4: "體驗之旅",
      btn: "立即報名"
    },
    jp: {
      nav1: "ドキュメンタリー",
      nav2: "ケアガイド",
      nav3: "ツールキット",
      nav4: "体験ツアー",
      btn: "今すぐ申し込む"
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#" className="serif text-2xl font-semibold tracking-wider text-stone-800">30さんまる</a>
        </div>
        
        <div className="hidden lg:flex gap-8 text-sm font-medium text-stone-600">
          <a href="#documentary" className="hover:text-stone-900 transition-colors">{t[lang].nav1}</a>
          <a href="#imagination" className="hover:text-stone-900 transition-colors">{t[lang].nav2}</a>
          <a href="#resources" className="hover:text-stone-900 transition-colors">{t[lang].nav3}</a>
          <a href="#trip" className="hover:text-stone-900 transition-colors">{t[lang].nav4}</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center text-xs font-bold tracking-widest border border-stone-200 rounded-full px-3 py-1 bg-white">
            <button 
              onClick={() => setLang('zh')}
              className={`transition-colors hover:text-[#c29967] ${lang === 'zh' ? 'text-stone-900' : 'text-stone-300'}`}
            >
              ZH
            </button>
            <span className="mx-2 text-stone-200">|</span>
            <button 
              onClick={() => setLang('jp')}
              className={`transition-colors hover:text-[#c29967] ${lang === 'jp' ? 'text-stone-900' : 'text-stone-300'}`}
            >
              JP
            </button>
          </div>
          
          <a 
            href="https://pinnate-sundae-143.notion.site/2e65b281b3b7809ebd7fe2f3fe2a36c4?pvs=143"
            target="_blank"
            className="bg-stone-800 text-white px-4 py-2 rounded-sm text-sm hover:bg-stone-700 transition-all shadow-sm"
          >
            {t[lang].btn}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;