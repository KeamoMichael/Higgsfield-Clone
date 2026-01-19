import { useRef, useEffect } from 'react';
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
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // Auto-resize textarea
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.style.height = 'auto';
            inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
        }
    }, [prompt]);

    return (
        <div className="command-bar-container">
            <div className="command-bar-capsule">
                {/* Top Section: Prompt Input */}
                <div className="command-prompt-section">
                    <textarea
                        ref={inputRef}
                        className="command-input"
                        placeholder="Describe your scene..."
                        value={prompt}
                        onChange={(e) => onPromptChange(e.target.value)}
                        rows={1}
                    />
                </div>

                {/* Divider */}
                <div className="command-divider"></div>

                {/* Bottom Section: Controls */}
                <div className="command-controls-section">

                    {/* Left: Resolution Toggles */}
                    <div className="command-toggles">
                        <button className="command-icon-btn desktop-only">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        </button>
                        <div className="res-group">
                            {['1k', '2k', '4k'].map(res => (
                                <button
                                    key={res}
                                    className={`res-btn ${resolution === res.toLowerCase() ? 'active' : ''}`}
                                    onClick={() => onResolutionChange(res.toLowerCase())}
                                >
                                    {res.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Center: Tools */}
                    <div className="command-tools">
                        <button
                            className={`tool-btn ${activeTool === 'subject' ? 'active' : ''}`}
                            onClick={() => onToggleTool('subject')}
                            title="Subject"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M12 4v16" /><path d="M4 12h16" /><path d="M4 8h16" /><path d="M4 16h16" /></svg>
                        </button>
                        <button
                            className={`tool-btn ${activeTool === 'lighting' ? 'active' : ''}`}
                            onClick={() => onToggleTool('lighting')}
                            title="Lighting"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><path d="M12 1v2" /><path d="M12 21v2" /><path d="M4.22 4.22l1.42 1.42" /><path d="M18.36 18.36l1.42 1.42" /><path d="M1 12h2" /><path d="M21 12h2" /><path d="M4.22 19.78l1.42-1.42" /><path d="M18.36 5.64l1.42-1.42" /></svg>
                        </button>
                        <button
                            className={`tool-btn ${activeTool === 'camera' ? 'active' : ''}`}
                            onClick={() => onToggleTool('camera')}
                            title="Camera"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
                        </button>
                        <button
                            className={`tool-btn ${activeTool === 'style' ? 'active' : ''}`}
                            onClick={() => onToggleTool('style')}
                            title="Style"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="13.5" cy="6.5" r=".5" /><circle cx="17.5" cy="10.5" r=".5" /><circle cx="8.5" cy="7.5" r=".5" /><circle cx="6.5" cy="12.5" r=".5" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>
                        </button>
                        <button
                            className={`tool-btn ${activeTool === 'elements' ? 'active' : ''}`}
                            onClick={() => onToggleTool('elements')}
                            title="Elements"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
                        </button>
                    </div>

                    {/* Right: Generate Button */}
                    <div className="command-action">
                        <button
                            className="generate-btn"
                            onClick={onGenerate}
                            disabled={isGenerating}
                        >
                            {isGenerating ? 'GENERATING...' : 'GENERATE'}
                            <span className="btn-icon">✨</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
