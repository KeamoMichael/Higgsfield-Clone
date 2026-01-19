import { useCallback } from 'react';
import './ElementsTool.css';
import type { ReferenceImage } from '../App';

interface ElementsToolProps {
    referenceImages: ReferenceImage[];
    onAdd: (image: ReferenceImage) => void;
    onRemove: (id: string) => void;
}

function ElementsTool({ referenceImages, onAdd, onRemove }: ElementsToolProps) {
    const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>, type: ReferenceImage['type']) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const data = event.target?.result as string;
            onAdd({
                id: Date.now().toString(),
                type,
                name: file.name,
                data,
            });
        };
        reader.readAsDataURL(file);

        // Reset input
        e.target.value = '';
    }, [onAdd]);

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>, type: ReferenceImage['type']) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (!file || !file.type.startsWith('image/')) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const data = event.target?.result as string;
            onAdd({
                id: Date.now().toString(),
                type,
                name: file.name,
                data,
            });
        };
        reader.readAsDataURL(file);
    }, [onAdd]);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const typeLabels: Record<ReferenceImage['type'], string> = {
        character: 'Character Reference',
        outfit: 'Outfit Reference',
        object: 'Object/Prop Reference',
        scene: 'Scene/Environment Reference',
    };

    return (
        <div className="elements-tool">
            <div className="elements-header">
                <h2 className="elements-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                    </svg>
                    ELEMENTS TOOL
                </h2>
                <p className="elements-subtitle">Add reference images for consistency</p>
            </div>

            {/* Upload Areas by Type */}
            {(['character', 'outfit', 'object', 'scene'] as const).map(type => (
                <div key={type} className="element-type-section">
                    <label className="form-label">{typeLabels[type].toUpperCase()}</label>

                    {/* Show existing images of this type */}
                    {referenceImages.filter(img => img.type === type).map(img => (
                        <div key={img.id} className="element-card">
                            <img src={img.data} alt={img.name} className="element-thumb" />
                            <div className="element-info">
                                <span className="element-type">{type}</span>
                                <span className="element-name">{img.name}</span>
                            </div>
                            <button className="element-remove" onClick={() => onRemove(img.id)}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    ))}

                    {/* Upload area */}
                    <div
                        className="upload-area-small"
                        onDrop={(e) => handleDrop(e, type)}
                        onDragOver={handleDragOver}
                    >
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileUpload(e, type)}
                            style={{ display: 'none' }}
                            id={`upload-${type}`}
                        />
                        <label htmlFor={`upload-${type}`} className="upload-label">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                            <span>Add {type} reference</span>
                        </label>
                    </div>
                </div>
            ))}

            {/* Info Text */}
            <div className="elements-info">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <span>Reference images help maintain visual consistency across generations.</span>
            </div>
        </div>
    );
}

export default ElementsTool;
