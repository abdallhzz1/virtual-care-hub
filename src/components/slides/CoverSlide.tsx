import { motion } from "framer-motion";
import { Heart, Activity, Stethoscope } from "lucide-react";

const team = [
  "عبدالله زهور",
  "احمد جمعه",
  "شيرين طرمان",
  "هديل جرادات",
];

export function CoverSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center px-6 md:px-16 py-12 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="relative w-[500px] h-[500px] opacity-20">
          <div className="absolute inset-0 rounded-full pulse-ring" style={{ background: "var(--color-primary)" }} />
        </div>
      </div>

      <div className="relative w-full max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="inline-flex items-center justify-center mb-8"
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center glow">
              <Heart className="w-12 h-12 text-primary-foreground animate-heartbeat" fill="currentColor" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold text-primary mb-6 tracking-widest"
        >
          مشروع تخرج • 2025 — 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] mb-6 text-shadow-glow"
        >
          <span className="gradient-text">منصة الرعاية الطبية</span>
          <br />
          <span className="text-foreground">الافتراضية</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          نظام رقمي متكامل يربط بين الطبيب والمريض والمختبر في تجربة رعاية صحية افتراضية سلسة
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
        >
          {team.map((name, i) => (
            <motion.div
              key={name}
              whileHover={{ y: -4, scale: 1.03 }}
              className="glass rounded-2xl px-4 py-4 text-center"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-full gradient-primary mx-auto mb-2 flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-primary-foreground" />
              </div>
              <p className="text-sm font-bold">{name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground"
        >
          <div className="glass rounded-full px-5 py-2 flex items-center gap-2">
            <Activity className="w-4 h-4 text-primary" />
            <span className="font-semibold">المشرف: د. نبيل حساسنة</span>
          </div>
          <div className="glass rounded-full px-5 py-2">
            <span className="font-semibold">جامعة الخليل — كلية تكنولوجيا المعلومات</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
