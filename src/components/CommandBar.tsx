import { useRef, useEffect, useState } from 'react';
import './CommandBar.css';

interface CommandBarProps {
    prompt: string;
    onPromptChange: (value: string) => void;
    onGenerate: () => void;
    isGenerating: boolean;
    activeTool: string | null;
    onToggleTool: (tool: string) => void;
    resolution: string;
    onResolutionChange: (res: string) => void;
}

export default function CommandBar({
    prompt,
    onPromptChange,
    onGenerate,
    isGenerating,
    activeTool,
    onToggleTool,
    resolution,
    onResolutionChange
}: CommandBarProps) {
    const [isAspectRatioMenuOpen, setIsAspectRatioMenuOpen] = useState(false);
    const [aspectRatio, setAspectRatio] = useState('16:9');
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const tools = [
        { id: 'subject', label: 'Subject', icon: '🎬' },
        { id: 'lighting', label: 'Lighting', icon: '☀️' },
        { id: 'camera', label: 'Camera', icon: '📷' },
        { id: 'style', label: 'Style', icon: '🎨' },
        { id: 'elements', label: 'Elements', icon: '🖼️' }
    ];

    const aspectRatios = ['16:9', '4:3', '1:1', '9:16'];

    // Auto-grow textarea
    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            const scrollHeight = textarea.scrollHeight;
            textarea.style.height = `${Math.max(28, Math.min(scrollHeight, 180))}px`;
        }
    }, [prompt]);

    // Close aspect ratio menu on outside click
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
        <div className="command-bar-container">
            <div className="command-bar-wrapper">

                {/* Top Section: Auto-growing Prompt */}
                <div className="prompt-section">
                    <textarea
                        ref={textareaRef}
                        value={prompt}
                        onChange={(e) => onPromptChange(e.target.value)}
                        placeholder="Describe the cinematic scene..."
                        className="prompt-textarea"
                        rows={1}
                    />
                </div>

                {/* Divider */}
                <div className="section-divider"></div>

                {/* Bottom Section: Controls */}
                <div className="controls-section">

                    {/* Left: Aspect Ratio + Resolutions */}
                    <div className="left-controls">

                        {/* Aspect Ratio Dropdown */}
                        <div className="aspect-ratio-wrapper" ref={menuRef}>
                            <button
                                onClick={() => setIsAspectRatioMenuOpen(!isAspectRatioMenuOpen)}
                                className={`aspect-ratio-btn ${isAspectRatioMenuOpen ? 'active' : ''}`}
                                title="Select Aspect Ratio"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                </svg>
                            </button>

                            {/* Aspect Ratio Menu */}
                            {isAspectRatioMenuOpen && (
                                <div className="aspect-ratio-menu">
                                    <div className="menu-label">RATIO</div>
                                    {aspectRatios.map((ratio) => (
                                        <button
                                            key={ratio}
                                            onClick={() => {
                                                setAspectRatio(ratio);
                                                setIsAspectRatioMenuOpen(false);
                                            }}
                                            className={`menu-item ${aspectRatio === ratio ? 'active' : ''}`}
                                        >
                                            <span>{ratio}</span>
                                            {aspectRatio === ratio && (
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="vertical-divider"></div>

                        {/* Resolution Toggles */}
                        <div className="resolution-group">
                            {['1k', '2k', '4k'].map(res => (
                                <button
                                    key={res}
                                    onClick={() => onResolutionChange(res)}
                                    className={`res-toggle ${resolution === res ? 'active' : ''}`}
                                >
                                    {res.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Tools + Generate */}
                    <div className="right-controls">

                        {/* Tool Icons Strip */}
                        <div className="tools-strip">
                            {tools.map((tool) => (
                                <button
                                    key={tool.id}
                                    onClick={() => onToggleTool(tool.id)}
                                    className={`tool-icon ${activeTool === tool.id ? 'active' : ''}`}
                                    title={tool.label}
                                >
                                    <span>{tool.icon}</span>
                                </button>
                            ))}
                        </div>

                        {/* Generate Button */}
                        <button
                            onClick={onGenerate}
                            disabled={isGenerating || !prompt.trim()}
                            className="generate-btn"
                        >
                            {isGenerating ? (
                                <div className="spinner"></div>
                            ) : (
                                <>
                                    <span>GENERATE</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
