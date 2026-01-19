import type { PromptData } from '../services/promptBuilder';
import { shotTypes, viewingDirections } from '../data/options';

interface SubjectFormProps {
    data: PromptData;
    onChange: (field: keyof PromptData, value: string) => void;
}

export function SubjectForm({ data, onChange }: SubjectFormProps) {
    return (
        <div className="prompt-form-container">
            <div className="form-group">
                <label className="form-label">SUBJECT & ACTION</label>
                <textarea
                    className="form-textarea"
                    placeholder="E.g., A woman in a trench coat checking her phone..."
                    value={data.subjectAction}
                    onChange={e => onChange('subjectAction', e.target.value)}
                    autoFocus
                />
            </div>

            <div className="form-grid">
                <div className="form-group">
                    <label className="form-label">SHOT TYPE</label>
                    <select
                        className="form-select"
                        value={data.shotType}
                        onChange={e => onChange('shotType', e.target.value)}
                    >
                        <option value="">Select...</option>
                        {shotTypes.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">VIEW DIRECTION</label>
                    <select
                        className="form-select"
                        value={data.viewingDirection}
                        onChange={e => onChange('viewingDirection', e.target.value)}
                    >
                        <option value="">Select...</option>
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
    );
}
export default SubjectForm;
