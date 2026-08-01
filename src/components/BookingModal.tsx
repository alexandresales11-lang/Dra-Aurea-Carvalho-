import React, { useState } from 'react';
import { LAWYER_INFO, PRACTICE_AREAS } from '../data/legalData';
import { BookingData } from '../types';
import { X, Calendar, Video, MapPin, CheckCircle, MessageSquare, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialArea?: string;
  onBookingSuccess: (booking: BookingData) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialArea = 'divorcio',
  onBookingSuccess,
}) => {
  const [modality, setModality] = useState<'online' | 'presencial'>('online');
  const [selectedArea, setSelectedArea] = useState<string>(initialArea);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  if (!isOpen) return null;

  const timeSlots = ['09:00', '10:30', '14:00', '15:30', '17:00'];

  const getNextBusinessDays = () => {
    const days = [];
    const today = new Date();
    let count = 0;
    for (let i = 1; count < 6; i++) {
      const day = new Date(today);
      day.setDate(today.getDate() + i);
      if (day.getDay() !== 0 && day.getDay() !== 6) {
        const formattedDate = day.toISOString().split('T')[0];
        const displayLabel = day.toLocaleDateString('pt-BR', { 
          weekday: 'short', 
          day: '2-digit', 
          month: '2-digit' 
        });
        days.push({ value: formattedDate, label: displayLabel });
        count++;
      }
    }
    return days;
  };

  const days = getNextBusinessDays();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTimeSlot || !clientName || !clientPhone) {
      alert('Por favor, preencha os campos obrigatórios.');
      return;
    }

    const areaObj = PRACTICE_AREAS.find(a => a.id === selectedArea);

    const newBooking: BookingData = {
      id: 'ag-' + Date.now().toString().slice(-6),
      modality,
      area: areaObj ? areaObj.title : 'Direito de Família',
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      clientName,
      clientPhone,
      clientEmail: '',
      notes,
      createdAt: new Date().toLocaleString('pt-BR'),
      status: 'confirmado',
    };

    onBookingSuccess(newBooking);
    onClose();

    // Redirect to WhatsApp confirmation
    const text = `Ol%C3%A1%20Dra.%20%C3%81urea!%20Agendei%20uma%20consulta%20pelo%20modal%20do%20site:%0A` +
      `👤%20${encodeURIComponent(clientName)}%20(${encodeURIComponent(clientPhone)})%0A` +
      `📅%20${selectedDate}%20%C3%A0s%20${selectedTimeSlot}%20(${modality})%0A` +
      `⚖️%20${encodeURIComponent(areaObj?.title || 'Família')}`;
    window.open(`https://wa.me/${LAWYER_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl border border-slate-200 overflow-y-auto max-h-[90vh]">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-2 rounded-lg bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-red-800 text-xs font-bold uppercase tracking-wider mb-1">
          <Calendar className="w-4 h-4 text-amber-500" />
          <span>Agendamento Direto</span>
        </div>

        <h3 className="font-serif font-bold text-2xl text-slate-900 mb-1">
          Agendar Consulta
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          Com a Dra. Áurea Carvalho ({LAWYER_INFO.oab})
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Modality */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setModality('online')}
              className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                modality === 'online'
                  ? 'border-red-800 bg-red-800 text-white shadow-xs'
                  : 'border-slate-200 bg-slate-50 text-slate-700'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>💻 Online (Vídeo)</span>
            </button>

            <button
              type="button"
              onClick={() => setModality('presencial')}
              className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                modality === 'presencial'
                  ? 'border-red-800 bg-red-800 text-white shadow-xs'
                  : 'border-slate-200 bg-slate-50 text-slate-700'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>🏢 Presencial</span>
            </button>
          </div>

          {/* Specialty */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Especialidade:</label>
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium bg-white text-slate-800"
            >
              {PRACTICE_AREAS.map(a => (
                <option key={a.id} value={a.id}>{a.title}</option>
              ))}
            </select>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Escolha o Dia:</label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {days.map(d => (
                <button
                  key={d.value}
                  type="button"
                  onClick={() => setSelectedDate(d.value)}
                  className={`p-2 rounded-lg border text-[11px] font-semibold transition-all ${
                    selectedDate === d.value
                      ? 'border-red-800 bg-red-800 text-white'
                      : 'border-slate-200 bg-slate-50 text-slate-700'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Time Picker */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Horário:</label>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map(slot => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedTimeSlot(slot)}
                  className={`p-2 rounded-lg border text-xs font-bold transition-all ${
                    selectedTimeSlot === slot
                      ? 'border-emerald-600 bg-emerald-600 text-white'
                      : 'border-slate-200 bg-slate-50 text-slate-700'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Fields */}
          <div className="space-y-2 pt-2">
            <input
              type="text"
              required
              placeholder="Seu Nome Completo *"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-red-800"
            />
            <input
              type="tel"
              required
              placeholder="WhatsApp com DDD *"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-red-800"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-800 hover:bg-red-900 text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 mt-4"
          >
            <Calendar className="w-4 h-4 text-amber-300" />
            <span>Confirmar e Enviar no WhatsApp</span>
          </button>
        </form>

      </div>
    </div>
  );
};
