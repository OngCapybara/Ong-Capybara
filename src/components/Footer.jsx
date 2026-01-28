// Tambahkan FaDonate di sini
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaDonate } from "react-icons/fa";

export default function Footer() {
  const links = ["Home", "Skills", "Project", "Blog", "Contact"];
  
  const socialMedia = [
    { id: 1, icon: <FaFacebookF />, link: "https://facebook.com/#", color: "hover:text-[#1877F2]" },
    { id: 2, icon: <FaInstagram />, link: "https://instagram.com/ong_capy", color: "hover:text-[#E4405F]" },
    { id: 3, icon: <FaLinkedinIn />, link: "https://linkedin.com/in/ong-azis-saliem", color: "hover:text-[#0A66C2]" },
    { id: 4, icon: <FaGithub />, link: "https://github.com/OngCapybara", color: "hover:text-[#333]" },
    { id: 5, icon: <FaDonate />, link: "https://saweria.co/Ongcapybara", color: "hover:text-[#faae2b]"},
  ];

  return (
    <footer className="w-full bg-sky-500 pt-10 pb-5 text-white">
      <div className="container mx-auto px-8 md:px-40">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-5">
          
          {/* Sisi Kiri: Branding */}
          <div className="max-w-sm text-left">
            <h2 className="text-4xl font-black mb-6 tracking-tighter">
              Ong<span className="text-sky-100">Capybara</span>
            </h2>
            <p className="text-sky-50 leading-relaxed opacity-90 font-medium">
              Software Developer & Cyber Security Enthusiast. Fokus pada pengembangan aplikasi web yang aman dan inovatif.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {socialMedia.map((sosmed) => (
                <a 
                  key={sosmed.id} 
                  href={sosmed.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`w-11 h-11 bg-white rounded-full flex items-center justify-center text-sky-600 text-xl shadow-lg transition-all duration-300 hover:scale-125 ${sosmed.color} hover:bg-sky-50`}
                >
                  {sosmed.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sisi Kanan: Quick Link */}
          <div className="text-left">
            <h4 className="text-xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-white after:rounded-full">
              Quick Link
            </h4>
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="text-sky-50 hover:underline transition opacity-80 hover:opacity-100 font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-10 border-t border-sky-400/50">
          <p className="text-sm font-bold opacity-80 uppercase tracking-widest">
            © 2026 Crafted By Ong Azis Saliem
          </p>
        </div>
      </div>
    </footer>
  );
}