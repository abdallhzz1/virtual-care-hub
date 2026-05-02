import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Maximize2,
  Minimize2,
  Sun,
  Moon,
  List,
  X,
  Heart,
} from "lucide-react";
import { slides } from "@/data/slides";
import { MedicalBackground } from "./MedicalBackground";
import { CoverSlide } from "./slides/CoverSlide";
import { IntroSlide } from "./slides/IntroSlide";
import { IdeaSlide } from "./slides/IdeaSlide";
import { TechSlide } from "./slides/TechSlide";
import { UsersSlide } from "./slides/UsersSlide";
import { SystemSlide } from "./slides/SystemSlide";
import { ScenarioSlide } from "./slides/ScenarioSlide";
import { ThanksSlide } from "./slides/ThanksSlide";

export function Presentation() {
  const [index, setIndex] = useState(0);
  const [dark, setDark] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Fullscreen tracking
  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const next = useCallback(
    () => setIndex((i) => Math.min(slides.length - 1, i + 1)),
    [],
  );
  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const goTo = (i: number) => {
    setIndex(i);
    setTocOpen(false);
  };

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") next(); // RTL: left = next
      else if (e.key === "ArrowRight") prev();
      else if (e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "PageUp") prev();
      else if (e.key === "Home") setIndex(0);
      else if (e.key === "End") setIndex(slides.length - 1);
      else if (e.key === "Escape") setTocOpen(false);
      else if (e.key.toLowerCase() === "f") toggleFs();
      else if (e.key.toLowerCase() === "t") setTocOpen((o) => !o);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const toggleFs = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  };

  const renderSlide = () => {
    switch (slides[index].id) {
      case "cover": return <CoverSlide />;
      case "intro": return <IntroSlide />;
      case "idea": return <IdeaSlide />;
      case "tech": return <TechSlide />;
      case "users": return <UsersSlide />;
      case "system": return <SystemSlide onStart={() => setIndex(slides.findIndex((s) => s.id === "scenario"))} />;
      case "scenario": return <ScenarioSlide />;
      case "thanks": return <ThanksSlide />;
      default: return null;
    }
  };

  const progress = ((index + 1) / slides.length) * 100;

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-background text-foreground">
      <MedicalBackground />

      {/* Top bar */}
      <header className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTocOpen(true)}
            className="glass rounded-full p-2.5 hover:scale-110 transition-transform"
            aria-label="Table of contents"
          >
            <List className="w-5 h-5" />
          </button>
          <div className="glass rounded-full px-4 py-2 flex items-center gap-2 text-sm font-bold">
            <Heart className="w-4 h-4 text-primary animate-heartbeat" fill="currentColor" />
            <span className="hidden sm:inline">منصة الرعاية الطبية الافتراضية</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="glass rounded-full px-3 py-1.5 text-xs font-bold tabular-nums">
            {index + 1} / {slides.length}
          </span>
          <button
            onClick={() => setDark((d) => !d)}
            className="glass rounded-full p-2.5 hover:scale-110 transition-transform"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={dark ? "moon" : "sun"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {dark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </motion.div>
            </AnimatePresence>
          </button>
          <button
            onClick={toggleFs}
            className="glass rounded-full p-2.5 hover:scale-110 transition-transform"
            aria-label="Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Slide canvas */}
      <main className="absolute inset-0 pt-20 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            {renderSlide()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom nav */}
      <footer className="absolute bottom-0 inset-x-0 z-30 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress bar */}
          <div className="h-1 rounded-full bg-muted/50 overflow-hidden mb-3">
            <motion.div
              className="h-full gradient-primary"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={prev}
              disabled={index === 0}
              className="glass rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold disabled:opacity-30 hover:scale-105 transition-transform"
            >
              <ChevronRight className="w-4 h-4" />
              <span className="hidden sm:inline">السابق</span>
            </button>

            <div className="hidden md:flex items-center gap-1.5">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 gradient-primary glow" : "w-2 bg-muted hover:bg-primary/40"
                  }`}
                  aria-label={s.title}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={index === slides.length - 1}
              className="gradient-primary text-primary-foreground rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold disabled:opacity-30 hover:scale-105 transition-transform glow"
            >
              <span className="hidden sm:inline">التالي</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* TOC drawer */}
      <AnimatePresence>
        {tocOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setTocOpen(false)}
              className="fixed inset-0 z-40 bg-foreground/30 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[340px] max-w-[85vw] glass-strong p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-extrabold gradient-text">جدول المحتويات</h2>
                <button
                  onClick={() => setTocOpen(false)}
                  className="rounded-full p-2 hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="space-y-2">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => goTo(i)}
                    className={`w-full text-right rounded-2xl p-3 flex items-center gap-3 transition-all ${
                      i === index ? "gradient-primary text-primary-foreground glow" : "hover:bg-muted/60"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-extrabold ${
                        i === index ? "bg-white/25" : "bg-muted"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="font-bold">{s.title}</span>
                  </button>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-border/50 text-xs text-muted-foreground space-y-1">
                <p className="font-bold text-foreground">اختصارات لوحة المفاتيح</p>
                <p>← / → : التنقل بين الشرائح</p>
                <p>F : ملء الشاشة</p>
                <p>T : فتح القائمة</p>
                <p>Space : التالي</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
