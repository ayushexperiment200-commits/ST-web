
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Page Implementations ---

const Academics = () => (
  <div className="pt-32 pb-24 px-4 bg-slate-50 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-yellow-600 font-black text-sm uppercase tracking-[0.3em] mb-4 block">Our Curriculum</span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-blue-950 mb-6">Academic Excellence</h1>
        <p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed">
          St. Joseph's follows the CBSE framework, enriched with innovative teaching modules and digital integration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            title: 'Foundational Wing', 
            range: 'K - Grade II', 
            desc: 'Play-way methodology focusing on motor skills, socialization, and linguistic foundation.',
            items: ['Activity Based Learning', 'Sensory Integration', 'Language Development']
          },
          { 
            title: 'Middle Section', 
            range: 'Grade III - VIII', 
            desc: 'Building analytical skills and core subjects with a focus on holistic inquiry.',
            items: ['Integrated Science', 'Mathematical Logic', 'Bilingual Competence']
          },
          { 
            title: 'Senior Secondary', 
            range: 'Grade IX - XII', 
            desc: 'Rigorous preparation for board exams with specialized streams in Science & Commerce.',
            items: ['Career Counseling', 'Advanced Labs', 'Competitive Edge']
          }
        ].map((wing, i) => (
          <div key={i} className="group bg-white p-12 rounded-[3rem] border border-slate-200/50 hover:shadow-2xl transition-all hover:-translate-y-2">
            <span className="text-yellow-500 font-bold text-sm tracking-widest uppercase block mb-2">{wing.range}</span>
            <h3 className="text-3xl font-serif font-bold text-blue-950 mb-6">{wing.title}</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">{wing.desc}</p>
            <ul className="space-y-4 mb-10">
              {wing.items.map(item => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 bg-slate-50 group-hover:bg-blue-950 group-hover:text-white text-blue-950 font-bold rounded-2xl transition-all">
              Curriculum Overview
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Admissions = () => (
  <div className="pt-32 pb-24 px-4 bg-white min-h-screen">
    <div className="max-w-7xl mx-auto">
      <div className="bg-blue-950 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-3xl">
        <div className="absolute top-0 right-0 p-20 opacity-5">
           <svg width="400" height="400" viewBox="0 0 200 200"><path fill="currentColor" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,77.4,-44.7C85.7,-31.3,91,-15.7,89.5,-0.9C87.9,13.9,79.6,27.8,69.5,39.6C59.4,51.4,47.5,61.1,34.1,68.2C20.7,75.3,5.8,79.8,-9.5,78.8C-24.8,77.7,-40.5,71.1,-53.4,61.3C-66.3,51.5,-76.5,38.4,-81.8,23.8C-87.1,9.2,-87.5,-7,-82.1,-21.2C-76.7,-35.4,-65.4,-47.5,-52.2,-54.9C-39,-62.3,-23.9,-65,-8.7,-72.1C6.5,-79.2,21.7,-80.7,31.4,-83.5C41.1,-86.3,45.4,-90.3,44.7,-76.4Z" transform="translate(100 100)" /></svg>
        </div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-yellow-500 font-black text-sm uppercase tracking-[0.3em] mb-4 block">Academic Session 2024-25</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Begin Your Journey With Us</h1>
            <p className="text-white/70 text-xl leading-relaxed mb-12">
              Join a community where every student is valued and every voice is heard. Our admissions process is designed to find students who will thrive in our challenging yet supportive environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 bg-yellow-500 text-blue-950 font-black rounded-full shadow-2xl shadow-yellow-500/20 hover:scale-105 transition-all">
                Online Application
              </button>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all">
                Download Prospectus
              </button>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-2xl rounded-[3rem] p-10 border border-white/10">
            <h3 className="text-2xl font-serif font-bold mb-8">Admission Steps</h3>
            <div className="space-y-8">
              {[
                { s: '01', t: 'Registration', d: 'Submit the online inquiry or visit campus for prospectus.' },
                { s: '02', t: 'Interaction', d: 'An informal assessment/interview for student and parents.' },
                { s: '03', t: 'Documentation', d: 'Verification of previous records and identity proof.' },
                { s: '04', t: 'Enrollment', d: 'Finalization of fees and issuance of school ID & uniform.' }
              ].map(step => (
                <div key={step.s} className="flex gap-6">
                  <span className="text-3xl font-serif font-black text-yellow-500/40">{step.s}</span>
                  <div>
                    <h5 className="font-bold text-lg mb-1">{step.t}</h5>
                    <p className="text-white/50 text-sm leading-relaxed">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Gallery = () => (
  <div className="pt-32 pb-24 px-4 bg-slate-50 min-h-screen">
     <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-yellow-600 font-black text-sm uppercase tracking-[0.3em] mb-4 block">Vibrant Moments</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-blue-950 mb-6">Life At St. Joseph's</h1>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {['All', 'Academics', 'Sports', 'Cultural', 'Infrastructure'].map(cat => (
              <button key={cat} className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${cat === 'All' ? 'bg-blue-950 text-white shadow-xl' : 'bg-white text-slate-500 hover:bg-slate-100'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
            <div key={i} className="relative group overflow-hidden rounded-[2.5rem] bg-white shadow-xl break-inside-avoid transform transition-all duration-500 hover:-translate-y-2">
              <img 
                src={`https://picsum.photos/seed/${i + 50}/800/${i % 2 === 0 ? '600' : '1000'}`} 
                alt="School Scene" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <span className="text-yellow-400 font-black text-xs uppercase tracking-widest mb-2">Campus View</span>
                <h4 className="text-white font-serif font-bold text-xl">The Pursuit of Knowledge</h4>
              </div>
            </div>
          ))}
        </div>
     </div>
  </div>
);

const Facilities = () => (
  <div className="pt-32 pb-24 px-4 bg-white min-h-screen">
    <div className="max-w-7xl mx-auto">
       <div className="text-center mb-24">
        <span className="text-yellow-600 font-black text-sm uppercase tracking-[0.3em] mb-4 block">Our Infrastructure</span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-blue-950 mb-6">Designed For Growth</h1>
        <p className="text-slate-500 text-xl max-w-2xl mx-auto">
          We provide an environment that inspires excellence, featuring world-class facilities for every student.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          { 
            name: 'Digital Smart Classrooms', 
            img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop',
            desc: 'Interactive whiteboards and high-speed connectivity in every classroom to facilitate visual learning.'
          },
          { 
            name: 'Advanced Science Labs', 
            img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
            desc: 'Modern Physics, Chemistry, and Biology labs equipped for high-level experimentation.'
          },
          { 
            name: 'The Central Library', 
            img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop',
            desc: 'A sanctuary of knowledge with over 15,000 volumes, digital archives, and quiet study zones.'
          },
          { 
            name: 'Multi-Sport Complex', 
            img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop',
            desc: 'Extensive facilities for basketball, football, cricket, and a professional-grade athletics track.'
          }
        ].map((fac, i) => (
          <div key={i} className="group relative h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl">
            <img src={fac.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={fac.name} />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/40 to-transparent p-12 flex flex-col justify-end">
              <h3 className="text-3xl font-serif font-bold text-white mb-4">{fac.name}</h3>
              <p className="text-white/70 leading-relaxed max-w-lg mb-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {fac.desc}
              </p>
              <div className="w-20 h-1 bg-yellow-500"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
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
