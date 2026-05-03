import { motion } from "framer-motion";
import teleLogo from "../../assets/telemedicine-logo.png";
import uniLogo from "../../assets/hebron-university-logo.png";

const teamMembers = [
  "عبدالله زهور",
  "احمد جمعه",
  "شيرين طرمان",
  "هديل جرادات",
];

export function CoverSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-16 py-10 relative overflow-hidden">

      {/* Top Bar: Both Logos */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="w-full max-w-6xl flex items-center justify-between mb-6 z-20"
      >
        {/* System Logo */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full glass-strong border-2 border-primary/40 flex items-center justify-center shadow-2xl glow p-3">
            <img src={teleLogo} alt="Telemedicine Logo" className="w-full h-full object-contain drop-shadow-xl" />
          </div>
          <span className="text-xs md:text-sm font-bold text-primary tracking-widest uppercase">Telemedicine</span>
        </div>

        {/* Year Badge (center) */}
        <div className="glass px-5 py-2 rounded-2xl border border-white/10 shadow-lg">
          <p className="text-primary font-bold text-sm md:text-base tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            مشروع تخرج 2025 – 2026
          </p>
        </div>

        {/* University Logo */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full glass-strong border-2 border-primary/40 flex items-center justify-center shadow-2xl p-3 bg-white/5">
            <img src={uniLogo} alt="Hebron University Logo" className="w-full h-full object-contain drop-shadow-md" />
          </div>
          <span className="text-xs md:text-sm font-bold text-primary tracking-widest uppercase">Hebron University</span>
        </div>
      </motion.div>

      {/* Main Content Area: Centered */}
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-5xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black leading-[1.1] tracking-tight mb-6">
            <span className="gradient-text drop-shadow-2xl block whitespace-nowrap">منصة الرعاية الطبية</span>
            <span className="text-foreground block whitespace-nowrap">الافتراضية</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent blur-xl opacity-50" />
          <p className="relative text-lg md:text-2xl lg:text-3xl text-muted-foreground/90 max-w-3xl leading-relaxed font-medium">
            نظام رقمي متكامل يربط الطبيب والمريض والمختبر في تجربة رعاية صحية ذكية وآمنة
          </p>
        </motion.div>
      </div>

      {/* Bottom Section: Supervisor then Team */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="w-full max-w-6xl mt-auto z-10 pt-4 flex flex-col items-center gap-4"
      >
        {/* Supervisor - no card, just text, centered */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-lg md:text-2xl font-bold text-primary uppercase tracking-[0.2em]">إشراف :</span>
          <span className="text-2xl md:text-3xl font-extrabold gradient-text">د. نبيل حساسنة</span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10" />

        {/* Team - dots, 2x2, larger text */}
        <div className="w-full flex flex-col items-center gap-3">
          <p className="text-sm md:text-base font-black text-primary uppercase tracking-[0.2em]">فريق المشروع</p>
          <div className="grid grid-cols-2 gap-x-16 gap-y-3">
            {teamMembers.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -12 : 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.1 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="w-3 h-3 rounded-full bg-primary flex-shrink-0 shadow-glow" />
                <span className="text-lg md:text-xl font-bold text-foreground">{name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
