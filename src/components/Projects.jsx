import { useState } from "react";

// Import Aset Gambar Project
import ongAnimeList from "../assets/projects/ong-anime-list.png";
import kostLife from "../assets/projects/kost-life.png";
import empireGYM from "../assets/projects/empire-gym.png";
import webLope from "../assets/projects/3d-tracking.png";
import ageCalculator from "../assets/projects/age_calculate.png";
import talkzone from "../assets/projects/Talkzone.png";
import displayersong from "../assets/projects/displayer_song.png";
import basefamily from "../assets/projects/base_family.png";
import birtdaycard from "../assets/projects/birthday_card.png";
import facehanddetector from "../assets/projects/Face_and_hand_detector.png";
import logicalgate from "../assets/projects/logical_gate_calculator.png";
import portscanner from "../assets/projects/Port_Scanner.png";
import sleepdetector from "../assets/projects/sleep_detector.png";
import uiiai from "../assets/projects/Uiiai_robo.png";
import utsdw from "../assets/projects/uts-dw.png";
import trashrobo from "../assets/projects/Trash-Robo.jpg";

export default function Projects() {
  // Array data proyek - Hanya menggunakan projectLink untuk hasil deploy
  const projects = [
    {
      id: 1,
      title: "Ong Anime list",
      description: "Sebuah website anime list yang saya kembangkan sendiri menggunakan Reactjs, Golang, dan MySQL.",
      tags: ["Full-Stack", "Golang", "MySQL"],
      projectLink: "https://ong-anime-list.vercel.app/",
      img: ongAnimeList,
    },
    {
      id: 2,
      title: "Kost Life",
      description: "Aplikasi manajemen keuangan anak kost menggunakan ReactJs dan Firebase.",
      tags: ["Finance", "ReactJS", "Firebase"],
      projectLink: "https://kost-life.vercel.app/",
      img: kostLife,
    },
    {
      id: 3,
      title: "Empire Gym",
      description: "Company profile untuk sebuah GYM di Bandar Lampung.",
      tags: ["Web Design", "Tailwind"],
      projectLink: "https://empire-gym.vercel.app/",
      img: empireGYM,
    },
    {
      id: 4,
      title: "3D Tracking",
      description: "Aplikasi web menggunakan teknologi Js dan AI tracking yang memungkinkan user untuk mengganti tampilan menggunakan gestur tangan.",
      tags: ["AI", "Computer Vision", "JavaScript"],
      projectLink: "https://3d-tracking-ong.vercel.app/",
      img: webLope,
    },
    {
      id: 5,
      title: "Age Calculator",
      description: "Aplikasi python yang dapat menghitung umur dan berapa lama kehidupan yang sudah dilalui.",
      tags: ["Python", "CLI"],
      projectLink: "https://github.com/OngCapybara/Simple-App-To-Calculate-Age",
      img: ageCalculator,
    },
    {
      id: 6,
      title: "Talkzone",
      description: "Aplikasi chatting mobile yang menggunakan teknologi Flutter dan Firebase.",
      tags: ["Mobile", "Flutter", "Firebase"],
      projectLink: "https://github.com/OngCapybara/TalkZone",
      img: talkzone,
    },
    {
      id: 7,
      title: "Displayer Song",
      description: "Program python yang dapat memunculkan lirik lagu sesuai keinginan.",
      tags: ["Python", "Automation"],
      projectLink: "https://github.com/OngCapybara/App-for-displaying-song-lyrics",
      img: displayersong,
    },
    {
      id: 8,
      title: "Base Family",
      description: "Program semua jenis base untuk enkripsi dan dekripsi teks.",
      tags: ["Cyber Security", "Cryptography"],
      projectLink: "https://github.com/OngCapybara/base-family",
      img: basefamily,
    },
    {
      id: 9,
      title: "Birthday Card",
      description: "Kartu ucapan selamat ulang tahun.",
      tags: ["Frontend", "Vercel"],
      projectLink: "https://ultah-yunia.vercel.app/",
      img: birtdaycard,
    },
    {
      id: 10,
      title: "Face and Hand Detector",
      description: "Program python untuk tracking wajah dan tangan.",
      tags: ["AI", "OpenCV", "Python"],
      projectLink: "https://github.com/OngCapybara/Face-and-hand-detector",
      img: facehanddetector,
    },
    {
      id: 11,
      title: "Logical Gate Calculator",
      description: "Aplikasi web yang digunakan untuk melihat output dari gerbang logika.",
      tags: ["Web App", "Logic Gates"],
      projectLink: "https://github.com/OngCapybara/Logical-Gate-Calculator",
      img: logicalgate,
    },
    {
      id: 12,
      title: "Port Scanner",
      description: "Program python yang mirip Nmap. Berfungsi untuk mencari port terbuka dari sebuah web.",
      tags: ["Cyber Security", "Networking"],
      projectLink: "https://github.com/OngCapybara/port_scanner",
      img: portscanner,
    },
    {
      id: 13,
      title: "Sleep Detector",
      description: "Program python tracking mata ketika user terdeteksi sedang tidur.",
      tags: ["AI", "Mediapipe", "Python"],
      projectLink: "https://github.com/OngCapybara/sleep-detector",
      img: sleepdetector,
    },
    {
      id: 14,
      title: "Uiiai Robo",
      description: "Robot arduino yang memanfaatkan sensor ultrasonik.",
      tags: ["Robotics", "Arduino", "IoT"],
      projectLink: "https://github.com/OngCapybara/Uiiai-Robo",
      img: uiiai,
    },
    {
      id: 15,
      title: "Mid Exam Web Design",
      description: "UTS matkul desain web.",
      tags: ["Academic", "HTML/CSS"],
      projectLink: "https://uts-desain-web-xi.vercel.app/",
      img: utsdw,
    },
    {
      id: 16,
      title: "Trash Robo",
      description: "Robot arduino yang memanfaatkan sensor ultrasonik dan aktuator sederhana.",
      tags: ["Robotics", "Embedded System"],
      projectLink: "https://github.com/OngCapybara/automatic_trash_can_v1.0",
      img: trashrobo,
    },
  ];

  return (
    <section id="Project" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-xs font-medium text-sky-500 tracking-widest uppercase mb-3">Portfolio</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">Selected work</h2>
          </div>
          <a 
            href="#Project" 
            className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-sky-500 transition-colors self-start sm:self-auto nl"
          >
            All projects ({projects.length})
          </a>
        </div>

        {/* Grid Container (Asimetris Layout bawaan template) */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, index) => {
            // Proyek pertama memanjang ke bawah (row-span-2)
            const isFirst = index === 0;

            return (
              <article 
                key={proj.id} 
                className={`card-h group rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-sky-500 transition-all duration-300 ${
                  isFirst ? "md:row-span-2" : ""
                }`}
              >
                {/* Image Container */}
                <div className={`pf w-full overflow-hidden bg-zinc-200 ${isFirst ? "h-64 md:h-80" : "h-48"}`}>
                  <img 
                    src={proj.img} 
                    alt={proj.title} 
                    loading="lazy" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className={isFirst ? "p-7" : "p-6"}>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className={`text-xs px-3 py-1 rounded-full ${
                          i === 0 
                            ? "bg-sky-50 dark:bg-zinc-800 text-sky-500 border border-sky-200 dark:border-zinc-700" 
                            : "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <div className="cursor-pointer" onClick={() => window.open(proj.projectLink, "_blank")}>
                    <h3 className={`font-display font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-sky-500 transition-colors ${
                      isFirst ? "text-2xl" : "text-xl"
                    }`}>
                      {proj.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5">
                    {proj.description}
                  </p>

                  {/* Links Action - Hanya Live Demo */}
                  <div className="flex gap-4 items-center">
                    <button 
                      onClick={() => window.open(proj.projectLink, "_blank")} 
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl"
                    >
                      Live Demo →
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}