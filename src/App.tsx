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
    const handleScroll = () => {
      const sections = [
        "beranda",
        "visi-misi",
        "teknologi",
        "layanan",
        "layanan-pendukung",
        "mengapa-spr",
        "kontak",
      ];
      
      const scrollPosition = window.scrollY + 160; // offset factor

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
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
