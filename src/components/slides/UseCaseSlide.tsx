import { motion } from "framer-motion";
import { GitBranch, Upload } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { ZoomableImage } from "../ui/ZoomableImage";
import usecaseImage from "../../assets/usecase.png";

export function UseCaseSlide() {
  return (
    <SlideShell number={undefined} eyebrow={undefined} title={undefined}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full max-w-7xl mx-auto h-full py-4 px-4">
        
        {/* Left Side: Title & Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col gap-8 text-right order-2 lg:order-1"
        >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight flex items-baseline gap-3 flex-wrap justify-start" dir="rtl">
              <span className="gradient-text">مخطط حالات الاستخدام</span>
              <span className="text-lg md:text-xl text-primary/60 font-bold">(Use Case Diagram)</span>
            </h2>

          <div className="glass-strong p-8 rounded-[2.5rem] border border-white/10 space-y-5 relative overflow-hidden" dir="rtl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16" />
            <div className="flex items-center gap-4 text-primary relative z-10">
              <GitBranch className="w-6 h-6" />
              <span className="font-bold text-xl uppercase tracking-wider">الخارطة الوظيفية للنظام</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg relative z-10">
              يوضح هذا المخطط التفاعلات الأساسية بين المستخدمين (المريض، الطبيب، المختبر) والنظام، مع تحديد الصلاحيات والوظائف الرئيسية لكل طرف بكل دقة.
            </p>
            
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 order-1 lg:order-2"
        >
          <div className="relative group glass-strong rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl p-2 bg-white/5">
            <ZoomableImage 
              src={usecaseImage} 
              alt="Use Case Diagram" 
              className="w-full h-auto object-contain rounded-[2rem] relative z-10 drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
