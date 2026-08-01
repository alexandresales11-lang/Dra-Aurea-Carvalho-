import React, { useState, useEffect } from 'react';
import { LAWYER_INFO } from '../data/legalData';
import { 
  Instagram, 
  Calendar, 
  ShieldCheck, 
  Menu, 
  X, 
  BookmarkCheck,
  MessageSquare
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenMyBookings: () => void;
  bookingCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenBooking, 
  onOpenMyBookings,
  bookingCount 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Áreas de Atuação', href: '#areas' },
    { name: 'Galeria de Resultados', href: '#resultados' },
    { name: 'Diagnóstico', href: '#diagnostico' },
    { name: 'Sobre a Dra.', href: '#sobre' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      {/* Top Bar with Minimal Authority */}
      <div className="bg-[#1C1917] text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-stone-200 font-medium tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              {LAWYER_INFO.oab}
            </span>
            <span className="text-stone-700">•</span>
            <span className="hidden sm:inline text-stone-400 text-[11px] tracking-wide font-light">
              Direito de Família, Sucessões & Patrimônio
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs ml-auto">
            <a 
              href={`https://instagram.com/${LAWYER_INFO.instagram.replace('@', '')}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors font-light"
            >
              <Instagram className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="font-medium tracking-wide">{LAWYER_INFO.instagram}</span>
              <span className="hidden md:inline text-stone-500 text-[10px]">
                ({LAWYER_INFO.instagramFollowers})
              </span>
            </a>

            {bookingCount > 0 && (
              <button
                onClick={onOpenMyBookings}
                className="flex items-center gap-1.5 bg-stone-800 hover:bg-stone-700 text-amber-200 px-3 py-0.5 rounded-full text-[11px] border border-stone-700 transition-all font-light"
              >
                <BookmarkCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                Agendamentos ({bookingCount})
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Minimal Navbar */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200 shadow-2xs' 
          : 'py-5 bg-[#FAF8F5] border-b border-stone-200/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo / Brand Mark */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-[#1C1917] flex items-center justify-center text-[#D4C3B5] font-serif font-bold text-base shadow-2xs border border-stone-800 group-hover:bg-stone-800 transition-colors">
              ÁC
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-medium text-stone-900 text-lg tracking-wider leading-tight group-hover:text-stone-700 transition-colors">
                ÁUREA CARVALHO
              </span>
              <span className="text-[9px] uppercase tracking-widest text-stone-500 font-light">
                Advocacia Especializada
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium uppercase tracking-widest text-stone-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-stone-950 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-stone-900 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${LAWYER_INFO.whatsappNumber}?text=Ol%C3%A1%20Dra.%20%C3%81urea%2C%20gostaria%20de%20atendimento%20jur%C3%ADdico.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border border-stone-300 hover:border-stone-900 text-stone-800 hover:text-stone-950 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all bg-white hover:bg-stone-50"
            >
              <MessageSquare className="w-3.5 h-3.5 text-stone-700" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 bg-[#1C1917] hover:bg-stone-800 text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-2xs transition-all active:scale-98"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Agendar Consulta</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-800 hover:bg-stone-200/50 transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-stone-200 px-6 pt-4 pb-8 shadow-xl animate-slideIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-800 font-serif text-lg py-1 border-b border-stone-200/50 hover:text-stone-950 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#1C1917] hover:bg-stone-800 text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-2xs"
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                Agendar Consulta
              </button>

              <a
                href={`https://wa.me/${LAWYER_INFO.whatsappNumber}?text=Ol%C3%A1%20Dra.%20%C3%81urea%2C%20gostaria%20de%20atendimento%20jur%C3%ADdico.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-stone-300 text-stone-900 bg-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 text-stone-700" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

