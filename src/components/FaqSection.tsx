import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/legalData';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white border-b border-stone-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] text-stone-900 border border-stone-200 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-3 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Dúvidas Frequentes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
            Esclarecimentos <span className="italic font-light text-stone-800">Jurídicos</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 font-light">
            Respostas às questões mais frequentes trazidas pelos nossos clientes.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => (
            <div 
              key={idx}
              className="border border-stone-200/90 rounded-2xl overflow-hidden transition-all bg-[#FAF8F5]/50 hover:bg-[#FAF8F5]"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 text-left font-medium text-stone-900 flex items-center justify-between gap-4 text-sm sm:text-base focus:outline-none"
              >
                <span className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0" />
                  {item.question}
                </span>
                <ChevronDown 
                  className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                    openIndex === idx ? 'rotate-180 text-stone-900' : ''
                  }`} 
                />
              </button>

              {openIndex === idx && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-stone-600 text-xs sm:text-sm font-light leading-relaxed border-t border-stone-200/50 bg-white animate-slideIn">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Help Card */}
        <div className="mt-14 bg-[#FAF8F5] border border-stone-200/80 rounded-3xl p-8 text-center space-y-4">
          <h3 className="font-serif text-xl text-stone-900 font-normal">
            Sua dúvida possui particularidades técnicas?
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 font-light max-w-lg mx-auto leading-relaxed">
            Cada situação familiar possui nuances únicas. Agende uma consulta para avaliação analítica do seu caso.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#1C1917] hover:bg-stone-800 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-2xs transition-all"
            >
              Agendar Consulta Individual
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

