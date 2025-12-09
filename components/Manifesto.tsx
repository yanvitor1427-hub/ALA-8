import React from 'react';
import { motion } from 'framer-motion';

export const Manifesto: React.FC = () => {
  return (
    <section className="min-h-[80vh] w-full bg-white py-32 px-4 flex items-center justify-center relative">
      <div className="max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full rounded-xl overflow-hidden shadow-2xl bg-[#0d0d0d] font-mono text-left"
        >
          {/* macOS Terminal Header */}
          <div className="bg-[#1c1c1c] px-4 py-3 flex items-center border-b border-[#333333] relative">
            <div className="flex gap-2 absolute left-4">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff4b47] transition-colors cursor-pointer" /> {/* Close */}
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffb420] transition-colors cursor-pointer" /> {/* Minimize */}
              <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#20b336] transition-colors cursor-pointer" /> {/* Maximize */}
            </div>
            <div className="w-full text-center">
              <span className="text-gray-500 text-xs font-medium tracking-wide">root — ala8 — -zsh</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 md:p-12 text-base md:text-xl leading-relaxed text-gray-300 font-mono">
            <div className="mb-6">
              <span className="text-[#27c93f] mr-2">root@ala8:~/manifesto#</span>
              <span className="text-white">cat visao.txt</span>
            </div>

            <div className="mb-8">
              <span className="bg-white text-black px-1.5 py-0.5 mr-3 font-bold text-sm md:text-base align-middle inline-block">AVISO</span>
              <span className="text-white font-bold tracking-tight uppercase">O MERCADO CARECE DE VISÃO. AFOGA-SE EM RUÍDO.</span>
            </div>

            <p className="mb-8 text-gray-300 leading-relaxed max-w-3xl">
              Não somos uma agência. Somos uma unidade criativa compacta e de alta velocidade. 
              Uma abordagem de engenharia para a estética. Uma visão de rua para a estratégia.
              Uma mente, escala infinita.
            </p>

            <p className="mb-12 text-gray-300 leading-relaxed max-w-3xl">
              Construímos sistemas que convertem. Criamos visuais que impõem autoridade. 
              Editamos narrativas que retêm a atenção.
            </p>

            <div className="text-white">
              <span className="text-[#27c93f] mr-2">{">"}</span>
              <span>EXECUTAR_DOMINANCIA_CRIATIVA.sh</span>
              <span className="inline-block w-2.5 h-5 bg-white ml-1 align-middle animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};