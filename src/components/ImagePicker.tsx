import { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import './ImagePicker.css';

export interface PickerOption {
    value: string;
    label: string;
    image: string;
    description?: string;
}

interface ImagePickerProps {
    title: string;
    subtitle?: string;
    options: PickerOption[];
    selectedValue: string;
    onSelect: (value: string) => void;
    onClose: () => void;
}

function ImagePicker({
    title,
    subtitle,
    options,
    selectedValue,
    onSelect,
    onClose
}: ImagePickerProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredOptions = useMemo(() => {
        if (!searchQuery.trim()) return options;
        const query = searchQuery.toLowerCase();
        return options.filter(opt =>
            opt.label.toLowerCase().includes(query) ||
            opt.description?.toLowerCase().includes(query)
        );
    }, [options, searchQuery]);

    const handleSelect = (value: string) => {
        onSelect(value);
        onClose();
    };

    return createPortal(
        <div className="picker-modal" onClick={onClose}>
            <div className="picker-content" onClick={e => e.stopPropagation()}>
                <div className="picker-header">
                    <div className="picker-title-group">
                        <h2 className="picker-title">{title}</h2>
                        {subtitle && <span className="picker-subtitle">{subtitle}</span>}
                    </div>
                    <button className="modal-close" onClick={onClose}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <div className="picker-search">
                    <div className="search-input-wrapper">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            type="text"
                            className="form-input search-input"
                            placeholder="Filter options..."
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="picker-grid-wrapper">
                    <div className="picker-grid">
                        {filteredOptions.map(option => (
                            <div
                                key={option.value}
                                className={`picker-item ${selectedValue === option.value ? 'selected' : ''}`}
                                onClick={() => handleSelect(option.value)}
                            >
                                <img src={option.image} alt={option.label} loading="lazy" className="picker-item-image" />
                                <div className="picker-item-overlay">
                                    <span className="picker-item-label">{option.label}</span>
                                    {option.description && (
                                        <span className="picker-item-description">{option.description}</span>
                                    )}
                                </div>
                                {selectedValue === option.value && (
                                    <div className="picker-item-check">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    {filteredOptions.length === 0 && (
                        <div className="picker-empty">
                            <span>No options match your search</span>
                        </div>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
}

export default ImagePicker;
