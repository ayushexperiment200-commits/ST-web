
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
  Globe
} from 'lucide-react';

export const COLORS = {
  primary: '#003366', // Deep Royal Blue
  secondary: '#FFD700', // Academic Gold
  accent: '#E63946', // Modern Red
  background: '#F8FAFC',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const SCHOOL_INFO = {
  name: "St. Joseph's English Medium Senior Secondary School",
  location: "Mahoba, Uttar Pradesh - 210427",
  motto: "Love, Service, Discipline",
  affiliation: "Affiliated to CBSE, New Delhi",
  phone: "+91-5281-297044",
  email: "stjosephmahoba@gmail.com",
};

export const FEATURES = [
  {
    title: "Holistic Education",
    description: "Focusing on spiritual, intellectual, and social growth through balanced curriculum.",
    icon: <GraduationCap className="w-8 h-8 text-blue-800" />,
  },
  {
    title: "Elite Faculty",
    description: "Experienced educators dedicated to nurturing student curiosity and character.",
    icon: <Users className="w-8 h-8 text-blue-800" />,
  },
  {
    title: "Modern Labs",
    description: "State-of-the-art Science, Math, and Computer laboratories for hands-on learning.",
    icon: <Globe className="w-8 h-8 text-blue-800" />,
  },
  {
    title: "Sports & Arts",
    description: "Extensive programs in athletics, music, dance, and fine arts for every student.",
    icon: <Trophy className="w-8 h-8 text-blue-800" />,
  },
];
