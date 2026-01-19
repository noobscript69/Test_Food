
import { GoogleGenAI, Type } from "@google/genai";
import { MenuItem, RecommendationResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getFoodRecommendations = async (
  mood: string,
  menu: MenuItem[]
): Promise<RecommendationResponse> => {
  const menuSummary = menu.map(item => `${item.id}: ${item.name} (${item.tags.join(', ')})`).join('\n');
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `The user says they are feeling: "${mood}". Based on the following foodcart menu, recommend 2 or 3 items that would suit their mood.
    
    Menu:
    ${menuSummary}
    
    Provide a friendly, personality-filled message for the user.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          recommendations: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                itemId: { type: Type.STRING },
                reason: { type: Type.STRING }
              },
              required: ["itemId", "reason"]
            }
          },
          friendlyMessage: { type: Type.STRING }
        },
        required: ["recommendations", "friendlyMessage"]
      }
    }
  });

  const text = response.text || "{}";
  return JSON.parse(text) as RecommendationResponse;
};
