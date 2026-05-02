import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import { ChevronRight, ChevronLeft, Pause, Play } from "lucide-react";
import { scenarioSteps } from "@/data/slides";
import { SlideShell } from "../SlideShell";

const actorMeta: Record<string, { label: string; color: string }> = {
  doctor: { label: "الطبيب", color: "oklch(0.6 0.18 245)" },
  patient: { label: "المريض", color: "oklch(0.7 0.15 220)" },
  lab: { label: "المختبر", color: "oklch(0.7 0.18 180)" },
  admin: { label: "مدير النظام", color: "oklch(0.65 0.18 280)" },
  system: { label: "النظام", color: "oklch(0.6 0.1 240)" },
};

export function ScenarioSlide() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    if (!autoplay) return;
    const t = setTimeout(() => {
      setActive((p) => (p + 1) % scenarioSteps.length);
    }, 3500);
    return () => clearTimeout(t);
  }, [active, autoplay]);

  const step = scenarioSteps[active];
  const actor = actorMeta[step.actor];
  const IconComponent = (Icons[step.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>) || Icons.Circle;
  const progress = ((active + 1) / scenarioSteps.length) * 100;

  return (
    <SlideShell number={6} eyebrow="Scenario Flow" title="سيناريو العمل التفاعلي">
      {/* Progress bar */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full gradient-primary glow"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        <span className="text-sm font-bold text-muted-foreground tabular-nums">
          {active + 1} / {scenarioSteps.length}
        </span>
        <button
          onClick={() => setAutoplay((a) => !a)}
          className="glass rounded-full p-2 hover:scale-110 transition-transform"
          aria-label="autoplay"
        >
          {autoplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>

      <div className="grid lg:grid-cols-[300px_1fr] gap-6">
        {/* Steps list */}
        <div className="glass rounded-3xl p-3 max-h-[500px] overflow-y-auto">
          <div className="space-y-1">
            {scenarioSteps.map((s, i) => {
              const sActor = actorMeta[s.actor];
              const isActive = i === active;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`w-full text-right rounded-2xl p-3 flex items-center gap-3 transition-all ${
                    isActive
                      ? "gradient-primary text-primary-foreground glow"
                      : "hover:bg-muted/60"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      isActive ? "bg-white/25" : "bg-muted"
                    }`}
                  >
                    {s.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-bold truncate ${isActive ? "" : "text-foreground"}`}>
                      {s.title}
                    </p>
                    <p className={`text-[11px] truncate ${isActive ? "opacity-80" : "text-muted-foreground"}`}>
                      {sActor.label}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active step detail */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -40, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.97 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="glass-strong rounded-3xl p-8 lg:p-10 h-full flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, ease: "backOut" }}
                    className="relative w-20 h-20 rounded-3xl flex items-center justify-center text-white"
                    style={{
                      background: `linear-gradient(135deg, ${actor.color}, var(--color-primary))`,
                      boxShadow: `0 10px 40px -10px ${actor.color}`,
                    }}
                  >
                    <IconComponent className="w-10 h-10" />
                  </motion.div>
                  <div>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 text-white"
                      style={{ background: actor.color }}
                    >
                      {actor.label}
                    </span>
                    <p className="text-xs text-muted-foreground tracking-widest font-semibold">
                      STEP {String(step.id).padStart(2, "0")}
                    </p>
                  </div>
                </div>
              </div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-3xl md:text-4xl font-extrabold mb-5 gradient-text"
              >
                {step.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-lg leading-loose text-foreground/80 flex-1"
              >
                {step.description}
              </motion.p>

              {/* Step dots */}
              <div className="flex items-center justify-center gap-1.5 mt-6 flex-wrap">
                {scenarioSteps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === active
                        ? "w-8 bg-primary glow"
                        : i < active
                        ? "w-1.5 bg-primary/60"
                        : "w-1.5 bg-muted"
                    }`}
                    aria-label={`Step ${i + 1}`}
                  />
                ))}
              </div>

              {/* Nav */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={() => setActive((p) => Math.max(0, p - 1))}
                  disabled={active === 0}
                  className="glass rounded-full px-5 py-2.5 flex items-center gap-2 font-semibold text-sm disabled:opacity-40 hover:scale-105 transition-transform"
                >
                  <ChevronRight className="w-4 h-4" />
                  السابق
                </button>
                <button
                  onClick={() => setActive((p) => Math.min(scenarioSteps.length - 1, p + 1))}
                  disabled={active === scenarioSteps.length - 1}
                  className="gradient-primary text-primary-foreground rounded-full px-5 py-2.5 flex items-center gap-2 font-semibold text-sm disabled:opacity-40 hover:scale-105 transition-transform glow"
                >
                  التالي
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SlideShell>
  );
}
