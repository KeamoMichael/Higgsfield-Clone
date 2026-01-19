
// Fix: Import React to resolve 'Cannot find namespace React' error for React.ReactNode
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

// Fix: Augment the global AIStudio interface directly. 
// This avoids conflicts with the existing 'window.aistudio' property declaration on the Window object 
// while ensuring the required methods are available for type checking. 
// The error messages "All declarations of 'aistudio' must have identical modifiers" and 
// "Property 'aistudio' must be of type 'AIStudio'" indicate that 'aistudio' is already 
// defined on Window with a global 'AIStudio' type.
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }
}
