import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VisiMisi from "./components/VisiMisi";
import Teknologi from "./components/Teknologi";
import Layanan from "./components/Layanan";
import LayananPendukung from "./components/LayananPendukung";
import MengapaMemilih from "./components/MengapaMemilih";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const NAVBAR_HEIGHT = 80;
    const LAST = "kontak";

    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      const docHeight = document.documentElement.scrollHeight;
      const scrollPos = scrollY + NAVBAR_HEIGHT + 1;

      if (scrollY + innerHeight >= docHeight - 10) {
        setActiveSection(LAST);
        return;
      }

      let current: string | null = null;

      for (const el of document.querySelectorAll<HTMLElement>("section, footer")) {
        const id = el.id;
        if (id && el.offsetTop <= scrollPos) {
          current = id;
        }
      }

      setActiveSection(current || "beranda");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-amber-500 selection:text-slate-950 overflow-x-hidden antialiased">
      {/* Dynamic Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Corporate Landing Sections */}
      <main>
        <Hero />
        <VisiMisi />
        <Teknologi />
        <Layanan />
        <LayananPendukung />
        <MengapaMemilih />
      </main>

      {/* Footer and Interactive Inquiry Intake */}
      <Footer />
    </div>
  );
}
