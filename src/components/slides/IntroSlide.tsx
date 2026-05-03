import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SlideShell } from "../SlideShell";

export function IntroSlide() {
  return (
    <SlideShell number={1} eyebrow="Introduction" title="مقدمة المشروع">
      <div className="flex items-center justify-center min-h-[50vh]">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative glass-strong rounded-[3rem] p-10 md:p-16 border border-white/10 max-w-5xl mx-auto overflow-hidden group shadow-2xl"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
          
          <div className="absolute top-8 right-10 opacity-10 text-primary pointer-events-none">
            <Quote className="w-32 h-32 rotate-180" />
          </div>

          <div className="relative z-10 text-xl md:text-2xl leading-loose md:leading-[2.2] text-foreground font-medium text-justify">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mb-8"
            >
              في ظلّ التطوّر التكنولوجي المتسارع على المستوى العالمي، والتحدّيات التي يواجهها القطاع الصحي في فلسطين، برزت الحاجة إلى تبنّي حلول رقمية مبتكرة تسهم في تحسين جودة الخدمات الصحية وتعزيز كفاءتها.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              وانطلاقًا من ذلك، يهدف هذا المشروع إلى تصميم وتطوير <span className="text-primary font-bold">منصّة متكاملة للرعاية الطبية الافتراضية</span>، تُمكّن المرضى من الحصول على الاستشارات الطبية عن بُعد، وتُسهم في تعزيز فعالية التواصل بين مقدّمي الرعاية الصحية والمرضى. كما تسعى هذه المنصّة إلى تحسين إمكانية الوصول إلى الخدمات الصحية، ورفع مستوى كفاءتها، بما يتماشى مع متطلّبات التحوّل الرقمي في القطاع الصحي.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
