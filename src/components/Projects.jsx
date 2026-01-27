import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Ong Anime list",
      description: "Sebuah website anime list yang saya buat sendiri menggunakan React.js, Golang dan MySQL.",
      repoLink: "https://github.com/OngCapybara",
      img: "/path-to-your-img.jpg", // Ganti dengan path gambarmu
    },
    {
      id: 2,
      title: "Kost Life",
      description: "Aplikasi manajemen kost menggunakan React dan Firebase.",
      repoLink: "https://github.com/OngCapybara",
      img: "/path-to-your-img2.jpg",
    },
    // Tambah project lainnya...
  ];

  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-8 md:px-40 text-center">
        <h2 className="text-4xl font-black text-slate-900 mb-6">Projects</h2>
        <p className="max-w-3xl mx-auto text-slate-500 mb-12 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        {/* Swiper Slider */}
        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2 },
            }}
            className="pb-12"
          >
            {projects.map((proj) => (
              <SwiperSlide key={proj.id}>
                <div 
                  onClick={() => setSelectedProject(proj)}
                  className="w-full aspect-video bg-rose-400 rounded-3xl cursor-pointer shadow-xl overflow-hidden transition-transform hover:scale-[1.02]"
                >
                  {/* Ganti dengan <img src={proj.img} /> nanti */}
                  <div className="w-full h-full flex items-center justify-center text-white font-bold">
                    Click to View: {proj.title}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Popup Modal (Gambar ke-2) */}
      {selectedProject && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-slate-300 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300">
            
            {/* Tombol Close */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-6 text-2xl font-black text-slate-900 hover:scale-110 transition"
            >
              X
            </button>

            {/* Sisi Kiri: Gambar Project */}
            <div className="w-full md:w-2/3 p-6">
              <div className="w-full aspect-video bg-white rounded-2xl shadow-inner">
                 {/* <img src={selectedProject.img} className="w-full h-full object-cover rounded-2xl" /> */}
              </div>
            </div>

            {/* Sisi Kanan: Detail Project */}
            <div className="w-full md:w-1/3 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-black text-slate-900 mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              <p className="text-slate-700">
                Klik gambar untuk mengunjungi dan{" "}
                <a 
                  href={selectedProject.repoLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-sky-500 font-bold hover:underline"
                >
                  klik disini
                </a>{" "}
                untuk melihat repository.
              </p>
              <p className="mt-6 text-slate-800 font-medium italic">Have a nice day :D</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}