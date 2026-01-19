
import React from 'react';

export enum Resolution {
    _1K = '1K',
    _2K = '2K',
    _4K = '4K',
}

export enum AspectRatio {
    SQUARE = '1:1',
    LANDSCAPE = '16:9',
    PORTRAIT = '9:16',
    WIDE = '21:9', // Cinema standard
}

export interface ImageGenerationState {
    isLoading: boolean;
    imageUrl: string | null;
    error: string | null;
}

export interface ToolbarAction {
    id: string;
    icon: React.ReactNode;
    label: string;
}

declare global {
    interface AIStudio {
        hasSelectedApiKey: () => Promise<boolean>;
        openSelectKey: () => Promise<void>;
    }
}
