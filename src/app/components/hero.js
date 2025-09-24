"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import TextType from "./TextType"; // from shadcn added component
import { heroContent } from "@/constants/content";

export default function Hero() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 400], [0, -40]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/drone-footage1.jpg"
        >
          <source src="/drone-footage1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Typing Text (Top-Left) */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-24 left-6 md:left-16 z-10 max-w-3xl"
      >
        <TextType
          as="h1"
          text={[
            "We Build Icons.",
            "Signage That Defines Presence.",
            "Hyderabad’s No.1 Signage Partner.",
            "Signs that shine brighter, last longer.",
          ]}
          typingSpeed={60}
          pauseDuration={4000}
          showCursor={true}
          cursorCharacter="|"
          className="text-4xl md:text-6xl font-light tracking-wide text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"
          textColors={["#FFFFFF"]}
        />
      </motion.div>

      {/* Glassmorphic CTA Button (Bottom-Right) */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 right-6 md:right-10 z-10"
      >
        <button className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold shadow-lg hover:scale-105 transition">
          {heroContent.cta}
        </button>
      </motion.div>
    </section>
  );
}

// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const videos = ["/drone-footage1.mp4"];

// export default function HeroCaption() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(
//       () => setIndex((prev) => (prev + 1) % videos.length),
//       6000
//     );
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-full px-4 md:px-8">
//       {/* Video */}
//       <div className="relative mx-auto max-w-screen-xl h-[70vh] overflow-hidden rounded-2xl shadow-xl">
//         <AnimatePresence mode="wait">
//           <motion.video
//             key={index}
//             className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
//             autoPlay
//             muted
//             loop
//             playsInline
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <source src={videos[index]} type="video/mp4" />
//           </motion.video>
//         </AnimatePresence>

//         {/* Caption Bar */}
//         <div className="absolute bottom-0 w-full bg-black/60 text-center py-4">
//           <h1 className="text-2xl md:text-4xl font-bold text-white whitespace-nowrap">
//             <span className="text-green-400 font-[var(--font-dancing)]">
//               Hyderabad No.1
//             </span>{" "}
//             Signage Company
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// }
