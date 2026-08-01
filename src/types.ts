export type PracticeAreaId = 'familia' | 'divorcio' | 'pensao' | 'inventario' | 'patrimonio';

export interface PracticeArea {
  id: PracticeAreaId;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlights: string[];
}

export interface CaseResult {
  id: string;
  category: PracticeAreaId;
  categoryLabel: string;
  title: string;
  clientInitials: string;
  city: string;
  badgeText: string;
  timeframe: string;
  challenge: string;
  solution: string;
  outcome: string;
  quote?: string;
  metricLabel: string;
  metricValue: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  rating: number;
  date: string;
  caseType: string;
  comment: string;
  avatarUrl?: string;
  verified: boolean;
}

export interface BookingData {
  id: string;
  modality: 'online' | 'presencial';
  area: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  notes?: string;
  createdAt: string;
  status: 'confirmado' | 'pendente';
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface InstagramPostCard {
  id: string;
  headline: string;
  subheadline: string;
  tag: string;
  likes: string;
  comments: string;
  summary: string;
}
