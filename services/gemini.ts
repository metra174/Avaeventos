
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getAiEventSuggestion(eventType: string, guestCount: number, preferences: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Sugira um conceito de decoração de luxo para um evento de ${eventType} para ${guestCount} pessoas. Preferências do cliente: ${preferences}. Foque em tons elegantes (dourado, nude, branco). Retorne uma sugestão curta e inspiradora.`,
      config: {
        systemInstruction: "Você é um consultor de eventos de luxo da Avaeventos. Seu tom é sofisticado, poético e profissional.",
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Não conseguimos gerar uma sugestão agora, mas nossa equipe terá prazer em criar algo único para você!";
  }
}
