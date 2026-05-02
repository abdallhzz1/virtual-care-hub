import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

const techs = [
  { name: "React", role: "الموقع الإلكتروني", color: "oklch(0.7 0.15 220)", initial: "R" },
  { name: "React Native", role: "تطبيق الموبايل", color: "oklch(0.65 0.18 200)", initial: "RN" },
  { name: "Firebase", role: "الباك اند وقاعدة البيانات", color: "oklch(0.75 0.18 60)", initial: "F" },
  { name: "Cloudinary", role: "تخزين الملفات الطبية", color: "oklch(0.6 0.2 260)", initial: "C" },
  { name: "Agora", role: "جلسات الفيديو", color: "oklch(0.65 0.2 30)", initial: "A" },
];

export function TechSlide() {
  return (
    <SlideShell number={3} eyebrow="Tech Stack" title="التقنيات المستخدمة">
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
        {techs.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: "backOut" }}
            whileHover={{ y: -10, rotateY: 8 }}
            className="glass rounded-3xl p-6 text-center group cursor-default"
            style={{ perspective: 1000 }}
          >
            <div
              className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center text-2xl font-extrabold text-white shadow-lg group-hover:scale-110 transition-transform"
              style={{ background: `linear-gradient(135deg, ${t.color}, var(--color-primary))`, boxShadow: `0 10px 30px -10px ${t.color}` }}
            >
              {t.initial}
            </div>
            <h3 className="font-bold text-lg mb-1">{t.name}</h3>
            <p className="text-sm text-muted-foreground">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
