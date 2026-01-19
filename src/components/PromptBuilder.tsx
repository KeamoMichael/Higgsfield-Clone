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
    view?: 'all' | 'subject' | 'lighting' | 'camera' | 'style';
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

function PromptBuilder({ data, onChange, view = 'all' }: PromptBuilderProps) {
    /* ... state ... */

    /* ... helpers ... */

    const showAll = view === 'all';

    return (
        <div className="prompt-builder">
            {/* Section 1: Subject & Framing - Only show if view is 'subject' or 'all' */}
            {(showAll || view === 'subject') && (
                <div className="section">
                    <div className="section-header">
                        <span className="section-icon">🎬</span>
                        <h2 className="section-title">01. SUBJECT & FRAMING</h2>
                    </div>
                    {/* Reuse SubjectForm content logic here or just copy paste for now to avoid massive refactor risk */}
                    {/* Ideally we use SubjectForm component here but for speed lets keep inline logic if simple */}
                    <div className="form-group">
                        <label className="form-label">SUBJECT & ACTION</label>
                        <textarea
                            className="form-textarea"
                            placeholder="E.g., A woman in a trench coat checking her phone..."
                            value={data.subjectAction}
                            onChange={e => onChange('subjectAction', e.target.value)}
                        />
                    </div>
                    {/* ... rest of Section 1 inputs ... */}
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
            )}

            {/* Section 2: Lighting & Mood */}
            {(showAll || view === 'lighting') && (
                <div className="section">
                    {!showAll && <div style={{ display: 'none' }} className="section-header"><h2 className="section-title">Hidden Header</h2></div>}
                    {/* If modal, maybe hide the 02. header to save space? Or keep it? Lets keep concise. */}

                    {renderVisualSelect('lightingSource', 'LIGHTING SOURCE', lightingSources, data.lightingSource)}
                    {renderVisualSelect('atmosphere', 'ATMOSPHERE / MOOD', atmospheres, data.atmosphere)}
                </div>
            )}

            {/* Section 3: Camera Gear */}
            {(showAll || view === 'camera') && (
                <div className="section">
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
            )}

            {/* Section 4: Style & Aesthetics */}
            {(showAll || view === 'style') && (
                <div className="section">
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
            )}

            {/* Image Picker Modals - Pass through regardless of view, managed by activePicker state */}
            {activePicker && pickerConfigs[activePicker] && (
                <ImagePicker
                    title={pickerConfigs[activePicker].title}
                    subtitle={pickerConfigs[activePicker].subtitle}
                    options={pickerConfigs[activePicker].options}
                    selectedValue={data[activePicker] || ''} // Fix potential undefined
                    onSelect={(value) => onChange(activePicker, value)}
                    onClose={() => setActivePicker(null)}
                />
            )}
        </div>
    );
}

export default PromptBuilder;
