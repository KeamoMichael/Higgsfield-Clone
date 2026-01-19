import { useState, useEffect, useCallback, useMemo } from 'react';
import './index.css';
import Header from './components/Header';
import SettingsModal from './components/SettingsModal';
import PromptBuilder from './components/PromptBuilder';
import OutputPanel from './components/OutputPanel';
import ElementsTool from './components/ElementsTool';
import CommandBar from './components/CommandBar';
import InputModal from './components/InputModal';
import SubjectForm from './components/SubjectForm';
import type { PromptData } from './services/promptBuilder';
import { assemblePrompt, generateSceneJSON } from './services/promptBuilder';
import type { GenerationResult } from './services/geminiService';
import { initializeGemini, isInitialized, generateImage, generateSceneVariations } from './services/geminiService';
import { loadApiKey, saveApiKey, hasApiKey } from './services/storage';

const initialPromptData: PromptData = {
  subjectAction: '',
  shotType: '',
  viewingDirection: '',
  environment: '',
  lightingSource: '',
  atmosphere: '',
  cameraBody: '',
  focalLength: '',
  lensType: '',
  filmStock: '',
  photographyGenre: '',
  photographerStyle: '',
  movieLook: '',
  filterEffect: '',
  aspectRatio: '16:9',
};

export interface ReferenceImage {
  id: string;
  type: 'character' | 'outfit' | 'object' | 'scene';
  name: string;
  data: string; // base64
}

function App() {
  const [promptData, setPromptData] = useState<PromptData>(initialPromptData);
  const [showSettings, setShowSettings] = useState(false);
  const [apiConnected, setApiConnected] = useState(false);
  const [resolution, setResolution] = useState('1k');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [sceneVariations, setSceneVariations] = useState<GenerationResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [referenceImages, setReferenceImages] = useState<ReferenceImage[]>([]);

  // NEW: Modal State
  const [activeTool, setActiveTool] = useState<string | null>(null);

  // Assemble prompt whenever data changes
  const assembledPrompt = useMemo(() => {
    return assemblePrompt(promptData);
  }, [promptData]);

  // Scene JSON for export
  const sceneJSON = useMemo(() => {
    return generateSceneJSON(promptData, assembledPrompt);
  }, [promptData, assembledPrompt]);

  // Load API key on mount
  useEffect(() => {
    const savedKey = loadApiKey();
    if (savedKey) {
      initializeGemini(savedKey);
      setApiConnected(true);
    }
  }, []);

  const handleSaveApiKey = useCallback((key: string) => {
    saveApiKey(key);
    initializeGemini(key);
    setApiConnected(true);
    setShowSettings(false);
  }, []);

  const updatePromptData = useCallback((field: keyof PromptData, value: string) => {
    setPromptData(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleGenerate = useCallback(async () => {
    if (!isInitialized()) {
      setError('Please connect your API key first.');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setGeneratedImage(null);

    const refImageData = referenceImages.map(img => img.data);

    const result = await generateImage({
      prompt: assembledPrompt,
      referenceImages: refImageData.length > 0 ? refImageData : undefined,
    });

    if (result.success && result.imageUrl) {
      setGeneratedImage(result.imageUrl);
    } else {
      setError(result.error || 'Failed to generate image');
    }

    setIsGenerating(false);
  }, [assembledPrompt, referenceImages]);

  const addReferenceImage = useCallback((image: ReferenceImage) => {
    setReferenceImages(prev => [...prev, image]);
  }, []);

  const removeReferenceImage = useCallback((id: string) => {
    setReferenceImages(prev => prev.filter(img => img.id !== id));
  }, []);

  const handleUseAsReference = useCallback((imageUrl: string) => {
    const newRef: ReferenceImage = {
      id: Date.now().toString(),
      type: 'scene',
      name: 'Generated Image',
      data: imageUrl,
    };
    addReferenceImage(newRef);
  }, [addReferenceImage]);

  return (
    <div className="app-layout">
      {/* 1. Header (Floating) */}
      <Header
        isConnected={apiConnected}
        onConnectClick={() => setShowSettings(true)}
      />

      {/* 2. Main Canvas Area */}
      <main className="canvas-area">
        <div style={{ width: '100%', maxWidth: '1200px', height: '100%' }}>
          <OutputPanel
            prompt={assembledPrompt}
            isGenerating={isGenerating}
            generatedImage={generatedImage}
            sceneVariations={sceneVariations}
            error={error}
            apiConnected={apiConnected}
            onUseAsReference={handleUseAsReference}
          />
        </div>
      </main>

      {/* 3. Command Bar (Replaces Floating Dock) */}
      <CommandBar
        prompt={promptData.subjectAction}
        onPromptChange={(val) => updatePromptData('subjectAction', val)}
        onGenerate={handleGenerate}
        isGenerating={isGenerating}
        activeTool={activeTool}
        onToggleTool={(tool) => setActiveTool(activeTool === tool ? null : tool)}
        resolution={resolution}
        onResolutionChange={setResolution}
      />

      {/* 4. Tool Modals */}
      <InputModal
        isOpen={activeTool === 'subject'}
        onClose={() => setActiveTool(null)}
        title="Subject & Framing"
        icon="🎬"
      >
        <SubjectForm data={promptData} onChange={updatePromptData} />
      </InputModal>

      <InputModal
        isOpen={activeTool === 'lighting'}
        onClose={() => setActiveTool(null)}
        title="Lighting & Mood"
        icon="☀️"
      >
        <PromptBuilder data={promptData} onChange={updatePromptData} view="lighting" />
      </InputModal>

      <InputModal
        isOpen={activeTool === 'camera'}
        onClose={() => setActiveTool(null)}
        title="Camera Gear"
        icon="📷"
      >
        <PromptBuilder data={promptData} onChange={updatePromptData} view="camera" />
      </InputModal>

      <InputModal
        isOpen={activeTool === 'style'}
        onClose={() => setActiveTool(null)}
        title="Style & Aesthetics"
        icon="🎨"
      >
        <PromptBuilder data={promptData} onChange={updatePromptData} view="style" />
      </InputModal>

      <InputModal
        isOpen={activeTool === 'elements'}
        onClose={() => setActiveTool(null)}
        title="Reference Elements"
        icon="🖼️"
      >
        <ElementsTool
          referenceImages={referenceImages}
          onAdd={addReferenceImage}
          onRemove={removeReferenceImage}
        />
      </InputModal>

      {/* Settings Modal */}
      {showSettings && (
        <SettingsModal
          onClose={() => setShowSettings(false)}
          onSave={handleSaveApiKey}
          currentKey={hasApiKey() ? '••••••••••••••••••••' : ''}
        />
      )}
    </div>
  );
}

export default App;
