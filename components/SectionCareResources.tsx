import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const SectionCareResources: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const t = {
    zh: {
      title: "照顧工具包",
      subtitle: "透過這些工具，建立屬於自己的照顧藍圖與節奏。",
      btn: "領取 PDF 檔案包"
    },
    jp: {
      title: "ケアツールキット",
      subtitle: "これらのツールを通じて、自分自身の介護の青写真とリズムを構築しましょう。",
      btn: "PDFをダウンロード"
    }
  };

  const resources = {
    zh: [
      {
        title: "家庭照顧資源盤點",
        desc: "釐切家人間的期待與限制，找到最適合家庭的角色分工。",
        url: "https://drive.google.com/file/d/16XPB8n6M_lX030L0GT_VDW9-JNrFsN0-/view?usp=sharing"
      },
      {
        title: "老後生活規劃面向表",
        desc: "這不只是長輩的事，更是你們未來的家庭生活品質藍圖。",
        url: "https://drive.google.com/file/d/1Cy_IOCx4H2S6e5UWdqoy0bGrLVRDOY9j/view?usp=sharing"
      },
      {
        title: "社會資源盤點清單",
        desc: "學會借力使力，了解政府與民間有哪些專業資源能協助你。",
        url: "https://drive.google.com/file/d/1aiHox22FFc_wBtvQoXTg7zWYurrYIq3V/view?usp=sharing"
      }
    ],
    jp: [
      {
        title: "家庭内介護リソースの棚卸し",
        desc: "家族間の期待と制限を明確にし、家庭に最適な役割分担を見つけます。",
        url: "https://drive.google.com/file/d/16XPB8n6M_lX030L0GT_VDW9-JNrFsN0-/view?usp=sharing"
      },
      {
        title: "老後生活設計チェックリスト",
        desc: "これは高齢者だけの問題ではなく、あなたの将来の家庭生活の質の青写真です。",
        url: "https://drive.google.com/file/d/1Cy_IOCx4H2S6e5UWdqoy0bGrLVRDOY9j/view?usp=sharing"
      },
      {
        title: "社会資源インベントリリスト",
        desc: "他者の力を借りることを学び、政府や民間が提供する専門リソースを知りましょう。",
        url: "https://drive.google.com/file/d/1aiHox22FFc_wBtvQoXTg7zWYurrYIq3V/view?usp=sharing"
      }
    ]
  };

  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="serif text-3xl text-stone-900 mb-4">{t[lang].title}</h2>
          <p className="text-stone-500">{t[lang].subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources[lang].map((res, i) => (
            <div key={i} className="p-10 border border-stone-100 rounded-lg hover:shadow-lg hover:border-[#c29967]/30 transition-all text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mb-6 text-[#c29967]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 className="serif text-xl text-stone-900 mb-4">{res.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-grow">
                {res.desc}
              </p>
              <a 
                href={res.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c29967] text-xs tracking-widest uppercase font-bold hover:underline inline-flex items-center"
              >
                {t[lang].btn} <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionCareResources;