
import React from 'react';
import Hero from '../components/Hero';
import { FEATURES, SCHOOL_INFO } from '../constants';
import { BookOpen, Award, CheckCircle2, TrendingUp, Calendar, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />

      {/* Stats Section */}
      <section className="relative -mt-16 z-20 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-blue-900 mb-2">1500+</div>
            <div className="text-slate-500 font-medium">Students</div>
          </div>
          <div className="text-center border-l border-slate-100">
            <div className="text-4xl font-serif font-bold text-blue-900 mb-2">85+</div>
            <div className="text-slate-500 font-medium">Expert Teachers</div>
          </div>
          <div className="text-center border-l border-slate-100">
            <div className="text-4xl font-serif font-bold text-blue-900 mb-2">25+</div>
            <div className="text-slate-500 font-medium">Acres Campus</div>
          </div>
          <div className="text-center border-l border-slate-100">
            <div className="text-4xl font-serif font-bold text-blue-900 mb-2">100%</div>
            <div className="text-slate-500 font-medium">CBSE Results</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-900 text-sm font-bold uppercase tracking-[0.2em] mb-4">Our Commitment</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Education Beyond Boundaries</h3>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                <div className="mb-6 bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Notices */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-blue-900 text-sm font-bold uppercase tracking-[0.2em] mb-4">Latest Updates</h2>
              <h3 className="text-4xl font-serif font-bold text-slate-900 mb-8 leading-tight">What's Happening at <br />St. Joseph's</h3>
              
              <div className="space-y-6">
                {[
                  { date: 'Oct 25', title: 'Annual Inter-School Debate Winners', cat: 'Event' },
                  { date: 'Oct 20', title: 'CBSE Secondary Exam Registration Starts', cat: 'Academic' },
                  { date: 'Oct 15', title: 'Eco-Club Plantation Drive Successful', cat: 'News' }
                ].map((notice, i) => (
                  <div key={i} className="flex items-center space-x-6 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                    <div className="bg-blue-900 text-white p-3 rounded-lg text-center min-w-[70px]">
                      <span className="block text-xs uppercase font-bold text-blue-200">{notice.date.split(' ')[0]}</span>
                      <span className="block text-lg font-bold">{notice.date.split(' ')[1]}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 mb-1 block">{notice.cat}</span>
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">{notice.title}</h4>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-10 flex items-center space-x-2 text-blue-900 font-bold hover:translate-x-2 transition-transform">
                <span>View All Notices</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <div className="bg-yellow-400 absolute inset-0 rounded-3xl rotate-3 scale-95 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1577891729319-f4871c6ec217?q=80&w=2069&auto=format&fit=crop" 
                alt="Students in Library" 
                className="relative z-10 rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-blue-900 text-white p-8 rounded-2xl shadow-2xl z-20 max-w-[200px]">
                <BookOpen className="w-10 h-10 mb-4 text-yellow-400" />
                <p className="font-serif italic">"Excellence is not an act, but a habit."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
             <div className="md:w-1/3">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-500 rounded-3xl rotate-6"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1544717297-fa154daaf02e?q=80&w=2070&auto=format&fit=crop" 
                    className="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full aspect-[3/4] object-cover" 
                    alt="Principal"
                  />
                </div>
             </div>
             <div className="md:w-2/3">
                <h2 className="text-yellow-400 font-bold uppercase tracking-widest mb-4">Leadership Voice</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic">"We prepare children for life, not just for exams."</h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  As the Principal of St. Joseph's English Medium Senior Secondary School, it is my privilege to lead an institution that is deeply rooted in values and committed to educational excellence. Our mission is to foster an environment where every child feels safe, respected, and inspired to reach their full potential.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-1 bg-yellow-500"></div>
                  <div>
                    <h5 className="text-xl font-bold">Rev. Fr. Principal</h5>
                    <p className="text-slate-400">Principal, St. Joseph's Mahoba</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
