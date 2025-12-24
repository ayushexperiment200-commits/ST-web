
import React from 'react';
import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SCHOOL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background with subtle parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop" 
          alt="Excellence in Education" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl px-5 py-2 rounded-full mb-8 border border-white/20 shadow-2xl">
            <ShieldCheck className="w-5 h-5 text-yellow-400" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/90">
              {SCHOOL_INFO.affiliation}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold font-serif mb-6 leading-[1.1] text-white tracking-tight">
            Nurturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 italic">Wisdom</span>, <br />
            Inspiring Leadership.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed font-light">
            Founded in {SCHOOL_INFO.established}, St. Joseph's Mahoba stands as a beacon of academic excellence and character development in Uttar Pradesh.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link 
              to="/admissions" 
              className="w-full sm:w-auto group flex items-center justify-center space-x-3 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold px-10 py-5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]"
            >
              <span>Secure Admission</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/gallery" 
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-semibold px-10 py-5 rounded-full border border-white/20 transition-all duration-300"
            >
              <PlayCircle className="w-5 h-5" />
              <span>Campus Tour</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Overlay on Bottom Right for Desktop */}
      <div className="hidden lg:flex absolute bottom-20 right-20 z-20 flex-col items-end space-y-8">
        <div className="text-right">
          <div className="text-4xl font-serif font-bold text-white mb-1">40+ Years</div>
          <div className="text-yellow-500 text-sm font-bold uppercase tracking-widest">Of Educational Legacy</div>
        </div>
        <div className="text-right">
          <div className="text-4xl font-serif font-bold text-white mb-1">100%</div>
          <div className="text-yellow-500 text-sm font-bold uppercase tracking-widest">CBSE Success Rate</div>
        </div>
      </div>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
