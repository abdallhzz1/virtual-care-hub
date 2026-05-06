import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { SlideShell } from "../SlideShell";

export function ProblemSlide() {
  return (
    <SlideShell number={2} eyebrow="The Problem" title="المشكلة">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative glass-strong rounded-[2.5rem] p-8 md:p-10 lg:p-12 border border-white/10 w-full max-w-7xl mx-auto overflow-hidden group shadow-2xl"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
          
          <div className="absolute top-8 right-10 opacity-10 text-red-500 pointer-events-none">
            <AlertCircle className="w-32 h-32" />
          </div>

          <div className="relative z-10 text-xl md:text-2xl lg:text-3xl leading-relaxed md:leading-[1.8] text-foreground font-medium text-justify">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mb-5"
            >
              تتمثّل المشكلة في <span className="text-red-500 font-bold">صعوبة وصول المرضى</span> إلى الخدمات الطبية الأساسية، وذلك بسبب <span className="text-red-500 font-bold">القيود على الحركة</span> من ناحية الحواجز العسكرية وإغلاقات الطرق المستمرة، أو بسبب بعد المسافة بين التجمعات السكانية النائية والمراكز الطبية.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              مما يؤدي إلى <span className="text-red-500 font-bold">انقطاع المتابعة العلاجية</span> خاصة لمرضى الأمراض المزمنة والحالات الحساسة مثل مرضى الحالات النفسية، كما أن الاعتماد على الزيارات التقليدية يتطلب <span className="text-red-500 font-bold">جهدًا ووقتًا وتكاليف مادية مرتفعة</span>، ما يبرز الحاجة إلى <span className="text-primary font-bold">منصة رقمية للرعاية الطبية الافتراضية</span> تضمن المتابعة المستمرة والتواصل الفعّال.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
