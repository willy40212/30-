import React, { createContext, useState, useContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SectionMission from './components/SectionMission';
import SectionDocumentary from './components/SectionDocumentary';
import SectionCareImagination from './components/SectionCareImagination';
import SectionCareResources from './components/SectionCareResources';
import SectionResourceGuide from './components/SectionResourceGuide';
import SectionJapanTrip from './components/SectionJapanTrip';
import Footer from './components/Footer';

type Language = 'zh' | 'jp';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'zh',
  setLang: () => {},
});

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="min-h-screen flex flex-col bg-[#faf9f6]">
        <Header />
        <main className="flex-grow">
          <Hero />
          <SectionDocumentary />
          <SectionMission />
          <SectionCareImagination />
          <SectionResourceGuide />
          <SectionCareResources />
          <SectionJapanTrip />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;