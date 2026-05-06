import { motion } from "framer-motion";
import { MapPin, Brain, FlaskConical, QrCode } from "lucide-react";
import { SlideShell } from "../SlideShell";

const features = [
  {
    icon: MapPin,
    title: "الوصول من أي مكان",
    text: "توفير الخدمات الصحية للمرضى في المناطق النائية أو المتأثرة بالحواجز والظروف السياسية في فلسطين، بما يشمل الضفة الغربية وقطاع غزة.",
    color: "from-blue-500/10 to-transparent",
    iconColor: "text-blue-500"
  },
  {
    icon: Brain,
    title: "دعم مرضى الأمراض النفسية",
    text: "تقديم بيئة آمنة وسرية تُمكّن المرضى من الحصول على استشارات نفسية بسهولة دون عوائق اجتماعية.",
    color: "from-purple-500/10 to-transparent",
    iconColor: "text-purple-500"
  },
  {
    icon: FlaskConical,
    title: "التكامل مع المختبرات",
    text: "إتاحة إرسال طلبات التحاليل الطبية واستلام النتائج إلكترونيًا ضمن النظام بشكل سريع ومنظم.",
    color: "from-emerald-500/10 to-transparent",
    iconColor: "text-emerald-500"
  },
  {
    icon: QrCode,
    title: "الوصفات الطبية عبر QR Code",
    text: "تمكين المرضى من عرض الوصفات الطبية إلكترونيًا أو من خلال رمز QR لاستخدامها في الصيدليات بسهولة.",
    color: "from-amber-500/10 to-transparent",
    iconColor: "text-amber-500"
  },
];

export function IdeaSlide() {
  return (
    <SlideShell number={3} eyebrow="The Idea" title="فكرة المشروع">
      <div className="grid md:grid-cols-2 gap-4 lg:gap-5 max-w-7xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`glass rounded-3xl p-6 md:p-7 text-right group border border-white/10 relative overflow-hidden bg-gradient-to-br ${f.color}`}
          >
            {/* Background icon watermark */}
            <div className="absolute left-[-10%] top-[-10%] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none">
              <f.icon className="w-56 h-56" />
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-3 shadow-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <f.icon className={`w-7 h-7 md:w-8 md:h-8 ${f.iconColor}`} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{f.title}</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {f.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
