import { motion } from "framer-motion";
import { User, Stethoscope, FlaskConical, Settings } from "lucide-react";
import { SlideShell } from "../SlideShell";

const users = [
  {
    icon: Stethoscope,
    title: "الطبيب",
    items: ["إدارة المرضى", "إجراء الجلسات عبر الفيديو", "إدخال التقارير الطبية", "إرسال الوصفات الطبية", "طلب التحاليل الطبية"],
    color: "#8b5cf6", // Violet
  },
  {
    icon: User,
    title: "المريض",
    items: ["حجز المواعيد", "متابعة الحالة الصحية", "استلام نتائج التحاليل", "عرض الوصفات الطبية", "التواصل مع الطبيب"],
    color: "#099dfd", // Primary cyan/blue
  },
  {
    icon: FlaskConical,
    title: "المختبر",
    items: ["استقبال طلبات التحاليل", "إجراء الفحوصات الطبية", "رفع النتائج إلى النظام", "مشاركة النتائج مع الطبيب والمريض"],
    color: "#10b981", // Emerald
  },
  {
    icon: Settings,
    title: "مدير النظام",
    items: ["إدارة المستخدمين", "مراجعة الشكاوى", "إرسال الإعلانات", "متابعة أداء النظام"],
    color: "#f59e0b", // Amber
  },
];

export function UsersSlide() {
  return (
    <SlideShell title="المستخدمون">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 max-w-7xl mx-auto">
        {users.map((u, i) => (
          <motion.div
            key={u.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (i + 1) * 1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass rounded-[1.5rem] p-8 md:p-14 group relative overflow-hidden border border-white/10"
          >
            {/* Watermark Icon */}
            <div
              className="absolute left-[-15%] bottom-[-10%] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none"
              style={{ color: u.color }}
            >
              <u.icon className="w-56 h-56" />
            </div>

            <div className="relative z-10 flex justify-center mb-3">
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
                style={{ background: `linear-gradient(135deg, ${u.color}, var(--color-primary))`, boxShadow: `0 10px 30px -10px ${u.color}` }}
              >
                <u.icon className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-md" />
              </div>
            </div>

            <div className="relative z-10">

              <h3 className="text-xl md:text-2xl font-bold mb-3 text-center" style={{ color: u.color }}>{u.title}</h3>

              <ul className="space-y-1.5">
                {u.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground leading-snug">
                    <span
                      className="w-2 h-2 mt-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: u.color, boxShadow: `0 0 8px ${u.color}` }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
