import { useState, useMemo } from 'react';
import './PromptBuilder.css';
import type { PromptData } from '../services/promptBuilder';
import ImagePicker from './ImagePicker';
import type { PickerOption } from './ImagePicker';
import {
    shotTypes,
    viewingDirections,
    lightingSources,
    atmospheres,
    cameraBodies,
    focalLengths,
    lensTypes,
    filmStocks,
    photographyGenres,
    photographerStyles,
    movieLooks,
    filterEffects,
    aspectRatios,
} from '../data/options';

interface PromptBuilderProps {
    data: PromptData;
    onChange: (field: keyof PromptData, value: string) => void;
}

type PickerType =
    | 'lightingSource'
    | 'atmosphere'
    | 'cameraBody'
    | 'focalLength'
    | 'lensType'
    | 'filmStock'
    | 'photographyGenre'
    | 'photographerStyle'
    | 'movieLook'
    | 'filterEffect'
    | null;

function PromptBuilder({ data, onChange }: PromptBuilderProps) {
    const [activePicker, setActivePicker] = useState<PickerType>(null);

    // Convert options to picker format (filter to only those with images)
    const getPickerOptions = (options: typeof lightingSources): PickerOption[] => {
        return options
            .filter(opt => opt.image)
            .map(opt => ({
                value: opt.value,
                label: opt.label,
                image: opt.image!,
            }));
    };

    // Get label for selected value
    const getSelectedLabel = (options: typeof lightingSources, value: string): string => {
        const opt = options.find(o => o.value === value);
        return opt?.label || 'Select style...';
    };

    // Get image for selected value
    const getSelectedImage = (options: typeof lightingSources, value: string): string | undefined => {
        const opt = options.find(o => o.value === value);
        return opt?.image;
    };

    const pickerConfigs = useMemo(() => ({
        lightingSource: {
            title: 'SELECT LIGHTING SOURCE',
            subtitle: `// ${lightingSources.filter(o => o.image).length} OPTIONS AVAILABLE`,
            options: getPickerOptions(lightingSources),
        },
        atmosphere: {
            title: 'SELECT ATMOSPHERE / MOOD',
            subtitle: `// ${atmospheres.filter(o => o.image).length} OPTIONS AVAILABLE`,
            options: getPickerOptions(atmospheres),
        },
        cameraBody: {
            title: 'SELECT CAMERA BODY',
            subtitle: `// ${cameraBodies.filter(o => o.image).length} OPTIONS AVAILABLE`,
            options: getPickerOptions(cameraBodies),
        },
        focalLength: {
            title: 'SELECT FOCAL LENGTH',
            subtitle: `// ${focalLengths.filter(o => o.image).length} OPTIONS AVAILABLE`,
            options: getPickerOptions(focalLengths),
        },
        lensType: {
            title: 'SELECT LENS TYPE',
            subtitle: `// ${lensTypes.filter(o => o.image).length} OPTIONS AVAILABLE`,
            options: getPickerOptions(lensTypes),
        },
        filmStock: {
            title: 'SELECT FILM STOCK',
            subtitle: `// ${filmStocks.filter(o => o.image).length} OPTIONS AVAILABLE`,
            options: getPickerOptions(filmStocks),
        },
        photographyGenre: {
            title: 'SELECT PHOTOGRAPHY GENRE',
            subtitle: `// ${photographyGenres.filter(o => o.image).length} OPTIONS AVAILABLE`,
            options: getPickerOptions(photographyGenres),
        },
        photographerStyle: {
            title: 'SELECT PHOTOGRAPHER STYLE',
            subtitle: `// ${photographerStyles.filter(o => o.image).length} OPTIONS AVAILABLE`,
            options: getPickerOptions(photographerStyles),
        },
        movieLook: {
            title: 'SELECT MOVIE LOOK / AESTHETIC',
            subtitle: `// ${movieLooks.filter(o => o.image).length} OPTIONS AVAILABLE`,
            options: getPickerOptions(movieLooks),
        },
        filterEffect: {
            title: 'SELECT FILTER / EFFECT',
            subtitle: `// ${filterEffects.filter(o => o.image).length} OPTIONS AVAILABLE`,
            options: getPickerOptions(filterEffects),
        },
    }), []);

    const renderVisualSelect = (
        field: PickerType,
        label: string,
        options: typeof lightingSources,
        value: string
    ) => {
        const selectedImage = getSelectedImage(options, value);
        const selectedLabel = getSelectedLabel(options, value);

        return (
            <div className="form-group">
                <label className="form-label">{label}</label>
                <button
                    type="button"
                    className="visual-select-btn"
                    onClick={() => setActivePicker(field)}
                >
                    {selectedImage ? (
                        <img src={selectedImage} alt={selectedLabel} className="visual-select-thumb" />
                    ) : (
                        <div className="visual-select-placeholder">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                        </div>
                    )}
                    <span className="visual-select-label">{selectedLabel}</span>
                    <svg className="visual-select-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </button>
            </div>
        );
    };

    return (
        <div className="prompt-builder">
            {/* Section 1: Subject & Framing */}
            <div className="section">
                <div className="section-header">
                    <span className="section-icon">🎬</span>
                    <h2 className="section-title">01. SUBJECT & FRAMING</h2>
                </div>

                <div className="form-group">
                    <label className="form-label">SUBJECT & ACTION</label>
                    <textarea
                        className="form-textarea"
                        placeholder="E.g., A woman in a trench coat checking her phone..."
                        value={data.subjectAction}
                        onChange={e => onChange('subjectAction', e.target.value)}
                    />
                </div>

                <div className="form-grid">
                    <div className="form-group">
                        <label className="form-label">SHOT TYPE / ANGLE</label>
                        <select
                            className="form-select"
                            value={data.shotType}
                            onChange={e => onChange('shotType', e.target.value)}
                        >
                            <option value="">Select style...</option>
                            {shotTypes.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">VIEWING DIRECTION</label>
                        <select
                            className="form-select"
                            value={data.viewingDirection}
                            onChange={e => onChange('viewingDirection', e.target.value)}
                        >
                            <option value="">Select style...</option>
                            {viewingDirections.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">ENVIRONMENT</label>
                    <textarea
                        className="form-textarea"
                        placeholder="E.g., at a rainy London bus stop at night..."
                        value={data.environment}
                        onChange={e => onChange('environment', e.target.value)}
                        style={{ minHeight: '60px' }}
                    />
                </div>
            </div>

            {/* Section 2: Lighting & Mood */}
            <div className="section">
                <div className="section-header">
                    <span className="section-icon">☀️</span>
                    <h2 className="section-title">02. LIGHTING & MOOD</h2>
                </div>

                {renderVisualSelect('lightingSource', 'LIGHTING SOURCE', lightingSources, data.lightingSource)}
                {renderVisualSelect('atmosphere', 'ATMOSPHERE / MOOD', atmospheres, data.atmosphere)}
            </div>

            {/* Section 3: Camera Gear */}
            <div className="section">
                <div className="section-header">
                    <span className="section-icon">📷</span>
                    <h2 className="section-title">03. CAMERA GEAR</h2>
                </div>

                {renderVisualSelect('cameraBody', 'CAMERA BODY', cameraBodies, data.cameraBody)}

                <div className="form-grid">
                    <div className="form-group">
                        {renderVisualSelect('focalLength', 'FOCAL LENGTH', focalLengths, data.focalLength)}
                    </div>
                    <div className="form-group">
                        {renderVisualSelect('lensType', 'LENS TYPE', lensTypes, data.lensType)}
                    </div>
                </div>

                {renderVisualSelect('filmStock', 'FILM STOCK', filmStocks, data.filmStock)}
            </div>

            {/* Section 4: Style & Aesthetics */}
            <div className="section">
                <div className="section-header">
                    <span className="section-icon">🎨</span>
                    <h2 className="section-title">04. STYLE & AESTHETICS</h2>
                </div>

                {renderVisualSelect('photographyGenre', 'PHOTOGRAPHY GENRE', photographyGenres, data.photographyGenre)}
                {renderVisualSelect('photographerStyle', 'PHOTOGRAPHER STYLE', photographerStyles, data.photographerStyle)}
                {renderVisualSelect('movieLook', 'MOVIE LOOK / AESTHETIC', movieLooks, data.movieLook)}
                {renderVisualSelect('filterEffect', 'FILTER / EFFECT', filterEffects, data.filterEffect)}

                <div className="form-group">
                    <label className="form-label">ASPECT RATIO</label>
                    <select
                        className="form-select"
                        value={data.aspectRatio}
                        onChange={e => onChange('aspectRatio', e.target.value)}
                    >
                        {aspectRatios.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Image Picker Modals */}
            {activePicker && pickerConfigs[activePicker] && (
                <ImagePicker
                    title={pickerConfigs[activePicker].title}
                    subtitle={pickerConfigs[activePicker].subtitle}
                    options={pickerConfigs[activePicker].options}
                    selectedValue={data[activePicker]}
                    onSelect={(value) => onChange(activePicker, value)}
                    onClose={() => setActivePicker(null)}
                />
            )}
        </div>
    );
}

export default PromptBuilder;
