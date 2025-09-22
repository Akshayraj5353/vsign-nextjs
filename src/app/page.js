import Image from "next/image";
import Hero from "./components/hero";
import CounterSection from "./components/count";
import AboutSection from "./components/aboutsection";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/bg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Hero />
      <AboutSection />
      <CounterSection />
    </div>
  );
}
