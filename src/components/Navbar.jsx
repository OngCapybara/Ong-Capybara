import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "Skills", "Project", "Blog", "Contact"];

  return (
    <nav className="w-full bg-[#E0F2FE] relative z-[1000]">
      <div className="container mx-auto px-8 md:px-40 py-8 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-black text-slate-800">
          Ong<span className="text-sky-500">Capybara</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-slate-600">
          {navLinks.map((link) => (
            <li key={link}>
              {/* Gunakan tag a dengan href yang sesuai dengan ID section */}
              <a 
                href={`#${link}`} 
                className="hover:text-sky-500 cursor-pointer transition active:text-sky-700"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Burger Button */}
        <button 
          className="md:hidden flex flex-col gap-1.5 z-[1100]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-8 h-1 bg-slate-800 rounded-full transition-all ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
          <span className={`w-8 h-1 bg-slate-800 rounded-full transition-all ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-8 h-1 bg-slate-800 rounded-full transition-all ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#E0F2FE] flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden z-[1050] ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link}`}
              onClick={() => setIsOpen(false)} // Tutup menu setelah klik
              className="text-2xl font-bold text-slate-800 hover:text-sky-500 transition"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}