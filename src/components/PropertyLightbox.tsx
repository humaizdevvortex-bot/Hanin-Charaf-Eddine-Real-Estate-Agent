import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { url: string; caption?: string; tag?: string }[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const PropertyLightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
    },
    [isOpen, onClose, onNavigate, currentIndex, images.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 transition-all"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Top Bar with Caption & Close */}
      <div
        className="absolute top-0 left-0 right-0 p-5 flex items-center justify-between text-white z-10 bg-gradient-to-b from-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          {currentImage.tag && (
            <span className="px-2.5 py-1 text-xs uppercase tracking-wider font-semibold rounded bg-[#C8A66B] text-[#111827]">
              {currentImage.tag}
            </span>
          )}
          <span className="text-sm font-medium text-slate-200">
            {currentIndex + 1} of {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-6xl max-h-[82vh] w-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.url}
          alt={currentImage.caption || 'Property image'}
          className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl"
        />

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-2 sm:-left-12 p-3 rounded-full bg-black/60 hover:bg-[#C8A66B] hover:text-[#111827] text-white transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={() => onNavigate((currentIndex + 1) % images.length)}
            className="absolute right-2 sm:-right-12 p-3 rounded-full bg-black/60 hover:bg-[#C8A66B] hover:text-[#111827] text-white transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Caption at bottom */}
      {currentImage.caption && (
        <div
          className="absolute bottom-4 left-0 right-0 text-center px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="inline-block px-5 py-2.5 rounded-lg bg-[#111827]/90 border border-[#C8A66B]/30 text-slate-200 text-xs sm:text-sm font-light shadow-xl">
            {currentImage.caption}
          </div>
        </div>
      )}
    </div>
  );
};
