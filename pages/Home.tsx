
import React from 'react';
import Hero from '../components/Hero';
import { FEATURES, SCHOOL_INFO } from '../constants';
import { BookOpen, Award, CheckCircle2, TrendingUp, Calendar, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <main className="bg-white">
      <Hero />

      {/* Stats Section - Float over Hero */}
      <section className="relative -mt-20 z-30 px-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-8 md:p-16 grid grid-cols-2 lg:grid-cols-4 gap-12 border border-slate-100">
          {[
            { label: 'Enrolled Students', value: '1800+', sub: 'K-12 Education' },
            { label: 'Certified Faculty', value: '92', sub: 'Highly Experienced' },
            { label: 'Campus Size', value: '25', sub: 'Acres of Greenery' },
            { label: 'Laboratories', value: '12', sub: 'High-Tech Equipments' },
          ].map((stat, i) => (
            <div key={i} className={`text-center ${i !== 0 ? 'lg:border-l border-slate-100' : ''}`}>
              <div className="text-4xl md:text-5xl font-serif font-black text-blue-950 mb-2">{stat.value}</div>
              <div className="text-slate-900 font-bold text-sm tracking-wide uppercase mb-1">{stat.label}</div>
              <div className="text-slate-400 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The Pillars of St. Joseph's */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-yellow-600 font-black text-sm uppercase tracking-[0.3em] mb-4 block">Our Commitment</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 leading-tight">
                Empowering Excellence through <span className="italic text-blue-900 font-medium underline decoration-yellow-500/30 underline-offset-8">Holistic Learning</span>
              </h2>
            </div>
            <p className="text-slate-500 text-lg max-w-md pb-2 border-b-2 border-yellow-500/20">
              We don't just teach subjects; we nurture the citizens of tomorrow with moral clarity and academic prowess.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className={`mb-8 ${feature.color} w-20 h-20 rounded-3xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform`}>
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-950 mb-4 font-serif">{feature.title}</h4>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="flex items-center text-blue-950 font-bold text-sm group-hover:gap-2 transition-all cursor-pointer">
                  <span>Explore Program</span>
                  <ChevronRight size={16} />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-slate-50 rounded-full opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Board Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Notice Board */}
            <div className="lg:col-span-5 bg-blue-950 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-10">
                 <ShieldCheck size={200} />
               </div>
               <div className="relative z-10">
                 <h3 className="text-3xl font-serif font-bold mb-10 flex items-center gap-4">
                   <Calendar className="text-yellow-500" />
                   Notice Board
                 </h3>
                 <div className="space-y-8">
                   {[
                     { title: "Half-Yearly Examination Schedule 2024", date: "Nov 02", type: "Examination" },
                     { title: "Inter-School Cultural Fest Registration", date: "Oct 28", type: "Events" },
                     { title: "Parent-Teacher Meeting (Grades IX-XII)", date: "Oct 25", type: "Academic" },
                     { title: "New Transport Routes - South Sector", date: "Oct 20", type: "Admin" }
                   ].map((notice, i) => (
                     <div key={i} className="group cursor-pointer border-b border-white/10 pb-6 hover:border-yellow-500/50 transition-colors">
                       <div className="flex justify-between items-start mb-2">
                         <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">{notice.type}</span>
                         <span className="text-white/40 text-xs font-medium">{notice.date}</span>
                       </div>
                       <h4 className="text-lg font-medium group-hover:text-yellow-400 transition-colors leading-snug">
                         {notice.title}
                       </h4>
                     </div>
                   ))}
                 </div>
                 <button className="mt-12 w-full py-5 border border-white/20 rounded-2xl font-bold hover:bg-white/5 transition-colors uppercase tracking-widest text-sm">
                   Archive & Downloads
                 </button>
               </div>
            </div>

            {/* Featured Story */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-blue-950 font-black text-sm uppercase tracking-[0.3em] mb-4">Inside the Campus</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-950 mb-8 leading-tight">
                Where Tradition Meets <br /> <span className="text-yellow-600 italic font-medium">Modernity</span>
              </h2>
              <div className="aspect-video rounded-[3rem] overflow-hidden mb-10 shadow-2xl group relative">
                <img 
                  src="https://images.unsplash.com/photo-1577891729319-f4871c6ec217?q=80&w=2069&auto=format&fit=crop" 
                  alt="Students in Smart Lab" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h4 className="text-white text-2xl font-serif font-bold mb-2">Empowering Innovation</h4>
                  <p className="text-white/70">Our students participating in the Regional Robotics Championship.</p>
                </div>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                St. Joseph’s is committed to staying ahead of the curve. Our state-of-the-art computer labs and smart classrooms provide students with the digital fluency required for the 21st century.
              </p>
              <div className="flex items-center gap-12">
                <div>
                  <div className="text-3xl font-serif font-bold text-blue-950">100+</div>
                  <div className="text-slate-400 text-sm">Annual Awards</div>
                </div>
                <div className="h-10 w-px bg-slate-200"></div>
                <div>
                  <div className="text-3xl font-serif font-bold text-blue-950">50+</div>
                  <div className="text-slate-400 text-sm">Co-Curricular Clubs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[100%] rounded-full bg-blue-500 blur-[150px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[100%] rounded-full bg-yellow-500 blur-[150px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <Quote size={80} className="text-yellow-500/20 mb-10" />
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-12 italic leading-tight max-w-4xl">
              "Education is not the filling of a pail, but the lighting of a fire."
            </h2>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-2 border-yellow-500 p-1 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1544717297-fa154daaf02e?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all cursor-pointer" 
                  alt="Principal"
                />
              </div>
              <h5 className="text-2xl font-serif font-bold text-white mb-2">Rev. Fr. Principal</h5>
              <p className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Leadership & Vision</p>
              <button className="mt-10 px-10 py-4 bg-white/10 hover:bg-white text-white hover:text-blue-950 font-bold rounded-full border border-white/20 transition-all">
                Read Principal's Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
