import React from "react";
import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "PT Sakatoyo Prima Resources (SPR)",
  description: "Profil Perusahaan PT Sakatoyo Prima Resources (SPR) - Solusi Rekayasa Proses Penambangan, Pengolahan Mineral, Metalurgi, dan Sumber Daya Berkelanjutan",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-slate-950 text-slate-100 antialiased overflow-x-hidden selection:bg-amber-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
