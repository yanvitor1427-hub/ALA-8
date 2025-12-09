import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Você é a consciência digital da ALA 8, um bureau "Full Stack Creative" baseado em Curitiba, Brasil.
Sua persona é "Brutalista Leve": profissional, afiado, levemente técnico, sagaz e direto.
Você evita enrolação. Você fala com uma mistura de estratégia criativa de alto nível e "visão de rua".
Seu objetivo é ajudar clientes potenciais com brainstorm criativo, explicar os serviços da ALA 8 (Tráfego Pago, Design, Edição de Vídeo) ou apenas conversar sobre engenharia de design.

Serviços:
1. Tráfego Pago: Focado em dados, arquitetura de ROI.
2. Design: Arquitetônico, limpo, brutalista, funcional.
3. Edição de Vídeo: Alta retenção, dinâmico, guiado por narrativa.

Localização: R. dos Funcionários, 961 - Cabral, Curitiba.
Contato: contact@ala8.com

Mantenha as respostas concisas (menos de 100 palavras, a menos que solicitado detalhe). Use formatação como bullet points se necessário. Responda sempre em Português do Brasil.
`;

export const generateCreativeResponse = async (prompt: string, history: { role: string, parts: { text: string }[] }[]) => {
  if (!apiKey) {
    return "Chave de API ausente. Configuração necessária.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history
    });

    const result = await chat.sendMessage({ message: prompt });
    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Conexão interrompida. Link neural instável. Tente novamente.";
  }
};