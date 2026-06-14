import { useState, useEffect } from "react";

export default function AllBlogs() {
  const [filter, setFilter] = useState("all");

  // Paksa layar otomatis scroll ke paling atas saat halaman di-load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterOptions = [
    { value: "all", label: "All" },
    { value: "dev", label: "Web Dev" },
    { value: "robotics", label: "Robotics & IoT" },
    { value: "others", label: "Research & Life" },
  ];

  // Artikel Utama Unggulan (Featured) di posisi paling atas
  const featuredArticle = {
    title: "Why I Ditched Heavy CSS Frameworks for Go & React Stack",
    category: "dev",
    categoryLabel: "Web Dev",
    dateInfo: "March 8, 2026 · 7 min read",
    description: "Pengalaman nyata merombak arsitektur sistem konvensional dan bermigrasi penuh ke ekosistem RESTful API menggunakan Golang dan komponen reaktif ReactJS demi mengejar performa runtime yang ringan dan cepat.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80",
    link: "#"
  };

  // Daftar Artikel Blog Grid di bawahnya
  const articles = [
    {
      id: 1,
      category: "robotics",
      categoryLabel: "Robotics & IoT",
      date: "Feb 21, 2026",
      title: "Building an Autonomous Embedded System with ESP32",
      description: "Panduan taktis pemrograman dasar mikrokontroler ESP32, interkoneksi modul sensor jarak ultrasonik, dan konfigurasi aktuator servo untuk purwarupa robotika pintar.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80",
      link: "#"
    },
    {
      id: 2,
      category: "others",
      categoryLabel: "Research & Life",
      date: "Jan 14, 2026",
      title: "Managing Student Finances: From Sheets to Building Kost-Life",
      description: "Kisah di balik pembuatan aplikasi finansial anak kost, merumuskan latar belakang masalah, hingga melakukan uji validitas data kuantitatif dalam riset proposal software.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80",
      link: "#"
    },
    {
      id: 3,
      category: "robotics",
      categoryLabel: "Robotics & IoT",
      date: "Dec 3, 2025",
      title: "Transitioning Drone Firmware from ArduPilot to PX4 Autopilot",
      description: "Catatan teknis proses flashing firmware PX4 ke flight controller Cube Orange, langkah kalibrasi kompas, hingga pemahaman dasar protokol MAVLink.",
      img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=700&q=80",
      link: "#"
    },
    {
      id: 4,
      category: "dev",
      categoryLabel: "Web Dev",
      date: "Nov 18, 2025",
      title: "Securing Web Applications with Google Auth Integration",
      description: "Langkah-langkah mengamankan rute login aplikasi menggunakan protokol OAuth2 Google pada backend Golang dan frontend ReactJS.",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&q=80",
      link: "#"
    },
    {
      id: 5,
      category: "robotics",
      categoryLabel: "Robotics & IoT",
      date: "Oct 30, 2025",
      title: "Real-time Object Tracking using OpenCV and Python",
      description: "Eksperimen memanfaatkan visi komputer (computer vision) untuk mengenali kontur warna, mendeteksi gestur, dan melacak koordinat spasial objek secara real-time.",
      img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=700&q=80",
      link: "#"
    },
    {
      id: 6,
      category: "dev",
      categoryLabel: "Web Dev",
      date: "Oct 5, 2025",
      title: "Optimizing MySQL Database Relations for Scalable Software",
      description: "Teknik merancang indexing data, normalisasi tabel, dan optimasi query JOIN pada MySQL database untuk mencegah terjadinya bottleneck sistem.",
      img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=700&q=80",
      link: "#"
    }
  ];

  // Memfilter array berdasarkan tombol kategori yang sedang diklik
  const filteredArticles = articles.filter(
    (art) => filter === "all" || art.category === filter
  );

  return (
    <div className="pt-36 pb-24 bg-white dark:bg-zinc-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HERO BLOG SECTION */}
        <section className="relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
          <div>
            <p className="text-xs font-medium text-sky-500 tracking-widest uppercase mb-3">Writing</p>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-zinc-900 dark:text-white leading-tight mb-4">The Blog</h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">
              Catatan riset informatika, eksperimen sistem kontrol robotika, optimasi web development, dan lika-liku dunia perkuliahan.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mt-8">
              {filterOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setFilter(opt.value)}
                  className={`text-sm px-4 py-1.5 rounded-full border transition-all duration-200 ${
                    filter === opt.value
                      ? "bg-sky-500 text-white border-sky-500 shadow-md shadow-sky-500/10"
                      : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-sky-500"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED ARTICLE HERO CARD */}
        {(filter === "all" || filter === featuredArticle.category) && (
          <section className="pb-16">
            <a href={featuredArticle.link} className="card group block rounded-3xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-sky-500 transition-all duration-300">
              <div className="grid md:grid-cols-2">
                <div className="photo-frame h-64 md:h-auto overflow-hidden bg-zinc-200">
                  <img src={featuredArticle.img} alt={featuredArticle.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs bg-sky-50 dark:bg-zinc-800 text-sky-500 border border-sky-200 dark:border-zinc-700 px-2.5 py-1 rounded-full font-medium">
                      {featuredArticle.categoryLabel}
                    </span>
                    <span className="text-xs text-zinc-400">{featuredArticle.dateInfo}</span>
                  </div>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-zinc-900 dark:text-white mb-4 group-hover:text-sky-500 transition-colors leading-snug">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                    {featuredArticle.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-500 nav-link self-start">
                    Read article →
                  </span>
                </div>
              </div>
            </a>
          </section>
        )}

        {/* ALL ARTICLES GRID */}
        <section className="pb-24">
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {filteredArticles.map((art) => (
                <article key={art.id} className="card group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-sky-500 transition-all duration-300 flex flex-col h-full">
                  <div className="photo-frame w-full h-44 overflow-hidden bg-zinc-200">
                    <img src={art.img} alt={art.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs bg-sky-50 dark:bg-zinc-800 text-sky-500 border border-sky-200 dark:border-zinc-700 px-2.5 py-1 rounded-full font-medium">
                        {art.categoryLabel}
                      </span>
                      <span className="text-xs text-zinc-400">{art.date}</span>
                    </div>
                    <a href={art.link} className="mb-2 block">
                      <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white group-hover:text-sky-500 transition-colors duration-200 leading-snug line-clamp-2">
                        {art.title}
                      </h3>
                    </a>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 flex-grow line-clamp-3">
                      {art.description}
                    </p>
                    <a href={art.link} className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nav-link mt-auto self-start">
                      Read more →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-zinc-400 text-sm">Belum ada artikel di kategori ini, Cuk.</p>
            </div>
          )}

          {/* PAGINATION LAYOUT CONTAINER */}
          <nav className="flex items-center justify-center gap-2 mt-14" aria-label="Pagination">
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-sky-500 text-white text-sm font-medium cursor-default">1</span>
            <button className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-sky-500 hover:text-sky-500 transition-colors text-sm">2</button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-sky-500 hover:text-sky-500 transition-colors text-sm">3</button>
            <span className="text-zinc-400 text-sm px-1 cursor-default">…</span>
            <button className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-sky-500 hover:text-sky-500 transition-colors text-sm" aria-label="Next page">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </nav>
        </section>

      </div>
    </div>
  );
}