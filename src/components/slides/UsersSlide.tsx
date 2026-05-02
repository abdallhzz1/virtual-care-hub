import { motion } from "framer-motion";
import { User, Stethoscope, FlaskConical, Settings } from "lucide-react";
import { SlideShell } from "../SlideShell";

const users = [
  {
    icon: User,
    title: "المريض",
    items: ["حجز المواعيد", "متابعة الحالة", "استلام النتائج", "الوصفات الطبية"],
    color: "oklch(0.7 0.15 220)",
  },
  {
    icon: Stethoscope,
    title: "الطبيب",
    items: ["إدارة المرضى", "جلسات الفيديو", "إصدار التقارير", "الوصفات"],
    color: "oklch(0.6 0.18 245)",
  },
  {
    icon: FlaskConical,
    title: "المختبر",
    items: ["استقبال الطلبات", "إجراء الفحوصات", "رفع النتائج", "التواصل"],
    color: "oklch(0.7 0.18 180)",
  },
  {
    icon: Settings,
    title: "مدير النظام",
    items: ["إدارة النظام", "مراجعة الشكاوى", "نشر الإعلانات", "الإحصائيات"],
    color: "oklch(0.65 0.18 280)",
  },
];

export function UsersSlide() {
  return (
    <SlideShell number={4} eyebrow="Users" title="المستخدمون">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {users.map((u, i) => (
          <motion.div
            key={u.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
            whileHover={{ y: -8 }}
            className="glass rounded-3xl p-6 group"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
              style={{ background: `linear-gradient(135deg, ${u.color}, var(--color-primary))`, boxShadow: `0 10px 30px -10px ${u.color}` }}
            >
              <u.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{u.title}</h3>
            <ul className="space-y-2">
              {u.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
