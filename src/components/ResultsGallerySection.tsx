import React, { useState } from 'react';
import { CASE_RESULTS } from '../data/legalData';
import { CaseResult } from '../types';
import { 
  Trophy, 
  Clock, 
  MapPin, 
  Quote, 
  FileText, 
  Calendar,
  X
} from 'lucide-react';

interface ResultsGallerySectionProps {
  onOpenBookingWithArea: (areaId: string) => void;
}

export const ResultsGallerySection: React.FC<ResultsGallerySectionProps> = ({
  onOpenBookingWithArea,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedCaseModal, setSelectedCaseModal] = useState<CaseResult | null>(null);

  const filters = [
    { id: 'all', label: 'Todos os Casos' },
    { id: 'pensao', label: 'Pensão Alimentícia' },
    { id: 'inventario', label: 'Inventários' },
    { id: 'divorcio', label: 'Divórcio & Patrimônio' },
    { id: 'patrimonio', label: 'União Estável' },
  ];

  const filteredCases = activeFilter === 'all' 
    ? CASE_RESULTS 
    : CASE_RESULTS.filter(c => c.category === activeFilter);

  return (
    <section id="resultados" className="py-24 bg-[#1C1917] text-white relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-stone-800 border border-stone-700 text-[#D4C3B5] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-3">
            <Trophy className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Casos & Resultados</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mt-2">
            Efetividade & <span className="italic font-light text-[#D4C3B5]">Proteção Garantida</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-3 leading-relaxed font-light">
            Exemplos de demandas familiares e sucessórias conduzidas com estratégia, técnica e estrito respeito à privacidade.
            <span className="text-stone-500 text-xs block mt-1">(Sigilo resguardado conforme o Código de Ética e Disciplina da OAB)</span>
          </p>
        </div>

        {/* Minimal Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                activeFilter === filter.id
                  ? 'bg-white text-stone-900 shadow-2xs border border-white'
                  : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800 hover:border-stone-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Results Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((item) => (
            <div 
              key={item.id}
              className="bg-stone-900/90 rounded-3xl border border-stone-800 hover:border-stone-700 overflow-hidden shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="p-7">
                
                {/* Metric Badge & Timeframe */}
                <div className="flex items-center justify-between mb-5">
                  <span className="bg-stone-800 text-[#D4C3B5] border border-stone-700 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider flex items-center gap-1.5 uppercase">
                    <Trophy className="w-3 h-3 text-[#C5A059]" />
                    {item.metricValue}
                  </span>
                  <span className="text-[11px] text-stone-500 flex items-center gap-1 font-light">
                    <Clock className="w-3.5 h-3.5 text-stone-500" />
                    {item.timeframe}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-white group-hover:text-[#D4C3B5] transition-colors mb-3 leading-snug font-normal">
                  {item.title}
                </h3>

                {/* Client Initials & Location */}
                <div className="flex items-center gap-2 text-xs text-stone-400 mb-5 pb-3 border-b border-stone-800">
                  <span className="font-medium text-stone-300">Cliente: {item.clientInitials}</span>
                  <span className="text-stone-700">•</span>
                  <span className="flex items-center gap-1 text-stone-400">
                    <MapPin className="w-3 h-3 text-[#C5A059]" /> {item.city}
                  </span>
                </div>

                {/* Challenge & Strategy */}
                <div className="space-y-3 text-xs text-stone-300 mb-5 font-light">
                  <div>
                    <span className="text-[#C5A059] font-semibold uppercase tracking-wider text-[10px] block mb-0.5">Desafio:</span>
                    <p className="line-clamp-2 text-stone-300">{item.challenge}</p>
                  </div>
                  <div>
                    <span className="text-stone-300 font-semibold uppercase tracking-wider text-[10px] block mb-0.5">Estratégia:</span>
                    <p className="line-clamp-2 text-stone-400">{item.solution}</p>
                  </div>
                </div>

                {/* Quote */}
                {item.quote && (
                  <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800 text-xs italic text-stone-300 flex items-start gap-2.5 font-light">
                    <Quote className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>"{item.quote}"</span>
                  </div>
                )}

              </div>

              {/* Action Button */}
              <div className="px-7 pb-7 pt-1">
                <button
                  onClick={() => setSelectedCaseModal(item)}
                  className="w-full py-3 px-4 rounded-full bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-stone-700"
                >
                  <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Ver Detalhes</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Case Details */}
        {selectedCaseModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-slideIn">
            <div className="bg-stone-900 border border-stone-700 rounded-3xl max-w-xl w-full p-6 sm:p-8 text-white relative shadow-2xl">
              
              <button
                onClick={() => setSelectedCaseModal(null)}
                className="absolute top-5 right-5 text-stone-400 hover:text-white p-2 rounded-full bg-stone-800 hover:bg-stone-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-[#D4C3B5] text-xs font-semibold uppercase tracking-wider mb-2">
                <Trophy className="w-4 h-4 text-[#C5A059]" />
                <span>{selectedCaseModal.categoryLabel} • {selectedCaseModal.badgeText}</span>
              </div>

              <h3 className="font-serif text-2xl text-white font-normal mb-4">
                {selectedCaseModal.title}
              </h3>

              <div className="grid grid-cols-2 gap-3 bg-stone-950 p-4 rounded-2xl text-xs mb-6 border border-stone-800">
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase tracking-wider mb-0.5">Prazo de Resolução:</span>
                  <span className="font-bold text-white text-sm">{selectedCaseModal.timeframe}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase tracking-wider mb-0.5">Resultado Obtido:</span>
                  <span className="font-bold text-[#C5A059] text-sm">{selectedCaseModal.metricValue}</span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-300 leading-relaxed font-light mb-6">
                <div>
                  <strong className="text-[#C5A059] uppercase tracking-wider text-[11px] block mb-1">Cenário Inicial:</strong>
                  <p className="bg-stone-950 p-3.5 rounded-xl border border-stone-800">{selectedCaseModal.challenge}</p>
                </div>

                <div>
                  <strong className="text-stone-200 uppercase tracking-wider text-[11px] block mb-1">Estratégia Jurídica:</strong>
                  <p className="bg-stone-950 p-3.5 rounded-xl border border-stone-800">{selectedCaseModal.solution}</p>
                </div>

                <div>
                  <strong className="text-[#D4C3B5] uppercase tracking-wider text-[11px] block mb-1">Desfecho:</strong>
                  <p className="bg-stone-950 p-3.5 rounded-xl border border-stone-800 text-white font-normal">{selectedCaseModal.outcome}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-stone-800">
                <button
                  onClick={() => {
                    const area = selectedCaseModal.category;
                    setSelectedCaseModal(null);
                    onOpenBookingWithArea(area);
                  }}
                  className="flex-1 bg-white hover:bg-stone-200 text-stone-900 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-stone-900" />
                  <span>Agendar Consulta Semelhante</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

