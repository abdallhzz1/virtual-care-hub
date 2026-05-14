import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SlideShell } from "../SlideShell";

export function IntroSlide() {
  return (
    <SlideShell>
      <div className="flex flex-col items-center justify-center pt-16 gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-right w-full gradient-text"
        >
          مقدمة المشروع
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="relative glass-strong rounded-[2.5rem] p-8 md:p-10 lg:p-12 border border-white/10 w-full max-w-7xl mx-auto overflow-hidden group shadow-2xl"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
          
          <div className="absolute top-8 right-10 opacity-10 text-primary pointer-events-none">
            <Quote className="w-32 h-32 rotate-180" />
          </div>

          <div className="relative z-10 text-xl md:text-2xl lg:text-3xl leading-relaxed md:leading-[1.8] text-foreground font-medium text-justify">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
              className="mb-5"
            >
              في ظلِّ التطوّرات التكنولوجية المتسارعة التي يشهدها العالم، وخصوصًا في فلسطين، وبما تمرّ به البلاد من لأواء وبلاء وغلاء، نسألُ اللهَ العليَّ القدير أن يُفرِّج عنا البلاء واللأواء والغلاء.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2 }}
            >
              ومن هذا المنطلق جاءت فكرة مشروع التخرّج، المتمثّلة في تصميم وتطوير <span className="text-primary font-bold">منصّة للرعاية الطبية الافتراضية</span>، تهدف إلى تحسين مستوى الخدمات الصحية من خلال إتاحة الاستشارات الطبية عن بُعد، وتعزيز كفاءة الإتصال والتواصل بين مقدّمي الرعاية الصحية والمرضى، بما يلبّي احتياجات المجتمع ويواكب متطلّبات التحوّل الرقمي.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
