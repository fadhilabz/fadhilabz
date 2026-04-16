export default function Keahlian() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      {/* Hero Section: Portrait & Summary */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
        <div className="md:col-span-5 relative group">
          <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden shadow-2xl">
            <img alt="Potret profesional" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Potret profesional close-up dari seorang insinyur perangkat lunak pria yang percaya diri di ruang kerja modern dengan pencahayaan samping alami yang lembut dan latar belakang buram" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGOElYxPVKd5TdstjskHd_H-5kZPsNQLOauIWo6Ws-ibSW-GiqftGYziNIIXP4hgqcf7FvuWsXuYz3mYpdgVFma8HMTGQlO9HBiNWnObAevmakgK1lkC8WiLjrgl1L77S0Su_f72TyzS8kNiLY-lNKHqlxLuV-TU3fNSaS8diG6P-NReMJAbzL4NG9o5NnxpL2zc_DeuhpIhfi9XyoWklliJTQ9F7ldwcD4DWwjqLTp8k_I_tdsU5PRbjTgXYQUIcEG8Tjv32Ugys" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-container/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-outline-variant/20">
            <span className="text-primary font-headline font-bold text-4xl">12+</span>
          </div>
        </div>
        <div className="md:col-span-7 space-y-8">
          <div className="space-y-4">
            <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-widest uppercase">Lead Web Developer</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-tight">Merancang <span className="text-primary">masa depan</span> digital dengan presisi.</h1>
          </div>
          <p className="text-xl leading-relaxed text-on-surface-variant font-body max-w-2xl">
            Saya adalah seorang full-stack engineer yang berdedikasi untuk membangun aplikasi web berperforma tinggi dan terukur. Pendekatan saya memadukan ketelitian teknis dengan pemahaman mendalam tentang psikologi pengguna—memastikan setiap baris kode memiliki tujuan dan setiap piksel menyelesaikan masalah.
          </p>
          <div className="flex items-center space-x-6">
            <button className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold tracking-wide shadow-xl shadow-primary/20 hover:bg-primary-container transition-all">Unduh CV</button>
            <a className="text-on-surface font-semibold flex items-center group transition-all" href="#">
              Lihat Cerita
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Technical Expertise: Bento Grid */}
      <section className="mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface">Keahlian <br/>Teknis</h2>
          <p className="text-on-surface-variant max-w-sm">Spesialisasi dalam sistem throughput tinggi dan pengalaman frontend yang lancar menggunakan standar industri terbaru.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="md:col-span-2 bg-surface-container-low p-10 rounded-xl space-y-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">layers</span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-2">Arsitektur Frontend</h3>
              <p className="text-on-surface-variant">Keahlian mendalam dalam ekosistem React, Next.js, dan manajemen state yang canggih. Saya memprioritaskan UI/UX yang mengutamakan performa yang terasa taktil dan responsif.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-1.5 bg-surface-container-highest rounded-full text-xs font-semibold">React/Next.js</span>
              <span className="px-4 py-1.5 bg-surface-container-highest rounded-full text-xs font-semibold">Tailwind CSS</span>
              <span className="px-4 py-1.5 bg-surface-container-highest rounded-full text-xs font-semibold">TypeScript</span>
              <span className="px-4 py-1.5 bg-surface-container-highest rounded-full text-xs font-semibold">Framer Motion</span>
            </div>
          </div>
          {/* Backend */}
          <div className="bg-inverse-surface p-10 rounded-xl space-y-6 text-inverse-on-surface">
            <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary-fixed">database</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Sistem Backend</h3>
            <p className="opacity-80">Membangun infrastruktur API yang kokoh dan sistem terdistribusi menggunakan Node.js dan Rust. Fokus pada integritas data dan keamanan.</p>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-semibold">Node.js</span>
              <span className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-semibold">PostgreSQL</span>
              <span className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-semibold">GraphQL</span>
            </div>
          </div>
          {/* DevOps */}
          <div className="bg-surface-container-low p-10 rounded-xl space-y-6">
            <div className="w-12 h-12 rounded-lg bg-tertiary-container/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-tertiary-container">cloud_sync</span>
            </div>
            <h3 className="text-2xl font-bold text-on-surface mb-2">DevOps &amp; Cloud</h3>
            <p className="text-on-surface-variant">Merampingkan alur penerapan dan mengelola infrastruktur cloud di AWS dan GCP untuk rilis tanpa waktu henti (zero-downtime).</p>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="px-4 py-1.5 bg-surface-container-highest rounded-full text-xs font-semibold">Docker</span>
              <span className="px-4 py-1.5 bg-surface-container-highest rounded-full text-xs font-semibold">CI/CD</span>
              <span className="px-4 py-1.5 bg-surface-container-highest rounded-full text-xs font-semibold">Terraform</span>
            </div>
          </div>
          {/* Problem Solving */}
          <div className="md:col-span-2 bg-primary p-10 rounded-xl flex flex-col md:flex-row items-center gap-10">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-on-primary">Pola Pikir Logika-Utama</h3>
              <p className="text-on-primary/80">Saya tidak hanya menulis kode; saya merancang sistem. Setiap keputusan teknis dipertimbangkan terhadap tujuan bisnis dan skalabilitas pemeliharaan.</p>
            </div>
            <div className="flex-shrink-0 w-32 h-32 border-4 border-on-primary/20 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-5xl">psychology</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-32">
        <h2 className="text-4xl font-bold text-on-surface mb-16 text-center">Perjalanan Profesional</h2>
        <div className="space-y-px">
          {/* Item 1 */}
          <div className="group relative py-12 px-8 flex flex-col md:flex-row gap-8 items-start hover:bg-surface-container transition-colors rounded-xl">
            <div className="w-32 flex-shrink-0 text-primary font-bold tracking-tighter text-xl">2021 — SEKARANG</div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-on-surface mb-2">Senior Product Engineer</h3>
              <p className="text-on-surface-variant font-medium mb-4">MetaScale Digital — Berlin</p>
              <p className="text-on-surface-variant leading-relaxed max-w-3xl">Memimpin migrasi platform inti dari monolit lama ke arsitektur microservices terdistribusi. Mengurangi rata-rata waktu pemuatan halaman sebesar 45% dan meningkatkan kecepatan pengembang dengan memperkenalkan pustaka UI internal.</p>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-outline">north_east</span>
            </div>
          </div>
          {/* Item 2 */}
          <div className="group relative py-12 px-8 flex flex-col md:flex-row gap-8 items-start hover:bg-surface-container transition-colors rounded-xl">
            <div className="w-32 flex-shrink-0 text-on-surface-variant font-bold tracking-tighter text-xl">2018 — 2021</div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-on-surface mb-2">Full Stack Developer</h3>
              <p className="text-on-surface-variant font-medium mb-4">Vector Labs — New York</p>
              <p className="text-on-surface-variant leading-relaxed max-w-3xl">Merancang dasbor visualisasi data real-time untuk klien fintech. Mengelola tim yang terdiri dari 4 pengembang junior dan menetapkan praktik terbaik CI/CD di seluruh organisasi.</p>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-outline">north_east</span>
            </div>
          </div>
          {/* Item 3 */}
          <div className="group relative py-12 px-8 flex flex-col md:flex-row gap-8 items-start hover:bg-surface-container transition-colors rounded-xl">
            <div className="w-32 flex-shrink-0 text-on-surface-variant font-bold tracking-tighter text-xl">2015 — 2018</div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-on-surface mb-2">Junior Web Developer</h3>
              <p className="text-on-surface-variant font-medium mb-4">Spark Studio — San Francisco</p>
              <p className="text-on-surface-variant leading-relaxed max-w-3xl">Mengembangkan halaman pemasaran responsif dan mengintegrasikan solusi CMS untuk merek e-commerce dengan lalu lintas tinggi. Berfokus pada aksesibilitas dan optimasi SEO.</p>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-outline">north_east</span>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source & Contributions */}
      <section className="mb-32">
        <div className="bg-surface-container-high rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-on-surface">Sumber Terbuka &amp; Kontribusi</h2>
              <p className="text-on-surface-variant text-lg">Percaya pada web yang kolaboratif, saya aktif berkontribusi pada alat yang memberdayakan internet. Dari dokumentasi hingga fitur inti, saya senang memberikan kembali kepada komunitas.</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 bg-surface p-4 rounded-xl border-l-4 border-primary shadow-sm">
                  <span className="material-symbols-outlined text-primary">terminal</span>
                  <div>
                    <p className="font-bold text-on-surface">Kontributor Inti React</p>
                    <p className="text-sm text-on-surface-variant">Memperbaiki 12+ bug terkait hook perenderan konkuren.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-surface p-4 rounded-xl border-l-4 border-tertiary shadow-sm">
                  <span className="material-symbols-outlined text-tertiary">package_2</span>
                  <div>
                    <p className="font-bold text-on-surface">Tailwind UI Kit (Maintainer)</p>
                    <p className="text-sm text-on-surface-variant">Menerbitkan 20+ komponen yang digunakan oleh 5k+ pengembang.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-surface-container-low rounded-2xl flex flex-col items-center justify-center text-center p-6 space-y-2">
                <span className="text-3xl font-bold text-primary">500+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Komit / Tahun</span>
              </div>
              <div className="aspect-square bg-primary text-on-primary rounded-2xl flex flex-col items-center justify-center text-center p-6 space-y-2">
                <span className="text-3xl font-bold">12</span>
                <span className="text-xs font-bold uppercase tracking-widest opacity-80">Pustaka Diterbitkan</span>
              </div>
              <div className="aspect-square bg-surface rounded-2xl flex flex-col items-center justify-center text-center p-6 space-y-2 shadow-xl">
                <span className="text-3xl font-bold text-on-surface">850</span>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Bintang GitHub</span>
              </div>
              <div className="aspect-square bg-surface-container-highest rounded-2xl flex flex-col items-center justify-center text-center p-6 space-y-2">
                <span className="text-3xl font-bold text-on-surface">5</span>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Talk OSS Utama</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-32" id="contact">
        <div className="bg-primary py-20 px-12 rounded-3xl text-center text-on-primary space-y-8 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 to-transparent"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold font-headline">Mari Membangun Sesuatu yang Luar Biasa Bersama</h2>
            <p className="text-xl opacity-90 font-body">Sedang mencari pengembang berpengalaman untuk proyek Anda berikutnya? Mari berdiskusi tentang ide Anda.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <a className="w-full sm:w-auto px-10 py-5 bg-white text-primary font-bold rounded-2xl hover:bg-surface-container transition-all shadow-lg text-lg" href="mailto:hello@example.com">Kirim Email</a>
              <a className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-on-primary/30 text-on-primary font-bold rounded-2xl hover:bg-white/10 transition-all text-lg" href="#">Jadwalkan Konsultasi</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
