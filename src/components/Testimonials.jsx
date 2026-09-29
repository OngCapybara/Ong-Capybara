export default function Testimonials() {
  // Data testimoni diatur dalam array agar kode di bawah lebih bersih
  const reviews = [
    {
      id: 1,
      name: "M. Reynaldi",
      role: "Mahasiswa, Teknologi Informasi",
      feedback: '"Ong membantu saya menyelesaikan tugas akhir kuliah dengan cepat dan baik. Menggunakan teknologi postgreSql dan prisma ORM. Saya dapat nilai A!"',
      img: "https://i.pravatar.cc/80?img=11",
      isHighlighted: false,
    },
    {
      id: 2,
      name: "Astika",
      role: "Mahasiswi, Teknik Komputer",
      feedback: '"Saya mendapatkan tugas akhir untuk membuat aplikasi mobile. Ong sangat membantu saya yang sedang keteteran. Good Job!"',
      img: "https://instagram.ftkg4-1.fna.fbcdn.net/v/t51.2885-19/467568400_1309148380453525_3361543318238661249_n.jpg?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDc4LkMzIn0%3D&_nc_ohc=S9nA-aVQ_-kQ7kNvwFogyKB&_nc_oc=AdonAy359xjNI2KAbv4GaD9GhuD9HDQTrPWwyUJisRXw96cnrWonAg4YH7dKIGrtWvQ&_nc_zt=24&_nc_ht=instagram.ftkg4-1.fna&_nc_ss=7baaf&oh=00_AQMUOSmyMxNrU1O0SFdS6R2g2qtwOACU4JuJmg_cVv0EVg&oe=6AC1781C",
      isHighlighted: true, // Kartu kedua dibuat bertema gelap sebagai highlight bawaan template
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-medium text-sky-500 tracking-widest uppercase mb-3">Social proof</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">What clients say</h2>
        </div>

        {/* Grid Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <blockquote 
              key={rev.id} 
              className={`card-h rounded-2xl p-7 border transition-all duration-300 ${
                rev.isHighlighted 
                  ? "bg-zinc-900 dark:bg-zinc-800 border-zinc-800 hover:border-sky-500" 
                  : "bg-zinc-50 dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800 hover:border-sky-500"
              }`}
            >
              {/* Rating Bintang 5 (Icon diubah ke warna sky-500) */}
              <div className="flex gap-0.5 mb-5" aria-label="5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-4 h-4 text-sky-500 fill-current" 
                    viewBox="0 0 20 20" 
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Isi Feedback */}
              <p className={`text-sm leading-relaxed mb-6 italic ${
                rev.isHighlighted ? "text-zinc-400" : "text-zinc-600 dark:text-zinc-400"
              }`}>
                {rev.feedback}
              </p>

              {/* User Info / Footer Kartu */}
              <footer className="flex items-center gap-3">
                <div className="pf w-10 h-10 rounded-full shrink-0 overflow-hidden bg-zinc-200">
                  <img src={rev.img} alt={rev.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className={`font-medium text-sm ${rev.isHighlighted ? "text-white" : "text-zinc-900 dark:text-white"}`}>
                    {rev.name}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {rev.role}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

      </div>
    </section>
  );
}