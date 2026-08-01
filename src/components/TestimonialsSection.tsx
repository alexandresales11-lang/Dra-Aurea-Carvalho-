import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/legalData';
import { Star, CheckCircle } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredTestimonials = filter === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.caseType.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="depoimentos" className="py-24 bg-[#FAF8F5] border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-white text-stone-900 border border-stone-200 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-3 shadow-2xs">
            <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
            <span>Relatos & Avaliações</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
            A Experiência dos <span className="italic font-light text-stone-800">Nossos Clientes</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 font-light">
            Depoimentos de pessoas que confiaram na atuação estratégica e humana da Dra. Áurea Carvalho.
          </p>
        </div>

        {/* Rating Trust Banner */}
        <div className="bg-[#1C1917] rounded-3xl p-8 sm:p-10 text-white mb-14 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-stone-800">
          <div className="flex items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-4xl sm:text-5xl font-serif text-[#D4C3B5] font-normal">4.9</div>
              <div className="flex text-[#C5A059] mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                ))}
              </div>
            </div>
            <div className="border-l border-stone-800 pl-6">
              <p className="font-serif text-lg text-white font-normal">Excelência no Atendimento</p>
              <p className="text-xs text-stone-400 font-light mt-0.5">Mais de 128 avaliações recomendadas no Google e redes sociais</p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="bg-white hover:bg-stone-100 text-stone-900 font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-2xs transition-all whitespace-nowrap"
          >
            Agendar Consulta
          </button>
        </div>

        {/* Minimal Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {['all', 'divórcio', 'pensão', 'inventário'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                filter === type 
                  ? 'bg-stone-900 text-white shadow-2xs' 
                  : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
              }`}
            >
              {type === 'all' ? 'Todos' : type}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-stone-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#C5A059]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-stone-400 font-light">
                    {item.date}
                  </span>
                </div>

                <p className="text-stone-700 text-xs sm:text-sm font-light leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-stone-900 text-xs sm:text-sm flex items-center gap-1.5">
                    {item.name}
                    {item.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-stone-900 inline" />
                    )}
                  </h4>
                  <p className="text-[10px] text-stone-400 font-light mt-0.5">
                    {item.role} • {item.city}
                  </p>
                  <span className="inline-block bg-[#F3ECE6] text-stone-800 text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-stone-200 mt-1.5">
                    {item.caseType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

