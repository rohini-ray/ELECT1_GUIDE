import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Globe, Mail, Landmark, CheckCircle2, ArrowRight } from 'lucide-react';
import { REGISTRATION_GUIDE } from '../constants';

export default function RegistrationPortal() {
  return (
    <div className="w-full max-w-7xl mx-auto py-20 px-8 bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 border-l border-slate-100 z-0 hidden lg:block" />
      
      <div className="relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Official Guide</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">How to Register to Vote</h3>
          <p className="text-lg text-slate-500 leading-relaxed">
            Registration is your ticket to the ballot box. Each state has its own rules, but the core requirements are generally the same across the United States.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Eligibility Requirements */}
          <div className="lg:col-span-4 space-y-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                <UserCheck size={20} />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Eligibility Rules</h4>
            </div>

            <div className="space-y-6">
              {REGISTRATION_GUIDE.eligibility.map((rule, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 mb-0.5">{rule.label}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{rule.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic">
               <p className="text-[11px] text-slate-500 leading-relaxed">
                 *Some states have specific laws regarding former incarcerated individuals. Check your local laws for restoration of rights.
               </p>
            </div>
          </div>

          {/* Registration Methods */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {REGISTRATION_GUIDE.methods.map((method, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-500 transition-all cursor-pointer group"
                  onClick={() => window.open(method.link, '_blank')}
                >
                  <div>
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {method.type === 'Online' && <Globe size={24} />}
                      {method.type === 'By Mail' && <Mail size={24} />}
                      {method.type === 'In-Person' && <Landmark size={24} />}
                    </div>
                    <h5 className="font-bold text-lg text-slate-900 mb-2">{method.type}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      {method.detail}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-blue-600 uppercase tracking-widest pt-4 border-t border-slate-100">
                    Official Portal
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Box */}
            <div className="flex-1 bg-slate-900 rounded-2xl p-10 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-20 pointer-events-none" />
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                  <div className="max-w-md">
                    <h4 className="text-2xl font-bold mb-3">Check Your Status Now</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-0">
                      Not sure if you're registered? Most states provide a simple lookup tool to verify your current status in seconds.
                    </p>
                  </div>
                  <button 
                    onClick={() => window.open('https://vote.gov', '_blank')}
                    className="px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center gap-2 whitespace-nowrap active:scale-95 shadow-lg shadow-white/5"
                  >
                    Check Registration Status
                    <ArrowRight size={18} />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
