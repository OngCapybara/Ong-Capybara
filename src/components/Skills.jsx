import MyGuwe from "../assets/atmin/ongsigma.JPG"; // Atau pakai path foto profil aslimu, Ong

export default function Skills() {
  // Daftar teknologi real yang kamu gunakan dalam proyek-proyekmu
  const techStack = [
    "ReactJS",
    "Golang",
    "MySQL",
    "Firebase",
    "Tailwind CSS",
    "Flutter",
    "Python",
    "OpenCV / Mediapipe",
    "Arduino / ESP32",
    "SolidWorks"
  ];

  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900/40 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Sisi Kiri: Foto Profil (order-2 di mobile agar teks duluan, md:order-1 di desktop) */}
          <div className="order-2 md:order-1">
            <div className="pf w-full aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden bg-zinc-200 shadow-lg">
              <img 
                src={MyGuwe} 
                alt="Ong Azis Saliem" 
                loading="lazy" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Sisi Kanan: Deskripsi Profil */}
          <div className="order-1 md:order-2">
            <p className="text-xs font-medium text-sky-500 tracking-widest uppercase mb-3">About me</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white leading-tight mb-6">
              A bit about<br />who I am
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
              Saya <b>Ong Azis Saliem</b>, seorang mahasiswa program studi S1 Informatika di Universitas Teknokrat Indonesia. Saya fokus bergerak di ranah rekayasa perangkat lunak (<b>full-stack web development</b>) serta pengembangan sistem tertanam (<b>embedded systems</b>) dan robotika.
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
              Saya senang membangun produk digital yang bersih, efisien, dan fungsional—baik berupa sistem manajemen keuangan berbasis web seperti <b>Kost Life</b>, implementasi visi komputer AI, hingga merancang purwarupa sistem kontrol perangkat keras berbasis mikrokontroler.
            </p>

            {/* List Tech Stack */}
            <div>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">
                Stack &amp; tools
              </p>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Skills">
                {techStack.map((tech, index) => (
                  <span 
                    key={index}
                    role="listitem" 
                    className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-sky-500 dark:hover:border-sky-500 transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}