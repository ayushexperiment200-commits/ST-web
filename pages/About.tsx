
import React from 'react';
import { ShieldCheck, Target, Eye, GraduationCap, History } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Premium Header */}
      <div className="bg-blue-950 py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 px-4">
          <span className="text-yellow-500 font-black text-sm uppercase tracking-[0.4em] mb-4 block">Established 1984</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6">Our Legacy of Excellence</h1>
          <p className="text-xl md:text-2xl text-blue-100/70 max-w-3xl mx-auto font-light leading-relaxed">
            Four decades of shaping minds, building character, and nurturing the leaders of tomorrow in the heart of Bundelkhand.
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1523050335392-9bc5675e7a5c?q=80&w=2070&auto=format&fit=crop" 
                alt="School Campus" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow-500 rounded-[3rem] -z-0 hidden md:block opacity-20"></div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-950 mb-8 leading-tight">
              Rooted in Tradition, <br />
              <span className="italic text-yellow-600">Driven by Innovation</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              St. Joseph's English Medium Senior Secondary School, Mahoba, was established with a singular mission: to bring world-class education to our region. We believe that true education goes beyond the classroom, encompassing spiritual maturity, moral uprightness, and social responsibility.
            </p>
            <div className="grid gap-6">
              {[
                { icon: <Target className="text-blue-950" />, title: "Our Mission", text: "To provide quality education that empowers students to discover their full potential." },
                { icon: <Eye className="text-blue-950" />, title: "Our Vision", text: "To be the benchmark for academic and ethical excellence in Uttar Pradesh." },
                { icon: <ShieldCheck className="text-blue-950" />, title: "Our Values", text: "Love, Service, and Discipline are the cornerstones of every Josephite's life." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950 text-xl mb-1">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl border border-slate-100 grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4">
              <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1544717297-fa154daaf02e?q=80&w=2070&auto=format&fit=crop" 
                  alt="Principal" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="mt-8 text-center lg:text-left">
                <h4 className="text-2xl font-serif font-bold text-blue-950">Rev. Fr. Principal</h4>
                <p className="text-yellow-600 font-bold text-sm uppercase tracking-widest">Administrative Head</p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <span className="text-blue-950/20 mb-6 block"><History size={60} /></span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-blue-950 mb-8 italic">"Education is the most powerful weapon which you can use to change the world."</h3>
              <div className="prose prose-slate prose-lg text-slate-500 max-w-none">
                <p className="mb-6">
                  At St. Joseph’s, we strive to provide an environment where students feel safe, supported, and challenged. Our commitment is to foster a community of learners who are curious about the world and compassionate towards others.
                </p>
                <p className="mb-6">
                  As we navigate the complexities of the 21st century, our focus remains on character development. We teach our students that success is not just about personal gain, but about how much they can contribute to their community and country.
                </p>
                <p className="font-serif italic font-bold text-blue-950">
                  Join us as we continue this journey of wisdom and leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
