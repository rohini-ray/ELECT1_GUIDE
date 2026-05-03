import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Info, CheckCircle2, UserPlus, Users, Mic2, Megaphone, Vote, Building2, Calendar, Search } from 'lucide-react';
import { ELECTION_PHASES, ElectionPhase, MILESTONES } from '../constants';
import { cn } from '../lib/utils';

const iconMap: Record<string, React.ReactNode> = {
  UserPlus: <UserPlus size={16} />,
  Users: <Users size={16} />,
  Mic2: <Mic2 size={16} />,
  Megaphone: <Megaphone size={16} />,
  Vote: <Vote size={16} />,
  Building2: <Building2 size={16} />,
};

export default function Timeline() {
  const [activePhase, setActivePhase] = useState<ElectionPhase>(ELECTION_PHASES[0]);
  const [selectedDate, setSelectedDate] = useState<string>('');

  const upcomingMilestones = selectedDate 
    ? MILESTONES.filter(m => m.date >= selectedDate).sort((a, b) => a.date.localeCompare(b.date)).slice(0, 3)
    : [];

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    // Find phase for the first upcoming milestone
    const milestone = MILESTONES.find(m => m.date >= date);
    if (milestone) {
      const phase = ELECTION_PHASES.find(p => p.id === milestone.phaseId);
      if (phase) setActivePhase(phase);
    }
  };

  return (
    <div className="space-y-12">
      {/* Date Picker Header */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200/50">
            <Calendar size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-800">Check Your Timeline</h4>
            <p className="text-xs text-slate-500">Pick a date to see upcoming election milestones</p>
          </div>
        </div>
        
        <div className="relative w-full md:w-64">
          <input 
            type="date" 
            value={selectedDate}
            onChange={(e) => handleDateChange(e.target.value)}
            className="w-full h-12 pl-12 pr-4 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-inner"
          />
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
      {/* Left: Vertical Navigation Timeline */}
      <div className="w-full lg:w-72 shrink-0 relative">
        <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-100 z-0 hidden lg:block" />
        <div className="space-y-8 relative z-10">
          {ELECTION_PHASES.map((phase, index) => {
            const isActive = activePhase.id === phase.id;
            const isCompleted = ELECTION_PHASES.indexOf(activePhase) > index;

            return (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase)}
                className="flex items-center gap-4 w-full text-left group transition-all"
              >
                <div className={cn(
                  "w-10 h-10 rounded-full shrink-0 border-4 border-white shadow-sm flex items-center justify-center font-bold text-sm transition-all",
                  isActive 
                    ? "bg-blue-600 text-white scale-110 shadow-md ring-2 ring-blue-100" 
                    : isCompleted 
                      ? "bg-slate-800 text-white" 
                      : "bg-slate-200 text-slate-500 group-hover:bg-slate-300"
                )}>
                  {isCompleted ? <CheckCircle2 size={14} /> : (index + 1).toString().padStart(2, '0')}
                </div>
                <div className="flex-1">
                  <p className={cn(
                    "text-sm font-bold transition-colors",
                    isActive ? "text-blue-600" : "text-slate-500 group-hover:text-slate-700"
                  )}>
                    {phase.title}
                  </p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">{phase.dateRange.split('(')[0]}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right: Focused Phase Detail View */}
      <div className="flex-1 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm h-full"
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                 {iconMap[activePhase.icon]}
               </div>
               <div>
                 <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{activePhase.title}</h2>
                 <p className="text-sm text-slate-500 font-medium">{activePhase.dateRange}</p>
               </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-8">
              {activePhase.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {activePhase.details.map((detail, i) => (
                <div key={i} className="flex gap-3 items-start p-4 bg-slate-50 rounded-lg border border-slate-100 group hover:border-blue-200 hover:bg-white transition-all shadow-sm shadow-slate-200/20">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0 mt-0.5">
                    <ChevronRight size={12} />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest border border-blue-100">
                <Info size={12} />
                Phase Verified
              </div>
              
              <button
                disabled={ELECTION_PHASES.indexOf(activePhase) === ELECTION_PHASES.length - 1}
                onClick={() => {
                  const nextIndex = ELECTION_PHASES.indexOf(activePhase) + 1;
                  if (nextIndex < ELECTION_PHASES.length) setActivePhase(ELECTION_PHASES[nextIndex]);
                }}
                className="px-6 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-black transition-all flex items-center gap-2 disabled:opacity-30 active:scale-95 shadow-md"
              >
                Next Phase
                <ChevronRight size={14} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Upcoming Milestones Feed */}
        {selectedDate && upcomingMilestones.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {upcomingMilestones.map((m, i) => (
              <div key={i} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                <div className="mt-1 w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <div>
                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{new Date(m.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                  <p className="text-sm font-bold text-slate-800">{m.event}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  </div>
  );
}
