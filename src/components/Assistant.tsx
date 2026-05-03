import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, User, Bot, X, MessageSquare, ChevronDown } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { askElectionAssistant } from '../services/geminiService';
import { cn } from '../lib/utils';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function Assistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm your Civic Guide Assistant. How can I help you understand the election process today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const response = await askElectionAssistant(userMessage, messages);
    
    setMessages(prev => [...prev, { role: 'model', text: response || "I'm sorry, I couldn't generate a response." }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Action Button - Sharp and Professional */}
      <motion.button
        id="assistant-toggle"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-8 right-8 w-14 h-14 rounded-xl bg-slate-900 text-white shadow-xl z-40 transition-opacity flex items-center justify-center",
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chat Window - Matching the Card style of the theme */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="assistant-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 right-8 w-full max-w-[420px] h-[640px] bg-white rounded-xl shadow-2xl z-50 flex flex-col border border-slate-200 overflow-hidden"
          >
            {/* Header - Matching Theme Header */}
            <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Assistant Active</span>
                </div>
                <h3 className="font-bold text-slate-800 text-lg">Civic Knowledge Base</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-slate-200 rounded-lg transition-colors text-slate-500"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area - Improved spacing and readability */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 bg-white"
            >
              {messages.map((msg, i) => (
                <div 
                  key={i}
                  className={cn(
                    "flex gap-3 max-w-[90%]",
                    msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-xs font-bold",
                    msg.role === 'user' ? "bg-slate-100 text-slate-600" : "bg-blue-600 text-white"
                  )}>
                    {msg.role === 'user' ? <User size={14} /> : "E"}
                  </div>
                  <div className={cn(
                    "p-4 rounded-xl text-sm leading-relaxed shadow-sm",
                    msg.role === 'user' 
                      ? "bg-slate-900 text-white rounded-tr-none" 
                      : "bg-slate-50 text-slate-800 rounded-tl-none border border-slate-100"
                  )}>
                    <div className="markdown-body prose prose-slate prose-sm max-w-none">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-slate-400 text-xs px-2 animate-pulse">
                   Assistant is thinking...
                </div>
              )}
            </div>

            {/* Input Area - Matching the Theme input styling */}
            <div className="p-4 bg-slate-50 border-t border-slate-100">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Ask about registration, deadlines..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  className="flex-1 h-11 bg-white border border-slate-300 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner text-slate-800 placeholder:text-slate-400 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="h-11 px-5 bg-slate-800 text-white rounded-lg text-sm font-semibold hover:bg-black disabled:opacity-50 transition-all flex items-center gap-2 shadow-sm"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-[10px] text-slate-400 mt-3 text-center uppercase tracking-widest font-bold">
                Official Educational Data Source
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
