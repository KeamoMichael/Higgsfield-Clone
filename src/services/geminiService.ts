import { GoogleGenerativeAI } from '@google/generative-ai';
import type { Part } from '@google/generative-ai';

let genAI: GoogleGenerativeAI | null = null;

export const initializeGemini = (apiKey: string) => {
    genAI = new GoogleGenerativeAI(apiKey);
};

export const isInitialized = () => genAI !== null;

export interface GenerationResult {
    success: boolean;
    imageUrl?: string;
    error?: string;
}

export interface GenerationOptions {
    prompt: string;
    aspectRatio?: string;
    referenceImages?: string[]; // base64 encoded images
}

// Convert base64 to Part for Gemini API
const fileToGenerativePart = (base64Data: string, mimeType: string): Part => {
    return {
        inlineData: {
            data: base64Data.replace(/^data:image\/\w+;base64,/, ''),
            mimeType,
        },
    };
};

export const generateImage = async (
    options: GenerationOptions
): Promise<GenerationResult> => {
    if (!genAI) {
        return { success: false, error: 'API not initialized. Please add your API key.' };
    }

    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash-exp',
        });

        const parts: Part[] = [];

        // Add reference images if provided
        if (options.referenceImages && options.referenceImages.length > 0) {
            for (const img of options.referenceImages) {
                const mimeType = img.startsWith('data:image/png') ? 'image/png' : 'image/jpeg';
                parts.push(fileToGenerativePart(img, mimeType));
            }
        }

        // Add the prompt
        parts.push({ text: options.prompt });

        const result = await model.generateContent(parts);
        const response = result.response;

        // Check if we got an image back
        if (response.candidates && response.candidates[0]?.content?.parts) {
            for (const part of response.candidates[0].content.parts) {
                if (part.inlineData) {
                    const imageData = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
                    return { success: true, imageUrl: imageData };
                }
            }
        }

        // If no image, return the text response as error
        const text = response.text();
        return {
            success: false,
            error: text || 'No image was generated. Try adjusting your prompt.'
        };

    } catch (error) {
        console.error('Generation error:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to generate image'
        };
    }
};

export const generateSceneVariations = async (
    basePrompt: string,
    referenceImages?: string[]
): Promise<GenerationResult[]> => {
    // Generate 4 variations with different angles
    const anglePrompts = [
        `${basePrompt}. Shot from the front, facing the camera directly.`,
        `${basePrompt}. Shot from a three-quarter angle, slightly to the side.`,
        `${basePrompt}. Shot from behind, showing the back of the subject.`,
        `${basePrompt}. Shot from a dramatic low angle, looking up at the subject.`,
    ];

    const results: GenerationResult[] = [];

    for (const prompt of anglePrompts) {
        const result = await generateImage({
            prompt,
            referenceImages,
        });
        results.push(result);
        // Small delay between requests to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    return results;
};

// Validate API key by making a test request
export const validateApiKey = async (apiKey: string): Promise<boolean> => {
    try {
        const testAI = new GoogleGenerativeAI(apiKey);
        const model = testAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

        // Simple test to verify the key works
        await model.generateContent('Say "ok" if you can read this.');
        return true;
    } catch {
        return false;
    }
};
