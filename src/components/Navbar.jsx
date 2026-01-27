export default function Navbar() {
  const navLinks = ["Home", "Skills", "Project", "Blog", "Contact"];

  return (
    <nav className="w-full bg-[#E0F2FE]">
      {/* Container utama untuk padding kiri-kanan otomatis */}
      <div className="container mx-auto px-8 md:px-40 py-8 flex justify-between items-center">
        <div className="text-2xl font-black text-slate-800">
          Ong<span className="text-sky-500">Capybara</span>
        </div>
        <ul className="hidden md:flex gap-8 font-medium text-slate-600">
          {navLinks.map((link) => (
            <li key={link} className="hover:text-sky-500 cursor-pointer transition">
              {link}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}