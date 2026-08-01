import React from 'react';
import { LAWYER_INFO } from '../data/legalData';
import { 
  ShieldCheck, 
  Calendar, 
  MessageSquare, 
  Star, 
  Sparkles,
  ArrowRight,
  Check
} from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenDiagnostic: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onOpenBooking,
  onOpenDiagnostic
}) => {
  return (
    <section className="relative bg-[#FAF8F5] text-stone-900 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-stone-200/60 overflow-hidden">
      
      {/* Subtle Warm Background Gradient Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F3ECE6] to-transparent pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7">
            
            {/* Minimal Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-stone-200/90 rounded-full px-4 py-1.5 text-xs text-stone-700 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#1C1917] animate-pulse" />
              <span className="font-semibold tracking-wide">Atendimento Presencial & Online</span>
              <span className="text-stone-300">•</span>
              <span className="text-stone-900 font-semibold">{LAWYER_INFO.oab}</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 leading-[1.12] tracking-tight">
              Proteção Jurídica Patrimonial e Familiar com <span className="italic font-light text-stone-800 underline decoration-stone-300 decoration-1 underline-offset-8">Discrição & Excelência</span>
            </h1>

            {/* Subheadline */}
            <p className="text-stone-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              Atuação especializada em <strong className="text-stone-900 font-semibold">Divórcio, Pensão Alimentícia, Inventários Extrajudiciais</strong> e organização de bens. Resolução técnica com foco no menor desgaste pessoal e máxima eficiência patrimonial.
            </p>

            {/* Quick Minimalist Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl pt-1 text-xs text-stone-700">
              <div className="flex items-center gap-2.5 bg-white/80 border border-stone-200/80 rounded-xl p-3 shadow-2xs">
                <div className="w-5 h-5 rounded-full bg-[#F3ECE6] flex items-center justify-center text-stone-900 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span className="font-medium">Divórcio Consensual e Partilha</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/80 border border-stone-200/80 rounded-xl p-3 shadow-2xs">
                <div className="w-5 h-5 rounded-full bg-[#F3ECE6] flex items-center justify-center text-stone-900 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span className="font-medium">Pensão Alimentícia & Revisional</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/80 border border-stone-200/80 rounded-xl p-3 shadow-2xs">
                <div className="w-5 h-5 rounded-full bg-[#F3ECE6] flex items-center justify-center text-stone-900 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span className="font-medium">Inventário Rápido em Cartório</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/80 border border-stone-200/80 rounded-xl p-3 shadow-2xs">
                <div className="w-5 h-5 rounded-full bg-[#F3ECE6] flex items-center justify-center text-stone-900 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span className="font-medium">União Estável & Pactos</span>
              </div>
            </div>

            {/* High Conversion Minimal CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2.5 bg-[#1C1917] hover:bg-stone-800 text-white px-7 py-4 rounded-full font-semibold text-xs uppercase tracking-wider shadow-2xs hover:shadow-md transition-all active:scale-98 group"
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                <span>Agendar Consulta</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C5A059]" />
              </button>

              <a
                href={`https://wa.me/${LAWYER_INFO.whatsappNumber}?text=Ol%C3%A1%20Dra.%20%C3%81urea%2C%20preciso%20de%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20urgente.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white hover:bg-stone-100 border border-stone-300 text-stone-800 px-6 py-4 rounded-full font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <MessageSquare className="w-4 h-4 text-stone-700" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Minimal Trust Metrics Bar */}
            <div className="pt-6 border-t border-stone-200/70 w-full flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
              <div className="flex items-center gap-2">
                <div className="flex text-[#C5A059]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                  ))}
                </div>
                <span className="font-bold text-stone-900">4.9</span>
                <span>({LAWYER_INFO.stats.googleRating})</span>
              </div>

              <div className="flex items-center gap-1.5 font-medium text-stone-700">
                <span className="text-stone-900 font-serif font-bold text-sm">{LAWYER_INFO.stats.casesSolved}</span>
                <span>casos atendidos</span>
              </div>

              <div className="flex items-center gap-1.5 text-stone-500">
                <ShieldCheck className="w-4 h-4 text-stone-400" />
                <span>Sigilo OAB/BA 68.412</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Portrait Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-md">
              
              {/* Minimal Frame with Thin Border */}
              <div className="relative bg-white rounded-3xl p-3 border border-stone-200/90 shadow-xl">
                
                {/* Generated Minimalist Portrait Image */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-stone-100">
                  <img 
                    src="https://i.imgur.com/aNT4tnY.png" 
                    alt="Dra. Áurea Carvalho Advogada"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-90" />
                  
                  {/* Floating Overlay Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 text-stone-900 shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="font-serif font-semibold text-base text-stone-900">Dra. Áurea Carvalho</h2>
                        <p className="text-[11px] text-stone-600 font-medium">Advogada • OAB/BA 68.412</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-[#1C1917] text-[#D4C3B5] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Especialista
                        </span>
                        <p className="text-[10px] text-stone-500 mt-0.5">Família & Sucessões</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Diagnostic Banner Below Image */}
                <div className="mt-3 p-3.5 bg-[#FAF8F5] rounded-xl border border-stone-200/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#F3ECE6] flex items-center justify-center text-stone-900 shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-stone-800">Dúvidas sobre o seu caso?</p>
                      <p className="text-[10px] text-stone-500">Diagnóstico rápido em 30 segs</p>
                    </div>
                  </div>
                  <button
                    onClick={onOpenDiagnostic}
                    className="bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 text-[11px] px-3 py-1.5 rounded-full font-semibold whitespace-nowrap transition-colors shadow-2xs"
                  >
                    Simular Direitos
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

