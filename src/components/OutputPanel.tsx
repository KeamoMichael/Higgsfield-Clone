import './OutputPanel.css';
import type { GenerationResult } from '../services/geminiService';

interface OutputPanelProps {
    prompt: string;
    resolution: string;
    onResolutionChange: (res: string) => void;
    onGenerate: () => void;
    onGenerateScene: () => void;
    onCopyPrompt: () => void;
    onCopySceneJSON: () => void;
    isGenerating: boolean;
    generatedImage: string | null;
    sceneVariations: GenerationResult[];
    error: string | null;
    apiConnected: boolean;
    onUseAsReference: (imageUrl: string) => void;
}

function OutputPanel({
    prompt,
    resolution,
    onResolutionChange,
    onGenerate,
    onGenerateScene,
    onCopyPrompt,
    onCopySceneJSON,
    isGenerating,
    generatedImage,
    sceneVariations,
    error,
    apiConnected,
    onUseAsReference,
}: OutputPanelProps) {
    return (
        <div className="output-panel">
            {/* Prompt Preview */}
            <div className="prompt-preview">
                <span className="prompt-preview-label">CONSTRUCTED PROMPT</span>
                <p className="prompt-preview-text">
                    {prompt || 'A subject. The image should be in a 16:9 format.'}
                </p>
            </div>

            {/* API Warning */}
            {!apiConnected && (
                <div className="info-message">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    Please enter your API key to generate images.
                </div>
            )}

            {/* Action Bar */}
            <div className="action-bar">
                {/* Resolution Selector */}
                <div className="resolution-selector">
                    {['1k', '2k', '4k'].map(res => (
                        <button
                            key={res}
                            className={`resolution-btn ${resolution === res ? 'active' : ''}`}
                            onClick={() => onResolutionChange(res)}
                        >
                            {res.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Copy Buttons */}
                <button className="btn btn-secondary" onClick={onCopyPrompt} title="Copy prompt to clipboard">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    COPY PROMPT
                </button>

                <button className="btn btn-secondary" onClick={onCopySceneJSON} title="Copy scene JSON">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    COPY SCENE JSON
                </button>

                {/* Generate Button */}
                <button
                    className="btn btn-generate"
                    onClick={onGenerate}
                    disabled={isGenerating || !apiConnected}
                >
                    {isGenerating ? 'GENERATING...' : 'GENERATE IMAGE ✨'}
                </button>
            </div>

            {/* Multi-Angle Button */}
            <button
                className="btn btn-scene btn-full"
                onClick={onGenerateScene}
                disabled={isGenerating || !apiConnected}
            >
                ✨ GENERATE SCENE (4 RANDOM ANGLES, CONSISTENT CHARACTER)
            </button>

            {/* Error Display */}
            {error && (
                <div className="info-message" style={{ marginTop: 'var(--spacing-md)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                    {error}
                </div>
            )}

            {/* Primary Render Section */}
            <div className="render-section">
                <h3 className="render-section-title">
                    <span className="render-marker"></span>
                    PRIMARY RENDER
                </h3>

                <div className="output-area">
                    {isGenerating ? (
                        <div className="output-placeholder">
                            <div className="loading-spinner"></div>
                            <span>Generating...</span>
                        </div>
                    ) : generatedImage ? (
                        <div className="image-container">
                            <img src={generatedImage} alt="Generated" className="output-image" />
                            <div className="image-actions">
                                <button className="btn btn-secondary" onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = generatedImage;
                                    link.download = 'cinema-studio-pro-render.png';
                                    link.click();
                                }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                    Download
                                </button>
                                <button className="btn btn-secondary" onClick={() => onUseAsReference(generatedImage)}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                        <circle cx="8.5" cy="8.5" r="1.5" />
                                        <polyline points="21 15 16 10 5 21" />
                                    </svg>
                                    Use as Reference
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="output-placeholder">
                            <svg className="output-placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                            <span>NO IMAGE GENERATED</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Scene Variations Grid */}
            {sceneVariations.length > 0 && (
                <div className="render-section">
                    <h3 className="render-section-title">
                        <span className="render-marker"></span>
                        SCENE VARIATIONS (SET 1/1)
                    </h3>

                    <div className="scene-grid">
                        {sceneVariations.map((result, index) => (
                            <div key={index} className="scene-card">
                                <span className="scene-label">ANGLE {index + 1}</span>
                                {result.success && result.imageUrl ? (
                                    <img src={result.imageUrl} alt={`Angle ${index + 1}`} />
                                ) : (
                                    <div className="scene-placeholder">
                                        <span>Failed</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Model Indicator */}
            <div className="model-indicator" style={{ marginTop: 'var(--spacing-lg)', textAlign: 'center' }}>
                Using model: gemini-2.0-flash-exp-image-preview
            </div>
        </div>
    );
}

export default OutputPanel;
