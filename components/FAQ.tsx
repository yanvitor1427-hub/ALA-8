import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqData = [
  {
    question: "QUANTO TEMPO PARA VER RESULTADOS (TRÁFEGO PAGO)?",
    answer: "Para campanhas de anúncios (Ads), os primeiros dados chegam em 48h. A otimização completa (ROI máximo) geralmente ocorre nos primeiros 30 dias."
  },
  {
    question: "QUAL O PRAZO DE ENTREGA DE UM SITE?",
    answer: "Nosso prazo máximo de segurança é de até 40 dias para projetos completos. Porém, com nossa metodologia acelerada por IA, frequentemente conseguimos entregar e publicar antes desse período."
  },
  {
    question: "QUANTO TEMPO PARA FICAR NO TOPO DO GOOGLE (SEO)?",
    answer: "Diferente dos anúncios, o SEO é uma construção de autoridade. O tempo médio para atingir o topo das pesquisas varia de 1 a 3 meses de otimização contínua e estratégica."
  },
  {
    question: "A INTELIGÊNCIA ARTIFICIAL CRIA TUDO SOZINHA?",
    answer: "Não. A IA é nosso motor de velocidade, mas a estratégia e o refino visual são 100% humanos. Usamos tecnologia para acelerar a entrega, não para substituir a criatividade."
  },
  {
    question: "ATENDEM PEQUENOS NEGÓCIOS E CREATORS?",
    answer: "Sim. Temos planos modulares focados em quem precisa escalar rápido. Se você tem verba para investir e vontade de crescer, a ALA 8 é para você."
  },
  {
    question: "COMO FUNCIONA O PROCESSO DE CRIAÇÃO?",
    answer: "Sem burocracia: 1. Briefing Express. 2. Estratégia com dados. 3. Desenvolvimento Ágil. 4. Aprovação e Lançamento."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#050505] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Grid Accent */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 border-b border-[#222] pb-6 flex items-end justify-between">
            <h2 className="text-white text-4xl md:text-6xl font-anton uppercase tracking-wide">
                Protocolos <span className="text-[#333]">// FAQ</span>
            </h2>
            <div className="hidden md:block font-mono text-xs text-gray-500 mb-2">
                RESPOSTAS_SISTEMA_V.2.0
            </div>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="border-b border-[#222] group"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-8 md:py-10 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                >
                  <span className={`text-xl md:text-3xl lg:text-4xl font-sans font-bold uppercase tracking-tight transition-colors duration-300 pr-4 ${isOpen ? 'text-white' : 'text-[#444] group-hover:text-[#39FF14]'}`}>
                    {item.question}
                  </span>
                  
                  <div className="relative ml-6 shrink-0">
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "backOut" }}
                    >
                      <Plus 
                        size={32} 
                        strokeWidth={1.5}
                        className={`transition-colors duration-300 ${isOpen ? 'text-[#39FF14]' : 'text-gray-600 group-hover:text-white'}`} 
                      />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 md:pb-12 max-w-3xl">
                        <p className="font-mono text-gray-400 text-sm md:text-lg leading-relaxed pl-1 md:pl-2 border-l-2 border-[#39FF14]">
                          <span className="ml-4 block">{item.answer}</span>
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
