import { useState } from "react";

// Import Ikon (Sesuaikan path dengan folder kamu)
import reactLogo from "../assets/progLang/react.svg";
import golangLogo from "../assets/progLang/golang.svg";
import htmlLogo from "../assets/progLang/html.svg";
import cssLogo from "../assets/progLang/css.svg";
import jsLogo from "../assets/progLang/js.svg";
import mysqlLogo from "../assets/progLang/mysql.svg";
import phpLogo from "../assets/progLang/php.svg";
import tailwindLogo from "../assets/progLang/tailwind.svg";
import flutterLogo from "../assets/progLang/flutter.svg";


export default function Skills() {
  const [activeTab, setActiveTab] = useState("Software dev");

  const categories = ["Software dev", "Cyber Security", "Robotics"];

  // Data Skill per Kategori
  const skillData = {
    "Software dev": [
      { name: "React Js", img: reactLogo },
      { name: "Golang", img: golangLogo }, // Tinggal import & masukin variabelnya di sini
      { name: "HTML", img: htmlLogo },
      { name: "CSS", img: cssLogo },
      { name: "Tailwind", img: tailwindLogo },
      { name: "Java Script", img: jsLogo },
      { name: "Flutter", img: flutterLogo },
      { name: "MySQL", img: mysqlLogo },
      { name: "PHP", img: phpLogo },
    ],
    "Cyber Security": [
      { name: "Web Exploitation", img: "" },
      { name: "Bug Bounty", img: "" },
      { name: "Network Security", img: "" },
      { name: "Reverse Engineering", img: "" },
    ],
    "Robotics": [
      { name: "VTOL Drone", img: "" },
      { name: "Ardupilot", img: "" },
      { name: "Mission Scripting", img: "" },
      { name: "Embedded Systems", img: "" },
    ]
  };

  return (
    <section className="w-full bg-white py-20" id="Skills">
      {/* Container dengan padding yang konsisten */}
      <div className="container mx-auto px-8 md:px-40">
        
        {/* Title */}
        <h2 className="text-4xl font-black text-center text-slate-900 mb-12">
          My Skills
        </h2>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-3 rounded-xl font-bold border-2 transition-all duration-300 ${
                activeTab === cat
                  ? "bg-sky-500 border-sky-500 text-white shadow-lg shadow-sky-200"
                  : "border-sky-400 text-sky-500 hover:bg-sky-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skillData[activeTab].map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-sky-100 bg-white hover:border-sky-400 hover:shadow-xl hover:shadow-sky-50 transition-all cursor-pointer aspect-square"
            >
              {/* Kontainer Ikon */}
              <div className="w-full h-full mb-4 bg-slate-50 rounded-lg group-hover:bg-sky-50 transition-colors flex items-center justify-center overflow-hidden p-4">
                {skill.img ? (
                  <img 
                    src={skill.img} 
                    alt={skill.name} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
                ) : (
                  // Placeholder jika gambar belum ada
                  <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center text-[10px] text-slate-400 font-bold uppercase">
                    No Icon
                  </div>
                )}
              </div>
              
              <span className="font-bold text-sky-600 text-lg text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}