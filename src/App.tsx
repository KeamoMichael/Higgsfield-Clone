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
import { assemblePrompt } from './services/promptBuilder';

import { initializeGemini, isInitialized, generateImage } from './services/geminiService';
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
  const [error, setError] = useState<string | null>(null);
  const [referenceImages, setReferenceImages] = useState<ReferenceImage[]>([]);

  // NEW: Modal State
  const [activeTool, setActiveTool] = useState<string | null>(null);

  // Assemble prompt whenever data changes
  const assembledPrompt = useMemo(() => {
    return assemblePrompt(promptData);
  }, [promptData]);



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
    <div className="relative h-screen bg-[#050505] flex flex-col overflow-hidden text-white">
      {/* 1. Header (Floating) */}
      <Header
        isConnected={apiConnected}
        onConnectClick={() => setShowSettings(true)}
      />

      {/* 2. Main Canvas Area */}
      <main className="flex-1 flex flex-col w-full relative z-10 pt-20 pb-48 overflow-y-auto">
        <div className="w-full max-w-7xl mx-auto h-full flex items-center justify-center">
          <OutputPanel
            prompt={assembledPrompt}
            isGenerating={isGenerating}
            generatedImage={generatedImage}
            error={error}
            apiConnected={apiConnected}
            onUseAsReference={handleUseAsReference}
          />
        </div>
      </main>

      {/* 3. Command Bar */}
      <CommandBar
        prompt={promptData.subjectAction}
        onPromptChange={onPromptChange}
        onGenerate={handleGenerate}
        isGenerating={isGenerating}
        activeTool={activeTool}
        onToggleTool={handleToggleTool}
        resolution={resolution}
        onResolutionChange={setResolution}
        aspectRatio={aspectRatio}
        onAspectRatioChange={setAspectRatio}
      />

      {/* 4. Modals */}
      <InputModal
        isOpen={activeTool === 'subject'}
        onClose={() => setActiveTool(null)}
        title="Subject & Framing"
        icon={<FilmIcon />}
      >
        <SubjectForm
          data={promptData}
          onChange={setPromptData}
        />
      </InputModal>

      <InputModal
        isOpen={activeTool === 'lighting'}
        onClose={() => setActiveTool(null)}
        title="Lighting & Atmosphere"
        icon={<LightIcon />}
      >
        <PromptBuilder
          data={promptData}
          onChange={setPromptData}
          view="lighting"
          activePicker={activePicker}
          onOpenPicker={setActivePicker}
        />
      </InputModal>

      <InputModal
        isOpen={activeTool === 'camera'}
        onClose={() => setActiveTool(null)}
        title="Camera Gear"
        icon={<CameraIcon />}
      >
        <PromptBuilder
          data={promptData}
          onChange={setPromptData}
          view="camera"
          activePicker={activePicker}
          onOpenPicker={setActivePicker}
        />
      </InputModal>

      <InputModal
        isOpen={activeTool === 'style'}
        onClose={() => setActiveTool(null)}
        title="Style & Aesthetics"
        icon={<PaletteIcon />}
      >
        <PromptBuilder
          data={promptData}
          onChange={setPromptData}
          view="style"
          activePicker={activePicker}
          onOpenPicker={setActivePicker}
        />
      </InputModal>

      {/* Elements Tool (Reference Image) - Special Modal */}
      <InputModal
        isOpen={activeTool === 'elements'}
        onClose={() => setActiveTool(null)}
        title="Elements & References"
        icon={<LayersIcon />}
      >
        <ElementsTool
          referenceImages={referenceImages}
          onAddImage={addReferenceImage}
          onRemoveImage={removeReferenceImage}
        />
      </InputModal>

      {/* Image Picker Global Modal */}
      {activePicker && (
        <ImagePicker
          config={pickerConfigs[activePicker]}
          onSelect={(val) => {
            setPromptData(prev => ({ ...prev, [activePicker]: val }));
            setActivePicker(null);
          }}
          onClose={() => setActivePicker(null)}
          selectedValue={promptData[activePicker] as string}
        />
      )}

      {/* Settings Modal */}
      {showSettings && (
        <SettingsModal
          onClose={() => setShowSettings(false)}
          onSave={handleSaveApiKey}
          currentKey={hasApiKey() ? '••••••••••••••••••••' : ''}
        />
      )}

      {/* Decorative Ambient Lighting */}
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#c7ff00]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none z-0" />
    </div>
  );
}

export default App;
