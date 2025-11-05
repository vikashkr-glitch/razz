
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateCreativePrompt = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: 'Give me a unique and inspiring one-sentence creative writing prompt.',
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("Error generating prompt from Gemini API:", error);
    throw new Error("Failed to communicate with the Gemini API.");
  }
};
