import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Users, UserRound } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { ZoomableImage } from "../ui/ZoomableImage";

// Import images
import d1 from "@/assets/d1.png";
import d2 from "@/assets/d2.png";
import d3 from "@/assets/d3.png";
import d4 from "@/assets/d4.png";

import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.png";
import p3 from "@/assets/p3.png";
import p4 from "@/assets/p4.png";
import p5 from "@/assets/p5.png";

const doctorSurvey = [d1, d2, d3, d4];
const patientSurvey = [p1, p2, p3, p4, p5];

export function SurveysSlide() {
  const [activeTab, setActiveTab] = useState<"doctor" | "patient">("doctor");
  const [docIndex, setDocIndex] = useState(0);
  const [patIndex, setPatIndex] = useState(0);

  const images = activeTab === "doctor" ? doctorSurvey : patientSurvey;
  const currentIndex = activeTab === "doctor" ? docIndex : patIndex;
  const setIndex = activeTab === "doctor" ? setDocIndex : setPatIndex;

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <SlideShell title="نتائج الاستبيانات" centered={true}>
      <div className="relative w-full h-full flex flex-col gap-6 pt-4">
        
        {/* Tabs Switcher */}
        <div className="flex justify-center">
          <div className="glass p-1.5 rounded-2xl flex gap-2 border-white/10 shadow-lg">
            <button
              onClick={() => setActiveTab("doctor")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === "doctor"
                  ? "gradient-primary text-white glow shadow-md scale-105"
                  : "hover:bg-white/5 text-muted-foreground"
              }`}
            >
              <UserRound className="w-4 h-4" />
              استبيان الأطباء
            </button>
            <button
              onClick={() => setActiveTab("patient")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === "patient"
                  ? "gradient-primary text-white glow shadow-md scale-105"
                  : "hover:bg-white/5 text-muted-foreground"
              }`}
            >
              <Users className="w-4 h-4" />
              استبيان المرضى
            </button>
          </div>
        </div>

        {/* Gallery Container */}
        <div className="flex-1 relative flex flex-col gap-4 min-h-0">
          <div className="relative flex-1 glass-strong rounded-[2rem] overflow-hidden group shadow-2xl border-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full p-2 flex items-center justify-center bg-white/90 dark:bg-white/10"
              >
                <div className="w-full h-full relative scale-70 -mt-36">
                  <ZoomableImage 
                    src={images[currentIndex]} 
                    alt={`Survey result ${currentIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
              <button
                onClick={next}
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 active:scale-95 transition-all pointer-events-auto shadow-xl group-hover:translate-x-0 -translate-x-4 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 active:scale-95 transition-all pointer-events-auto shadow-xl group-hover:translate-x-0 translate-x-4 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>
            </div>

            {/* Counter Overlay */}
            <div className="absolute bottom-6 right-8 glass px-4 py-1.5 rounded-full text-xs font-bold tabular-nums shadow-lg">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnails / Indicators */}
          <div className="flex justify-center gap-3 pb-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`relative h-2 rounded-full transition-all duration-500 overflow-hidden ${
                  i === currentIndex ? "w-10 gradient-primary glow" : "w-2.5 bg-muted hover:bg-primary/30"
                }`}
              >
                {i === currentIndex && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute inset-0 bg-white/20"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Info Text */}
        <motion.p 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-sm text-muted-foreground font-medium pb-4"
        >
          {activeTab === "doctor" 
            ? "نتائج استبيان تم توزيعه على عينة من الأطباء من مختلف التخصصات الطبية وشمل اكثر من مدينة داخل فلسيطن" 
            : " نتائج استبيان تم توزيعه على عينة من المرضى والمراجعين لقياس قبول الرعاية الافتراضية من مختلف مدن فلسطين"}
        </motion.p>
      </div>
    </SlideShell>
  );
}
