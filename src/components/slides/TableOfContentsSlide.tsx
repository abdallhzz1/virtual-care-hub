import { motion } from "framer-motion";
import { slides } from "@/data/slides";
import { SlideShell } from "../SlideShell";

export function TableOfContentsSlide() {
  // Remove the first slide (cover) and current slide (toc) from the table
  const contentSlides = slides.slice(2); // Skip cover (0) and toc (1)

  return (
    <SlideShell>
      <div className="w-full h-full flex flex-col items-center justify-end px-4" dir="rtl">
        <div className="w-full max-w-3xl">
          <div className="overflow-hidden rounded-lg border border-primary/30">
            {/* Table Body */}
            <div>
              {/* Table Header as first row */}
              <div className="grid grid-cols-12 bg-gradient-to-r from-primary/20 to-primary/10 border-b border-primary/30">
                <div className="col-span-3 p-4 text-right font-bold text-primary text-lg">
                  العنوان
                </div>
                <div className="col-span-6 p-4 text-center font-bold text-primary text-lg">
                  فهرس العرض
                </div>
                <div className="col-span-3 p-4 text-center font-bold text-primary text-lg">
                  رقم الشريحة
                </div>
              </div>

              {contentSlides.map((slide, idx) => {
                const slideNumber = idx + 3; // Start from slide 3
                const isEven = idx % 2 === 0;
                // Show "الخاتمة" instead of "تم بحمد الله" in the table
                const displayTitle = slide.id === "thanks" ? "الخاتمة" : slide.title;

                return (
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className={`grid grid-cols-12 border-b border-primary/10 hover:bg-primary/5 transition-colors ${
                      isEven ? "bg-white/30 dark:bg-white/5" : "bg-transparent"
                    }`}
                  >
                    <div className="col-span-3 p-4 flex items-center text-foreground font-semibold text-base">
                      {displayTitle}
                    </div>
                    <div className="col-span-6 p-4 flex items-center justify-center text-center text-muted-foreground text-base">
                    </div>
                    <div className="col-span-3 p-4 flex items-center justify-center text-center font-bold text-primary text-base">
                      {slideNumber}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
