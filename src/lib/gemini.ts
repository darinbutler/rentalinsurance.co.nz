import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = process.env.GOOGLE_GEMINI_API_KEY;

let genAI: GoogleGenerativeAI | null = null;

if (API_KEY) {
  genAI = new GoogleGenerativeAI(API_KEY);
}

export async function generateImage(prompt: string): Promise<string> {
  if (!genAI) {
    // Return a gradient placeholder if API key is not configured
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310B981;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%230EA5E9;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='400' fill='url(%23g)' /%3E%3C/svg%3E`;
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });
    const result = await model.generateContent(prompt);
    const response = result.response;
    // Return a data URL or placeholder since Gemini doesn't generate images directly
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310B981;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%230EA5E9;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='400' fill='url(%23g)' /%3E%3C/svg%3E`;
  } catch (error) {
    console.error('Error generating image with Gemini:', error);
    // Return placeholder gradient on error
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310B981;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%230EA5E9;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='400' fill='url(%23g)' /%3E%3C/svg%3E`;
  }
}

export const gradientPlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310B981;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%230EA5E9;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='400' fill='url(%23g)' /%3E%3C/svg%3E";
