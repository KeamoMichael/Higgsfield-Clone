import { useState } from 'react';

interface SettingsModalProps {
    onClose: () => void;
    onSave: (key: string) => void;
    currentKey: string;
}

function SettingsModal({ onClose, onSave, currentKey }: SettingsModalProps) {
    const [apiKey, setApiKey] = useState(currentKey.includes('•') ? '' : currentKey);

    const handleSave = () => {
        if (apiKey.trim()) {
            onSave(apiKey.trim());
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-title">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--color-primary)' }}>
                            <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94 0 .31.02.63.06.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                        </svg>
                        SETTINGS
                    </div>
                    <button className="modal-close" onClick={onClose}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <div className="modal-body">
                    <div className="form-group">
                        <label className="form-label">MANUAL API KEY</label>
                        <input
                            type="password"
                            className="form-input"
                            value={apiKey}
                            onChange={e => setApiKey(e.target.value)}
                            placeholder="Enter your Google AI Studio API key..."
                        />
                        <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '8px' }}>
                            Your key is stored locally in your browser and never sent to our servers.
                        </p>
                    </div>
                </div>

                <div className="modal-footer">
                    <button
                        className="btn btn-primary btn-full"
                        onClick={handleSave}
                        disabled={!apiKey.trim()}
                    >
                        SAVE KEY
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SettingsModal;
