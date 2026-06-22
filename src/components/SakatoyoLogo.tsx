import React from "react";

interface SakatoyoLogoProps {
  className?: string;
}

export default function SakatoyoLogo({ className = "h-12 w-12" }: SakatoyoLogoProps) {
  return (
    <svg
      viewBox="0 0 500 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Outer shiny gold ring gradient */}
        <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="15%" stopColor="#fbbf24" /> {/* amber-400 */}
          <stop offset="50%" stopColor="#f59e0b" /> {/* amber-500 */}
          <stop offset="85%" stopColor="#d97706" /> {/* amber-600 */}
          <stop offset="100%" stopColor="#78350f" /> {/* amber-900 */}
        </linearGradient>

        {/* Golden mountain gradient (front-right peak) */}
        <linearGradient id="goldMountain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" /> {/* yellow-200 */}
          <stop offset="35%" stopColor="#fbbf24" /> {/* amber-400 */}
          <stop offset="70%" stopColor="#d97706" /> {/* amber-650 */}
          <stop offset="100%" stopColor="#92400e" /> {/* amber-800 */}
        </linearGradient>

        {/* Charcoal/dark slate mountain gradient (back-left peak) */}
        <linearGradient id="charcoalMountain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#64748b" /> {/* slate-500 */}
          <stop offset="50%" stopColor="#334155" /> {/* slate-700 */}
          <stop offset="100%" stopColor="#0f172a" /> {/* slate-900 */}
        </linearGradient>

        {/* Dark backplate background gradient */}
        <linearGradient id="bgPlate" x1="0%" y1="50%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" /> {/* slate-800 */}
          <stop offset="100%" stopColor="#0f172a" /> {/* slate-900 */}
        </linearGradient>
      </defs>

      {/* Main circle backplate */}
      <circle 
        cx="250" 
        cy="250" 
        r="230" 
        fill="url(#bgPlate)" 
        stroke="url(#goldRing)" 
        strokeWidth="11" 
      />

      {/* Left Back Peak (Charcoal Dark Group) */}
      <path
        d="M 50 350 L 160 220 L 225 285 L 295 190 L 400 320"
        fill="none"
        stroke="transparent"
      />
      <path
        d="M 45 420 
           L 150 210 
           L 240 310 
           L 240 420 Z"
        fill="url(#charcoalMountain)"
      />

      {/* Right Front Peak (Gold Gradient) */}
      {/* Outer cutout mask border to create the beautiful negative space slit in the image */}
      <path
        d="M 205 425 
           L 245 50 
           L 472 270 
           L 472 425 Z"
        fill="url(#goldMountain)"
        stroke="#1e293b"
        strokeWidth="12"
        strokeLinejoin="round"
      />

      {/* Lower circular cap backdrop to highlight text crispness */}
      <path 
        d="M 12 360 Q 250 330 488 360 L 488 488 L 12 488 Z" 
        fill="#1a2333" 
        opacity="0.95" 
      />

      {/* Text: SAKATOYO PRIMA */}
      <text
        x="250"
        y="332"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="33"
        fontWeight="800"
        fontFamily="'Inter', 'Outfit', sans-serif"
        letterSpacing="2.2"
      >
        SAKATOYO PRIMA
      </text>

      {/* Text: RESOURCES */}
      <text
        x="250"
        y="383"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="33"
        fontWeight="800"
        fontFamily="'Inter', 'Outfit', sans-serif"
        letterSpacing="2.6"
      >
        RESOURCES
      </text>
    </svg>
  );
}
