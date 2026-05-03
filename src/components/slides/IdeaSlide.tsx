import { motion } from "framer-motion";
import { Stethoscope, Video, FileText, FlaskConical, Activity, MapPin } from "lucide-react";
import { SlideShell } from "../SlideShell";

const features = [
  { 
    icon: Stethoscope, 
    title: "منصة طبية عن بُعد", 
    text: "منصة إلكترونية متكاملة تتيح تقديم الخدمات الطبية عن بُعد، بهدف تسهيل الوصول للرعاية الصحية خاصة في المناطق التي تعاني من صعوبات في التنقل.",
    color: "from-blue-500/10 to-transparent",
    iconColor: "text-blue-500"
  },
  { 
    icon: Video, 
    title: "تواصل مباشر بالفيديو", 
    text: "إتاحة جلسات طبية عبر الفيديو بين الطبيب والمريض بشكل مباشر وآمن، مما يقلل الحاجة إلى الزيارات التقليدية ويوفر استشارة فورية.",
    color: "from-purple-500/10 to-transparent",
    iconColor: "text-purple-500"
  },
  { 
    icon: FileText, 
    title: "ملف صحي رقمي", 
    text: "إنشاء ملف صحي إلكتروني شامل لكل مريض، يتضمن تاريخه المرضي، الفحوصات، والتقارير الطبية بشكل منظم وآمن.",
    color: "from-emerald-500/10 to-transparent",
    iconColor: "text-emerald-500"
  },
  { 
    icon: FlaskConical, 
    title: "تكامل مع المختبرات", 
    text: "ربط المنصة بالمختبرات الطبية لتمكين إرسال طلبات التحاليل واستلام النتائج إلكترونيًا، مما يسهل متابعة الحالة الصحية بشكل دقيق وسريع.",
    color: "from-amber-500/10 to-transparent",
    iconColor: "text-amber-500"
  },
  { 
    icon: Activity, 
    title: "متابعة مستمرة", 
    text: "تمكين الطبيب من متابعة حالة المريض بشكل دوري، خاصة للحالات المزمنة، مما يحسن جودة التشخيص والعلاج.",
    color: "from-rose-500/10 to-transparent",
    iconColor: "text-rose-500"
  },
  { 
    icon: MapPin, 
    title: "الوصول من أي مكان", 
    text: "توفير الخدمات الصحية للمرضى في المناطق النائية أو المتأثرة بالحواجز والظروف السياسية في فلسطين، بما يشمل الضفة الغربية وقطاع غزة.",
    color: "from-cyan-500/10 to-transparent",
    iconColor: "text-cyan-500"
  },
];

export function IdeaSlide() {
  return (
    <SlideShell number={2} eyebrow="The Idea" title="فكرة المشروع">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`glass rounded-3xl p-7 text-right group border border-white/10 relative overflow-hidden bg-gradient-to-br ${f.color}`}
          >
            {/* Background icon watermark */}
            <div className="absolute left-[-15%] top-[-15%] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none">
              <f.icon className="w-64 h-64" />
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-5 shadow-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <f.icon className={`w-7 h-7 ${f.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {f.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
