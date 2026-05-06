import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { X, ZoomIn, ZoomOut, Maximize2, Move } from "lucide-react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ZoomableImage({ src, alt, className }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Smooth springs for motion
  const springConfig = { damping: 30, stiffness: 300 };
  const springScale = useSpring(scale, springConfig);
  const springX = useSpring(offset.x, springConfig);
  const springY = useSpring(offset.y, springConfig);

  useEffect(() => {
    springScale.set(scale);
  }, [scale, springScale]);

  useEffect(() => {
    springX.set(offset.x);
    springY.set(offset.y);
  }, [offset, springX, springY]);

  const handleOpen = () => {
    setIsOpen(true);
    setScale(1);
    setOffset({ x: 0, y: 0 });
    
    // Trigger browser fullscreen
    const docEl = document.documentElement;
    if (docEl.requestFullscreen) {
      docEl.requestFullscreen().catch(() => {});
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setScale(1);
    setOffset({ x: 0, y: 0 });
    
    // Exit browser fullscreen if active
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    
    const handleFsChange = () => {
      if (!document.fullscreenElement && isOpen) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleFsChange);
    };
  }, [isOpen]);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (!isOpen) return;
    e.preventDefault();
    
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    const newScale = Math.min(Math.max(scale + delta, 1), 5);
    
    if (newScale === 1) {
      setOffset({ x: 0, y: 0 });
    }
    
    setScale(newScale);
  }, [isOpen, scale]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    
    setOffset(prev => ({
      x: prev.x + e.movementX,
      y: prev.y + e.movementY
    }));
  }, [isDragging, scale]);

  // Constrain offset when scaling down or closing
  useEffect(() => {
    if (scale === 1) {
      setOffset({ x: 0, y: 0 });
    }
  }, [scale]);

  return (
    <>
      <div className="relative group cursor-zoom-in overflow-hidden rounded-xl">
        <img
          src={src}
          alt={alt}
          className={className}
          onClick={handleOpen}
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <Maximize2 className="text-white w-8 h-8 drop-shadow-lg" />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
            onWheel={handleWheel}
          >
            <div className="absolute top-6 right-6 flex items-center gap-3 z-[110]">
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
                <button
                  onClick={() => setScale(s => Math.max(s - 0.5, 1))}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <span className="text-white text-xs font-mono w-12 text-center">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  onClick={() => setScale(s => Math.min(s + 0.5, 5))}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={handleClose}
                className="p-3 bg-white/10 hover:bg-red-500/20 hover:text-red-500 text-white rounded-full transition-all border border-white/20"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs font-medium flex items-center gap-4 bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm border border-white/5">
              <span className="flex items-center gap-1.5"><Move className="w-3.5 h-3.5" /> Drag to pan</span>
              <span className="flex items-center gap-1.5"><ZoomIn className="w-3.5 h-3.5" /> Wheel to zoom</span>
            </div>

            <motion.div
              ref={containerRef}
              className="w-full h-full flex items-center justify-center touch-none"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
            >
              <motion.img
                ref={imageRef}
                src={src}
                alt={alt}
                style={{
                  scale: springScale,
                  x: springX,
                  y: springY,
                  cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
                }}
                className="max-w-[90%] max-h-[90%] object-contain select-none shadow-2xl"
                draggable={false}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
