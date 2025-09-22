"use client";
import { aboutContent } from "@/constants/content";

export default function AboutSection() {
  return (
    <section className="relative w-full flex items-center justify-center py-20 px-6 text-center bg-[url('/bg.svg')] bg-no-repeat bg-cover bg-center">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-gray-500 uppercase tracking-wide font-semibold">
          {aboutContent.subtitle}
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
          {aboutContent.title}
        </h2>
        <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
          {aboutContent.description}
        </p>
      </div>
    </section>
  );
}

// "use client";

// export default function AboutSection() {
//   return (
//     <section
//       className="relative w-full flex items-center justify-center py-20 px-6 text-center"
//       style={{
//         backgroundImage: "url('/bg.svg')",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="max-w-3xl mx-auto">
//         {/* Subtitle */}
//         <h3 className="text-gray-500 uppercase tracking-wide font-semibold">
//           Who We Are
//         </h3>

//         {/* Main Title */}
//         <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
//           A Sign Of The <span className="text-green-500">Success</span>
//         </h2>

//         {/* Paragraph */}
//         <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
//           Established in 2013,{" "}
//           <span className="font-semibold text-green-500">VSign</span>
//           is a custom signage design and manufacturing company that brings
//           precision, quality and perfection to every project. Our comprehensive
//           signage solutions help brands create powerful brand experiences that
//           inspire, connect and stand out.
//         </p>
//       </div>
//     </section>
//   );
// }
