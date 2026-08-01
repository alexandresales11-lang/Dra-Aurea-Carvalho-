import React from 'react';
import { PRACTICE_AREAS, INSTAGRAM_HIGHLIGHT_POSTS } from '../data/legalData';
import { 
  Scale, 
  HeartHandshake, 
  FileCheck, 
  Users, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Instagram, 
  Heart, 
  MessageCircle
} from 'lucide-react';

interface PracticeAreasSectionProps {
  onOpenBookingWithArea: (areaId: string) => void;
}

export const PracticeAreasSection: React.FC<PracticeAreasSectionProps> = ({
  onOpenBookingWithArea,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale': return <Scale className="w-5 h-5 text-stone-900 group-hover:text-[#D4C3B5] transition-colors" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-stone-900 group-hover:text-[#D4C3B5] transition-colors" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-stone-900 group-hover:text-[#D4C3B5] transition-colors" />;
      case 'Users': return <Users className="w-5 h-5 text-stone-900 group-hover:text-[#D4C3B5] transition-colors" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-stone-900 group-hover:text-[#D4C3B5] transition-colors" />;
      default: return <Scale className="w-5 h-5 text-stone-900 group-hover:text-[#D4C3B5] transition-colors" />;
    }
  };

  return (
    <section id="areas" className="py-24 bg-[#FAF8F5] border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-stone-900 bg-white border border-stone-200 px-4 py-1.5 rounded-full shadow-2xs">
            Áreas de Atuação
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal mt-4">
            Atuação Especializada no <span className="italic font-light text-stone-800">Direito de Família & Patrimônio</span>
          </h2>
          <p className="text-stone-600 text-base mt-3 leading-relaxed font-light">
            Estratégias jurídicas de alta precisão técnica para prevenir riscos e resguardar seu patrimônio com discrição.
          </p>
        </div>

        {/* Practice Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {PRACTICE_AREAS.map((area) => (
            <div 
              key={area.id}
              className="bg-white rounded-3xl p-7 border border-stone-200/90 hover:border-stone-800 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-[#F3ECE6] border border-stone-200 flex items-center justify-center group-hover:bg-[#1C1917] transition-colors">
                    {getIcon(area.iconName)}
                  </div>
                  <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-widest">
                    Especialidade
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-stone-900 group-hover:text-stone-950 transition-colors mb-3">
                  {area.title}
                </h3>

                <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed mb-5 line-clamp-3">
                  {area.shortDesc}
                </p>

                <ul className="space-y-2.5 mb-8 border-t border-stone-100 pt-4">
                  {area.highlights.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-stone-900 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenBookingWithArea(area.id)}
                className="w-full py-3 px-4 rounded-full bg-[#FAF8F5] group-hover:bg-[#1C1917] text-stone-900 group-hover:text-white border border-stone-200 group-hover:border-[#1C1917] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <span>Agendar Consulta</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
              </button>
            </div>
          ))}
        </div>

        {/* Minimalist Instagram Cards Banner */}
        <div className="bg-[#1C1917] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-stone-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 pb-6 border-b border-stone-800">
            <div>
              <div className="inline-flex items-center gap-2 text-[#C5A059] text-xs font-medium uppercase tracking-widest mb-2">
                <Instagram className="w-4 h-4 text-[#C5A059]" />
                <span>Conteúdo Informativo @aureacarvalho.adv</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Orientação & Dúvidas do Cotidiano
              </h3>
            </div>
            <a
              href="https://instagram.com/aureacarvalho.adv"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-800 hover:bg-stone-700 text-white border border-stone-700 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              <Instagram className="w-4 h-4 text-[#C5A059]" />
              <span>Acompanhar Instagram (24k)</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSTAGRAM_HIGHLIGHT_POSTS.map((post) => (
              <div 
                key={post.id}
                className="bg-stone-900 rounded-2xl p-6 border border-stone-800 hover:border-stone-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-4">
                    <span className="bg-stone-800 text-[#D4C3B5] px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border border-stone-700">
                      {post.tag}
                    </span>
                    <span className="text-[10px] text-stone-500">@aureacarvalho.adv</span>
                  </div>

                  <div className="bg-stone-950/80 p-4 rounded-xl border border-stone-800 mb-4">
                    <h4 className="font-serif text-base text-stone-100 font-medium leading-snug">
                      {post.headline}
                    </h4>
                    <p className="text-xs text-stone-400 font-light mt-1">
                      {post.subheadline}
                    </p>
                  </div>

                  <p className="text-xs text-stone-300 font-light whitespace-pre-line leading-relaxed mb-6">
                    {post.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-stone-400 pt-4 border-t border-stone-800/80">
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="flex items-center gap-1 text-[#C5A059]">
                      <Heart className="w-3.5 h-3.5 fill-[#C5A059]" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1 text-stone-400">
                      <MessageCircle className="w-3.5 h-3.5" /> {post.comments}
                    </span>
                  </div>
                  <button 
                    onClick={() => onOpenBookingWithArea('familia')}
                    className="text-[#D4C3B5] hover:underline font-medium text-xs"
                  >
                    Dúvidas sobre o caso →
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

