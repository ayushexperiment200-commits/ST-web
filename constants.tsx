
import React from 'react';
import { 
  BookOpen, 
  Trophy, 
  Users, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail,
  GraduationCap,
  ShieldCheck,
  Globe,
  Music,
  Heart,
  Lightbulb
} from 'lucide-react';

export const COLORS = {
  primary: '#002147', // Oxford Blue (More prestigious)
  secondary: '#D4AF37', // Metallic Gold
  accent: '#C41E3A', // Cardinal Red
  background: '#FFFFFF',
  surface: '#F8FAFC',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Campus Life', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const SCHOOL_INFO = {
  name: "St. Joseph's English Medium Senior Secondary School",
  shortName: "St. Joseph's Mahoba",
  location: "Bilsibai Road, Mahoba, Uttar Pradesh - 210427",
  motto: "Love, Service, Discipline",
  affiliation: "Affiliated to CBSE, New Delhi (Affiliation No: 2131238)",
  phone: "+91-5281-244044",
  email: "stjosephmahoba@gmail.com",
  established: "1984",
};

export const FEATURES = [
  {
    title: "Academic Rigor",
    description: "Our CBSE-aligned curriculum is designed to challenge students and foster a lifelong love for learning and discovery.",
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    color: "bg-blue-900"
  },
  {
    title: "Spiritual Growth",
    description: "Nurturing the soul through value-based education, moral instruction, and community service initiatives.",
    icon: <Heart className="w-8 h-8 text-white" />,
    color: "bg-red-700"
  },
  {
    title: "Technological Edge",
    description: "Equipping students with future-ready skills through smart classrooms and advanced computing laboratories.",
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    color: "bg-yellow-600"
  },
  {
    title: "Athletic Excellence",
    description: "Developing teamwork and physical resilience through comprehensive sports coaching and state-of-the-art facilities.",
    icon: <Trophy className="w-8 h-8 text-white" />,
    color: "bg-emerald-700"
  },
];
