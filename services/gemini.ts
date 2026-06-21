import { GoogleGenerativeAI } from "@google/generative-ai";

export async function getAiEventSuggestion(eventType: string, guestCount: number, preferences: string) {
  try {
    // 1. O nome correto da classe é GoogleGenerativeAI
    const genAI = new GoogleGenerativeAI(process.env.API_KEY || "");
    
    // 2. O modelo deve ser instanciado primeiro
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash", // Use um modelo existente e estável
      systemInstruction: "Você é um consultor de eventos de luxo da Avaeventos. Seu tom é sofisticado, poético e profissional."
    });

    // 3. Gerar o conteúdo
    const prompt = `Sugira um conceito de decoração de luxo para um evento de ${eventType} para ${guestCount} pessoas. Preferências do cliente: ${preferences}. Foque em tons elegantes (dourado, nude, branco). Retorne uma sugestão curta e inspiradora.`;
    
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
      },
    });

    const response = await result.response;
    return response.text();

  } catch (error) {
    console.error("Gemini Error:", error);
    return "Não conseguimos gerar uma sugestão agora, mas nossa equipe terá prazer em criar algo único para você!";
  }
}
