import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const SectionResourceGuide: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const t = {
    zh: {
      label: "Resource Guide",
      title: "照顧資源總覽",
      desc: "當生活需要支援時，你不必獨自扛起。我們整理了生活中常見的五大需求面向，引導你找到適合的專業協助路徑。",
      ctaTitle: "不知道從何開始？\n讓專家與您一起規劃。",
      ctaBtn: "立即諮詢"
    },
    jp: {
      label: "リソースガイド",
      title: "ケアリソース概要",
      desc: "生活にサポートが必要なとき、一人で抱え込む必要はありません。生活の中でよくある5つのニーズを整理し、適切な専門的サポートへの道筋を案内します。",
      ctaTitle: "どこから始めればいい？\n専門家と一緒に計画しましょう。",
      ctaBtn: "相談する"
    }
  };

  const guideItems = {
    zh: [
      { id: "01", category: "照顧人力", content: "除了政府長照服務外，若有臨時或長期的額外需求，可透過平台（如：Care724、家天使等）媒合台籍人力，或依規定申請外籍看護。" },
      { id: "02", category: "活動安排", content: "讓長輩維持社會連結非常重要。可以查詢住家附近的日照中心、社區關懷據點、長青大學，或是參與宗教聚會與里民中心的多元課程。" },
      { id: "03", category: "餐食安排", content: "除了政府送餐服務，民間亦有專門送餐單位（如：銀色大門、各類社福基金會）提供服務，或是訂購市面上專為高齡設計的冷凍軟食包。" },
      { id: "04", category: "外出安排", content: "若有就醫或外出需求，可預約政府長照交通接送、無障礙計程車，或聯繫民間專業無障礙接送單位（如：多扶接送）提供到府服務。" },
      { id: "05", category: "心理支持", content: "照顧者也需要被照顧。建議聯繫家庭照顧者關懷總會獲取支持，或加入特定疾病協會（如：失智症協會）參與病友與家屬支持團體。" }
    ],
    jp: [
      { id: "01", category: "介護人材", content: "政府の長期介護サービス以外に、臨時または長期の追加ニーズがある場合、プラットフォームを通じて台湾人ヘルパーをマッチングしたり、外国人看護師を申請したりできます。" },
      { id: "02", category: "アクティビティ", content: "高齢者が社会との繋がりを維持することは非常に重要です。デイケアセンター、地域のケア拠点、シルバー大学、または宗教団体の集まりなどを活用しましょう。" },
      { id: "03", category: "食事の準備", content: "政府の配食サービスのほか、民間の配食専門団体（銀色大門など）が提供するサービスや、高齢者向けに設計された冷凍ソフトフードも利用可能です。" },
      { id: "04", category: "外出のサポート", content: "通院や外出のニーズがある場合、政府の介護タクシー、バリアフリータクシー、または民間の専門送迎ユニットを予約してドア・ツー・ドアのサービスを受けられます。" },
      { id: "05", category: "心のサポート", content: "介護者自身もケアが必要です。家族介護者ケア総会に連絡してサポートを受けるか、特定の疾患協会（認知症協会など）の家族会に参加することをお勧めします。" }
    ]
  };

  return (
    <section className="pt-8 pb-24 bg-[#faf9f6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
            <div className="max-w-2xl">
              <span className="text-[#c29967] text-xs font-bold tracking-[0.4em] uppercase block mb-4">{t[lang].label}</span>
              <h2 className="serif text-3xl md:text-4xl text-stone-900">{t[lang].title}</h2>
              <p className="mt-4 text-stone-500 leading-relaxed">
                {t[lang].desc}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {guideItems[lang].map((item, index) => (
            <div key={index} className="group flex flex-col">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="serif text-stone-300 text-3xl italic font-light group-hover:text-[#c29967] transition-colors">
                  {item.id}
                </span>
                <h3 className="serif text-xl text-stone-800 font-bold tracking-wide">
                  {item.category}
                </h3>
              </div>
              <div className="pl-12">
                <p className="text-stone-600 leading-relaxed text-sm">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
          
          <div className="lg:col-span-1 bg-stone-900 p-8 rounded-sm flex flex-col justify-between group hover:bg-stone-800 transition-all cursor-pointer">
            <div>
              <p className="text-stone-400 text-xs mb-2 tracking-widest uppercase">Need help?</p>
              <h3 className="text-white serif text-xl leading-relaxed whitespace-pre-line">
                {t[lang].ctaTitle}
              </h3>
            </div>
            <a 
              href="https://www.surveycake.com/s/P8Aza" 
              target="_blank"
              className="mt-8 flex items-center justify-between text-white border-t border-stone-700 pt-6 group-hover:text-[#c29967]"
            >
              <span className="text-sm font-bold tracking-widest">{t[lang].ctaBtn}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionResourceGuide;