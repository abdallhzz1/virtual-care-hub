import { useMemo } from "react";
import { motion } from "framer-motion";

export function MedicalBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 12,
        size: 2 + Math.random() * 4,
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

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft blobs */}
      <motion.div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: "oklch(0.7 0.18 230 / 0.25)" }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: "oklch(0.78 0.14 210 / 0.25)" }}
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ECG line */}
      <svg
        className="absolute bottom-10 left-0 right-0 w-full h-24 opacity-20 dark:opacity-30"
        viewBox="0 0 2000 100"
        preserveAspectRatio="none"
      >
        <path
          className="ecg-path"
          d="M0,50 L200,50 L220,50 L235,20 L250,80 L265,30 L280,50 L500,50 L520,50 L535,20 L550,80 L565,30 L580,50 L800,50 L820,50 L835,20 L850,80 L865,30 L880,50 L1100,50 L1120,50 L1135,20 L1150,80 L1165,30 L1180,50 L1400,50 L1420,50 L1435,20 L1450,80 L1465,30 L1480,50 L1700,50 L1720,50 L1735,20 L1750,80 L1765,30 L1780,50 L2000,50"
          stroke="var(--color-primary)"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: "var(--color-primary)",
            opacity: 0.3,
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
            boxShadow: "0 0 8px var(--color-primary)",
          }}
        />
      ))}
    </div>
  );
}
