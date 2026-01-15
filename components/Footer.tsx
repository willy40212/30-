import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Footer: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const t = {
    zh: {
      organizer: "主辦單位",
      coorganizer: "協辦單位"
    },
    jp: {
      organizer: "主催",
      coorganizer: "共催"
    }
  };

  const organizers = [
    { src: "https://i.ibb.co/nsQ86dY5/202098-210904.png", alt: "主辦單位 1" },
    { src: "https://i.ibb.co/v4dPSXyf/3.png", alt: "主辦單位 2" }
  ];

  const coOrganizers = [
    { src: "https://i.ibb.co/1GkfzcDX/2.png", alt: "協辦單位 1" },
    { src: "https://i.ibb.co/Zpvq99BV/3.png", alt: "協辦單位 2" },
    { src: "https://i.ibb.co/5XPnLgWc/1.png", alt: "協辦單位 3" },
    { src: "https://i.ibb.co/Zz2bD8cX/4.png", alt: "協辦單位 4" }
  ];

  return (
    <footer className="bg-white pt-32 pb-24 border-t border-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-24 items-center">
          <div className="text-center w-full">
            <h5 className="text-stone-400 text-xs font-bold tracking-[0.3em] uppercase mb-10">{t[lang].organizer}</h5>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              {organizers.map((logo, i) => (
                <img key={i} src={logo.src} alt={logo.alt} className="h-20 w-auto object-contain" />
              ))}
            </div>
          </div>
          
          <div className="text-center w-full">
            <h5 className="text-stone-400 text-xs font-bold tracking-[0.3em] uppercase mb-10">{t[lang].coorganizer}</h5>
            <div className="flex flex-wrap justify-center gap-20 items-center">
              {coOrganizers.map((logo, i) => (
                <img key={i} src={logo.src} alt={logo.alt} className="h-32 w-auto object-contain" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;