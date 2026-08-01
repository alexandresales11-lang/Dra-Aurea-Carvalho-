import React from 'react';
import { LAWYER_INFO } from '../data/legalData';
import { 
  Instagram, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUp 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-stone-300 pt-20 pb-28 lg:pb-14 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-stone-800/80">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-stone-900 flex items-center justify-center text-[#D4C3B5] font-serif font-semibold text-lg border border-stone-800">
                ÁC
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-white text-base tracking-widest uppercase">
                  Áurea Carvalho
                </span>
                <span className="text-[9px] uppercase tracking-widest text-stone-400 font-light">
                  Advocacia • OAB/BA 68.412
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Advocacia de alta precisão estratégica em Direito de Família, Sucessões, Divórcio e Gestão Patrimonial. Atendimento presencial e digital para todo o Brasil.
            </p>

            <a 
              href={`https://instagram.com/${LAWYER_INFO.instagram.replace('@', '')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800 px-3.5 py-1.5 rounded-full text-xs font-light transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{LAWYER_INFO.instagram}</span>
            </a>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-serif text-white text-sm uppercase tracking-widest mb-5 font-normal">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400 font-light">
              <li><a href="#areas" className="hover:text-white transition-colors">Áreas de Atuação</a></li>
              <li><a href="#resultados" className="hover:text-white transition-colors">Resultados & Casos</a></li>
              <li><a href="#agendamento" className="hover:text-white transition-colors">Agendar Consulta</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#diagnostico" className="hover:text-white transition-colors">Análise Preliminar</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Perfil Institucional</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Col 3: Areas */}
          <div>
            <h4 className="font-serif text-white text-sm uppercase tracking-widest mb-5 font-normal">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400 font-light">
              <li><span>Divórcio Estratégico</span></li>
              <li><span>Partilha e Blindagem de Bens</span></li>
              <li><span>Pensão Alimentícia & Revisional</span></li>
              <li><span>Inventários Extrajudiciais</span></li>
              <li><span>União Estável & Acordos</span></li>
              <li><span>Guarda & Visitas</span></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-3.5">
            <h4 className="font-serif text-white text-sm uppercase tracking-widest mb-5 font-normal">
              Atendimento & Contato
            </h4>

            <div className="flex items-start gap-3 text-xs text-stone-400 font-light">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>{LAWYER_INFO.address}</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-stone-400 font-light">
              <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>{LAWYER_INFO.phone}</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-stone-400 font-light">
              <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>{LAWYER_INFO.email}</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-stone-400 font-light pt-1">
              <Clock className="w-4 h-4 text-[#D4C3B5] shrink-0" />
              <span>{LAWYER_INFO.hours}</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light">
          <div className="text-center sm:text-left space-y-1">
            <p>© {new Date().getFullYear()} Dra. Áurea Carvalho - Todos os direitos reservados.</p>
            <p className="text-[10px] text-stone-600">
              Inscrição OAB/BA 68.412 • Conteúdo informativo sob a observância do Provimento CFOAB nº 205/2021.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white border border-stone-800 transition-colors"
            title="Voltar ao Topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

