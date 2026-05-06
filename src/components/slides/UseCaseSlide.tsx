import { motion } from "framer-motion";
import { GitBranch, Upload } from "lucide-react";
import { SlideShell } from "../SlideShell";
import usecaseImage from "../../assets/usecase.png";

export function UseCaseSlide() {
  return (
    <SlideShell number={6} eyebrow="Use Case Diagram" title="Use Case Diagram">
      <div className="flex items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-6xl glass-strong rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl"
          style={{ boxShadow: "0 0 60px -15px oklch(0.7 0.18 230 / 0.3)" }}
        >
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-[2.5rem]" />
          <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-[2.5rem]" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/30 rounded-bl-[2.5rem]" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-[2.5rem]" />

          {/* Medical HUD decorations */}
          <div className="absolute top-4 left-4 flex items-center gap-2 text-primary/40 text-xs font-mono">
            <GitBranch className="w-3.5 h-3.5" />
            <span>SYS::UML_DIAGRAM</span>
          </div>
          <div className="absolute top-4 right-4 flex items-center gap-2 text-primary/40 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>ACTIVE</span>
          </div>

          {/* Diagram container */}
          <div className="p-4 md:p-6 lg:p-8 min-h-[300px] md:min-h-[380px] lg:min-h-[420px] flex flex-col items-center justify-center">
            <div className="w-full h-full flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl group-hover:bg-primary/10 transition-colors duration-500" />
              <img 
                src={usecaseImage} 
                alt="Use Case Diagram" 
                className="max-w-full max-h-full object-contain rounded-xl relative z-10 drop-shadow-xl border border-white/5 group-hover:scale-[1.02] transition-transform duration-500 cursor-zoom-in"
                onClick={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (document.fullscreenElement) {
                    document.exitFullscreen();
                  } else {
                    target.requestFullscreen();
                  }
                }}
              />
            </div>
          </div>

          {/* Bottom status bar */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass rounded-full px-5 py-1.5 text-xs font-mono text-primary/50 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            UML::USE_CASE v2.0
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
