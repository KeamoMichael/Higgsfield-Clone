import './PromptBuilder.css';
import { PromptData } from '../services/promptBuilder';
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

function PromptBuilder({ data, onChange }: PromptBuilderProps) {
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

                <div className="form-group">
                    <label className="form-label">LIGHTING SOURCE</label>
                    <select
                        className="form-select"
                        value={data.lightingSource}
                        onChange={e => onChange('lightingSource', e.target.value)}
                    >
                        <option value="">Select style...</option>
                        {lightingSources.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">ATMOSPHERE / MOOD</label>
                    <select
                        className="form-select"
                        value={data.atmosphere}
                        onChange={e => onChange('atmosphere', e.target.value)}
                    >
                        <option value="">E.g., moody, cinematic, lonely, melancholic...</option>
                        {atmospheres.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Section 3: Camera Gear */}
            <div className="section">
                <div className="section-header">
                    <span className="section-icon">📷</span>
                    <h2 className="section-title">03. CAMERA GEAR</h2>
                </div>

                <div className="form-grid">
                    <div className="form-group">
                        <label className="form-label">CAMERA BODY</label>
                        <select
                            className="form-select"
                            value={data.cameraBody}
                            onChange={e => onChange('cameraBody', e.target.value)}
                        >
                            <option value="">Select style...</option>
                            {cameraBodies.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">FOCAL LENGTH</label>
                        <select
                            className="form-select"
                            value={data.focalLength}
                            onChange={e => onChange('focalLength', e.target.value)}
                        >
                            <option value="">Select style...</option>
                            {focalLengths.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-grid">
                    <div className="form-group">
                        <label className="form-label">LENS TYPE</label>
                        <select
                            className="form-select"
                            value={data.lensType}
                            onChange={e => onChange('lensType', e.target.value)}
                        >
                            <option value="">Select style...</option>
                            {lensTypes.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">FILM STOCK</label>
                        <select
                            className="form-select"
                            value={data.filmStock}
                            onChange={e => onChange('filmStock', e.target.value)}
                        >
                            <option value="">Select style...</option>
                            {filmStocks.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Section 4: Style & Aesthetics */}
            <div className="section">
                <div className="section-header">
                    <span className="section-icon">🎨</span>
                    <h2 className="section-title">04. STYLE & AESTHETICS</h2>
                </div>

                <div className="form-group">
                    <label className="form-label">PHOTOGRAPHY GENRE</label>
                    <select
                        className="form-select"
                        value={data.photographyGenre}
                        onChange={e => onChange('photographyGenre', e.target.value)}
                    >
                        <option value="">Choose a genre...</option>
                        {photographyGenres.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">PHOTOGRAPHER STYLE</label>
                    <select
                        className="form-select"
                        value={data.photographerStyle}
                        onChange={e => onChange('photographerStyle', e.target.value)}
                    >
                        <option value="">Select style...</option>
                        {photographerStyles.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">MOVIE LOOK / AESTHETIC</label>
                    <select
                        className="form-select"
                        value={data.movieLook}
                        onChange={e => onChange('movieLook', e.target.value)}
                    >
                        <option value="">Choose a movie style...</option>
                        {movieLooks.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">FILTER / EFFECT</label>
                    <select
                        className="form-select"
                        value={data.filterEffect}
                        onChange={e => onChange('filterEffect', e.target.value)}
                    >
                        <option value="">Select effect...</option>
                        {filterEffects.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>

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
        </div>
    );
}

export default PromptBuilder;
