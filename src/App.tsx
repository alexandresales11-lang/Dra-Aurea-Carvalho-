import React, { useState, useEffect } from 'react';
import { BookingData } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DiagnosticTool } from './components/DiagnosticTool';
import { PracticeAreasSection } from './components/PracticeAreasSection';
import { ResultsGallerySection } from './components/ResultsGallerySection';
import { BookingSection } from './components/BookingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { BookingModal } from './components/BookingModal';
import { MyBookingsModal } from './components/MyBookingsModal';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [bookings, setBookings] = useState<BookingData[]>(() => {
    try {
      const saved = localStorage.getItem('aurea_carvalho_bookings');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isMyBookingsModalOpen, setIsMyBookingsModalOpen] = useState(false);
  const [selectedAreaForBooking, setSelectedAreaForBooking] = useState<string>('divorcio');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('aurea_carvalho_bookings', JSON.stringify(bookings));
    } catch (e) {
      console.error(e);
    }
  }, [bookings]);

  const handleBookingSuccess = (newBooking: BookingData) => {
    setBookings((prev) => [newBooking, ...prev]);
    setToastMessage(`Consulta agendada para ${newBooking.date} às ${newBooking.timeSlot}!`);
    setTimeout(() => setToastMessage(null), 6000);
  };

  const handleCancelBooking = (id: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  const openBookingModalWithArea = (areaId: string) => {
    setSelectedAreaForBooking(areaId);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans text-stone-900 selection:bg-stone-900 selection:text-white flex flex-col">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#1C1917] text-white p-4 rounded-2xl shadow-2xl border border-stone-800 flex items-center gap-3 animate-slideIn">
          <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-stone-400 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Header Navbar */}
      <Navbar 
        onOpenBooking={() => setIsBookingModalOpen(true)}
        onOpenMyBookings={() => setIsMyBookingsModalOpen(true)}
        bookingCount={bookings.length}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection 
          onOpenBooking={() => setIsBookingModalOpen(true)}
          onOpenDiagnostic={() => {
            const diagElem = document.getElementById('diagnostico');
            if (diagElem) diagElem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Interactive Diagnostic Tool */}
        <DiagnosticTool 
          onOpenBookingWithArea={openBookingModalWithArea}
        />

        {/* 3. Practice Areas & IG Content */}
        <PracticeAreasSection 
          onOpenBookingWithArea={openBookingModalWithArea}
        />

        {/* 4. Results Gallery */}
        <ResultsGallerySection 
          onOpenBookingWithArea={openBookingModalWithArea}
        />

        {/* 5. Booking Section */}
        <BookingSection 
          initialArea={selectedAreaForBooking}
          onBookingSuccess={handleBookingSuccess}
        />

        {/* 6. Testimonials */}
        <TestimonialsSection 
          onOpenBooking={() => setIsBookingModalOpen(true)}
        />

        {/* 7. About Dra. Áurea */}
        <AboutSection 
          onOpenBooking={() => setIsBookingModalOpen(true)}
        />

        {/* 8. FAQ Accordion */}
        <FaqSection 
          onOpenBooking={() => setIsBookingModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky CTA Bar */}
      <MobileBottomBar 
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      {/* Booking Popup Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialArea={selectedAreaForBooking}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* My Bookings Saved Modal */}
      <MyBookingsModal 
        isOpen={isMyBookingsModalOpen}
        onClose={() => setIsMyBookingsModalOpen(false)}
        bookings={bookings}
        onCancelBooking={handleCancelBooking}
      />

    </div>
  );
}
