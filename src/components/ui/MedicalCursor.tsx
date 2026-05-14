import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export function MedicalCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ultra-fast spring for the inner dot (near-instant)
  const dotConfig = { damping: 40, stiffness: 2000 };
  const dotX = useSpring(mouseX, dotConfig);
  const dotY = useSpring(mouseY, dotConfig);

  // High-performance spring for the outer ring
  const ringConfig = { damping: 50, stiffness: 800 };
  const ringX = useSpring(mouseX, ringConfig);
  const ringY = useSpring(mouseY, ringConfig);



  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.documentElement.classList.add("custom-cursor-active");

    // Aggressive cursor hiding
    const style = document.createElement("style");
    style.id = "hide-default-cursor";
    style.innerHTML = `
      * { cursor: none !important; }
      html, body { cursor: none !important; }
    `;
    document.head.appendChild(style);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      const existingStyle = document.getElementById("hide-default-cursor");
      if (existingStyle) document.head.removeChild(existingStyle);
      
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };

  }, [mouseX, mouseY, isVisible]);

  if (typeof window === "undefined") return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] hidden md:block">
      {/* Outer Ring */}
      <motion.div
        style={{
          left: ringX,
          top: ringY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          width: isHovering ? 60 : 34,
          height: isHovering ? 60 : 34,
          borderColor: isHovering ? "var(--color-primary)" : "var(--color-primary)",
          borderWidth: isHovering ? 2 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        className="absolute rounded-full border border-primary/40 backdrop-blur-[1px] shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.1)]"
      />

      {/* Inner Dot / Plus Icon */}
      <motion.div
        style={{
          left: dotX,
          top: dotY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          width: isHovering ? 30 : 6,
          height: isHovering ? 30 : 6,
          backgroundColor: isHovering ? "rgba(var(--color-primary-rgb), 0.1)" : "var(--color-primary)",
          opacity: isVisible ? 1 : 0,
        }}
        className="absolute rounded-full flex items-center justify-center border border-primary/20"
      >
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0, rotate: 90 }}
            >
              <Plus className="w-5 h-5 text-primary" strokeWidth={3} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

