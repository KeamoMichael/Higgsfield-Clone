import React from 'react';
import './FloatingDock.css';

interface DockItem {
    id: string;
    label: string;
    icon: React.ReactNode;
}

interface FloatingDockProps {
    items: DockItem[];
    activeId: string | null;
    onSelect: (id: string) => void;
}

export function FloatingDock({ items, activeId, onSelect }: FloatingDockProps) {
    return (
        <div className="dock-container">
            <div className="dock-glass">
                {items.map((item) => (
                    <button
                        key={item.id}
                        className={`dock-item ${activeId === item.id ? 'active' : ''}`}
                        onClick={() => onSelect(item.id === activeId ? '' : item.id)} // Toggle off if clicked again
                        title={item.label}
                    >
                        <div className="dock-icon">{item.icon}</div>
                        <span className="dock-label">{item.label}</span>
                        {activeId === item.id && <div className="dock-dot" />}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default FloatingDock;
