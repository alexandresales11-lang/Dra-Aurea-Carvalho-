import React, { useState } from 'react';
import { LAWYER_INFO, PRACTICE_AREAS } from '../data/legalData';
import { BookingData } from '../types';
import { 
  Calendar, 
  Clock, 
  Video, 
  MapPin, 
  CheckCircle, 
  User, 
  Phone, 
  Mail, 
  MessageSquare, 
  ShieldCheck
} from 'lucide-react';

interface BookingSectionProps {
  initialArea?: string;
  onBookingSuccess: (booking: BookingData) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ 
  initialArea = 'divorcio',
  onBookingSuccess 
}) => {
  const [modality, setModality] = useState<'online' | 'presencial'>('online');
  const [selectedArea, setSelectedArea] = useState<string>(initialArea);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [confirmedBooking, setConfirmedBooking] = useState<BookingData | null>(null);

  const timeSlots = ['09:00', '10:30', '14:00', '15:30', '17:00'];

  const getNextBusinessDays = () => {
    const days = [];
    const today = new Date();
    let count = 0;
    
    for (let i = 1; count < 8; i++) {
      const day = new Date(today);
      day.setDate(today.getDate() + i);
      const dayOfWeek = day.getDay();
      
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
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

  const businessDays = getNextBusinessDays();

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTimeSlot || !clientName || !clientPhone) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const areaObj = PRACTICE_AREAS.find(a => a.id === selectedArea);
    const areaTitle = areaObj ? areaObj.title : 'Direito de Família';

    const newBooking: BookingData = {
      id: 'ag-' + Date.now().toString().slice(-6),
      modality,
      area: areaTitle,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      clientName,
      clientPhone,
      clientEmail,
      notes,
      createdAt: new Date().toLocaleString('pt-BR'),
      status: 'confirmado',
    };

    setConfirmedBooking(newBooking);
    onBookingSuccess(newBooking);
  };

  const buildWhatsappConfirmationUrl = (b: BookingData) => {
    const text = `Ol%C3%A1%20Dra.%20%C3%81urea%20Carvalho!%20Acabei%20de%20agendar%20uma%20consulta%20pelo%20site:%0A%0A` +
      `📌%20C%C3%B3digo:%20${b.id}%0A` +
      `👤%20Nome:%20${encodeURIComponent(b.clientName)}%0A` +
      `📱%20Telefone:%20${encodeURIComponent(b.clientPhone)}%0A` +
      `💻%20Modalidade:%20${b.modality === 'online' ? 'Online (Vídeo)' : 'Presencial (Escritório)'}%0A` +
      `⚖️%20%C3%81rea:%20${encodeURIComponent(b.area)}%0A` +
      `📅%20Data:%20${b.date}%20%C3%A0s%20${b.timeSlot}%0A` +
      (b.notes ? `📝%20Resumo:%20${encodeURIComponent(b.notes)}%0A` : '') +
      `%0AGostaria%20de%20confirmar%20a%20disponibilidade.`;
    return `https://wa.me/${LAWYER_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="agendamento" className="py-24 bg-[#FAF8F5] border-b border-stone-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-stone-900 bg-white border border-stone-200 px-4 py-1.5 rounded-full shadow-2xs">
            Atendimento Personalizado
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal mt-4">
            Agendamento de <span className="italic font-light text-stone-800">Consulta Jurídica</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 font-light">
            Selecione o formato de sua preferência (Presencial no Escritório ou Online por Videochamada).
          </p>
        </div>

        {/* Confirmation Screen */}
        {confirmedBooking ? (
          <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-2xs text-center space-y-6 max-w-2xl mx-auto animate-slideIn">
            <div className="w-14 h-14 bg-[#F3ECE6] text-stone-900 rounded-full flex items-center justify-center mx-auto border border-stone-200">
              <CheckCircle className="w-8 h-8 text-[#C5A059]" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
              Agendamento Reservado
            </h3>

            <p className="text-stone-600 text-xs sm:text-sm font-light">
              Sua solicitação foi registrada no sistema. Para confirmar definitivamente a reserva com nossa equipe, acione a confirmação via WhatsApp.
            </p>

            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/80 text-left space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-stone-200/60 pb-2">
                <span className="text-stone-500 font-light">Código da Reserva:</span>
                <span className="font-mono font-bold text-stone-900">{confirmedBooking.id}</span>
              </div>
              <div className="flex justify-between border-b border-stone-200/60 pb-2">
                <span className="text-stone-500 font-light">Cliente:</span>
                <span className="font-medium text-stone-900">{confirmedBooking.clientName}</span>
              </div>
              <div className="flex justify-between border-b border-stone-200/60 pb-2">
                <span className="text-stone-500 font-light">Formatos:</span>
                <span className="font-medium text-stone-900">
                  {confirmedBooking.modality === 'online' ? '💻 Online via Vídeo' : '🏢 Presencial no Escritório'}
                </span>
              </div>
              <div className="flex justify-between border-b border-stone-200/60 pb-2">
                <span className="text-stone-500 font-light">Data & Horário:</span>
                <span className="font-bold text-stone-900">
                  {confirmedBooking.date} às {confirmedBooking.timeSlot}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500 font-light">Especialidade:</span>
                <span className="font-medium text-stone-900">{confirmedBooking.area}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={buildWhatsappConfirmationUrl(confirmedBooking)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#1C1917] hover:bg-stone-800 text-white py-4 px-4 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-2xs transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>Confirmar no WhatsApp</span>
              </a>

              <button
                onClick={() => setConfirmedBooking(null)}
                className="bg-stone-100 hover:bg-stone-200 text-stone-800 py-4 px-6 rounded-full font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                Novo Horário
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleConfirmBooking} className="bg-white rounded-3xl border border-stone-200/90 shadow-2xs p-6 sm:p-12 space-y-8">
            
            {/* 1. Modality */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-stone-500 mb-3">
                1. Formato de Atendimento:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setModality('online')}
                  className={`p-5 rounded-2xl border text-left transition-all flex items-center gap-4 ${
                    modality === 'online' 
                      ? 'border-stone-900 bg-[#F3ECE6] shadow-2xs' 
                      : 'border-stone-200/80 hover:bg-[#FAF8F5]'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${modality === 'online' ? 'bg-[#1C1917] text-[#D4C3B5]' : 'bg-stone-100 text-stone-600'}`}>
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900 text-sm sm:text-base">Consulta Online</h4>
                    <p className="text-xs text-stone-500 font-light mt-0.5">Via Google Meet com sigilo e praticidade</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setModality('presencial')}
                  className={`p-5 rounded-2xl border text-left transition-all flex items-center gap-4 ${
                    modality === 'presencial' 
                      ? 'border-stone-900 bg-[#F3ECE6] shadow-2xs' 
                      : 'border-stone-200/80 hover:bg-[#FAF8F5]'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${modality === 'presencial' ? 'bg-[#1C1917] text-[#D4C3B5]' : 'bg-stone-100 text-stone-600'}`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900 text-sm sm:text-base">Consulta Presencial</h4>
                    <p className="text-xs text-stone-500 font-light mt-0.5">Em nosso escritório com total privacidade</p>
                  </div>
                </button>
              </div>
            </div>

            {/* 2. Practice Area */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-stone-500 mb-3">
                2. Assunto / Especialidade:
              </label>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-stone-300 text-xs sm:text-sm bg-white font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-900"
              >
                {PRACTICE_AREAS.map((area) => (
                  <option key={area.id} value={area.id}>
                    {area.title}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Date & Time Slots */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-stone-500 mb-3">
                  3. Dia Desejado:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {businessDays.map((day) => (
                    <button
                      key={day.value}
                      type="button"
                      onClick={() => setSelectedDate(day.value)}
                      className={`p-3 rounded-xl border text-center text-xs font-medium transition-all ${
                        selectedDate === day.value
                          ? 'border-stone-900 bg-stone-900 text-white shadow-2xs'
                          : 'border-stone-200/80 hover:border-stone-400 text-stone-700 bg-[#FAF8F5]'
                      }`}
                    >
                      {day.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-stone-500 mb-3">
                  Horário:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                        selectedTimeSlot === slot
                          ? 'border-stone-900 bg-stone-900 text-white shadow-2xs'
                          : 'border-stone-200/80 hover:border-stone-400 text-stone-700 bg-[#FAF8F5]'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 inline mr-1 opacity-80" />
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Contact Fields */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <label className="block text-xs font-semibold uppercase tracking-widest text-stone-500">
                4. Dados para Contato:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-4" />
                    <input
                      type="text"
                      required
                      placeholder="Seu Nome Completo *"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-stone-900 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-4" />
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp com DDD *"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-stone-900 bg-white"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-4" />
                  <input
                    type="email"
                    placeholder="E-mail principal"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-stone-900 bg-white"
                  />
                </div>
              </div>

              <div>
                <textarea
                  rows={3}
                  placeholder="Resumo prévio do caso (opcional)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-stone-900 bg-white"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#1C1917] hover:bg-stone-800 text-white py-4 rounded-full font-bold text-xs uppercase tracking-wider shadow-2xs transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                <span>SOLICITAR AGENDAMENTO DA CONSULTA</span>
              </button>
              <p className="text-center text-xs text-stone-400 mt-3 flex items-center justify-center gap-1 font-light">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-900" />
                <span>Proteção total sob o Código de Ética e Sigilo da OAB</span>
              </p>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};

