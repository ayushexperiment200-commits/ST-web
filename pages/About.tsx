
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-blue-900 py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Our Legacy</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">Founded on the principles of integrity, service, and academic excellence.</p>
        </div>
      </div>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-8">School History</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              St. Joseph's English Medium Senior Secondary School, Mahoba, was established to meet the growing demand for quality English medium education in the region of Mahoba, Uttar Pradesh. Managed by the [Diocese/Managing Body], the school has grown from a modest beginning to a premier educational hub.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
              <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-blue-900">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Our Mission</h3>
                <p className="text-slate-600">To provide a value-based education that helps students discover their unique talents and prepares them for a lifetime of success and contribution to society.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Our Vision</h3>
                <p className="text-slate-600">To be a pioneer in innovative teaching methodologies that foster critical thinking, empathy, and leadership in every Josephite.</p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-8">The Josephite Spirit</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Being a "Josephite" means more than just being a student; it signifies a commitment to the school's motto: <strong>Love, Service, Discipline</strong>. This spirit is reflected in our students' character, our teachers' dedication, and our alumni's impact on the world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
