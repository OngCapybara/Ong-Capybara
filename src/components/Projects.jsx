import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// REVISI: Tambahkan EffectCoverflow di sini
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Import Aset Gambar Project
import ongAnimeList from "../assets/projects/ong-anime-list.png";
import kostLife from "../assets/projects/kost-life.png";
import empireGYM from "../assets/projects/empire-gym.png";
import webLope from "../assets/projects/3d-tracking.png";
import ageCalculator from "../assets/projects/age_calculate.png";
import talkzone from "../assets/projects/Talkzone.png"
import displayersong from "../assets/projects/displayer_song.png"
import basefamily from "../assets/projects/base_family.png"
import birtdaycard from "../assets/projects/birthday_card.png"
import facehanddetector from "../assets/projects/Face_and_hand_detector.png"
import logicalgate from "../assets/projects/logical_gate_calculator.png"
import portscanner from "../assets/projects/Port_scanner.png"
import sleepdetector from "../assets/projects/sleep_detector.png"
import uiiai from "../assets/projects/Uiiai_robo.png"
import utsdw from "../assets/projects/uts-dw.png"
import trashrobo from "../assets/projects/Trash-Robo.jpg"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Ong Anime list",
      description: "Sebuah website anime list yang saya kembangkan sendiri menggunakan Reactjs, Golang, dan MySQL.",
      repoLink: "https://github.com/OngCapybara",
      img: ongAnimeList,
    },
    {
      id: 2,
      title: "Kost Life",
      description: "Aplikasi manajemen keuangan anak kost menggunakan ReactJs dan Firebase.",
      repoLink: "https://github.com/OngCapybara",
      img: kostLife,
    },
    {
      id: 3,
      title: "Empire Gym",
      description: "Company profile untuk sebuah GYM dibandar lampung",
      repoLink: "https://github.com/OngCapybara",
      img: empireGYM,
    },
    {
      id: 4,
      title: "3D Tracking",
      description: "Aplikasi web menggunakan teknoklogi Js dan AI tracking yang memungkinkan user untuk mengganti tampilan menggunakan gestur tangan.",
      repoLink: "https://github.com/OngCapybara",
      img: webLope,
    },
    {
      id: 5,
      title: "Age Calculator",
      description: "Aplikasi python yang dapat menghitung umur dan berapa lama kehidupan yang sudah dilalui.",
      repoLink: "https://github.com/OngCapybara",
      img: ageCalculator,
    },
    {
      id: 6,
      title: "Talkzone",
      description: "Aplikasi chatting mobile yang menggunakan teknologi Flutter dan Firebase",
      repoLink: "https://github.com/OngCapybara",
      img: talkzone,
    },
    {
      id: 7,
      title: "Displayer Song",
      description: "Program python yang dapat memunculkan lirik lagu sesuai keinginan.",
      repoLink: "https://github.com/OngCapybara",
      img: displayersong,
    },
    {
      id: 8,
      title: "Base Family",
      description: "Program semua jenis base untuk enkripsi dan dekripsi teks.",
      repoLink: "https://github.com/OngCapybara",
      img: basefamily,
    },
    {
      id: 9,
      title: "Birthday Card",
      description: "Kartu ucapan selamat ulang tahun.",
      repoLink: "https://github.com/OngCapybara",
      img: birtdaycard,
    },
    {
      id: 10,
      title: "Face and Hand Detector",
      description: "Program python untuk tracking wajah dan tangan",
      repoLink: "https://github.com/OngCapybara",
      img: facehanddetector,
    },
    {
      id: 11,
      title: "BLogical Gate Calculator",
      description: "Aplikasi web yang digunakan untuk melihat output dari gerbang logika",
      repoLink: "https://github.com/OngCapybara",
      img: logicalgate,
    },
    {
      id: 12,
      title: "Port Scanner",
      description: "Program python yang mirip Nmap. Berfungsi untuk mencari port terbuka dari sebuah web.",
      repoLink: "https://github.com/OngCapybara",
      img: portscanner,
    },
    {
      id: 13,
      title: "Sleep Detector",
      description: "Program python tracking mata ketika user terdeteksi sedang tidur.",
      repoLink: "https://github.com/OngCapybara",
      img: sleepdetector,
    },
    {
      id: 14,
      title: "Uiiai Robo",
      description: "Robot arduino yang memanfaatkan sensor ultrasonik.",
      repoLink: "https://github.com/OngCapybara",
      img: uiiai,
    },
    {
      id: 15,
      title: "Mid Exam Web Design",
      description: "UTS matkul desain web.",
      repoLink: "https://github.com/OngCapybara",
      img: utsdw,
    },
    {
      id: 16,
      title: "Trash Robo",
      description: "Robot arduino yang memanfaatkan sensor ultrasonik dan akuator sederhana.",
      repoLink: "https://github.com/OngCapybara",
      img: trashrobo,
    },
  ];

  return (
    <section className="w-full bg-[#E0F2FE] py-20 overflow-hidden" id="Project">
      <div className="container mx-auto px-8 md:px-40 text-center">
        <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase">Projects</h2>
        <p className="max-w-3xl mx-auto text-slate-500 mb-12 leading-relaxed font-medium">
          Berikut adalah beberapa proyek pengembangan perangkat lunak yang saya kerjakan, 
          mencakup integrasi frontend ReactJS dan backend Golang.
        </p>

        {/* Swiper Slider dengan Effect Coverflow */}
        <div className="relative group px-4">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".btn-next",
              prevEl: ".btn-prev",
            }}
            pagination={{ clickable: true }}
            className="pb-20"
          >
            {projects.map((proj) => (
              <SwiperSlide key={proj.id} className="max-w-[300px] md:max-w-[600px]">
                {({ isActive }) => (
                  <div 
                    onClick={() => setSelectedProject(proj)}
                    className={`w-full aspect-video rounded-[2.5rem] cursor-pointer shadow-2xl overflow-hidden transition-all duration-500 ${
                      isActive ? "scale-100 opacity-100" : "scale-75 opacity-40 blur-[2px]"
                    }`}
                  >
                    <img 
                      src={proj.img} 
                      alt={proj.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Tombol Navigasi Persis Gambar */}
          <button className="btn-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 text-4xl text-sky-500 font-black hover:scale-125 transition">
            {"<"}
          </button>
          <button className="btn-next absolute right-0 top-1/2 -translate-y-1/2 z-10 text-4xl text-sky-500 font-black hover:scale-125 transition">
            {">"}
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
          <div className="relative w-full max-w-4xl bg-slate-300 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-6 text-2xl font-black text-slate-900 hover:rotate-90 transition-transform"
            >
              ✕
            </button>

            <div className="w-full md:w-2/3 p-6">
              <div className="w-full aspect-video bg-white rounded-2xl overflow-hidden shadow-inner">
                <img src={selectedProject.img} className="w-full h-full object-cover" alt="detail" />
              </div>
            </div>

            <div className="w-full md:w-1/3 p-8 flex flex-col justify-center text-left">
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase leading-tight">
                {selectedProject.title}
              </h3>
              <p className="text-slate-700 leading-relaxed mb-6 font-medium">
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
                </a> untuk melihat repository.
              </p>
              <p className="mt-6 text-slate-800 font-bold italic">Have a nice day :D</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}