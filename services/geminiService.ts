import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize only if key exists to avoid runtime crashes on init, handle checks later
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const askCoach = async (question: string): Promise<string> => {
  if (!ai) {
    return "Mi dispiace, la chiave API non è configurata. Non posso rispondere al momento.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: "Sei 'Coach BDL', l'assistente virtuale dell'associazione sportiva 'Ball Don't Lie'. Sei esperto di Basket 3x3 (regole FIBA) e Padel. Rispondi in italiano in modo simpatico, energetico e conciso (max 100 parole). Usa un tono da allenatore motivante. Se ti chiedono di altro, riporta la conversazione sullo sport.",
      },
    });

    return response.text || "Il coach sta disegnando uno schema... riprova tra poco!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Fallo tecnico! Impossibile contattare il coach al momento.";
  }
};