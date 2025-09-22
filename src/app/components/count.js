"use client";
import { stats } from "@/constants/stats";

export default function CounterSection() {
  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.id}>
            <h3 className="text-3xl md:text-4xl font-bold text-green-500">
              {stat.value}
              {stat.suffix ?? "+"}
            </h3>
            <p className="mt-2 text-sm md:text-base text-black">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// "use client";
// import { useEffect, useState, useRef } from "react";
// import { stats } from "@/constants/stats";

// export default function CounterSection() {
//   const [counts, setCounts] = useState(stats.map(() => 0));
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   // Intersection Observer to trigger animation
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   // Smooth counter using requestAnimationFrame
//   useEffect(() => {
//     if (!isVisible) return;

//     const duration = 2000; // 2 seconds
//     const startTime = performance.now();

//     function animate(now) {
//       const elapsed = now - startTime;
//       const progress = Math.min(elapsed / duration, 1);

//       setCounts(stats.map((stat) => Math.floor(stat.value * progress)));

//       if (progress < 1) requestAnimationFrame(animate);
//     }

//     requestAnimationFrame(animate);
//   }, [isVisible]);

//   return (
//     <section ref={sectionRef} className="relative py-16">
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//         {stats.map((stat, index) => (
//           <div key={stat.id}>
//             <h3 className="text-3xl md:text-4xl font-bold text-green-500">
//               {counts[index]}
//               {stat.suffix ?? "+"}
//             </h3>
//             <p className="mt-2 text-sm md:text-base text-black">{stat.label}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
