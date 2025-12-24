
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { SCHOOL_INFO, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-800 p-2 rounded-lg">
                <GraduationCap className="w-8 h-8 text-yellow-400" />
              </div>
              <span className="text-xl font-serif font-bold text-white tracking-tight">ST. JOSEPH'S</span>
            </div>
            <p className="mb-6 leading-relaxed">
              Established with the vision to provide excellence in education, focusing on character building and academic achievement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-yellow-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Admissions</h4>
            <ul className="space-y-4">
              <li><Link to="/admissions" className="hover:text-yellow-400 transition-colors">Procedure</Link></li>
              <li><Link to="/admissions" className="hover:text-yellow-400 transition-colors">Fee Structure</Link></li>
              <li><Link to="/admissions" className="hover:text-yellow-400 transition-colors">Curriculum</Link></li>
              <li><Link to="/admissions" className="hover:text-yellow-400 transition-colors">Download Brochure</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-yellow-400 w-5 h-5 shrink-0" />
                <span>{SCHOOL_INFO.location}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-yellow-400 w-5 h-5 shrink-0" />
                <span>{SCHOOL_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-yellow-400 w-5 h-5 shrink-0" />
                <span className="break-all">{SCHOOL_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} St. Joseph's School, Mahoba. All rights reserved.</p>
          <p className="mt-2 font-light">Developed with Excellence & Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
