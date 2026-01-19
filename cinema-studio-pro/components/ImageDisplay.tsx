import React from 'react';

interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  modelName: string;
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, isLoading }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-6 h-full">
      
      {/* Featured Image Frame */}
      <div className="relative aspect-video w-full max-w-4xl bg-[#121212] rounded-[2.5rem] border border-white/5 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)] group">
        {isLoading && (
          <div className="absolute inset-0 z-20 bg-black/60 backdrop-blur-xl flex flex-col items-center justify-center">
            <div className="w-10 h-10 border-2 border-[#c7ff00]/20 border-t-[#c7ff00] rounded-full animate-spin mb-4"></div>
            <div className="text-[10px] font-black tracking-[0.3em] text-[#c7ff00] uppercase">Developing Frame</div>
            <div className="absolute top-0 left-0 w-full h-0.5 bg-white/5">
                <div className="h-full bg-[#c7ff00] animate-progress" style={{width: '65%'}}></div>
            </div>
          </div>
        )}

        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt="Cinema Result" 
            className="w-full h-full object-cover animate-image-reveal transition-transform duration-1000 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black to-[#0a0a0a]">
             <div className="relative flex flex-col items-center gap-6 opacity-20">
                <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1"><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7m4 0h5m-2.5-2.5v5M9 11l3 3L22 4"/></svg>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};