export default function Footer() {
  const links = ["Home", "Skills", "Project", "Blog", "Contact"];

  return (
    <footer className="w-full bg-sky-500 pt-20 pb-10 text-white">
      <div className="container mx-auto px-8 md:px-40">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-20">
          
          {/* Sisi Kiri: Branding */}
          <div className="max-w-sm">
            <h2 className="text-4xl font-black mb-6">OngCapybara</h2>
            <p className="text-sky-50 leading-relaxed opacity-90">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            
            {/* Social Icons Placeholder */}
            <div className="flex gap-4 mt-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
                  {/* Icon sosmed nanti di sini */}
                </div>
              ))}
            </div>
          </div>

          {/* Sisi Kanan: Quick Link */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Link</h4>
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="text-sky-50 hover:underline transition opacity-80 hover:opacity-100">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-10 border-t border-sky-400">
          <p className="text-sm font-medium opacity-80 uppercase tracking-widest">
            Copyrights By OngCapybara
          </p>
        </div>
      </div>
    </footer>
  );
}