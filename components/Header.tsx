import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#" className="serif text-2xl font-semibold tracking-wider text-stone-800">30さんまる</a>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
          <a href="#documentary" className="hover:text-stone-900 transition-colors">紀錄片專區</a>
          <a href="#imagination" className="hover:text-stone-900 transition-colors">照顧攻略</a>
          <a href="#resources" className="hover:text-stone-900 transition-colors">工具包</a>
          <a href="#trip" className="hover:text-stone-900 transition-colors">體驗之旅</a>
        </div>
        <a 
          href="https://pinnate-sundae-143.notion.site/2e65b281b3b7809ebd7fe2f3fe2a36c4?pvs=143"
          target="_blank"
          className="bg-stone-800 text-white px-4 py-2 rounded-sm text-sm hover:bg-stone-700 transition-all shadow-sm"
        >
          立即報名
        </a>
      </div>
    </nav>
  );
};

export default Header;