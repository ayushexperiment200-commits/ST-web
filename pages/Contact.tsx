
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent to St. Joseph's Administration.");
  };

  return (
    <div className="pt-24 min-h-screen">
       <div className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-blue-900 mb-4">Contact Us</h1>
            <p className="text-xl text-slate-600">We are here to help and answer any questions you may have.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 rounded-xl">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                    <p className="text-slate-600">{SCHOOL_INFO.location}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 rounded-xl">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                    <p className="text-slate-600">{SCHOOL_INFO.phone}</p>
                    <p className="text-slate-400 text-sm mt-1">Mon - Fri, 8:00 AM to 3:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 rounded-xl">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-slate-600 break-all">{SCHOOL_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
                <h3 className="text-2xl font-serif font-bold text-blue-900 mb-8">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Subject</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 transition-all group">
                    <span>Submit Inquiry</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[500px] w-full bg-slate-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14449.610471190473!2d79.8659632!3d25.2869408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397839b4b0e3b97b%3A0x7d066914595825d0!2sSt.%20Joseph's%20English%20Medium%20Senior%20Secondary%20School%2C%20Mahoba!5e0!3m2!1sen!2sin!4v1714930000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
