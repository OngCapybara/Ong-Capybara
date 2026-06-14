export default function Testimonials() {
  // Data testimoni diatur dalam array agar kode di bawah lebih bersih
  const reviews = [
    {
      id: 1,
      name: "Sarah Müller",
      role: "CPO, Novu",
      feedback: '"Ong menyelesaikan pengerjaan web kami dalam waktu singkat dengan kualitas yang luar biasa. Tingkat konversi platform kami naik signifikan sejak perilisan pertama. Sangat direkomendasikan."',
      img: "https://i.pravatar.cc/80?img=11",
      isHighlighted: false,
    },
    {
      id: 2,
      name: "Thomas Renault",
      role: "Founder, Finlo",
      feedback: '"Bekerja bersama Ong adalah pengalaman yang menyenangkan. Dia memahami kebutuhan sistem dengan cepat, eksekusinya taktis, dan hasil akhirnya melampaui ekspektasi tim kami."',
      img: "https://i.pravatar.cc/80?img=52",
      isHighlighted: true, // Kartu kedua dibuat bertema gelap sebagai highlight bawaan template
    },
    {
      id: 3,
      name: "Camille Dufresne",
      role: "Creative Director, Orea",
      feedback: '"Kami memiliki tenggat waktu yang sangat ketat untuk integrasi modul hardware. Ong berhasil merampungkan seluruh fungsionalitas sistem hanya dalam kurun waktu dua minggu. Kode bersih dan andal."',
      img: "https://i.pravatar.cc/80?img=47",
      isHighlighted: false,
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