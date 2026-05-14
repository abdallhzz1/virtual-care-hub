import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { ZoomableImage } from "../ui/ZoomableImage";
import articImage from "@/assets/artic.jpg";

interface ResearchContent {
  id: number;
  title: string;
  content: React.ReactNode;
}

export function ResearchSlide() {
  const [active, setActive] = useState(0);

  const researchContents: ResearchContent[] = [
    {
      id: 1,
      title: "مقارنة المنصات",
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-primary/30">
                <th className="p-3 text-right font-bold bg-primary/10 text-primary">
                  الميزة
                </th>
                <th className="p-3 text-center font-bold bg-blue-500/10 text-blue-600">
                  Ore Platform
                </th>
                <th className="p-3 text-center font-bold">Teldoc</th>
                <th className="p-3 text-center font-bold">Vezeta</th>
                <th className="p-3 text-center font-bold">Babylon</th>
                <th className="p-3 text-center font-bold">altibbi</th>
                <th className="p-3 text-center font-bold">Cur (KSA)</th>
                <th className="p-3 text-center font-bold">Seba virtual</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "استشارات الفيديو", values: [true, true, true, true, true, true, true] },
                { name: "الملف الطبي الرقمي", values: [true, true, false, false, false, true, true] },
                { name: "دمج المختبرات", values: [true, false, false, false, false, false, false] },
                { name: "رمز QR للصيدلية", values: [true, false, false, false, false, true, false] },
                { name: "الرسائل الآمنة", values: [true, true, false, false, true, false, false] },
                { name: "وحدة الصحة النفسية", values: [true, true, false, true, false, false, true] },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="p-3 text-right font-semibold text-foreground">
                    {row.name}
                  </td>
                  {row.values.map((hasFeature, colIdx) => (
                    <td key={colIdx} className="p-3 text-center font-bold">
                      <span className={hasFeature ? "text-green-600" : "text-red-500"}>
                        {hasFeature ? "✓" : "✕"}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      id: 2,
      title: "نتائج الاختبارات",
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-primary/30">
                <th className="p-3 text-right font-bold bg-primary/10 text-primary">
                  المهمة
                </th>
                <th className="p-3 text-center font-bold">نسبة الإكمال</th>
                <th className="p-3 text-center font-bold">الوقت المتوسط (دقيقة)</th>
                <th className="p-3 text-center font-bold">الأخطاء</th>
              </tr>
            </thead>
            <tbody>
              {[
                { task: "تسجيل الحساب والدخول والخروج", rate: "100%", time: "1.8", errors: "0" },
                { task: "حجز المواعيد", rate: "100%", time: "2.3", errors: "0" },
                { task: "بدء استشارة فيديو مباشرة", rate: "100%", time: "1.5", errors: "0" },
                { task: "عرض الملف الطبي الرقمي", rate: "100%", time: "2.7", errors: "0" },
                { task: "إدخال نتائج الفحوصات المخبرية", rate: "100%", time: "3.1", errors: "0" },
                { task: "مسح الوصفات باستخدام رمز QR", rate: "100%", time: "1.2", errors: "0" },
                { task: "الرسائل بين الطبيب والمريض", rate: "100%", time: "1.9", errors: "0" },
                { task: "تقديم شكاوى إدارية", rate: "100%", time: "3.4", errors: "0" },
                { task: "الدفع الإلكتروني", rate: "100%", time: "2.6", errors: "0" },
                { task: "تقييم تجربة المستخدم الشاملة", rate: "100%", time: "-", errors: "0" },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="p-3 text-right font-semibold text-foreground">
                    {row.task}
                  </td>
                  <td className="p-3 text-center text-foreground">
                    {row.rate}
                  </td>
                  <td className="p-3 text-center text-foreground">
                    {row.time}
                  </td>
                  <td className="p-3 text-center text-foreground font-bold">
                    {row.errors}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      id: 3,
      title: "مقارنة الأداء",
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-primary/30">
                <th className="p-3 text-right font-bold bg-primary/10 text-primary">
                  مؤشر الأداء
                </th>
                <th className="p-3 text-center font-bold">النظام التقليدي</th>
                <th className="p-3 text-center font-bold">منصتنا</th>
                <th className="p-3 text-center font-bold">التحسن</th>
              </tr>
            </thead>
            <tbody>
              {[
                { indicator: "توصيل نتيجة الفحص للطبيب", traditional: "12-48 ساعة (ورقي/WhatsApp)", platform: "< 2 ثانية (فوري)", improvement: "~99% أسرع" },
                { indicator: "أخطاء نسخ الأدوية", traditional: "مرتفع (كتابي/شفوي)", platform: "محذوف (مصادقة رقمية)", improvement: "99%" },
                { indicator: "تنقل المريض للمتابعة", traditional: "مطلوب في معظم الحالات", platform: "غير مطلوب (افتراضي)", improvement: "~80% تقليل" },
                { indicator: "إمكانية الوصول للملف الطبي", traditional: "مجزأ/ورقي/محلي", platform: "مركزي/فوري", improvement: "وصول كامل" },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="p-3 text-right font-semibold text-foreground">
                    {row.indicator}
                  </td>
                  <td className="p-3 text-center text-foreground text-xs">
                    {row.traditional}
                  </td>
                  <td className="p-3 text-center text-foreground text-xs">
                    {row.platform}
                  </td>
                  <td className="p-3 text-center font-bold text-green-600">
                    {row.improvement}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
  ];

  const content = researchContents[active];
  const progress = ((active + 1) / researchContents.length) * 100;

  return (
    <SlideShell title="ملخص البحث العلمي">
      <div className="relative w-full h-full flex flex-col gap-6">
        {/* Content Boxes */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Progress and Controls */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
              <motion.div
                className="h-full gradient-primary glow"
                initial={false}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            <span className="text-sm font-bold text-muted-foreground tabular-nums whitespace-nowrap">
              {active + 1} / {researchContents.length}
            </span>
          </div>

          {/* Content Display */}
          <div className="relative flex-1 min-h-[300px] rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={content.id}
                initial={{ opacity: 0, x: -40, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 40, scale: 0.97 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="glass-strong rounded-2xl p-6 md:p-8 h-full w-full"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text text-right">
                  {content.title}
                </h3>
                <div className="overflow-auto max-h-[350px]">
                  {content.content}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Premium Fixed Navigation Bar */}
        <div className="flex justify-center mt-auto pt-4">
          <div className="glass rounded-full px-6 py-3 flex items-center gap-6 shadow-xl border-white/10">
            <button
              onClick={() => setActive((p) => Math.max(0, p - 1))}
              disabled={active === 0}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-primary/20 hover:scale-110 active:scale-95 disabled:opacity-20 disabled:hover:scale-100"
              aria-label="Previous Section"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>

            <div className="flex items-center gap-3">
              {researchContents.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="group relative flex items-center justify-center p-1"
                  aria-label={`Go to section ${i + 1}`}
                >
                  <div 
                    className={`transition-all duration-500 rounded-full ${
                      i === active 
                        ? "w-8 h-2.5 gradient-primary glow" 
                        : "w-2.5 h-2.5 bg-muted hover:bg-primary/40"
                    }`}
                  />
                  {i === active && (
                    <motion.div 
                      layoutId="nav-glow"
                      className="absolute inset-0 bg-primary/20 blur-md rounded-full -z-10"
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => setActive((p) => Math.min(researchContents.length - 1, p + 1))}
              disabled={active === researchContents.length - 1}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-primary/20 hover:scale-110 active:scale-95 disabled:opacity-20 disabled:hover:scale-100"
              aria-label="Next Section"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
