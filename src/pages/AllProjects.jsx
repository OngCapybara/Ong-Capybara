import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import semua aset gambar kamu (sesuaikan path-nya ya Cuk!)
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

export default function AllProjects() {
  const [filter, setFilter] = useState("all");

  // Supaya pas pindah ke halaman ini otomatis scroll langsung ke paling atas
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterOptions = [
    { value: "all", label: "All" },
    { value: "web", label: "Web Dev" },
    { value: "ai", label: "AI & CV" },
    { value: "robotics", label: "Robotics & IoT" },
    { value: "others", label: "Others" },
  ];

  const projects = [
    {
      id: 1,
      title: "Kost Life",
      description: "A financial management app for students living in dorms uses ReactJS and Firebase to securely track daily expenses. It uses ReactJS for an attractive, interactive, and modern frontend. Firebase is used as a BaaS platform that is easy to configure, feature-rich, and versatile.",
      category: "web", 
      tags: ["Finance", "ReactJS", "Firebase"],
      projectLink: "https://kost-life.vercel.app/",
      img: kostLife,
    },
    {
      id: 2,
      title: "Empire Gym",
      description: "Commercial landing page for Empire GYM, a fitness center located in Bandar Lampung. As part of a group project, I developed this site with three of my classmates in our Web Design course.",
      category: "web",
      tags: ["Web Design", "HTML", "CSS", "JavaScript"],
      projectLink: "https://empire-gym.vercel.app/",
      img: empireGYM,
    },
    {
      id: 3,
      title: "Ong Anime list",
      description: "An anime list website that I developed myself using ReactJS, Go, and MySQL. I chose this tech stack because I’m already proficient in using these tools. For styling, I used Tailwind CSS. This website lists every anime title I’ve ever watched in my life.",
      category: "web",
      tags: ["Full-Stack", "ReactJS", "Golang", "MySQL"],
      projectLink: "https://ong-anime-list.vercel.app/",
      img: ongAnimeList,
    },
    { id: 4, title: "3D Tracking", description: "Aplikasi web menggunakan library Js dan AI tracking yang dapat mengikuti gestur tangan. Untuk template gestur dapat kita setel secara statis sehingga diperlukan untuk membuka source code untuk menambahkannya", category: ['web', "ai"], tags: ["AI", "Computer Vision"], projectLink: "https://3d-tracking-ong.vercel.app/", img: webLope },
    { id: 5, title: "Age Calculator", description: "Aplikasi python yang dapat menghitung umur dan lama kehidupan.", category: "others", tags: ["Python", "CLI"], projectLink: "https://github.com/OngCapybara/Simple-App-To-Calculate-Age", img: ageCalculator },
    { id: 6, title: "Talkzone", description: "Aplikasi chatting mobile yang menggunakan teknologi Flutter dan Firebase.", category: "web", tags: ["Mobile", "Flutter"], projectLink: "https://github.com/OngCapybara/TalkZone", img: talkzone },
    { id: 7, title: "Displayer Song", description: "Program python yang dapat memunculkan lirik lagu sesuai keinginan.", category: "others", tags: ["Python", "Automation"], projectLink: "https://github.com/OngCapybara/App-for-displaying-song-lyrics", img: displayersong },
    { id: 8, title: "Base Family", description: "Program semua jenis base untuk enkripsi dan dekripsi teks.", category: "others", tags: ["Security", "Cryptography"], projectLink: "https://github.com/OngCapybara/base-family", img: basefamily },
    { id: 9, title: "Birthday Card", description: "Kartu ucapan selamat ulang tahun interaktif.", category: "web", tags: ["Frontend", "Vercel"], projectLink: "https://ultah-yunia.vercel.app/", img: birtdaycard },
    { id: 10, title: "Face and Hand Detector", description: "Program python untuk tracking wajah dan tangan secara real-time.", category: "ai", tags: ["AI", "OpenCV"], projectLink: "https://github.com/OngCapybara/Face-and-hand-detector", img: facehanddetector },
    { id: 11, title: "Logical Gate Calculator", description: "Aplikasi web yang digunakan untuk melihat output dari gerbang logika.", category: "web", tags: ["Web App", "Logic Gates"], projectLink: "https://github.com/OngCapybara/Logical-Gate-Calculator", img: logicalgate },
    { id: 12, title: "Port Scanner", description: "Program python mirip Nmap untuk memindai port terbuka target.", category: "others", tags: ["Security", "Networking"], projectLink: "https://github.com/OngCapybara/port_scanner", img: portscanner },
    { id: 13, title: "Sleep Detector", description: "Program python tracking mata ketika user terdeteksi mengantuk.", category: "ai", tags: ["AI", "Mediapipe"], projectLink: "https://github.com/OngCapybara/sleep-detector", img: sleepdetector },
    { id: 14, title: "Uiiai Robo", description: "Robot arduino yang memanfaatkan sensor ultrasonik.", category: "robotics", tags: ["Robotics", "Arduino"], projectLink: "https://github.com/OngCapybara/Uiiai-Robo", img: uiiai },
    { id: 15, title: "Mid Exam Web Design", description: "UTS matkul desain web.", category: "web", tags: ["Academic", "HTML/CSS"], projectLink: "https://uts-desain-web-xi.vercel.app/", img: utsdw },
    { id: 16, title: "Trash Robo", description: "Robot arduino tong sampah otomatis dengan sensor ultrasonik.", category: "robotics", tags: ["Robotics", "Embedded"], projectLink: "https://github.com/OngCapybara/automatic_trash_can_v1.0", img: trashrobo },
  ];

  const filteredProjects = projects.filter(p => filter === "all" || p.category === filter);

  return (
    <section className="pt-36 pb-24 bg-white dark:bg-zinc-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Title */}
        <div className="mb-10">
          <p className="text-xs font-medium text-sky-500 tracking-widest uppercase mb-3">Portfolio</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-zinc-900 dark:text-white leading-tight mb-4">All Projects</h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">
            A complete look at my work across full-stack development, AI vision, and robotics.
          </p>
        </div>

        {/* Buttons Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-colors duration-200 ${
                filter === opt.value
                  ? "bg-sky-500 text-white border-sky-500"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-sky-500"
              }`}
            >
              {opt.label} {opt.value === "all" ? `(${projects.length})` : `(${projects.filter(p => p.category === opt.value).length})`}
            </button>
          ))}
        </div>

        {/* Grid 3 Kolom Simetris (Persis kayak template projects.html) */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <article key={proj.id} className="card-h group rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-sky-500 transition-all duration-300 flex flex-col h-full">
                <div className="pf w-full h-52 overflow-hidden bg-zinc-200 cursor-pointer" onClick={() => window.open(proj.projectLink, "_blank")}>
                  <img src={proj.img} alt={proj.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tags.map((tag, i) => (
                      <span key={i} className={`text-xs px-2.5 py-1 rounded-full ${i === 0 ? "bg-sky-50 dark:bg-zinc-800 text-sky-500 border border-sky-200 dark:border-zinc-700" : "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"}`}>{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-sky-500 transition-colors cursor-pointer" onClick={() => window.open(proj.projectLink, "_blank")}>
                    {proj.title}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 flex-grow line-clamp-3">{proj.description}</p>
                  <div className="mt-auto">
                    <button onClick={() => window.open(proj.projectLink, "_blank")} className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl">View project →</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-zinc-400 text-sm">No projects in this category yet.</p>
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24">    
        <div className="bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-xl">

          {/* Efek Lingkaran Blur Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true"></div>

          <div className="relative z-10">
            <p className="text-xs font-medium text-sky-500 tracking-widest uppercase mb-4">Ready to start?</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Want to collaborate?</h2>
            <p className="text-zinc-400 max-w-md mx-auto mb-8 text-sm leading-relaxed">
              Saya terbuka untuk diskusi pengerjaan proyek software, automasi, ataupun riset hardware sistem kontrol. Ceritakan ide hebatmu!
            </p>

            {/* REVISI: Menggunakan href="/#Contact" agar otomatis balik ke form kontak beranda tanpa reload */}
            <Link 
              to="/" 
              state={{ scrollToContact: true }}
              className="inline-flex items-center gap-2 btn-primary bg-sky-500 text-white font-medium px-8 py-3.5 rounded-full hover:bg-sky-600 transition-colors text-sm shadow-lg shadow-sky-500/10"
            >
              Start a project →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}