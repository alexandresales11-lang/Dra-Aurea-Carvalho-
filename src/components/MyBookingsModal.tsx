import React from 'react';
import { BookingData } from '../types';
import { LAWYER_INFO } from '../data/legalData';
import { X, BookmarkCheck, Calendar, Clock, Video, MapPin, Trash2, MessageSquare } from 'lucide-react';

interface MyBookingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: BookingData[];
  onCancelBooking: (id: string) => void;
}

export const MyBookingsModal: React.FC<MyBookingsModalProps> = ({
  isOpen,
  onClose,
  bookings,
  onCancelBooking,
}) => {
  if (!isOpen) return null;

  const buildWhatsappMessage = (b: BookingData) => {
    const text = `Ol%C3%A1%20Dra.%20%C3%81urea!%20Gostaria%20de%20confirmar%20meu%20agendamento%20c%C3%B3digo%20${b.id}%20marcado%20para%20${b.date}%20%C3%A0s%20${b.timeSlot}.`;
    return `https://wa.me/${LAWYER_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl border border-slate-200 overflow-y-auto max-h-[85vh]">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-2 rounded-lg bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-red-800 text-xs font-bold uppercase tracking-wider mb-1">
          <BookmarkCheck className="w-4 h-4 text-red-800" />
          <span>Sua Agenda</span>
        </div>

        <h3 className="font-serif font-bold text-2xl text-slate-900 mb-6">
          Meus Agendamentos
        </h3>

        {bookings.length === 0 ? (
          <div className="text-center py-8 text-slate-500 space-y-3">
            <Calendar className="w-12 h-12 text-slate-300 mx-auto" />
            <p className="text-sm font-medium">Você ainda não possui consultas agendadas.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((b) => (
              <div 
                key={b.id}
                className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col justify-between gap-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold bg-slate-200 text-slate-800 px-2 py-0.5 rounded uppercase">
                      {b.id}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm mt-1">{b.area}</h4>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      {b.modality === 'online' ? <Video className="w-3.5 h-3.5 text-blue-600 inline" /> : <MapPin className="w-3.5 h-3.5 text-red-600 inline" />}
                      <span>{b.modality === 'online' ? 'Online via Vídeo' : 'Presencial no Escritório'}</span>
                    </p>
                  </div>

                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-300 uppercase">
                    {b.status}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-semibold text-slate-800 bg-white p-2.5 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-1.5 text-emerald-700">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{b.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{b.timeSlot}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                  <a
                    href={buildWhatsappMessage(b)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Confirmar no WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onCancelBooking(b.id)}
                    className="text-xs text-red-600 hover:text-red-800 font-medium flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Cancelar</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
