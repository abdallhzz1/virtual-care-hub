import { motion } from "framer-motion";
import { Globe, Video, FileHeart, RefreshCw, Home } from "lucide-react";
import { SlideShell } from "../SlideShell";

const features = [
  { icon: Globe, title: "منصة عن بُعد", text: "إلكترونية متكاملة للرعاية الطبية" },
  { icon: Video, title: "تواصل بالفيديو", text: "بين الطبيب والمريض بشكل مباشر" },
  { icon: FileHeart, title: "ملف صحي رقمي", text: "شامل ومنظم لكل مريض" },
  { icon: RefreshCw, title: "متابعة مستمرة", text: "للحالات الطبية وتطورها" },
  { icon: Home, title: "راحة المنزل", text: "تقليل الحاجة للزيارات التقليدية" },
];

export function IdeaSlide() {
  return (
    <SlideShell number={2} eyebrow="The Idea" title="فكرة المشروع">
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass rounded-3xl p-6 text-center group"
          >
            <div className="relative inline-flex items-center justify-center mb-4">
              <div className="absolute inset-0 rounded-2xl gradient-primary blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
                <f.icon className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h3 className="font-bold mb-1">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
