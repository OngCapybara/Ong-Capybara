export default function Blogs() {
  // Data artikel blog diatur dalam array agar rapi
  const articles = [
    {
      id: 1,
      category: "Web Dev",
      date: "Mar 8, 2026",
      title: "Why I Ditched Heavy Frameworks for Go & React Stack",
      description: "Pengalaman saya membangun arsitektur aplikasi yang cepat, efisien, dan bersih menggunakan kombinasi Golang dan ReactJS.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80",
      link: "#" // Bisa diisi dengan link artikel asli jika ada, atau biarkan '#'
    },
    {
      id: 2,
      category: "Robotics",
      date: "Feb 21, 2026",
      title: "Building an Autonomous Embedded System with ESP32",
      description: "Langkah dasar mengintegrasikan sensor ultrasonik dan aktuator servo untuk menciptakan purwarupa robotika sederhana.",
      img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=700&q=80",
      link: "#"
    },
    {
      id: 3,
      category: "Life Style",
      date: "Jan 14, 2026",
      title: "Managing Student Finances: From Sheets to Building Kost-Life",
      description: "Kisah di balik pembuatan aplikasi finansial anak kost dan bagaimana mengelola data kuantitatif dalam riset perangkat lunak.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-xs font-medium text-sky-500 tracking-widest uppercase mb-3">Thoughts</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">From the blog</h2>
          </div>
          <a 
            href="#blog" 
            className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-sky-500 transition-colors self-start sm:self-auto nl"
          >
            All articles →
          </a>
        </div>

        {/* Grid Articles */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((art) => (
            <article 
              key={art.id} 
              className="card-h group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-sky-500 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="pf w-full h-44 overflow-hidden bg-zinc-200">
                <img 
                  src={art.img} 
                  alt={art.title} 
                  loading="lazy" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Box */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs bg-sky-50 dark:bg-zinc-800 text-sky-500 border border-sky-200 dark:border-zinc-700 px-2.5 py-1 rounded-full font-medium">
                    {art.category}
                  </span>
                  <span className="text-xs text-zinc-400">
                    {art.date}
                  </span>
                </div>

                <a href={art.link}>
                  <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-sky-500 transition-colors duration-200 leading-snug">
                    {art.title}
                  </h3>
                </a>

                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                  {art.description}
                </p>

                <a 
                  href={art.link} 
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}