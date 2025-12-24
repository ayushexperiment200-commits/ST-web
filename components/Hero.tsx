
import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
          alt="School Campus" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-blue-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/20 animate-fade-in">
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
          <span className="text-xs font-semibold tracking-wider uppercase">Affiliated to CBSE</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight max-w-4xl mx-auto drop-shadow-2xl">
          Nurturing Minds, <br />
          <span className="text-yellow-400">Shaping Futures.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          Welcome to St. Joseph's Mahoba, where every student is empowered to lead with wisdom and compassion.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/admissions" 
            className="group flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/gallery" 
            className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-8 py-4 rounded-full border border-white/30 transition-all duration-300"
          >
            <PlayCircle className="w-5 h-5" />
            <span>Virtual Tour</span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
