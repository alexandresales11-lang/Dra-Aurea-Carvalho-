import React from 'react';
import { LAWYER_INFO } from '../data/legalData';
import { MessageSquare, Calendar } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1C1917]/95 backdrop-blur-md border-t border-stone-800 p-3 px-4 shadow-2xl flex items-center justify-between gap-3">
      
      {/* WhatsApp Action */}
      <a
        href={`https://wa.me/${LAWYER_INFO.whatsappNumber}?text=Ol%C3%A1%20Dra.%20%C3%81urea%2C%20gostaria%20de%20atendimento%20jur%C3%ADdico.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 py-3 px-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-98 transition-all"
      >
        <MessageSquare className="w-4 h-4 text-stone-300" />
        <span>WhatsApp</span>
      </a>

      {/* Booking Action */}
      <button
        onClick={onOpenBooking}
        className="flex-1 bg-white hover:bg-stone-100 text-stone-900 py-3 px-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-2xs active:scale-98 transition-all"
      >
        <Calendar className="w-4 h-4 text-[#C5A059]" />
        <span>Agendar Consulta</span>
      </button>

    </div>
  );
};
