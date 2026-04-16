export default function Kontak() {
  return (
    <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Context & Info */}
        <div className="lg:col-span-5 space-y-12">
          <section>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-tertiary/10 text-tertiary rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
              </span>
              <span className="text-xs font-bold tracking-wider uppercase">Tersedia untuk proyek baru</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] text-on-surface mb-8">
              Hubungi <span className="text-primary">Saya</span>.
            </h1>
            <p className="text-xl text-secondary leading-relaxed max-w-md">
              Mari bangun sesuatu yang hebat bersama. Saya terbuka untuk proyek freelance atau kolaborasi teknis.
            </p>
          </section>
          <section className="space-y-8">
            <div className="group">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-outline mb-2">Email Utama</p>
              <a className="text-2xl font-semibold text-on-surface group-hover:text-primary transition-colors" href="mailto:hello@devportfolio.com">
                hello@devportfolio.com
              </a>
            </div>
            <div className="group">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-outline mb-2">Lokasi</p>
              <div className="flex items-center space-x-2 text-2xl font-semibold text-on-surface">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </section>
          <section className="pt-8">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-outline mb-6">Media Sosial</p>
            <div className="flex space-x-4">
              <a className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary transition-all" href="#">
                <span className="material-symbols-outlined">code</span>
              </a>
              <a className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary transition-all" href="#">
                <span className="material-symbols-outlined">work</span>
              </a>
              <a className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary transition-all" href="#">
                <span className="material-symbols-outlined">share</span>
              </a>
            </div>
          </section>
        </div>
        {/* Right Column: Form & Visual */}
        <div className="lg:col-span-7">
          <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-sm border border-outline-variant/10">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="text-xs font-bold tracking-widest uppercase text-outline mb-2 block" htmlFor="name">Nama Lengkap</label>
                  <input className="w-full bg-surface-container-high border-0 border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 px-0 py-3 transition-all placeholder:text-outline/40" id="name" placeholder="John Doe" type="text" />
                </div>
                <div className="relative group">
                  <label className="text-xs font-bold tracking-widest uppercase text-outline mb-2 block" htmlFor="email">Alamat Email</label>
                  <input className="w-full bg-surface-container-high border-0 border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 px-0 py-3 transition-all placeholder:text-outline/40" id="email" placeholder="john@example.com" type="email" />
                </div>
              </div>
              <div className="relative group">
                <label className="text-xs font-bold tracking-widest uppercase text-outline mb-2 block" htmlFor="message">Pesan Anda</label>
                <textarea className="w-full bg-surface-container-high border-0 border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 px-0 py-3 transition-all resize-none placeholder:text-outline/40" id="message" placeholder="Ceritakan tentang proyek Anda..." rows={5}></textarea>
              </div>
              <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-5 rounded-xl font-label text-sm font-black tracking-[0.2em] uppercase hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center space-x-3 group" type="submit">
                <span>Kirim Pesan</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">send</span>
              </button>
            </form>
          </div>
          {/* Map Decoration */}
          <div className="mt-8 relative h-48 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group">
            <img className="w-full h-full object-cover" data-alt="Minimalist abstract map of Jakarta city grid with clean lines and subtle blue highlights for a tech portfolio aesthetic" data-location="Jakarta" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZRaQZRhKQPNo6QYtfwRUx7qRThE6si-NBryp5jAOQx2tZKTxXH8_1gUdQnRlL3ERZLN1R5JTTnFc0_7ffJdwIW4tuU5W-UIel5doPR1BbmeEzLnRkYbjpJc0f7MMQMxNGrj8c25LpeLUrp_NT3Xb7dxnpfl_QxL2ANEa98xTEap9FIf2vLfZPioZqs_GOgpt2nV1J0vCK7bv-ulLBMlxaK_FuaGBEwOOlZaQdwsU3wxkuiv216ep6ImL9SnIPVc1M87aTnaDa8t4" />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-4 left-4 bg-background px-4 py-2 rounded-full text-xs font-bold tracking-tight shadow-sm">
              DKI Jakarta, Indonesia
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
