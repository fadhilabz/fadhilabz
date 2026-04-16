"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Proyek', href: '/proyek' },
    { name: 'Keahlian', href: '/keahlian' },
    { name: 'Kontak', href: '/kontak' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcf9f8]/80 dark:bg-[#1c1b1b]/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">
        <Link href="/" className="font-['Noto_Serif'] font-bold text-2xl tracking-tighter text-[#1c1b1b] dark:text-[#fcf9f8] hover:scale-105 hover:text-primary transition-all duration-300">Fadhil ABZ</Link>
        <div className="hidden lg:flex gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`relative transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
                  isActive 
                    ? "text-[#0052FF] font-bold after:w-full after:bg-[#0052FF] hover:text-[#003ec7]" 
                    : "text-[#1c1b1b] dark:text-[#fcf9f8] font-medium opacity-70 hover:opacity-100 hover:text-[#003ec7] after:w-0 after:bg-[#003ec7] hover:after:w-full"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden sm:flex gap-4 text-on-surface">
            <span className="material-symbols-outlined cursor-pointer hover:text-primary hover:-translate-y-1 hover:scale-110 transition-all duration-300">code</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary hover:-translate-y-1 hover:scale-110 transition-all duration-300">terminal</span>
          </div>
          <Link href="/kontak" className="hidden lg:inline-flex bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-xl font-['Manrope'] text-sm font-semibold tracking-wider uppercase hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-300">Hubungi Saya</Link>
          <button className="lg:hidden text-on-surface p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#fcf9f8] dark:bg-[#1c1b1b] border-t border-outline-variant/20 shadow-xl flex flex-col py-6 px-6 gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-semibold transition-colors ${isActive ? 'text-[#0052FF]' : 'text-[#1c1b1b] dark:text-[#fcf9f8] hover:text-[#003ec7]'}`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/kontak" onClick={() => setIsOpen(false)} className="mt-4 w-full text-center bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-4 rounded-xl font-semibold tracking-wider uppercase">Hubungi Saya</Link>
        </div>
      )}
    </nav>
  );
}
