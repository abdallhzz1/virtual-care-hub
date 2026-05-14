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

interface ScenarioSlideProps {
  mediaStream1: MediaStream | null;
  setMediaStream1: (s: MediaStream | null) => void;
  mediaStream2: MediaStream | null;
  setMediaStream2: (s: MediaStream | null) => void;
}

export function ScenarioSlide({ 
  mediaStream1, 
  setMediaStream1, 
  mediaStream2, 
  setMediaStream2 
}: ScenarioSlideProps) {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
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

  const progress = ((active + 1) / scenarioSteps.length) * 100;


  const anyStream = mediaStream1 || mediaStream2;
  const bothStreams = mediaStream1 && mediaStream2;

  return (
    <SlideShell title="سيناريو العمل التفاعلي" centered={true}>
      <div className="relative w-full h-full flex flex-col pt-0">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_1fr] gap-4 flex-1 items-center">
          
          {/* Index Card with Integrated Controls */}
          <div className="glass rounded-[2rem] overflow-hidden flex flex-col h-[580px] border-white/10 shadow-2xl">
            {/* Card Header with Controls */}
            <div className="p-4 bg-muted/30 border-b border-white/5 flex items-center justify-between gap-4">
              <button
                onClick={() => setAutoplay((a) => !a)}
                className="glass rounded-full p-2 hover:scale-110 transition-transform shrink-0"
              >
                {autoplay ? <Pause className="w-4 h-4 text-primary" /> : <Play className="w-4 h-4 text-primary" />}
              </button>
              
              <div className="flex-1 text-center">
                <span className="text-[11px] font-bold text-muted-foreground tabular-nums">
                   الخطوة {active + 1} من {scenarioSteps.length}
                </span>
              </div>

              <div className="text-[10px] font-bold text-primary px-2 py-0.5 rounded-md bg-primary/10">
                {Math.round(progress)}%
              </div>
            </div>

            {/* Integrated Progress Bar */}
            <div className="h-1 bg-muted/20 w-full overflow-hidden">
              <motion.div
                className="h-full gradient-primary"
                initial={false}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Steps list */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-3">
              <div className="space-y-2">
                {scenarioSteps.map((s, i) => {
                  const sActor = actorMeta[s.actor];
                  const isActive = i === active;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setActive(i)}
                      className={`w-full text-right rounded-xl p-3 flex items-center gap-3 transition-all duration-300 ${
                        isActive
                          ? "gradient-primary text-primary-foreground glow shadow-md"
                          : "hover:bg-muted/40"
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
                        <p className={`text-xs font-bold truncate ${isActive ? "" : "text-foreground"}`}>
                          {s.title}
                        </p>
                        <p className={`text-[10px] truncate mt-0.5 ${isActive ? "opacity-80" : "text-muted-foreground"}`}>
                          {sActor.label}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Phone Mockup 1 Container */}
          <div className="flex flex-col items-center justify-center gap-6">
            {/* Stream 1 Toggle Button - Now Above Phone */}
            <button
              onClick={mediaStream1 ? () => stopLiveDemo(1) : () => startLiveDemo(1)}
              className={`rounded-full px-6 py-2 flex items-center gap-2 text-[10px] font-bold transition-all shadow-xl hover:scale-105 active:scale-95 ${
                mediaStream1
                  ? "bg-red-500 text-white"
                  : "gradient-primary text-white"
              }`}
            >
              {mediaStream1 ? <X className="w-3.5 h-3.5" /> : <MonitorSmartphone className="w-3.5 h-3.5" />}
              {mediaStream1 ? "إيقاف بث 1" : "بث شاشة 1"}
            </button>

            <div className="relative w-[270px] h-[580px] group shrink-0">
              {/* Ultra-thin bezel premium frame */}
              <div className="absolute -inset-1 bg-gradient-to-b from-white/20 to-black/20 rounded-[2.8rem] blur-[1px]" />
              <div className="relative w-full h-full bg-[#050505] rounded-[2.7rem] p-[4px] shadow-2xl ring-1 ring-white/10 overflow-hidden">
                <div className="relative w-full h-full bg-black rounded-[2.4rem] overflow-hidden">
                  {mediaStream1 ? (
                    <video 
                      ref={videoRef1} 
                      autoPlay 
                      playsInline 
                      className="w-full h-full object-cover scale-[1.05] -translate-y-[1.5%]" 
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-2">
                        <MonitorSmartphone className="w-7 h-7 text-primary/40" />
                      </div>
                      <p className="text-[10px] text-muted-foreground/40">بانتظار البث الأول...</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup 2 Container */}
          <div className="flex flex-col items-center justify-center gap-6">
            {/* Stream 2 Toggle Button - Now Above Phone */}
            <button
              onClick={mediaStream2 ? () => stopLiveDemo(2) : () => startLiveDemo(2)}
              className={`rounded-full px-6 py-2 flex items-center gap-2 text-[10px] font-bold transition-all shadow-xl hover:scale-105 active:scale-95 ${
                mediaStream2
                  ? "bg-red-500 text-white"
                  : "gradient-primary text-white"
              }`}
            >
              {mediaStream2 ? <X className="w-3.5 h-3.5" /> : <MonitorSmartphone className="w-3.5 h-3.5" />}
              {mediaStream2 ? "إيقاف بث 2" : "بث شاشة 2"}
            </button>

            <div className="relative w-[270px] h-[580px] group shrink-0">
              {/* Ultra-thin bezel premium frame */}
              <div className="absolute -inset-1 bg-gradient-to-b from-white/20 to-black/20 rounded-[2.8rem] blur-[1px]" />
              <div className="relative w-full h-full bg-[#050505] rounded-[2.7rem] p-[4px] shadow-2xl ring-1 ring-white/10 overflow-hidden">
                <div className="relative w-full h-full bg-black rounded-[2.4rem] overflow-hidden">
                  {mediaStream2 ? (
                    <video 
                      ref={videoRef2} 
                      autoPlay 
                      playsInline 
                      className="w-full h-full object-cover scale-[1.05] -translate-y-[1.5%]" 
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-2">
                        <MonitorSmartphone className="w-7 h-7 text-primary/40" />
                      </div>
                      <p className="text-[10px] text-muted-foreground/40">بانتظار البث الثاني...</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>





        </div>
      </div>
    </SlideShell>
  );
}
