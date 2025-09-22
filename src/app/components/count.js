"use client";
import { useEffect, useState, useRef } from "react";
import { stats } from "@/constants/stats";

export default function CounterSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const frameRate = 30;
    const totalFrames = Math.round((duration / 1000) * frameRate);

    stats.forEach((stat, index) => {
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(stat.value * progress);
          return newCounts;
        });
        if (frame === totalFrames) clearInterval(counter);
      }, duration / totalFrames);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={stat.id}>
            <h3 className="text-3xl md:text-4xl font-bold text-green-500">
              {counts[index]}
              {stat.suffix ? stat.suffix : "+"}
            </h3>
            <p className="mt-2 text-sm md:text-base text-black">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
