import Link from 'next/link';
import AdBanner from './AdBanner';

export default function Footer() {
  return (
    <>
      <div className="w-full bg-surface dark:bg-background">
        <AdBanner />
      </div>
      <footer className="bg-[#f0eded] dark:bg-[#1c1b1b] w-full py-16 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="font-['Manrope'] text-sm tracking-wide text-[#1c1b1b] dark:text-[#fcf9f8] opacity-60 mb-8 md:mb-0">
          © 2024 Editorial Code. Dibangun dengan Presisi.
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <Link className="font-['Manrope'] text-sm tracking-wide text-[#1c1b1b] dark:text-[#fcf9f8] opacity-60 hover:underline hover:opacity-100 transition-opacity" href="#">Kode Sumber</Link>
          <Link className="font-['Manrope'] text-sm tracking-wide text-[#1c1b1b] dark:text-[#fcf9f8] opacity-60 hover:underline hover:opacity-100 transition-opacity" href="#">LinkedIn</Link>
          <Link className="font-['Manrope'] text-sm tracking-wide text-[#1c1b1b] dark:text-[#fcf9f8] opacity-60 hover:underline hover:opacity-100 transition-opacity" href="#">Resume</Link>
        </div>
      </div>
    </footer>
  );
}
