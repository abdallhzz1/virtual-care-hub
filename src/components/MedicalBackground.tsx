import { useMemo } from "react";
import { motion } from "framer-motion";

export function MedicalBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 25,
        duration: 28 + Math.random() * 22, // 28s - 50s slow drift
        size: 2 + Math.random() * 5,
        drift: (Math.random() - 0.5) * 80,
      })),
    [],
  );

  const symbols = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        left: 5 + Math.random() * 90,
        top: 10 + Math.random() * 80,
        delay: Math.random() * 15,
        duration: 22 + Math.random() * 14,
        size: 18 + Math.random() * 22,
        rotate: Math.random() * 360,
      })),
    [],
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Hero gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Animated wave layers (very slow) */}
      <svg
        className="absolute inset-x-0 top-1/3 w-full h-[60vh] opacity-[0.07] dark:opacity-[0.1]"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wavegrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="var(--color-cyan)" />
          </linearGradient>
        </defs>
        <path fill="url(#wavegrad)">
          <animate
            attributeName="d"
            dur="24s"
            repeatCount="indefinite"
            values="
              M0,200 C320,280 720,120 1440,220 L1440,400 L0,400 Z;
              M0,220 C360,140 780,300 1440,180 L1440,400 L0,400 Z;
              M0,200 C320,280 720,120 1440,220 L1440,400 L0,400 Z"
          />
        </path>
        <path fill="url(#wavegrad)" opacity="0.6">
          <animate
            attributeName="d"
            dur="32s"
            repeatCount="indefinite"
            values="
              M0,260 C400,200 900,340 1440,240 L1440,400 L0,400 Z;
              M0,240 C460,320 880,180 1440,300 L1440,400 L0,400 Z;
              M0,260 C400,200 900,340 1440,240 L1440,400 L0,400 Z"
          />
        </path>
      </svg>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft pulsing blobs (slow breathing) */}
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ background: "oklch(0.7 0.18 230 / 0.28)" }}
        animate={{
          x: [0, 60, -20, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.6, 0.9, 0.7, 0.6],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ background: "oklch(0.78 0.14 210 / 0.28)" }}
        animate={{
          x: [0, -50, 30, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
          opacity: [0.5, 0.85, 0.65, 0.5],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        style={{ background: "oklch(0.8 0.12 195 / 0.18)" }}
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Long cinematic ECG line (slow scroll) */}
      <svg
        className="absolute bottom-16 left-0 right-0 w-full h-32 opacity-25 dark:opacity-35"
        viewBox="0 0 4000 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ecggrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0" />
            <stop offset="20%" stopColor="var(--color-primary)" stopOpacity="1" />
            <stop offset="80%" stopColor="var(--color-cyan)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--color-cyan)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          className="ecg-path-long"
          d="M0,60 L300,60 L320,60 L335,20 L350,100 L365,30 L380,60 L700,60 L720,60 L735,20 L750,100 L765,30 L780,60 L1100,60 L1120,60 L1135,20 L1150,100 L1165,30 L1180,60 L1500,60 L1520,60 L1535,20 L1550,100 L1565,30 L1580,60 L1900,60 L1920,60 L1935,20 L1950,100 L1965,30 L1980,60 L2300,60 L2320,60 L2335,20 L2350,100 L2365,30 L2380,60 L2700,60 L2720,60 L2735,20 L2750,100 L2765,30 L2780,60 L3100,60 L3120,60 L3135,20 L3150,100 L3165,30 L3180,60 L3500,60 L3520,60 L3535,20 L3550,100 L3565,30 L3580,60 L4000,60"
          stroke="url(#ecggrad)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Floating medical symbols (very subtle) */}
      {symbols.map((s) => (
        <motion.div
          key={s.id}
          className="absolute select-none"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            fontSize: s.size,
            color: "var(--color-primary)",
            opacity: 0.08,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [s.rotate, s.rotate + 20, s.rotate],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✚
        </motion.div>
      ))}

      {/* Floating particles (slow, cinematic) */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: "var(--color-primary)",
            opacity: 0.35,
            ["--drift" as string]: `${p.drift}px`,
            animation: `float-up-slow ${p.duration}s linear ${p.delay}s infinite`,
            boxShadow: "0 0 12px var(--color-primary)",
          }}
        />
      ))}

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, oklch(0 0 0 / 0.15) 100%)",
        }}
      />
    </div>
  );
}
