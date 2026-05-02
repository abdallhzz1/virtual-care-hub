import { motion } from "framer-motion";
import { Play, ArrowLeft } from "lucide-react";
import { SlideShell } from "../SlideShell";

interface Props {
  onStart: () => void;
}

export function SystemSlide({ onStart }: Props) {
  return (
    <SlideShell number={5} eyebrow="System Demo" title="عرض النظام">
      <div className="text-center py-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          استكشف رحلة المستخدم الكاملة عبر سيناريو تفاعلي يوضح آلية عمل المنصة من البداية وحتى النهاية
        </motion.p>

        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "backOut" }}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full gradient-primary text-primary-foreground font-bold text-lg glow overflow-hidden"
        >
          <span className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          <Play className="w-6 h-6 relative" fill="currentColor" />
          <span className="relative">ابدأ عرض السيناريو</span>
          <ArrowLeft className="w-5 h-5 relative group-hover:-translate-x-1 transition-transform" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 inline-flex items-center gap-2 text-sm text-muted-foreground"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          18 خطوة تفاعلية مفصّلة
        </motion.div>
      </div>
    </SlideShell>
  );
}
