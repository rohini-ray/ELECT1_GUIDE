import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function askElectionAssistant(query: string, history: { role: 'user' | 'model', text: string }[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({
          role: h.role === 'user' ? 'user' : 'model',
          parts: [{ text: h.text }]
        })),
        { role: 'user', parts: [{ text: query }] }
      ],
      config: {
        systemInstruction: `You are the "Civic Guide India Assistant," a neutral, expert, and helpful guide on the Indian election process. 
Your goal is to educate users on HOW elections work in India, not WHO to vote for.
Guidelines:
- Maintain strict political neutrality.
- Focus on process: Voter ID (EPIC) registration via NVSP, General Elections (Lok Sabha), State Assembly Elections (Vidhan Sabha), ECI guidelines, EVM, and VVPAT.
- If asked about specific political parties or candidates, gently redirect to the process of how elections are conducted or how to find official candidate affidavits on the ECI website.
- Provide clear, concise, and structured information using Markdown.
- Use a friendly but authoritative and professional tone.
- If a user asks about specific state rules (e.g., local body polls), remind them that while ECI handles major elections, State Election Commissions handle local ones.
- Mention official sources like voters.eci.gov.in and the Voter Helpline App.
- Keep responses relatively brief unless a deep explanation is requested.`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my civic knowledge base right now. Please try again in a moment.";
  }
}
