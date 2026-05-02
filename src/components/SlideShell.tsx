import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideShellProps {
  children: ReactNode;
  eyebrow?: string;
  title?: string;
  number?: number;
}

export function SlideShell({ children, eyebrow, title, number }: SlideShellProps) {
  return (
    <div className="w-full h-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-12 overflow-y-auto">
      <div className="w-full max-w-7xl mx-auto">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10"
          >
            {eyebrow && (
              <div className="flex items-center gap-3 mb-4">
                {number !== undefined && (
                  <span className="flex items-center justify-center w-10 h-10 rounded-full gradient-primary text-primary-foreground font-bold text-lg glow">
                    {number}
                  </span>
                )}
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  {eyebrow}
                </span>
              </div>
            )}
            {title && (
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                <span className="gradient-text">{title}</span>
              </h2>
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
