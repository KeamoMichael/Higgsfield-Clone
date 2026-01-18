const STORAGE_KEY = 'cinema_studio_pro_api_key';

// Simple obfuscation (not true encryption, but better than plaintext)
const obfuscate = (str: string): string => {
    return btoa(str.split('').reverse().join(''));
};

const deobfuscate = (str: string): string => {
    try {
        return atob(str).split('').reverse().join('');
    } catch {
        return '';
    }
};

export const saveApiKey = (key: string): void => {
    localStorage.setItem(STORAGE_KEY, obfuscate(key));
};

export const loadApiKey = (): string | null => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    return deobfuscate(stored);
};

export const clearApiKey = (): void => {
    localStorage.removeItem(STORAGE_KEY);
};

export const hasApiKey = (): boolean => {
    return localStorage.getItem(STORAGE_KEY) !== null;
};
