/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Vote, ChevronRight, ShieldCheck, Globe, HelpCircle, ArrowUpRight, Github, Info } from 'lucide-react';
import Timeline from './components/Timeline';
import Assistant from './components/Assistant';
import VotingMethods from './components/VotingMethods';
import RegistrationPortal from './components/RegistrationPortal';
import DataExport from './components/DataExport';
import { FAQS } from './constants';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-30 bg-white border-b border-slate-200 px-8 h-16 flex items-center shrink-0">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm transition-transform hover:scale-105">
              <Vote size={20} />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold tracking-tight text-slate-800">CivicGuide India</h1>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Voter Registration Hub</p>
            </div>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <a href="#process" className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 py-5 transition-all">Election Roadmap</a>
            <a href="#methods" className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 py-5 transition-all">Voting Methods</a>
            <a href="#register" className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 py-5 transition-all">Voter Portal</a>
            <a href="#data" className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 py-5 transition-all">Statistics</a>
            <a href="#faq" className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 py-5 transition-all">FAQ</a>
          </div>

          <button 
            onClick={() => window.open('https://voters.eci.gov.in', '_blank')}
            className="px-5 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm active:scale-95"
          >
            Register to Vote
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-20 px-8 bg-white border-b border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-8"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-600">2026 Assistant Active</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6"
            >
              Indian Voting <br />
              <span className="text-blue-600">System & Registration</span>.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 max-w-2xl leading-relaxed mb-10"
            >
              Empowering every Indian citizen with knowledge about the world's largest democratic exercise. Learn how to register, understand EVMs, and follow the poll cycle.
            </motion.p>

            <div className="flex gap-4">
              <a href="#process" className="h-11 px-6 bg-slate-800 text-white rounded-lg text-sm font-semibold hover:bg-black transition-all flex items-center">Election Cycle</a>
              <a href="#register" className="h-11 px-6 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-all shadow-sm flex items-center">Voter ID Guide</a>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="process" className="py-24 px-8 max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-4 text-center">Step 1: The Process</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">India's Election Roadmap</h3>
            <p className="text-slate-500 max-w-xl mx-auto">From voter enrollment to the declaration of results by the Election Commission of India (ECI).</p>
          </div>
          <Timeline />
        </section>

        {/* Voting Methods Section */}
        <section id="methods" className="py-24 px-8 bg-white border-y border-slate-200">
           <div className="max-w-7xl mx-auto">
             <div className="mb-16">
               <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Step 2: Participation</h2>
               <h3 className="text-4xl font-extrabold text-slate-900">Choose Your Method</h3>
             </div>
             <VotingMethods />
           </div>
        </section>

        {/* Registration Section */}
        <section id="register" className="py-24 px-8">
           <div className="max-w-7xl mx-auto">
             <div className="mb-16 text-center">
               <h3 className="text-4xl font-extrabold text-slate-900">Voter ID (EPIC) Portal</h3>
             </div>
             <RegistrationPortal />
           </div>
        </section>

        {/* Data Export Section */}
        <section id="data" className="py-24 px-8 bg-slate-50 border-t border-slate-200">
           <div className="max-w-7xl mx-auto">
             <div className="mb-16 text-center">
               <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Step 3: Research</h2>
               <h3 className="text-4xl font-extrabold text-slate-900">Election Data & Analytics</h3>
             </div>
             <div className="max-w-4xl mx-auto">
               <DataExport />
             </div>
           </div>
        </section>

        {/* Info Grid */}
        <section id="rights" className="py-24 px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-slate-200 rounded-xl bg-white flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 text-xl font-bold">!</div>
              <div>
                <p className="text-xs font-bold text-slate-800">Election Security</p>
                <p className="text-[11px] text-slate-500">Physical paper trails required in 98% of jurisdictions.</p>
              </div>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl bg-white flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                <Globe size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Accessibility</p>
                <p className="text-[11px] text-slate-500">Universal design for independent voting access.</p>
              </div>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl bg-white flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Rights Protection</p>
                <p className="text-[11px] text-slate-500">DOJ oversight for all federal elections.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faq" className="py-24 px-8 border-t border-slate-200 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Resources & FAQ</h2>
              <div className="h-1 w-12 bg-blue-600 mt-4 rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {FAQS.map((faq, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-bold text-slate-800 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {faq.question}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed pl-3.5 border-l border-slate-200 ml-0.5">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-8 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs uppercase">ECI</div>
             <span className="text-sm font-bold text-slate-800">CivicGuide India</span>
          </div>
          <p className="text-xs text-slate-400">© 2026 Civic Guide India. Based on Election Commission of India guidelines.</p>
          <div className="flex gap-6 text-xs font-medium text-slate-500">
            <span onClick={() => window.open('https://eci.gov.in', '_blank')} className="hover:text-blue-600 cursor-pointer transition-colors">ECI Portal</span>
            <span onClick={() => window.open('https://voters.eci.gov.in', '_blank')} className="hover:text-blue-600 cursor-pointer transition-colors">Voter Services</span>
            <span onClick={() => window.open('https://results.eci.gov.in', '_blank')} className="hover:text-blue-600 cursor-pointer transition-colors">Results</span>
          </div>
        </div>
      </footer>

      <Assistant />
    </div>
  );
}

