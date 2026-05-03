import { motion } from "framer-motion";
import { Activity, Stethoscope } from "lucide-react";
import teleLogo from "../../assets/telemedicine-logo.png";

const team = [
  "عبدالله زهور",
  "احمد جمعه",
  "شيرين طرمان",
  "هديل جرادات",
];

export function CoverSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center px-6 md:px-16 py-4 md:py-8 relative overflow-hidden">
      <div className="relative w-full max-w-6xl mx-auto flex flex-col justify-center h-full pt-4 md:pt-0">
        {/* Top Section: Text */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8 mb-12 lg:mb-16">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-right md:pr-12 lg:pr-16 md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="inline-block px-5 py-2 rounded-full glass text-xs md:text-sm font-bold text-primary mb-6 tracking-widest border border-white/10"
            >
              مشروع تخرج • 2025 — 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-8xl font-extrabold leading-[1.1] mb-6 text-shadow-glow"
            >
              <span className="gradient-text">منصة الرعاية الطبية</span>
              <br />
              <span className="text-foreground mt-2 inline-block">الافتراضية</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed"
            >
              نظام رقمي متكامل يربط بين الطبيب والمريض والمختبر في تجربة رعاية صحية افتراضية سلسة وآمنة.
            </motion.p>
          </div>

          {/* Large Floating Logo (Absolute on desktop to exactly intersect ECG line) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "backOut" }}
            className="md:absolute md:top-[55%] md:-translate-y-1/2 md:-left-12 lg:-left-20 flex-shrink-0 z-0 w-full md:w-auto flex justify-center mb-8 md:mb-0 pointer-events-none"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 flex items-center justify-center">


              <div className="absolute inset-0 rounded-full glass-strong border border-white/20 shadow-2xl flex items-center justify-center glow overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero opacity-10 blur-xl" />
                <motion.img 
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  src={teleLogo} 
                  alt="Telemedicine Logo" 
                  className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain drop-shadow-2xl relative z-10" 
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Team & Footer */}
        <div className="text-center mt-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto"
          >
            {team.map((name, i) => (
              <motion.div
                key={name}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-strong border border-white/10 rounded-2xl px-4 py-5 text-center shadow-soft"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="w-12 h-12 rounded-full gradient-primary mx-auto mb-3 flex items-center justify-center shadow-glow">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm md:text-base font-bold text-foreground">{name}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs md:text-sm text-muted-foreground"
          >
            <div className="glass rounded-full px-6 py-2.5 flex items-center gap-2 border border-white/10">
              <Activity className="w-4 h-4 text-primary" />
              <span className="font-bold text-foreground/80">المشرف: د. نبيل حساسنة</span>
            </div>
            <div className="glass rounded-full px-6 py-2.5 border border-white/10">
              <span className="font-bold text-foreground/80">جامعة الخليل — كلية تكنولوجيا المعلومات</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
