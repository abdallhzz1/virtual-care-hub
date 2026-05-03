import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import reactIcon from "../../assets/react-icon.png";
import firebaseIcon from "../../assets/firebase-icon.png";
import cloudinaeyIcon from "../../assets/cloudinaey.png";
import agoraIcon from "../../assets/agora.png";

const techs = [
  { 
    name: "React", 
    role: "الموقع الإلكتروني", 
    desc: "بناء واجهة مستخدم تفاعلية وسريعة لتجربة استخدام سلسة على الويب.",
    color: "#61dafb", 
    icon: reactIcon 
  },
  { 
    name: "React Native", 
    role: "تطبيق الموبايل", 
    desc: "تطوير تطبيق يعمل على الهواتف الذكية لتسهيل وصول المستخدمين إلى النظام في أي وقت.",
    color: "#61dafb", 
    icon: reactIcon 
  },
  { 
    name: "Firebase", 
    role: "الباك اند وقاعدة البيانات", 
    desc: "إدارة البيانات والمستخدمين بشكل لحظي (Real-time) مع توفير بيئة آمنة وسريعة للتطبيق.",
    color: "#ffca28", 
    icon: firebaseIcon 
  },
  { 
    name: "Cloudinary", 
    role: "تخزين الملفات الطبية", 
    desc: "إدارة وتخزين الصور والتقارير الطبية بشكل آمن وسريع مع سهولة الوصول إليها.",
    color: "#3448c5", 
    icon: cloudinaeyIcon 
  },
  { 
    name: "Agora", 
    role: "جلسات الفيديو المباشرة", 
    desc: "توفير تواصل مرئي مباشر وآمن بين الطبيب والمريض لإجراء الاستشارات الطبية عن بُعد.",
    color: "#099dfd", 
    icon: agoraIcon 
  },
];

export function TechSlide() {
  return (
    <SlideShell number={3} eyebrow="Tech Stack" title="التقنيات المستخدمة">
      <div className="flex flex-wrap justify-center gap-4 lg:gap-5">
        {techs.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: "backOut" }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] glass rounded-3xl p-5 md:p-6 text-center group cursor-default border border-white/10 flex flex-col items-center relative overflow-hidden"
          >
            {/* Background glowing orb */}
            <div 
              className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
              style={{ backgroundColor: t.color }}
            />

            <div
              className="w-16 h-16 mb-4 rounded-2xl bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10"
              style={{ boxShadow: `0 8px 25px -10px ${t.color}` }}
            >
              <img src={t.icon} alt={t.name} className="w-9 h-9 object-contain drop-shadow-md" />
            </div>
            
            <div className="relative z-10">
              <h3 className="font-extrabold text-xl mb-1 tracking-wide" style={{ color: t.color }}>{t.name}</h3>
              <h4 className="font-bold text-foreground mb-2 text-base">{t.role}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
