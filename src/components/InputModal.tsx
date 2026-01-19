import React, { useEffect, useState } from 'react';
import './InputModal.css';

interface InputModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
}

export function InputModal({ isOpen, onClose, title, icon, children }: InputModalProps) {
    const [render, setRender] = useState(isOpen);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setRender(true);
            // Small delay to allow render before transition
            setTimeout(() => setVisible(true), 10);
        } else {
            setVisible(false);
            // Wait for transition to finish before unmounting
            setTimeout(() => setRender(false), 300);
        }
    }, [isOpen]);

    if (!render) return null;

    return (
        <div className={`input-modal-overlay ${visible ? 'visible' : ''}`} onClick={onClose}>
            <div
                className={`input-modal-card ${visible ? 'visible' : ''}`}
                onClick={e => e.stopPropagation()}
            >
                <div className="input-modal-header">
                    <div className="input-modal-title-group">
                        {icon && <span className="input-modal-icon">{icon}</span>}
                        <h3 className="input-modal-title">{title}</h3>
                    </div>
                    <button className="input-modal-close" onClick={onClose}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
                <div className="input-modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default InputModal;
