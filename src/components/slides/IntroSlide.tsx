import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle, Sparkles, Layers } from "lucide-react";
import { SlideShell } from "../SlideShell";

const points = [
  { icon: TrendingUp, title: "تطور القطاع الصحي", text: "يشهد القطاع الصحي تطورًا كبيرًا نتيجة استخدام التكنولوجيا الحديثة" },
  { icon: AlertTriangle, title: "تحديات الأنظمة التقليدية", text: "صعوبة الوصول، ازدحام في العيادات، وضعف في متابعة الحالات المزمنة" },
  { icon: Layers, title: "الحاجة إلى نظام متكامل", text: "نظام رقمي شامل يجمع التواصل، السجل الطبي، والمتابعة في مكان واحد" },
  { icon: Sparkles, title: "الحل المقترح", text: "منصة طبية افتراضية لتحسين جودة الرعاية وتسهيل الوصول للخدمة" },
];

export function IntroSlide() {
  return (
    <SlideShell number={1} eyebrow="Introduction" title="مقدمة المشروع">
      <div className="grid md:grid-cols-2 gap-5">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass rounded-3xl p-6 group cursor-default"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform glow">
                <p.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
