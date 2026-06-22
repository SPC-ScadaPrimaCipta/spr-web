import React from "react";
import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "PT Sakatoyo Prima Resources (SPR)",
  description: "Profil Perusahaan PT Sakatoyo Prima Resources (SPR) - Solusi Rekayasa Proses Penambangan, Pengolahan Mineral, Metalurgi, dan Sumber Daya Berkelanjutan",
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
