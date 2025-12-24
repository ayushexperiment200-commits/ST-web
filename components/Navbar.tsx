
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, PhoneCall, Search } from 'lucide-react';
import { NAV_LINKS, SCHOOL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-2xl shadow-blue-950/5' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className={`transition-all duration-500 p-2 rounded-2xl ${scrolled ? 'bg-blue-950 text-yellow-500 scale-90' : 'bg-white text-blue-950'}`}>
              <GraduationCap className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <span className={`block text-2xl font-black font-serif tracking-tight transition-colors duration-500 ${scrolled ? 'text-blue-950' : 'text-white'}`}>
                ST. JOSEPH'S
              </span>
              <span className={`block text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-500 ${scrolled ? 'text-slate-500' : 'text-white/70'}`}>
                MAHOBA • ESTD {SCHOOL_INFO.established}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-bold transition-all duration-300 relative group tracking-wide ${
                  location.pathname === link.href 
                    ? (scrolled ? 'text-blue-950' : 'text-yellow-400') 
                    : (scrolled ? 'text-slate-600' : 'text-white/90')
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-yellow-500 transition-all duration-300 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>

          {/* Secondary Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className={`p-2 transition-colors ${scrolled ? 'text-blue-950 hover:bg-slate-100' : 'text-white hover:bg-white/10'} rounded-full`}>
              <Search size={20} />
            </button>
            <Link 
              to="/contact" 
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg ${
                scrolled 
                  ? 'bg-blue-950 text-white hover:bg-blue-900 shadow-blue-950/20' 
                  : 'bg-yellow-500 text-blue-950 hover:bg-white shadow-yellow-500/20'
              }`}
            >
              <PhoneCall size={16} />
              <span>Contact Desk</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
             <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-2xl transition-all ${
                scrolled 
                  ? 'bg-slate-100 text-slate-900' 
                  : 'bg-white/10 text-white backdrop-blur-md'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Menu */}
      <div className={`lg:hidden fixed inset-0 z-[110] transition-all duration-500 ${
        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" onClick={() => setIsOpen(false)}></div>
        <div className="absolute right-0 top-0 bottom-0 w-[80%] bg-white shadow-2xl p-8 flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <div className="text-blue-950 font-serif font-black text-2xl">Menu</div>
            <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 rounded-xl text-slate-900">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-5 rounded-2xl text-lg font-bold transition-all ${
                  location.pathname === link.href 
                    ? 'bg-blue-950 text-white' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto space-y-6">
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <h5 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Admissions Helpline</h5>
              <p className="text-xl font-serif font-bold text-blue-950">{SCHOOL_INFO.phone}</p>
            </div>
            <Link 
              to="/admissions"
              onClick={() => setIsOpen(false)}
              className="w-full py-5 bg-yellow-500 text-blue-950 font-black rounded-3xl text-center block shadow-xl shadow-yellow-500/20"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
