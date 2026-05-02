import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function ThanksSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center px-6 relative">
      <div className="text-center relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="inline-flex items-center justify-center mb-8"
        >
          <div className="relative w-28 h-28 rounded-full gradient-primary flex items-center justify-center glow">
            <Heart className="w-14 h-14 text-primary-foreground animate-heartbeat" fill="currentColor" />
            <div className="absolute inset-0 rounded-full pulse-ring gradient-primary" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-8xl font-extrabold mb-6 text-shadow-glow"
        >
          <span className="gradient-text">شكراً لكم</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          نرحب بأسئلتكم واستفساراتكم
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="glass rounded-full inline-flex px-6 py-3 text-sm font-semibold"
        >
          منصة الرعاية الطبية الافتراضية • 2025 — 2026
        </motion.div>
      </div>
    </div>
  );
}
