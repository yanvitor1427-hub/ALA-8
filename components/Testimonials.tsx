import React from "react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "A ALA 8 não faz apenas design, eles reestruturam a percepção da marca. O ROI do tráfego foi imediato e a estética brutalista nos destacou no mercado saturado.",
      name: "Carlos Mendes",
      designation: "CEO @ TECH_FLOW",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Velocidade de entrega insana. A edição dos vídeos triplicou nossa retenção no orgânico. Eles entendem a linguagem da rua e do algoritmo.",
      name: "Fernanda Torres",
      designation: "Diretora de Arte @ Studio V",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Estratégia pura. Construíram um sistema visual que converte. A ALA 8 funciona como uma extensão vital do nosso time de performance.",
      name: "Roberto Silva",
      designation: "Head de Marketing @ FINTECH_X",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Design arquitetônico e funcional. Eles limparam todo o ruído da nossa comunicação. O resultado é autoridade imediata.",
      name: "Juliana Costa",
      designation: "Founder @ E-comm Beauty",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Profissionalismo e visão de longo prazo. A integração entre tráfego e criativo é perfeita. Recomendo para quem busca escala real.",
      name: "Marcos Oliveira",
      designation: "VP @ Retail Giant",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="min-h-[80vh] w-full bg-white py-32 px-4 relative flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full mb-12 border-b-2 border-black pb-4">
          <h2 className="text-6xl md:text-8xl font-sans font-bold tracking-tighter uppercase">DEPOIMENTOS</h2>
          <span className="font-mono text-technical text-sm mb-2">/REGISTROS DE CLIENTES</span>
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </section>
  );
}