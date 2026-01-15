
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SectionMission from './components/SectionMission';
import SectionCareImagination from './components/SectionCareImagination';
import SectionCareResources from './components/SectionCareResources';
import SectionCareScenarios from './components/SectionCareScenarios';
import SectionJapanTrip from './components/SectionJapanTrip';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SectionMission />
        <SectionCareImagination />
        <SectionCareResources />
        <SectionCareScenarios />
        <SectionJapanTrip />
      </main>
      <Footer />
    </div>
  );
};

export default App;
