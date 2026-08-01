import React, { useState } from 'react';
import { LAWYER_INFO } from '../data/legalData';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldAlert, 
  MessageSquare, 
  RefreshCw,
  Calendar
} from 'lucide-react';

interface DiagnosticToolProps {
  onOpenBookingWithArea?: (area: string) => void;
}

export const DiagnosticTool: React.FC<DiagnosticToolProps> = ({ onOpenBookingWithArea }) => {
  const [step, setStep] = useState(1);
  const [caseType, setCaseType] = useState<string>('');
  const [urgency, setUrgency] = useState<string>('');
  const [hasAgreement, setHasAgreement] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');

  const caseOptions = [
    { id: 'divorcio', label: 'Divórcio & Partilha de Bens', desc: 'Separação de bens, divisão de imóveis e contas' },
    { id: 'pensao', label: 'Pensão Alimentícia & Revisional', desc: 'Fixação, aumento ou cobrança de pensão atrasada' },
    { id: 'inventario', label: 'Inventário & Herança', desc: 'Partilha de bens de falecido em cartório ou justiça' },
    { id: 'uniao_estavel', label: 'União Estável & Namoro', desc: 'Contrato de convivência ou separação sem papel passado' },
    { id: 'guarda', label: 'Guarda & Convivência Familiar', desc: 'Guarda dos filhos e calendário de convivência' },
  ];

  const urgencyOptions = [
    { id: 'urgente', label: 'Urgente (Prazo judicial ou risco patrimonial imediato)' },
    { id: 'medio', label: 'Resolução planejada nos próximos 30 dias' },
    { id: 'duvida', label: 'Orientação preventiva e planejamento estratégico' },
  ];

  const agreementOptions = [
    { id: 'sem_acordo', label: 'Sem acordo entre as partes (Cenário de Conflito)' },
    { id: 'com_acordo', label: 'Há acordo amigável (Interesse em agilidade)' },
    { id: 'incerto', label: 'Ainda em negociação ou sem definição' },
  ];

  const resetDiagnostic = () => {
    setStep(1);
    setCaseType('');
    setUrgency('');
    setHasAgreement('');
    setClientName('');
  };

  const selectedCaseObj = caseOptions.find(c => c.id === caseType);

  const getCustomRecommendation = () => {
    if (caseType === 'divorcio') {
      if (hasAgreement.includes('acordo amigável')) {
        return 'Seu caso reúne pré-requisitos para Divórcio Extrajudicial Rápido em Cartório, podendo ser concluído em poucos dias com total segurança patrimonial.';
      }
      return 'Seu caso necessita de Medidas Cautelares de Bloqueio/Arrolamento de Bens para impedir a ocultação ou venda indevida do patrimônio antes da partilha.';
    }
    if (caseType === 'pensao') {
      return 'Caso prioritário para Pedido Liminar de Pensão Provisória em até 48 horas ou Execução sob pena de prisão se houver atraso acumulado.';
    }
    if (caseType === 'inventario') {
      return 'Análise prévia de Isenção/Redução do Imposto ITCMD e verificação de possibilidade de Inventário Extrajudicial em Cartório.';
    }
    return 'Orientação jurídica sob medida para preservação dos seus direitos e do bem-estar familiar com amparo do Código Civil e jurisprudência atual.';
  };

  const buildWhatsappMessage = () => {
    const text = `Ol%C3%A1%20Dra.%20%C3%81urea%20Carvalho!%20Fiz%20o%20Diagn%C3%B3stico%20R%C3%A1pido%20no%20seu%20site:%0A%0A` +
      `👤%20Nome:%20${encodeURIComponent(clientName || 'Cliente')}%0A` +
      `⚖️%20Tipo%20de%20Caso:%20${encodeURIComponent(selectedCaseObj?.label || caseType)}%0A` +
      `⌛%20Urg%C3%AAncia:%20${encodeURIComponent(urgency)}%0A` +
      `🤝%20Acordo:%20${encodeURIComponent(hasAgreement)}%0A%0A` +
      `Gostaria%20de%20agendar%20uma%20consulta%20para%20analisar%20meus%20direitos.`;
    return `https://wa.me/${LAWYER_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="diagnostico" className="py-24 bg-[#FAF8F5] relative border-b border-stone-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Minimal Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white text-stone-900 border border-stone-200 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Análise Jurídica Preliminar</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
            Diagnóstico do Caso em <span className="italic font-light text-stone-800">3 Etapas</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-lg mx-auto font-light">
            Responda 3 perguntas simples para compreender os caminhos jurídicos e prazos recomendados.
          </p>
        </div>

        {/* Minimal Wizard Card */}
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-2xs overflow-hidden p-6 sm:p-10">
          
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2">
              <span>Etapa {step} de 3</span>
              <span>{step === 1 ? '33%' : step === 2 ? '66%' : 'Concluído'}</span>
            </div>
            <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#1C1917] transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Case Type */}
          {step === 1 && (
            <div className="space-y-6 animate-slideIn">
              <h3 className="font-serif text-xl text-stone-900 flex items-center gap-3 font-normal">
                <span className="w-7 h-7 rounded-full bg-[#1C1917] text-[#D4C3B5] text-xs flex items-center justify-center font-bold">1</span>
                Qual é o assunto principal de sua demanda?
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {caseOptions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCaseType(item.id);
                      setStep(2);
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all flex items-start justify-between gap-3 group ${
                      caseType === item.id 
                        ? 'border-stone-900 bg-stone-50/80 shadow-2xs' 
                        : 'border-stone-200/80 hover:border-stone-400 hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <div>
                      <p className="font-semibold text-stone-900 group-hover:text-stone-950 text-sm sm:text-base transition-colors">
                        {item.label}
                      </p>
                      <p className="text-xs text-stone-500 font-light mt-1">
                        {item.desc}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Urgency & Agreement */}
          {step === 2 && (
            <div className="space-y-6 animate-slideIn">
              <h3 className="font-serif text-xl text-stone-900 flex items-center gap-3 font-normal">
                <span className="w-7 h-7 rounded-full bg-[#1C1917] text-[#D4C3B5] text-xs flex items-center justify-center font-bold">2</span>
                Qual o grau de urgência e cenário atual?
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-widest mb-2">
                    Urgência da Medida:
                  </label>
                  <div className="space-y-2">
                    {urgencyOptions.map((u) => (
                      <button
                        key={u.id}
                        onClick={() => setUrgency(u.label)}
                        className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all ${
                          urgency === u.label 
                            ? 'border-stone-900 bg-stone-100 text-stone-950 font-semibold' 
                            : 'border-stone-200/80 hover:bg-[#FAF8F5] text-stone-700'
                        }`}
                      >
                        {u.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-widest mb-2">
                    Existe acordo prévio entre os envolvidos?
                  </label>
                  <div className="space-y-2">
                    {agreementOptions.map((a) => (
                      <button
                        key={a.id}
                        onClick={() => setHasAgreement(a.label)}
                        className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all ${
                          hasAgreement === a.label 
                            ? 'border-stone-900 bg-stone-100 text-stone-950 font-semibold' 
                            : 'border-stone-200/80 hover:bg-[#FAF8F5] text-stone-700'
                        }`}
                      >
                        {a.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-stone-200/60">
                <button
                  onClick={() => setStep(1)}
                  className="text-stone-500 hover:text-stone-900 text-xs font-semibold uppercase tracking-wider"
                >
                  ← Voltar
                </button>
                <button
                  disabled={!urgency || !hasAgreement}
                  onClick={() => setStep(3)}
                  className="bg-[#1C1917] hover:bg-stone-800 disabled:opacity-40 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-2xs flex items-center gap-2"
                >
                  <span>Ver Orientação</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Result & Direct Action */}
          {step === 3 && (
            <div className="space-y-6 animate-slideIn">
              <div className="bg-[#FAF8F5] border border-stone-200/80 rounded-2xl p-6 text-left space-y-4">
                <div className="flex items-center gap-2 text-stone-900 font-serif font-semibold text-base">
                  <ShieldAlert className="w-5 h-5 text-[#C5A059]" />
                  <span>Resumo da Avaliação Estratégica</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700">
                  <div className="p-3 bg-white rounded-xl border border-stone-200/80">
                    <span className="font-semibold text-stone-900 block mb-0.5">Assunto:</span> 
                    {selectedCaseObj?.label}
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-stone-200/80">
                    <span className="font-semibold text-stone-900 block mb-0.5">Cenário:</span> 
                    {hasAgreement}
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-xs sm:text-sm text-stone-800 font-light leading-relaxed bg-white p-4 rounded-xl border border-stone-200/80">
                    <strong className="text-stone-950 font-semibold block mb-1">Caminho Técnico Recomendado:</strong> {getCustomRecommendation()}
                  </p>
                </div>
              </div>

              {/* Personalized Name Field */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-2 uppercase tracking-widest">
                  Seu Nome (para identificação da consulta):
                </label>
                <input
                  type="text"
                  placeholder="Ex: Maria Silva"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-stone-900 bg-white"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <a
                  href={buildWhatsappMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-stone-900 hover:bg-black text-white py-4 px-4 rounded-full font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-2xs transition-all border border-stone-800"
                >
                  <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                  <span>Enviar via WhatsApp</span>
                </a>

                {onOpenBookingWithArea && (
                  <button
                    onClick={() => onOpenBookingWithArea(caseType)}
                    className="flex-1 bg-[#1C1917] hover:bg-stone-800 text-white py-4 px-4 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-2xs transition-all"
                  >
                    <Calendar className="w-4 h-4 text-[#C5A059]" />
                    <span>Agendar Consulta</span>
                  </button>
                )}
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={resetDiagnostic}
                  className="text-xs text-stone-500 hover:text-stone-900 font-medium uppercase tracking-wider inline-flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Refazer Análise</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

