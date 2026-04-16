import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 md:px-12 pt-32 pb-16 overflow-hidden" id="home">
        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Tersedia untuk proyek
            </div>
            <h1 className="text-7xl md:text-8xl font-bold tracking-tight leading-[0.95] mb-8 text-on-surface">
              Membangun <br />
              <span className="text-primary italic">Solusi Web</span> <br />
              dengan Kode &amp; Logika.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed mb-10 font-medium">
              Menghasilkan arsitektur digital berperforma tinggi di mana desain frontend yang elegan bertemu dengan teknik backend yang kokoh.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link className="bg-on-surface text-surface px-8 py-4 rounded-xl font-bold tracking-tight hover:bg-primary transition-all duration-300" href="/proyek">Lihat Karya Pilihan</Link>
              <Link className="border-b border-on-surface/20 text-on-surface px-4 py-4 font-bold tracking-tight hover:border-primary hover:text-primary transition-all duration-300" href="/keahlian">Stack Teknis</Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="aspect-square rounded-full bg-surface-container-high absolute -right-10 md:-right-20 -top-10 md:-top-20 w-[300px] md:w-[600px] -z-10 opacity-50"></div>
            <div className="relative group">
              <img alt="Kode di layar" className="rounded-2xl shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-[4/5]" data-alt="Close-up of a high-end laptop displaying complex React code with colorful syntax highlighting in a dark editorial room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD52HQL7DOENn4csajkhfCAaqMcg4-usqSTY3_mjmY0gJzQXmsXBT4Op0q-EmnK0RhJHr2qNtxSubQsXhZf4kVq4m819oX4-RkHx7cUhtFtX0pz_76LnzEdu8HGMxSoURdLTagrIA_-cDoyAKxdGYi9806tJA53x0-8z2UyJbF_kRb93En7Rs0qr9Li2xNYpr54jAXgMLs-AXTr3pZvlsBFQAKrha-KaBr18vOsPK1m55qt4LBSGJfsP-u_Zj2AUlC3N-ye5CYrIFE" />
              <div className="absolute -bottom-6 -left-6 bg-surface p-8 rounded-xl shadow-xl border-l-4 border-primary">
                <p className="font-['Noto_Serif'] text-4xl font-bold">06+</p>
                <p className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Core Technologies */}
      <section className="py-24 bg-surface-container-low" id="skills">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">// Gudang Senjata Teknis</p>
              <h2 className="text-5xl font-bold tracking-tighter">Teknologi Inti</h2>
            </div>
            <p className="text-on-surface-variant max-w-md font-medium leading-relaxed">
              Stack modern yang dioptimalkan untuk kecepatan, skalabilitas, dan kemudahan pemeliharaan. Memanfaatkan standar terbaru dalam pengembangan web.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-surface p-8 rounded-2xl flex flex-col items-center justify-center gap-4 transition-transform hover:-translate-y-2">
              <div className="p-4 rounded-xl bg-surface-container-high text-primary">
                <span className="material-symbols-outlined text-4xl">javascript</span>
              </div>
              <p className="font-bold tracking-tight">TypeScript</p>
            </div>
            <div className="bg-surface p-8 rounded-2xl flex flex-col items-center justify-center gap-4 transition-transform hover:-translate-y-2">
              <div className="p-4 rounded-xl bg-surface-container-high text-primary">
                <span className="material-symbols-outlined text-4xl">rebase_edit</span>
              </div>
              <p className="font-bold tracking-tight">React.js</p>
            </div>
            <div className="bg-surface p-8 rounded-2xl flex flex-col items-center justify-center gap-4 transition-transform hover:-translate-y-2">
              <div className="p-4 rounded-xl bg-surface-container-high text-primary">
                <span className="material-symbols-outlined text-4xl">storage</span>
              </div>
              <p className="font-bold tracking-tight">Node.js</p>
            </div>
            <div className="bg-surface p-8 rounded-2xl flex flex-col items-center justify-center gap-4 transition-transform hover:-translate-y-2">
              <div className="p-4 rounded-xl bg-surface-container-high text-primary">
                <span className="material-symbols-outlined text-4xl">database</span>
              </div>
              <p className="font-bold tracking-tight">PostgreSQL</p>
            </div>
            <div className="bg-surface p-8 rounded-2xl flex flex-col items-center justify-center gap-4 transition-transform hover:-translate-y-2">
              <div className="p-4 rounded-xl bg-surface-container-high text-primary">
                <span className="material-symbols-outlined text-4xl">cloud</span>
              </div>
              <p className="font-bold tracking-tight">AWS</p>
            </div>
            <div className="bg-surface p-8 rounded-2xl flex flex-col items-center justify-center gap-4 transition-transform hover:-translate-y-2">
              <div className="p-4 rounded-xl bg-surface-container-high text-primary">
                <span className="material-symbols-outlined text-4xl">data_object</span>
              </div>
              <p className="font-bold tracking-tight">GraphQL</p>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Projects */}
      <section className="py-32 bg-surface" id="projects">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="mb-24 flex items-center justify-between border-b border-on-surface/10 pb-12">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Integrasi <br /> <span className="text-primary">Unggulan</span></h2>
            <span className="hidden lg:block text-8xl font-bold text-surface-container-high select-none">01—03</span>
          </div>
          <div className="space-y-48">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="overflow-hidden rounded-2xl bg-surface-container-low group">
                  <img alt="Dashboard Analitik" className="w-full transition-transform duration-700 group-hover:scale-105" data-alt="Clean minimal data visualization dashboard with dark blue charts and sleek white UI elements on a high-res display" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_YZkXkptEnjD9akj1HGr6pYKwy2nKFbFb7p0XXVBQTHUwX6yufZPK2iGd6eSVxJSRlOn-PpQWjzGKMQL2qbRAgFvLx7w_g508WoTN7iI4EJBhZ_Sp7HSNIbAqZkt4U2VNK6AFZtNW7Nzwvhj7LnU9Bd1nO9ltfqwWAqHsRGMuR-LXK9i2o95yUAg9dObfCzVtKkDN3B_wRlE0rhJZe2bl_nDjAC6XYreFVIdIwifv9HXnN-dKZNaxB1Os4wB9A0r9DIF1DwewW30" />
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">01 / Aplikasi Full Stack</span>
                <h3 className="text-4xl font-bold mb-6">Nexus Analytics Platform</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  Mesin visualisasi data real-time berperforma tinggi yang dibangun untuk skala besar. Terintegrasi dengan protokol WebSocket untuk menyajikan pembaruan data sub-detik ke ribuan klien.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider">React</span>
                  <span className="px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider">D3.js</span>
                  <span className="px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider">Redis</span>
                </div>
                <a className="inline-flex items-center gap-2 font-bold hover:text-primary transition-colors" href="/proyek">
                  Lihat Studi Kasus <span className="material-symbols-outlined">north_east</span>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">02 / Sistem Backend</span>
                <h3 className="text-4xl font-bold mb-6">SecurePay API Gateway</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  Merancang ulang infrastruktur pembayaran untuk klien fintech global. Menerapkan arsitektur microservices yang kokoh yang mengurangi latensi sebesar 40% dan meningkatkan kepatuhan keamanan.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider">Node.js</span>
                  <span className="px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider">Go</span>
                  <span className="px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider">Docker</span>
                </div>
                <a className="inline-flex items-center gap-2 font-bold hover:text-primary transition-colors" href="/proyek">
                  Lihat Studi Kasus <span className="material-symbols-outlined">north_east</span>
                </a>
              </div>
              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-2xl bg-surface-container-low group">
                  <img alt="Infrastruktur Server" className="w-full transition-transform duration-700 group-hover:scale-105" data-alt="Futuristic server room with blue glowing lights and complex network cabling, symbolizing high-performance backend infrastructure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW_Uj9QodLfSXgmTP0LIRpughsb9a_tTWTUTvcATWjZWFVd3xtC23dLmrSgbRiSz1HLYyIfFjSyLtj5U6Um5ZUIdpaULQRykt7g-Eb-FH8dF-Wv5Ug6NKzqdr2l5oaPJ8S1pScJGAiRst279366ftHiEzARUiBvebphRphFuFQEPmHC-6SuhJ3ZiqpA-XjMS_IsbXe0nF_kwo93XStqJrboyLmYJ0Shtgn-l-szFXy9MYJ-6AoRuSermQCsULSlhwuEqiswvQHgJ0" />
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12 w-full flex justify-center">
                <Link href="/proyek" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold tracking-tight hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20">Lihat Semua Proyek</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Detailed Contact Section */}
      <section className="py-24 bg-surface-container-high" id="contact-details">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">// Hubungi Kami</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">Siap Memulai Proyek Berikutnya?</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
                Apakah Anda memiliki ide yang ingin diwujudkan atau masalah teknis yang butuh solusi? Saya siap membantu Anda membangun sistem yang tangguh dan elegan.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Email</p>
                    <p className="text-xl font-bold">hello@devportfolio.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Lokasi</p>
                    <p className="text-xl font-bold">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface p-10 rounded-2xl shadow-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="name">Nama Lengkap</label>
                    <input className="w-full bg-surface-container border-none rounded-lg focus:ring-2 focus:ring-primary py-3 px-4" id="name" placeholder="Masukkan nama Anda" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="email">Alamat Email</label>
                    <input className="w-full bg-surface-container border-none rounded-lg focus:ring-2 focus:ring-primary py-3 px-4" id="email" placeholder="email@contoh.com" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="subject">Subjek</label>
                  <input className="w-full bg-surface-container border-none rounded-lg focus:ring-2 focus:ring-primary py-3 px-4" id="subject" placeholder="Apa yang ingin Anda bahas?" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="message">Pesan</label>
                  <textarea className="w-full bg-surface-container border-none rounded-lg focus:ring-2 focus:ring-primary py-3 px-4 min-h-[150px]" id="message" placeholder="Tuliskan detail proyek Anda di sini..."></textarea>
                </div>
                <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold tracking-tight hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20">Kirim Pesan Sekarang</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* CTA / Contact Footer */}
      <section className="py-32 bg-on-surface text-surface relative overflow-hidden" id="contact">
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary opacity-10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-12 leading-none">
              Mari rancang <br /> sesuatu yang <span className="text-primary">hebat</span> bersama.
            </h2>
            <div className="flex flex-col sm:flex-row gap-12 mt-16">
              <div className="space-y-6">
                <p className="text-surface/60 font-bold tracking-widest uppercase text-sm">Kontak Langsung</p>
                <a className="text-4xl font-['Noto_Serif'] font-bold block hover:text-primary transition-colors underline underline-offset-8" href="mailto:hello@devportfolio.com">hello@devportfolio.com</a>
              </div>
              <div className="space-y-6">
                <p className="text-surface/60 font-bold tracking-widest uppercase text-sm">Ikuti karya saya</p>
                <div className="flex gap-8">
                  <a className="font-bold hover:text-primary transition-colors" href="#">Github</a>
                  <a className="font-bold hover:text-primary transition-colors" href="#">LinkedIn</a>
                  <a className="font-bold hover:text-primary transition-colors" href="#">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
