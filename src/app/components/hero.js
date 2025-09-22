"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroContent } from "@/constants/content";

const videos = ["/drone-footage1.mp4"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % videos.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4 md:px-8">
        {/* Video */}
        <div className="relative w-full h-[40vh] md:h-[60vh] flex justify-center items-center overflow-hidden rounded-xl shadow-lg">
          <AnimatePresence mode="wait">
            <motion.video
              key={index}
              className="h-full md:w-full object-cover rounded-xl"
              autoPlay
              muted
              loop
              playsInline
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <source src={videos[index]} type="video/mp4" />
            </motion.video>
          </AnimatePresence>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 whitespace-nowrap">
            {heroContent.heading}
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-md">
            {heroContent.subtext}
          </p>
          <button className="mt-6 px-8 py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition w-fit mx-auto md:mx-0">
            {heroContent.cta}
          </button>
        </div>
      </div>
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
