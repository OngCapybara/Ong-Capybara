import { Link } from "react-router-dom"; // Kita pake Link dari react-router-dom
import ongAnimeList from "../assets/projects/ong-anime-list.png";
import kostLife from "../assets/projects/kost-life.png";
import empireGYM from "../assets/projects/empire-gym.png";

export default function Projects() {
  // Hanya ambil 3 proyek unggulan utama untuk halaman depan
  const featured = [
    {
      id: 1,
      title: "Kost Life",
      description: "A financial management app for students living in dorms uses ReactJS and Firebase to securely track daily expenses. It uses ReactJS for an attractive, interactive, and modern frontend. Firebase is used as a BaaS platform that is easy to configure, feature-rich, and versatile.",
      tags: ["Finance", "ReactJS", "Firebase"],
      projectLink: "https://kost-life.vercel.app/",
      img: kostLife,
    },
    {
      id: 2,
      title: "Empire Gym",
      description: "Commercial landing page for Empire GYM, a fitness center located in Bandar Lampung. As part of a group project, I developed this site with three of my classmates in our Web Design course.",
      tags: ["Web Design", "HTML", "CSS", "JavaScript"],
      projectLink: "https://empire-gym.vercel.app/",
      img: empireGYM,
    },
    {
      id: 3,
      title: "Ong Anime list",
      description: "An anime list website that I developed myself using ReactJS, Go, and MySQL. I chose this tech stack because I’m already proficient in using these tools. For styling, I used Tailwind CSS. This website lists every anime title I’ve ever watched in my life.",
      tags: ["Full-Stack", "ReactJS", "Golang", "MySQL"],
      projectLink: "https://ong-anime-list.vercel.app/",
      img: ongAnimeList,
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
          {/* Mengarahkan tombol ke rute /projects halaman terpisah */}
          <Link 
            to="/projects" 
            className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-sky-500 transition-colors self-start sm:self-auto nl"
          >
            All projects →
          </Link>
        </div>

        {/* Grid Asimetris (Persis Screenshot Kamu Cuk!) */}
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((proj, index) => {
            const isFirst = index === 0;

            return (
              <article 
                key={proj.id} 
                className={`card-h group rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-sky-500 transition-all duration-300 ${
                  isFirst ? "md:row-span-2 flex flex-col justify-between" : ""
                }`}
              >
                <div className={`pf w-full overflow-hidden bg-zinc-200 ${isFirst ? "h-64 md:h-80" : "h-48"}`}>
                  <img src={proj.img} alt={proj.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>

                <div className={isFirst ? "p-7 flex-grow" : "p-6"}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tags.map((tag, i) => (
                      <span key={i} className={`text-xs px-3 py-1 rounded-full ${i === 0 ? "bg-sky-50 dark:bg-zinc-800 text-sky-500 border border-sky-200 dark:border-zinc-700" : "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"}`}>{tag}</span>
                    ))}
                  </div>
                  <h3 className={`font-display font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-sky-500 transition-colors ${isFirst ? "text-2xl" : "text-xl"}`}>
                    {proj.title}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5 whitespace-pre-line">
                    {proj.description}
                  </p>
                  <div className="pt-2">
                    <button onClick={() => window.open(proj.projectLink, "_blank")} className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl">Live Demo →</button>
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