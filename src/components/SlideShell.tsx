import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideShellProps {
  children: ReactNode;
  eyebrow?: string;
  title?: string;
  number?: number;
}

const EASE = [0.4, 0, 0.2, 1] as const;

export function SlideShell({ children, eyebrow, title, number }: SlideShellProps) {
  return (
    <div className="w-full h-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-6 md:py-8 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col h-full justify-center">
        {(eyebrow || title) && (
          <div className="mb-10">
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
                className="flex items-center gap-3 mb-4"
              >
                {number !== undefined && (
                  <span className="flex items-center justify-center w-10 h-10 rounded-full gradient-primary text-primary-foreground font-bold text-lg glow">
                    {number}
                  </span>
                )}
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  {eyebrow}
                </span>
              </motion.div>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.85, delay: 0.3, ease: EASE }}
                className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
              >
                <span className="gradient-text">{title}</span>
              </motion.h2>
            )}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
