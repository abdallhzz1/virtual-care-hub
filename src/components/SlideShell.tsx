import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideShellProps {
  children: ReactNode;
  eyebrow?: string;
  title?: string;
  number?: number;
  centered?: boolean;
}

const EASE = [0.4, 0, 0.2, 1] as const;

export function SlideShell({ children, eyebrow, title, number, centered = false }: SlideShellProps) {
  return (
    <div className="w-full h-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-2 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col h-full justify-center">
        {(eyebrow || title) && (
          <div className="mb-3 mt-1">
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
                className={`flex items-center gap-3 mb-2 w-full ${centered ? "justify-center" : "justify-end"}`}
              >
                {number !== undefined && (
                  <span className="flex items-center justify-center w-9 h-9 rounded-full gradient-primary text-primary-foreground font-bold text-base glow">
                    {number}
                  </span>
                )}
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {eyebrow}
                </span>
              </motion.div>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.85, delay: 0.3, ease: EASE }}
                className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${centered ? "text-center" : "text-right"}`}
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
          className="w-full mt-4"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
