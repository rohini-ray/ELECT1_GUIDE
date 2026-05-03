import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, Mail, ChevronRight, Info, Clock, ShieldCheck } from 'lucide-react';
import { VOTING_METHODS } from '../constants';
import { cn } from '../lib/utils';

const iconMap: Record<string, React.ReactNode> = {
  'in-person-day': <MapPin size={24} />,
  'early-voting': <Calendar size={24} />,
  'absentee-mail': <Mail size={24} />,
};

export default function VotingMethods() {
  const [selected, setSelected] = useState(VOTING_METHODS[0]);

  return (
    <div className="w-full max-w-7xl mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          <div className="mb-6">
            <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Voting Options</h3>
            <h4 className="text-2xl font-bold text-slate-800">Ways to Cast Your Vote</h4>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            {VOTING_METHODS.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelected(method)}
                className={cn(
                  "p-5 rounded-xl border text-left transition-all flex items-center gap-4 group",
                  selected.id === method.id
                    ? "bg-slate-900 border-slate-900 text-white shadow-lg shadow-slate-200"
                    : "bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:bg-slate-50"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center transition-colors",
                  selected.id === method.id ? "bg-white/10 text-white" : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                )}>
                  {iconMap[method.id]}
                </div>
                <div>
                  <p className="font-bold text-sm">{method.title}</p>
                  <p className={cn(
                    "text-[10px] uppercase tracking-wider font-bold mt-0.5",
                    selected.id === method.id ? "text-slate-400" : "text-slate-400"
                  )}>Learn Process</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Detailed View */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm relative overflow-hidden h-full"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] scale-[4] pointer-events-none text-slate-950">
                {iconMap[selected.id]}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest border border-blue-100 flex items-center gap-1.5">
                    <ShieldCheck size={12} />
                    Secure Method
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                  {selected.title}
                </h2>
                
                <p className="text-lg text-slate-500 mb-10 max-w-2xl leading-relaxed">
                  {selected.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-6">
                    <h5 className="font-bold text-slate-900 border-l-4 border-blue-600 pl-4">Step-by-Step Process</h5>
                    <div className="space-y-4">
                      {selected.steps.map((step, i) => (
                        <div key={i} className="flex gap-4 group">
                          <div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0 mt-0.5">
                            {i + 1}
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
                      <div>
                        <h6 className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Key Requirements</h6>
                        <p className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                           <Clock size={14} className="text-blue-500" />
                           {selected.requirements}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-slate-200/50">
                        <h6 className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Strict Deadline</h6>
                        <p className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                           <Calendar size={14} className="text-amber-500" />
                           {selected.deadline}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-5 bg-blue-50 rounded-xl border border-blue-100">
                      <Info size={20} className="text-blue-600 shrink-0" />
                      <p className="text-[11px] text-blue-700 font-medium leading-relaxed italic">
                        "Your right to vote is protected. Always request a provisional ballot if you encounter eligibility issues at the polls."
                      </p>
                    </div>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors group">
                  Detailed Official Guidelines
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
