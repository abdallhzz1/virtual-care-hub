import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { SlideShell } from "../SlideShell";

interface Props {
  onStart: () => void;
}

export function SystemSlide({ onStart }: Props) {
  return (
    <SlideShell>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-relaxed mb-10 max-w-5xl mx-auto text-shadow-glow"
          style={{ lineHeight: '1.5' }}
        >
          <span className="gradient-text">استعراض تفاعلي</span> لآلية عمل النظام من البداية إلى النهاية
        </motion.h2>

        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "backOut" }}
          whileHover={{ scale: 1.08, y: -6 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full gradient-primary text-primary-foreground font-bold text-xl shadow-2xl glow overflow-hidden border border-white/20"
        >
          <span className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          <Play className="w-7 h-7 relative" fill="currentColor" />
          <span className="relative">ابدأ العرض</span>
        </motion.button>
      </div>
    </SlideShell>
  );
}
