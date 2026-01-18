import { useState, useEffect, useCallback, useMemo } from 'react';
import './index.css';
import Header from './components/Header';
import SettingsModal from './components/SettingsModal';
import PromptBuilder from './components/PromptBuilder';
import OutputPanel from './components/OutputPanel';
import ElementsTool from './components/ElementsTool';
import { PromptData, assemblePrompt, generateSceneJSON } from './services/promptBuilder';
import { initializeGemini, isInitialized, generateImage, generateSceneVariations, GenerationResult } from './services/geminiService';
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

  const handleGenerateScene = useCallback(async () => {
    if (!isInitialized()) {
      setError('Please connect your API key first.');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setSceneVariations([]);

    const refImageData = referenceImages.map(img => img.data);

    const results = await generateSceneVariations(
      assembledPrompt,
      refImageData.length > 0 ? refImageData : undefined
    );

    setSceneVariations(results);
    setIsGenerating(false);
  }, [assembledPrompt, referenceImages]);

  const handleCopyPrompt = useCallback(() => {
    navigator.clipboard.writeText(assembledPrompt);
  }, [assembledPrompt]);

  const handleCopySceneJSON = useCallback(() => {
    navigator.clipboard.writeText(JSON.stringify(sceneJSON, null, 2));
  }, [sceneJSON]);

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
      <Header
        isConnected={apiConnected}
        onConnectClick={() => setShowSettings(true)}
      />

      {/* Left Panel - Prompt Builder */}
      <div className="panel panel-left">
        <PromptBuilder
          data={promptData}
          onChange={updatePromptData}
        />
      </div>

      {/* Center Panel - Output */}
      <div className="panel panel-center">
        <OutputPanel
          prompt={assembledPrompt}
          resolution={resolution}
          onResolutionChange={setResolution}
          onGenerate={handleGenerate}
          onGenerateScene={handleGenerateScene}
          onCopyPrompt={handleCopyPrompt}
          onCopySceneJSON={handleCopySceneJSON}
          isGenerating={isGenerating}
          generatedImage={generatedImage}
          sceneVariations={sceneVariations}
          error={error}
          apiConnected={apiConnected}
          onUseAsReference={handleUseAsReference}
        />
      </div>

      {/* Right Panel - Elements Tool */}
      <div className="panel panel-right">
        <ElementsTool
          referenceImages={referenceImages}
          onAdd={addReferenceImage}
          onRemove={removeReferenceImage}
        />
      </div>

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
