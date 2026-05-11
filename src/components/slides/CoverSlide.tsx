import { motion } from "framer-motion";
import teleLogo from "../../assets/telemedicine-logo.png";
import uniLogo from "../../assets/hebron-university-logo.png";

const teamMembers = [
  "عبدالله زهور",
  "شيرين طرمان",
  "احمد جمعه",
  "هديل جرادات",
];

export function CoverSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 md:px-10 py-4 relative overflow-hidden">

      {/* Top Bar: Both Logos */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="w-full flex items-start justify-between mb-2 z-20 px-2"
      >
        {/* University Logo - RIGHT (first in RTL) */}
        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full glass-strong border-2 border-primary/40 flex items-center justify-center shadow-2xl p-3 bg-white/5 glow"
          >
            <img src={uniLogo} alt="Hebron University Logo" className="w-full h-full object-contain drop-shadow-md" />
          </motion.div>
          <span className="text-sm md:text-base font-bold text-primary tracking-widest uppercase">Hebron University</span>
        </div>

        {/* Year Badge (center) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="glass px-8 md:px-10 py-3 md:py-4 rounded-2xl border border-white/10 shadow-lg mt-12 glow flex flex-col items-center gap-1"
        >
          <p className="text-primary font-bold text-base md:text-xl tracking-wide">
            كلية تكنولوجيا المعلومات
          </p>
          <p className="text-primary/80 font-semibold text-sm md:text-base tracking-wide">
            تخصص علم الحاسوب
          </p>
        </motion.div>

        {/* System Logo - LEFT (last in RTL) */}
        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full glass-strong border-2 border-primary/40 flex items-center justify-center shadow-2xl glow p-3"
          >
            <img src={teleLogo} alt="Telemedicine Logo" className="w-full h-full object-contain drop-shadow-xl" />
          </motion.div>
          <span className="text-sm md:text-base font-bold text-primary tracking-widest uppercase">Telemedicine</span>
        </div>
      </motion.div>

      {/* Main Content Area: Centered */}
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-6xl z-10 py-2">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-[75px] xl:text-[85px] font-black leading-[1.15] tracking-tight mb-3">
            <span className="gradient-text drop-shadow-2xl block whitespace-nowrap text-shadow-glow">منصة الرعاية الطبية الافتراضية</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent blur-xl opacity-50" />
          <p className="relative text-lg md:text-xl lg:text-2xl text-muted-foreground/90 max-w-4xl leading-relaxed font-medium">
            نظام رقمي متكامل يربط الطبيب والمريض والمختبر في تجربة رعاية صحية ذكية وآمنة
          </p>
        </motion.div>
      </div>

      {/* Bottom Section: Supervisor then Team */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="w-full max-w-6xl mt-auto mb-8 z-10 pt-1 flex flex-col items-center gap-2"
      >
        {/* Supervisor - no card, just text, centered */}
        <div className="flex flex-col items-center gap-1 -mt-4 mb-2">
          <span className="text-lg md:text-2xl font-bold text-primary uppercase tracking-[0.2em]">إشراف :</span>
          <span className="text-2xl md:text-3xl font-extrabold text-black">د. نبيل حساسنة</span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10" />

        {/* Team - dots, 2x2, larger text */}
        <div className="w-full flex flex-col items-center gap-2">
          <p className="text-sm md:text-base font-black text-primary uppercase tracking-[0.2em]">فريق العمل :</p>
          <div className="flex flex-row flex-wrap justify-center gap-x-6 md:gap-x-12 gap-y-2">
            {teamMembers.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.1 + i * 0.1 }}
                className="flex items-center gap-2 md:gap-3"
              >
                <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-primary flex-shrink-0 shadow-glow" />
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-foreground">{name}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-sm md:text-base font-bold text-primary/80 mt-2 tracking-wide">2025 – 2026</p>
        </div>
      </motion.div>
    </div>
  );
}
