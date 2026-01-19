import React, { useRef, useEffect, useState } from 'react';
import { Sparkles, Monitor, Film, Sun, Camera, Palette, Image as ImageIcon, Check } from 'lucide-react';
import { Resolution, AspectRatio } from '../types';

interface CommandBarProps {
    prompt: string;
    onPromptChange: (v: string) => void;
    resolution: string;
    onResolutionChange: (res: string) => void;
    // Aspect ratio is new, adding local state handling for now or prop if App has it
    // For now we'll handle it locally or add to App.tsx later. 
    // Wait, let's keep it robust. I will add onAspectRatioChange prop.
    aspectRatio?: string;
    onAspectRatioChange?: (ar: string) => void;

    isGenerating: boolean;
    onGenerate: () => void;

    // Existing modal props
    activeTool: string | null;
    onToggleTool: (tool: string) => void;
}

export default function CommandBar({
    prompt,
    onPromptChange,
    resolution,
    onResolutionChange,
    aspectRatio = '16:9',
    onAspectRatioChange,
    isGenerating,
    onGenerate,
    activeTool,
    onToggleTool,
}: CommandBarProps) {
    const [isAspectRatioMenuOpen, setIsAspectRatioMenuOpen] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // Map tools to existing IDs
    const tools = [
        { id: 'subject', icon: <Film size={16} />, label: 'Subject' },
        { id: 'lighting', icon: <Sun size={16} />, label: 'Lighting' },
        { id: 'camera', icon: <Camera size={16} />, label: 'Lens' },
        { id: 'style', icon: <Palette size={16} />, label: 'Color' },
        { id: 'elements', icon: <ImageIcon size={16} />, label: 'Frame' }
    ];

    // Handle auto-growing textarea based on content
    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            const scrollHeight = textarea.scrollHeight;
            // Clamp between 28px and 180px
            textarea.style.height = `${Math.max(28, Math.min(scrollHeight, 180))}px`;
        }
    }, [prompt]);

    // Handle click outside to close the Aspect Ratio menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsAspectRatioMenuOpen(false);
            }
        };
        if (isAspectRatioMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isAspectRatioMenuOpen]);

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-50">
            <div className="bg-[#121212]/90 backdrop-blur-3xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.7)] rounded-[2.5rem] p-7 flex flex-col gap-5 transition-all duration-300">

                {/* Top Section: Auto-growing Prompt Input */}
                <div className="w-full">
                    <textarea
                        ref={textareaRef}
                        value={prompt}
                        onChange={(e) => onPromptChange(e.target.value)}
                        placeholder="Describe the cinematic scene..."
                        className="w-full bg-transparent resize-none outline-none text-[15px] leading-relaxed text-white placeholder-gray-500 font-medium py-1 max-h-48 overflow-y-auto scrollbar-hide transition-[height] duration-200"
                        rows={1}
                    />
                </div>

                {/* Bottom Section: Controls and Action Button */}
                <div className="flex items-center justify-between border-t border-white/5 pt-6">

                    {/* Left Controls: Aspect Ratio & Resolutions */}
                    <div className="flex items-center gap-4">
                        <div className="relative" ref={menuRef}>
                            <button
                                onClick={() => setIsAspectRatioMenuOpen(!isAspectRatioMenuOpen)}
                                className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${isAspectRatioMenuOpen
                                        ? 'bg-white text-black shadow-xl scale-105'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                                title="Select Aspect Ratio"
                            >
                                <Monitor size={18} />
                            </button>

                            {/* Aspect Ratio Floating Menu */}
                            {isAspectRatioMenuOpen && (
                                <div className="absolute bottom-full left-0 mb-4 w-44 bg-[#1a1a1a]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden p-2.5 animate-in fade-in slide-in-from-bottom-2 duration-200">
                                    <div className="text-[11px] font-bold text-white/30 px-3 py-2 uppercase tracking-[0.15em]">Ratio</div>
                                    {[AspectRatio.LANDSCAPE, AspectRatio.PORTRAIT, AspectRatio.SQUARE, AspectRatio.WIDE].map((ratio) => (
                                        <button
                                            key={ratio}
                                            onClick={() => {
                                                if (onAspectRatioChange) onAspectRatioChange(ratio);
                                                setIsAspectRatioMenuOpen(false);
                                            }}
                                            className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-[13px] font-semibold transition-all ${aspectRatio === ratio
                                                    ? 'bg-white/10 text-white'
                                                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            <span>{ratio}</span>
                                            {aspectRatio === ratio && <Check size={16} className="text-[#c7ff00]" />}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="h-5 w-px bg-white/10 mx-1"></div>

                        <div className="flex items-center gap-1.5">
                            {[Resolution._1K, Resolution._2K, Resolution._4K].map((res) => (
                                <button
                                    key={res}
                                    onClick={() => onResolutionChange(res)}
                                    className={`px-4 py-2 rounded-lg text-[11px] font-extrabold tracking-tight transition-all duration-200 ${resolution === res
                                            ? 'bg-white/10 text-white ring-1 ring-white/20'
                                            : 'text-gray-500 hover:text-gray-300'
                                        }`}
                                >
                                    {res}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Group: Tools Strip and Main Action */}
                    <div className="flex items-center gap-5">
                        {/* Contextual Tools */}
                        <div className="flex items-center gap-2 bg-black/40 rounded-2xl p-2 border border-white/5">
                            {tools.map((tool) => (
                                <button
                                    key={tool.id}
                                    onClick={() => onToggleTool(tool.id)}
                                    className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-300 ${activeTool === tool.id
                                            ? 'bg-white text-black shadow-lg scale-100'
                                            : 'text-gray-500 hover:text-white hover:bg-[#222]'
                                        }`}
                                    title={tool.label}
                                >
                                    {React.cloneElement(tool.icon as React.ReactElement, { size: 16 })}
                                </button>
                            ))}
                        </div>

                        {/* Cinematic Generate Button */}
                        <button
                            onClick={onGenerate}
                            disabled={isGenerating || !prompt.trim()}
                            className="custom-gradient-btn flex items-center justify-center gap-3 px-9 h-12 min-w-[150px] rounded-2xl font-black text-[12px] uppercase tracking-[0.08em] transition-all active:scale-95 disabled:opacity-40 disabled:grayscale shadow-[0_15px_30px_rgba(199,255,0,0.2)] hover:shadow-[0_20px_40px_rgba(199,255,0,0.3)]"
                        >
                            {isGenerating ? (
                                <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span>Generate</span>
                                    <Sparkles size={16} className="fill-black" />
                                </>
                            )}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
