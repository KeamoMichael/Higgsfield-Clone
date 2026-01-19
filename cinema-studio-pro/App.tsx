import React, { useState } from 'react';
import { Header } from './components/Header';
import { UnifiedChatBar } from './components/UnifiedChatBar';
import { ImageDisplay } from './components/ImageDisplay';
import { Resolution, AspectRatio } from './types';
import { generateImage } from './services/geminiService';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState('An explosion of golden fire on a dark theater stage, high contrast cinematic lighting, 8k, bokeh background.');
  const [resolution, setResolution] = useState<Resolution>(Resolution._2K);
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>(AspectRatio.LANDSCAPE);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (overridePrompt?: string) => {
    setIsGenerating(true);
    setError(null);
    try {
      const finalPrompt = overridePrompt || prompt;
      const url = await generateImage(finalPrompt, resolution, aspectRatio);
      setImageUrl(url);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateScene = async () => {
    const scenePrompt = `${prompt} -- cinematic shot, detailed environment, multiple angles context`;
    await handleGenerate(scenePrompt);
  };

  return (
    <div className="relative h-screen bg-[#050505] flex flex-col overflow-hidden text-white">
      <Header />

      <main className="flex-1 flex flex-col w-full relative z-10 pt-20 pb-48 overflow-y-auto">
        {/* Error Banner */}
        {error && (
            <div className="fixed top-24 left-1/2 -translate-x-1/2 w-full max-w-xl px-4 z-[100] animate-fade-in-down">
                <div className="bg-[#1a1a1a] border border-red-500/30 text-red-400 px-4 py-3 rounded-2xl flex items-center justify-between shadow-2xl">
                    <span className="text-sm font-bold tracking-tight">{error}</span>
                    <button onClick={() => setError(null)} className="text-gray-500 hover:text-white">✕</button>
                </div>
            </div>
        )}

        <ImageDisplay 
            imageUrl={imageUrl} 
            isLoading={isGenerating}
            modelName="gemini-3-pro-image-preview"
        />
      </main>

      <UnifiedChatBar 
        prompt={prompt}
        setPrompt={setPrompt}
        resolution={resolution}
        setResolution={setResolution}
        aspectRatio={aspectRatio}
        setAspectRatio={setAspectRatio}
        isGenerating={isGenerating}
        onGenerate={() => handleGenerate()}
        onGenerateScene={handleGenerateScene}
      />

      {/* Decorative ambient lighting */}
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#c7ff00]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none z-0" />
    </div>
  );
};

export default App;