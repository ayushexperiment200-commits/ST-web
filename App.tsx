
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Minimal Page components for routing demonstration (to be expanded)
const Academics = () => (
  <div className="pt-32 pb-24 px-4 text-center">
    <h1 className="text-4xl font-serif font-bold text-blue-900 mb-4">Academic Excellence</h1>
    <p className="text-slate-600 max-w-2xl mx-auto">We follow the CBSE curriculum with a focus on comprehensive evaluation and creative learning.</p>
    <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {['Primary Wing', 'Secondary Wing', 'Senior Secondary'].map(wing => (
        <div key={wing} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold mb-4">{wing}</h3>
          <p className="text-slate-500 mb-6">Expertly tailored programs for specific developmental stages.</p>
          <button className="text-blue-900 font-bold underline">Learn More</button>
        </div>
      ))}
    </div>
  </div>
);

const Admissions = () => (
  <div className="pt-32 pb-24 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-serif font-bold text-blue-900 mb-8">Join the Josephite Family</h1>
      <div className="bg-blue-50 p-10 rounded-3xl border-2 border-dashed border-blue-200">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Admissions Open for 2024-25</h3>
        <p className="text-slate-600 mb-8">Download the prospectus and registration forms below to begin the application process.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-900 text-white px-8 py-4 rounded-xl font-bold">Download Prospectus</button>
          <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-xl font-bold">Apply Online</button>
        </div>
      </div>
    </div>
  </div>
);

const Gallery = () => (
  <div className="pt-32 pb-24 px-4">
     <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-blue-900 mb-12 text-center">Campus Life</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className="aspect-square overflow-hidden rounded-xl bg-slate-100 relative group">
              <img 
                src={`https://picsum.photos/seed/${i + 10}/800/800`} 
                alt="School Scene" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-sm tracking-widest uppercase">View Photo</span>
              </div>
            </div>
          ))}
        </div>
     </div>
  </div>
);

const Facilities = () => (
  <div className="pt-32 pb-24 px-4 text-center">
    <h1 className="text-4xl font-serif font-bold text-blue-900 mb-4">Modern Infrastructure</h1>
    <p className="text-slate-600 max-w-2xl mx-auto mb-16">Designed to provide the best environment for academic and personal growth.</p>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {['Digital Classrooms', 'Science Labs', 'Library', 'Sports Ground', 'Auditorium', 'Safe Transport'].map(fac => (
        <div key={fac} className="group overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
          <div className="h-48 bg-slate-200 overflow-hidden">
             <img src={`https://picsum.photos/seed/${fac}/600/400`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={fac} />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-slate-900">{fac}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
