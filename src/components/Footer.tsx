import React from "react";
import { 
  kontakInfo 
} from "../data";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ArrowUp,
  ExternalLink
} from "lucide-react";
import SakatoyoLogo from "./SakatoyoLogo";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="kontak" className="bg-slate-950 border-t border-slate-900 pt-20 pb-12 text-slate-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Main contact section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Column 1: Company Logo and Description (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <SakatoyoLogo className="h-12 w-12" />
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg text-white uppercase tracking-wider">
                  PT. SAKATOYO PRIMA
                </span>
                <span className="font-mono text-[9px] tracking-[0.24em] text-amber-500 leading-none font-bold">
                  RESOURCES (SPR)
                </span>
              </div>
            </div>
            
            <p className="font-sans font-light text-slate-400 text-sm leading-relaxed max-w-md">
              Penyedia solusi rekayasa, pengembangan teknologi proses, dan komisioning fasilitas penambangan dan pengolahan mineral terpadu. Didukung oleh praktisi mineral terkemuka di Indonesia.
            </p>
          </div>

          {/* Column 2 & 3: Address & Contact Details (Right 7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Address Info */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-500">
                Alamat Kantor Pusat
              </h3>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-slate-900 rounded-lg text-amber-500 border border-slate-800/80 flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <p className="font-sans text-sm text-slate-300 font-light leading-relaxed">
                    {kontakInfo.address}
                  </p>
                  <span className="inline-block text-xs text-amber-500 font-medium">
                    {kontakInfo.region}
                  </span>
                </div>
              </div>
            </div>

            {/* Hubungi Kami / Email & Website Info */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-500">
                Hubungi Kami
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-slate-900 rounded-lg text-amber-500 border border-slate-800/80 flex-shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                      Telepon
                    </span>
                    <a href={`tel:${kontakInfo.phone}`} className="font-display font-bold text-sm text-white hover:text-amber-400 transition-colors">
                      {kontakInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-slate-900 rounded-lg text-amber-500 border border-slate-800/80 flex-shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                      Email
                    </span>
                    <a href={`mailto:${kontakInfo.email}`} className="font-sans text-sm text-slate-300 hover:text-amber-400 transition-colors block font-light">
                      {kontakInfo.email}
                    </a>
                  </div>
                </div>

                {/* Portal Website */}
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-slate-900 rounded-lg text-amber-500 border border-slate-800/80 flex-shrink-0">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                      Website Resmi
                    </span>
                    <a href={kontakInfo.rawWebsite} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-amber-500 hover:text-amber-400 font-bold transition-all flex items-center">
                      {kontakInfo.website} <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Real Bottom Footer */}
        <div className="pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
            <span className="font-display font-extrabold text-xs text-white uppercase tracking-wider">
              PT. SAKATOYO PRIMA RESOURCES
            </span>
            <p className="font-sans text-xs text-slate-500 font-light">
              &copy; {new Date().getFullYear()} PT. Sakatoyo Prima Resources. All Rights Reserved. Bandung, Indonesia.
            </p>
          </div>

          <button
            onClick={handleScrollToTop}
            type="button"
            className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800/80 hover:border-amber-500/30 text-amber-500 rounded-xl shadow-md transition-all duration-200 cursor-pointer"
            title="Kembali ke Atas"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
