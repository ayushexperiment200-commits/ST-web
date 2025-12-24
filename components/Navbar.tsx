
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { NAV_LINKS, COLORS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 glass shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-blue-900 p-2 rounded-lg">
              <GraduationCap className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <span className={`block text-xl font-bold font-serif leading-none ${scrolled ? 'text-blue-900' : 'text-white'}`}>
                ST. JOSEPH'S
              </span>
              <span className={`block text-[10px] uppercase tracking-widest ${scrolled ? 'text-slate-600' : 'text-white/80'}`}>
                MAHOBA, UP
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-yellow-500 ${
                  location.pathname === link.href 
                    ? 'text-yellow-500' 
                    : (scrolled ? 'text-slate-700' : 'text-white')
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-slate-900' : 'text-white'} p-2`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="bg-white shadow-xl px-4 pt-2 pb-6 space-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-semibold text-slate-800 border-b border-slate-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
