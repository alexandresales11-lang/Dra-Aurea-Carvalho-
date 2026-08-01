import React from 'react';
import { LAWYER_INFO } from '../data/legalData';
import { 
  ShieldCheck, 
  BookOpen, 
  Heart, 
  Calendar, 
  Instagram, 
  Scale,
  MapPin
} from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="sobre" className="py-24 bg-[#FAF8F5] border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Professional Photography Frame */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-stone-200/80 shadow-2xs bg-white p-2">
              <img 
                src="https://i.imgur.com/lFxQwIm.png" 
                alt="Dra. Áurea Carvalho"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-top rounded-2xl"
              />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-stone-200 shadow-2xs text-stone-900">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1C1917] text-[#D4C3B5] flex items-center justify-center font-bold font-serif text-xs border border-stone-800">
                    ÁC
                  </div>
                  <div>
                    <h3 className="font-serif font-medium text-sm text-stone-900">{LAWYER_INFO.name}</h3>
                    <p className="text-xs text-stone-600 font-semibold tracking-wider">{LAWYER_INFO.oab}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 space-y-1.5 text-xs text-stone-700">
              <div className="flex items-center gap-2 font-semibold text-stone-900">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{LAWYER_INFO.address}</span>
              </div>
              <p className="text-stone-500 pl-6 font-light">Estrutura física e digital com sigilo absoluto e acolhimento singular.</p>
            </div>
          </div>

          {/* Right: Bio & Key Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-stone-900 bg-white border border-stone-200 px-4 py-1.5 rounded-full shadow-2xs">
                Perfil Profissional
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal mt-4">
                Dra. Áurea Carvalho
              </h2>
              <p className="text-stone-700 font-medium text-sm sm:text-base mt-1">
                {LAWYER_INFO.title}
              </p>
            </div>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Com vasta experiência em <strong className="text-stone-900 font-semibold">Direito de Família, Sucessões e Patrimônio</strong>, a Dra. Áurea Carvalho desenvolveu uma metodologia estratégica que alia alto nível técnico a um olhar atento e discreto para cada cliente.
              </p>
              <p>
                Reconhecida nas redes sociais (<strong className="text-stone-900 font-medium">@aureacarvalho.adv</strong> com mais de 24 mil seguidores), atua desmistificando o direito de família e priorizando a prevenção de conflitos e a segurança jurídica.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-stone-200/80 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#F3ECE6] text-stone-900 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-xs sm:text-sm">Proteção Patrimonial</h4>
                  <p className="text-xs text-stone-500 font-light mt-0.5">Análise preventiva de bens e salvaguarda de direitos familiares.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-stone-200/80 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#F3ECE6] text-stone-900 shrink-0">
                  <Heart className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-xs sm:text-sm">Acolhimento Discreto</h4>
                  <p className="text-xs text-stone-500 font-light mt-0.5">Tratamento sigiloso com foco no equilíbrio emocional das partes.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-stone-200/80 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#F3ECE6] text-stone-900 shrink-0">
                  <Scale className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-xs sm:text-sm">Via Extrajudicial</h4>
                  <p className="text-xs text-stone-500 font-light mt-0.5">Agilidade e economia com acordos diretos em cartório.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-stone-200/80 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#F3ECE6] text-stone-900 shrink-0">
                  <BookOpen className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-xs sm:text-sm">Rigor Técnico</h4>
                  <p className="text-xs text-stone-500 font-light mt-0.5">Constante atualização doutrinária e jurisprudencial nos tribunais.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenBooking}
                className="bg-[#1C1917] hover:bg-stone-800 text-white font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full shadow-2xs transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                <span>Agendar Consulta</span>
              </button>

              <a
                href="https://instagram.com/aureacarvalho.adv"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs uppercase tracking-wider px-6 py-4 rounded-full border border-stone-300 transition-colors flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4 text-[#C5A059]" />
                <span>@aureacarvalho.adv</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

