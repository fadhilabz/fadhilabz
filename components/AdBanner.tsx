"use client";

import { useEffect, useRef } from "react";

export default function AdBanner() {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerId = "container-de8a17d74f655c51dc4b29339ac82642";
    
    // Cegah injeksi ganda jika script sudah dimuat
    if (!document.getElementById(`script-${containerId}`)) {
      const script = document.createElement("script");
      script.id = `script-${containerId}`;
      script.src = "https://pl29163724.profitablecpmratenetwork.com/de8a17d74f655c51dc4b29339ac82642/invoke.js";
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      
      if (adRef.current) {
        adRef.current.appendChild(script);
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center py-8 w-full max-w-screen-2xl mx-auto overflow-hidden">
      {/* Container ini wajib menggunakan ID bawaan dari Adsterra */}
      <div id="container-de8a17d74f655c51dc4b29339ac82642" ref={adRef} className="min-h-[90px] min-w-[320px]"></div>
    </div>
  );
}
