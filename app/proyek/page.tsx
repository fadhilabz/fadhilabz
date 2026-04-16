export default function Proyek() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      {/* Bagian Hero / Header */}
      <header className="mb-20">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
            Karya <span className="italic text-primary">Pilihan</span>.
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed font-body max-w-2xl">
            Galeri terkurasi dari tantangan rekayasa dan solusi digital. Dari backend yang skalabel hingga antarmuka pengguna yang mulus, setiap baris kode memiliki tujuan.
          </p>
        </div>
      </header>
      {/* Bagian Filter */}
      <section className="flex flex-wrap items-center gap-4 mb-16">
        <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-semibold text-sm transition-all">Semua</button>
        <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-sm hover:bg-secondary-container transition-all">Frontend</button>
        <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-sm hover:bg-secondary-container transition-all">Backend</button>
        <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-sm hover:bg-secondary-container transition-all">Full-stack</button>
      </section>
      {/* Grid Proyek */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
        {/* Kartu Proyek 1: Unggulan Besar */}
        <article className="group lg:col-span-2 flex flex-col md:flex-row gap-8 bg-surface-container-low rounded-xl overflow-hidden p-8 transition-all hover:bg-surface-container">
          <div className="w-full md:w-3/5 overflow-hidden rounded-lg">
            <img alt="Thumbnail Proyek" className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105" data-alt="clean dark mode dashboard interface with neon blue data visualizations and sleek glassmorphism panels on a high-resolution display" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASEl5ymuVcVIK5rQaORt-vfZVXbIiVOQhsN83YU2LJtS5DCt8S_KrC0QLLogDg8OwaN54CAzXjxN78IULLCudpBG1OdVznqXS1wwE2hlo7HIxNcy5aRttbO8gpWRv4EvCwhf00OWtUB9z7fq3VVo98tQInT42OuiCjfWz_QbXj8gFblUkK3LD2w7hFxJu-DC-kTWrYN6LSn6cinY2a05b9HBBzS5696xalyS2JQ1DehStq2Yf0-8G6ZLSCWTKksp96UpyugqmFhCQ" />
          </div>
          <div className="w-full md:w-2/5 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-secondary-container rounded-full text-[10px] font-bold tracking-widest uppercase text-on-secondary-container">Full-stack</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 tracking-tight">Nova Analytics Cloud</h3>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Mendesain ulang seluruh pipa pemrosesan data untuk menangani 10rb+ aliran bersamaan. Mengatasi masalah latensi dengan menerapkan lapisan caching berbasis Redis.
            </p>
            <div className="font-mono text-xs text-primary font-bold mb-8">
              Next.js • TypeScript • Go • PostgreSQL
            </div>
            <div>
              <a className="inline-flex items-center text-on-surface font-bold border-b-2 border-primary pb-1 group-hover:border-b-4 transition-all" href="#">
                Lihat Studi Kasus
                <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </article>
        {/* Kartu Proyek 2 */}
        <article className="group flex flex-col">
          <div className="relative overflow-hidden rounded-xl bg-surface-container mb-6">
            <img alt="Thumbnail Proyek" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110" data-alt="minimalist architectural website design featuring large serif typography and plenty of white space with high-end photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN5XPKu6XIlMGggb-SzdcD3SHnPWyYPrwORqVLoFq_7xwuhZpKvyyQOccMDNjVk7Y67rzY4FT4ivbHK9Z_BpjlHyZ9WzFcypimBmZwXvaLoN0TGHBeg_cFGThZmiMlgeEnaChGKzKHYaMvpHTGwD6V-io-RLSabL6Gza9aAa8V38n2gt00IdvpjvGMz1wHXf_DfNb43LGhhAk6nxRil3n86SWWIKuIh-HX62dU2uNZOylaCoE8RjAzmwJnNb5GY5M7z7XzMRi_7gw" />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="px-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Frontend</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 tracking-tight">Atelier Portfolio</h3>
            <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
              Portofolio berperforma tinggi untuk firma arsitektur mewah dengan fokus pada transisi Framer Motion yang mulus dan optimasi gambar.
            </p>
            <div className="font-mono text-[11px] text-primary font-bold uppercase tracking-tighter">
              React • Tailwind • Framer Motion
            </div>
          </div>
        </article>
        {/* Kartu Proyek 3 */}
        <article className="group flex flex-col">
          <div className="relative overflow-hidden rounded-xl bg-surface-container mb-6">
            <img alt="Thumbnail Proyek" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110" data-alt="abstract visualization of server rack nodes with glowing fiber optic cables in a deep blue and violet darkroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFYr5lDCJDx51Vuu9TGPZUpvX9DeKdpPR2apYUO9ud9O2Hu-Qmg_Twxva5b1UQGrsm1albieKGtd4oT4Ct-JeqvfJDkVWLa6lsundxvXQz_EG09nOmCDtonF-QZ7Qn4t953bK_PDor6f0lKUGsdDmhsxC42HZcl1I6ooavtzXM2E95LAFlZpTxhjVBLteSkMYoY3NrePkMmwF2isvT0dmIojWbnBin1ay3MJD88eXbcuPHi-ofJDkH21dPX4h8QBzWh55mQsVNF5o" />
          </div>
          <div className="px-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Backend</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 tracking-tight">Sentinel Auth Engine</h3>
            <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
              Penyedia OAuth2 / OpenID Connect aman yang dibangun dengan ketahanan tinggi. Dilengkapi autentikasi biometrik dan geo-fencing.
            </p>
            <div className="font-mono text-[11px] text-primary font-bold uppercase tracking-tighter">
              Node.js • Prisma • Redis • Docker
            </div>
          </div>
        </article>
        {/* Kartu Proyek 4 */}
        <article className="group flex flex-col lg:col-span-2 md:flex-row-reverse gap-8 bg-surface-container-low rounded-xl overflow-hidden p-8 transition-all hover:bg-surface-container">
          <div className="w-full md:w-3/5 overflow-hidden rounded-lg">
            <img alt="Thumbnail Proyek" className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105" data-alt="colorful isometric design of a mobile app interface for social networking with vibrant 3d elements and clean cards" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-Eik6XbkKrgAKcUnQiz-Au9hcDdVEf4h6z_J3DaSzjOeiVBkZoO-rc1Kvg-npSs8_YlUe-ag4YbL5UVIUx5pUXS8_tgNJLHpf5rcWoZUaMY3OUorMarOEbtEBZjPYLE4XLOSWyAOxwo6-A1qmwJzdqizfkFeZjwcp2t37wGa8gL_wc5ooE9kHHqab30ILJ0Gz7P9_E25XWDvs9UHwtwX7dx_LKynS7x6ZySsLXa8PYenH4ErwG4ZBoDgd2LgZ1q_eyw6LV5oLg9c" />
          </div>
          <div className="w-full md:w-2/5 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-secondary-container rounded-full text-[10px] font-bold tracking-widest uppercase text-on-secondary-container">Full-stack</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 tracking-tight">Kinetic Social</h3>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Membangun ruang kerja kolaboratif waktu nyata untuk tim kreatif. Mengintegrasikan pelacakan kursor langsung menggunakan WebSockets.
            </p>
            <div className="font-mono text-xs text-primary font-bold mb-8">
              React • Supabase • Socket.io • Vite
            </div>
            <div>
              <a className="inline-flex items-center text-on-surface font-bold border-b-2 border-primary pb-1 group-hover:border-b-4 transition-all" href="#">
                Jelajahi Proyek
                <span className="material-symbols-outlined ml-2 text-sm">open_in_new</span>
              </a>
            </div>
          </div>
        </article>
        {/* Kartu Proyek 5 */}
        <article className="group flex flex-col">
          <div className="relative overflow-hidden rounded-xl bg-surface-container mb-6">
            <img alt="Thumbnail Proyek" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110" data-alt="closeup of a mechanical keyboard and dual monitor setup showing colorful code editor with a dark theme and glowing accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqujezfFoNRQbTxZo1mla4dmzwMncsQq10m3YLZ-0hs8VFH_bQaLez4txyx_ic-jyPeb1PG7dzZpUbfwpFJwlEgUZqRbZZouc0BETtwJLnBuWzP7oPowT613iFtbWL7q62gyTjBXOhCEeAUqPDom_OegNejEjWGlFEfB_DraJAV-_O6VQxFM__4rF9I91ceu4sGau6HeNTeAtnQ1WXjxFhPVzd5pgD1Jy3P3HtHjCCTC2E1Ai7ABIOoqg0tpVRpMTy5txfYTcHOCU" />
          </div>
          <div className="px-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Full-stack</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 tracking-tight">DevFlow CLI</h3>
            <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
              Alat baris perintah yang dirancang untuk mengotomatiskan alur kerja onboarding pengembang dan orkestrasi lingkungan lokal.
            </p>
            <div className="font-mono text-[11px] text-primary font-bold uppercase tracking-tighter">
              Rust • Clap • AWS SDK
            </div>
          </div>
        </article>
      </section>
      {/* Bagian Kontak CTA */}
      <section className="mt-40 mb-20 bg-primary rounded-3xl p-12 md:p-24 text-center relative overflow-hidden" id="kontak">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary-container rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-on-primary mb-6 tracking-tight">Siap Membangun Sesuatu yang Luar Biasa?</h2>
          <p className="text-lg text-on-primary/80 mb-10 leading-relaxed font-body">
            Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda. Mari kita bicara.
          </p>
          <a className="inline-block bg-white text-primary px-10 py-4 rounded-xl font-bold tracking-wide hover:bg-surface-container-low transition-all shadow-xl hover:shadow-2xl scale-100 hover:scale-105 active:scale-95" href="mailto:halo@devportfolio.com">
            MULAI PERCAKAPAN
          </a>
        </div>
      </section>
    </main>
  );
}
