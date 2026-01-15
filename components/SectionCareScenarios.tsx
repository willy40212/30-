
import React, { useState } from 'react';

const SectionCareScenarios: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scenarios = [
    {
      title: "照顧人力",
      items: ["長照服務體系", "台籍照顧人力", "外籍看護等"]
    },
    {
      title: "生活安排",
      items: ["日間照顧中心", "社區關懷據點", "樂齡／長青學習單位", "宗教團體或民間社團等"]
    },
    {
      title: "餐食安排",
      items: ["長照送餐及備餐服務", "社區共餐據點", "民間送餐單位", "市售冷凍熟食或即食餐等"]
    },
    {
      title: "輔具規劃",
      items: ["長照無障礙補助", "輔具中心", "醫材行等"]
    },
    {
      title: "外出安排",
      items: ["長照交通接送", "無障礙計程車", "民間無障礙接送單位等"]
    },
    {
      title: "心理支持",
      items: ["家庭照顧者支持服務", "特定疾病協會", "政府心理諮商資源等"]
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="scenarios" className="py-24 bg-[#faf9f6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#c29967] text-xs font-bold tracking-[0.4em] uppercase block mb-4">Resource Navigation</span>
          <h2 className="serif text-3xl md:text-4xl text-stone-900 mb-6">照顧資源</h2>
          <div className="w-12 h-1 bg-[#c29967] mx-auto mb-6"></div>
          <p className="text-stone-500 max-w-xl mx-auto">
            當您感到迷惘時，可以從這些管道尋求專業的資源串接與協助。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scenarios.map((scenario, index) => (
            <div 
              key={index} 
              className="bg-white rounded-sm border border-stone-100 overflow-hidden transition-all duration-300 shadow-sm self-start"
            >
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
              >
                <h3 className="serif text-lg text-stone-800 font-bold flex items-center gap-4">
                  <span className="text-[#c29967] font-mono text-sm tracking-tighter">0{index + 1}</span>
                  {scenario.title}
                </h3>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-stone-50">
                  <ul className="space-y-3 pt-4">
                    {scenario.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-stone-600 text-sm">
                        <span className="w-1 h-1 bg-[#c29967] rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="flex justify-center">
            <a 
              href="https://www.surveycake.com/s/P8Aza?aka_source=threads&aka_medium=message_ning" 
              target="_blank"
              className="border-2 border-stone-800 text-stone-800 px-10 py-4 rounded-sm font-bold hover:bg-stone-800 hover:text-white transition-all text-sm tracking-wider shadow-sm"
            >
              申請愛長照星雲計畫：免費專家線上諮詢
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCareScenarios;
