import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import { ChevronRight, ChevronLeft, Pause, Play, MonitorSmartphone, X } from "lucide-react";
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
  const [mediaStream1, setMediaStream1] = useState<MediaStream | null>(null);
  const [mediaStream2, setMediaStream2] = useState<MediaStream | null>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!autoplay) return;
    const t = setTimeout(() => {
      setActive((p) => (p + 1) % scenarioSteps.length);
    }, 3500);
    return () => clearTimeout(t);
  }, [active, autoplay]);

  useEffect(() => {
    if (videoRef1.current && mediaStream1) {
      videoRef1.current.srcObject = mediaStream1;
    }
  }, [mediaStream1]);

  useEffect(() => {
    if (videoRef2.current && mediaStream2) {
      videoRef2.current.srcObject = mediaStream2;
    }
  }, [mediaStream2]);

  const startLiveDemo = async (streamId: 1 | 2) => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
        alert(
          "عذراً! ميزة بث الشاشة تتطلب اتصالاً آمناً (Secure Context). لكي تعمل الميزة، تأكد من فتح الرابط باستخدام 'localhost' وليس رقم الـ IP (مثل 192.168.x.x)، أو استخدم إضافة https."
        );
        return;
      }

      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          displaySurface: "window",
        },
      });
      
      stream.getVideoTracks()[0].onended = () => {
        if (streamId === 1) setMediaStream1(null);
        else setMediaStream2(null);
      };
      
      if (streamId === 1) setMediaStream1(stream);
      else setMediaStream2(stream);
    } catch (err) {
      console.error("Error accessing display media.", err);
    }
  };

  const stopLiveDemo = (streamId: 1 | 2) => {
    const stream = streamId === 1 ? mediaStream1 : mediaStream2;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      if (streamId === 1) setMediaStream1(null);
      else setMediaStream2(null);
    }
  };

  const step = scenarioSteps[active];
  const actor = actorMeta[step.actor];
  const IconComponent = (Icons[step.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>) || Icons.Circle;
  const progress = ((active + 1) / scenarioSteps.length) * 100;

  const anyStream = mediaStream1 || mediaStream2;
  const bothStreams = mediaStream1 && mediaStream2;

  return (
    <SlideShell title="سيناريو العمل التفاعلي" centered>
      <div className="relative w-full h-full flex flex-row items-center">
        {/* Main Content - Left side */}
        <div className="flex-1 flex flex-col h-full">
          
          {/* Progress bar & Header Actions */}
          <div className="mb-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex-1 flex items-center gap-4 w-full">
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

            <div className="flex items-center gap-3">
              {/* Stream 1 Toggle */}
              <button
                onClick={mediaStream1 ? () => stopLiveDemo(1) : () => startLiveDemo(1)}
                className={`glass rounded-full px-4 py-2 flex items-center gap-2 text-[11px] font-bold transition-all shadow-lg shrink-0 ${
                  mediaStream1
                    ? "bg-red-500/20 text-red-500 border border-red-500/50"
                    : "gradient-primary text-white"
                }`}
              >
                {mediaStream1 ? <X className="w-3 h-3" /> : <MonitorSmartphone className="w-3 h-3" />}
                {mediaStream1 ? "إيقاف شاشة" : "بث شاشة"}
              </button>
            </div>
          </div>

          <div className={`grid gap-2 flex-1 transition-all duration-500 ${anyStream ? "lg:grid-cols-[350px_1fr]" : "lg:grid-cols-[350px_1fr]"}`}>
            {/* Steps list */}
            <div className="glass rounded-3xl p-4 h-[550px] overflow-y-auto custom-scrollbar">
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
            <div className="relative h-[550px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -40, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 40, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="glass-strong rounded-2xl p-5 md:p-6 h-full flex flex-col max-w-lg"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, ease: "backOut" }}
                        className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center text-white shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${actor.color}, var(--color-primary))`,
                          boxShadow: `0 10px 40px -10px ${actor.color}`,
                        }}
                      >
                        <IconComponent className="w-8 h-8 md:w-10 md:h-10" />
                      </motion.div>
                      <div>
                        <span
                          className="inline-block px-3 py-1 rounded-full text-[10px] md:text-xs font-bold mb-2 text-white"
                          style={{ background: actor.color }}
                        >
                          {actor.label}
                        </span>
                        <p className="text-[10px] md:text-xs text-muted-foreground tracking-widest font-semibold">
                          STEP {String(step.id).padStart(2, "0")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5 gradient-text leading-tight"
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="text-base md:text-lg leading-relaxed md:leading-loose text-foreground/80 flex-1"
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
                      className="glass rounded-full px-4 py-2 md:px-5 md:py-2.5 flex items-center gap-2 font-semibold text-xs md:text-sm disabled:opacity-40 hover:scale-105 transition-transform"
                    >
                      <ChevronRight className="w-4 h-4" />
                      السابق
                    </button>
                    <button
                      onClick={() => setActive((p) => Math.min(scenarioSteps.length - 1, p + 1))}
                      disabled={active === scenarioSteps.length - 1}
                      className="gradient-primary text-primary-foreground rounded-full px-4 py-2 md:px-5 md:py-2.5 flex items-center gap-2 font-semibold text-xs md:text-sm disabled:opacity-40 hover:scale-105 transition-transform glow"
                    >
                      التالي
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Phone mockup area - Right side (RTL) */}
        <div className="hidden lg:flex flex-[0.45] h-full items-center justify-center pr-8">
          <div className="relative w-[280px] h-[580px] group">
            {/* Phone Frame Glow */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Phone Outer Frame */}
            <div className="relative w-full h-full bg-[#0a0a0c] rounded-[3rem] p-3 shadow-2xl border-[6px] border-[#1a1a1e] ring-1 ring-white/10 overflow-hidden">
              {/* Speaker/Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1e] rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-10 h-1 bg-white/5 rounded-full" />
              </div>

              {/* Screen Content */}
              <div className="relative w-full h-full bg-black rounded-[2rem] overflow-hidden border border-white/5">
                {mediaStream1 ? (
                  <motion.video
                    ref={videoRef1}
                    autoPlay
                    playsInline
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-2">
                      <MonitorSmartphone className="w-8 h-8 text-primary/60" />
                    </div>
                    <p className="text-xs font-bold text-muted-foreground leading-relaxed">
                      بانتظار بث شاشة التطبيق...
                    </p>
                    <p className="text-[10px] text-muted-foreground/60 leading-relaxed">
                      استخدم برنامج Mirroring لعرض شاشة هاتفك على الكمبيوتر، ثم اضغط "بث شاشة" أعلاه واختبر النافذة.
                    </p>
                    
                    {/* Pulsing indicator */}
                    <div className="flex gap-1.5 pt-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: '200ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: '400ms' }} />
                    </div>
                  </div>
                )}
              </div>

              {/* Reflections/Glares */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden rounded-[2rem]">
                <div className="absolute top-0 left-[-50%] w-[100%] h-[100%] bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-12 transition-transform duration-1000 group-hover:translate-x-[150%]" />
              </div>
            </div>
            
            {/* Phone Buttons */}
            <div className="absolute top-24 -left-[7px] w-[3px] h-12 bg-[#1a1a1e] rounded-l-md border-l border-white/10" />
            <div className="absolute top-40 -left-[7px] w-[3px] h-12 bg-[#1a1a1e] rounded-l-md border-l border-white/10" />
            <div className="absolute top-32 -right-[7px] w-[3px] h-20 bg-[#1a1a1e] rounded-r-md border-r border-white/10" />
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
