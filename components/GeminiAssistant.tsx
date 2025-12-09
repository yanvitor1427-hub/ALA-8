import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Cpu, Loader2 } from 'lucide-react';
import { generateCreativeResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

interface GeminiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GeminiAssistant: React.FC<GeminiAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'SISTEMA ALA 8 ONLINE. Aguardando entrada. Como posso ajudar seu processo criativo hoje?', timestamp: new Date() }
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

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Format history for Gemini
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await generateCreativeResponse(userMsg.text, history);
    
    setMessages(prev => [...prev, {
      role: 'model',
      text: response || "Erro ao processar solicitação.",
      timestamp: new Date()
    }]);
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 right-0 w-full md:w-[450px] bg-white z-[60] shadow-2xl border-l border-gray-200 flex flex-col font-mono"
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-black text-white">
            <div className="flex items-center gap-2">
              <Cpu size={20} className={isLoading ? "animate-pulse" : ""} />
              <span className="font-bold tracking-widest text-sm">ALA_8 // INTELIGÊNCIA</span>
            </div>
            <button onClick={onClose} className="hover:text-gray-300">
              <X size={24} />
            </button>
          </div>

          {/* Chat Body */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-black text-white' 
                    : 'bg-white border border-gray-200 text-black shadow-sm'
                }`}>
                  <span className="block text-[10px] opacity-50 mb-1 tracking-wider uppercase">
                    {msg.role === 'user' ? 'CLIENTE' : 'SISTEMA'}
                  </span>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-transparent p-2">
                   <Loader2 className="animate-spin text-black" size={20} />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Inicializar consulta criativa..."
                className="w-full bg-gray-100 border-none p-4 pr-12 text-sm focus:ring-1 focus:ring-black outline-none placeholder:text-gray-400"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};