import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import teleLogo from "../../assets/telemedicine-logo.png";

// Team images
import ahmadImg from "../../assets/ahmad.png";
import abdallhImg from "../../assets/abdallh.png";
import hadeelImg from "../../assets/hadeel.png";
import sherenImg from "../../assets/sheren.png";
import nabilImg from "../../assets/nabil.png";

// Reusable profile card component
function ProfileCard({ name, role, img, delay }: { name: string; role: string; img: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center justify-center gap-4 w-48"
    >
      <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-primary to-cyan-400 relative glow shadow-2xl hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl" />
        <img src={img} alt={name} className="w-full h-full object-cover object-top rounded-full border-[3px] border-background z-10 relative bg-white/5" />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-bold text-foreground whitespace-nowrap drop-shadow-md">{name}</h3>
        <p className="text-xs font-mono tracking-widest text-primary/90 uppercase mt-1 drop-shadow-sm">{role}</p>
      </div>
    </motion.div>
  );
}

export function ThanksSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center px-4 md:px-12 relative">
      
      <div className="w-full h-full flex flex-row items-center justify-between relative max-w-7xl mx-auto">
        
        {/* Right Column (Boys) - Note: In RTL this is on the right */}
        <div className="flex flex-col gap-6 justify-center h-full z-20">
          <ProfileCard name="Ahmad Jum'a" role="DEVELOPER" img={ahmadImg} delay={2.2} />
          <ProfileCard name="Abdallh Zhoor" role="DEVELOPER" img={abdallhImg} delay={2.4} />
        </div>

        {/* Center Column: Existing content + Supervisor */}
        <div className="flex flex-col items-center justify-between flex-1 h-full py-8 z-10">
          
          <div className="flex-1 flex flex-col items-center justify-center text-center relative mt-10">
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "backOut" }}
              className="inline-flex items-center justify-center mb-6"
            >
              <div className="relative w-32 h-32 flex items-center justify-center drop-shadow-2xl hover:scale-105 transition-transform duration-500">
                <img src={teleLogo} alt="Telemedicine Logo" className="w-full h-full object-contain drop-shadow-xl" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-shadow-glow"
            >
              <span className="gradient-text">تم بحمد الله</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
              className="mb-6"
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-bold mb-2 flex items-center justify-center gap-3">
                <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                نرحب بأسئلتكم واستفساراتكم
                <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              </p>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 2.3, ease: "easeOut" }}
                className="w-40 h-1 mx-auto rounded-full gradient-primary glow mt-4 origin-center" 
              />
            </motion.div>

          </div>

          {/* Supervisor Card - Top Center */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
            className="mb-6 glass-strong rounded-full pr-6 pl-10 py-4 flex items-center gap-6 border border-white/10 shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="w-24 h-24 rounded-full p-0.5 bg-gradient-to-tr from-purple-500 to-primary relative flex-shrink-0">
              <img src={nabilImg} alt="Dr. Nabil Hasasneh" className="w-full h-full object-cover object-top rounded-full border-2 border-background z-10 relative" />
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 mb-1 justify-end">
                <span className="text-xs font-mono tracking-widest text-primary/80 uppercase">SUPERVISOR</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Dr. Nabil Hasasneh</h3>
              <p className="text-sm text-muted-foreground mt-0.5">Hebron University · Faculty of IT</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 3.0, ease: "easeOut" }}
            className="glass rounded-full inline-flex px-8 py-4 text-base font-semibold"
          >
            منصة الرعاية الطبية الافتراضية • 2025 — 2026
          </motion.div>

        </div>

        {/* Left Column (Girls) - Note: In RTL this is on the left */}
        <div className="flex flex-col gap-6 justify-center h-full z-20">
          <ProfileCard name="Hadeel Jaradat" role="DEVELOPER" img={hadeelImg} delay={2.6} />
          <ProfileCard name="Shereen Turman" role="DEVELOPER" img={sherenImg} delay={2.8} />
        </div>

      </div>
    </div>
  );
}
