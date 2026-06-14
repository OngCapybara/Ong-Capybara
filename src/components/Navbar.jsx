// Jangan lupa tangkap props yang dikirim dari App.jsx
export default function Navbar({ isDark, toggleDarkMode, scrolled, activeSection }) {
  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm shadow-black/5 h-16" 
          : "bg-transparent h-20" // Navigasi agak tinggi dan transparan pas di paling atas
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between" aria-label="Main navigation">
        
        {/* Logo */}
        <a href="#hero" className="font-display font-bold text-xl tracking-tight relative z-10">
          <span className="text-zinc-900 dark:text-white">ong</span>
          <span className="text-sky-500">azis</span>
        </a>

        {/* Menu Desktop - Otomatis nyala sesuai section aktif saat di-scroll */}
        <ul className="hidden md:flex items-center gap-8 text-sm" role="list">
          <li>
            <a 
              href="#services" 
              className={`nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${
                activeSection === "services" ? "on !text-zinc-900 dark:!text-white font-medium" : ""
              }`}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#Project" 
              className={`nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${
                activeSection === "Project" ? "on !text-zinc-900 dark:!text-white font-medium" : ""
              }`}
            >
              Work
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${
                activeSection === "about" ? "on !text-zinc-900 dark:!text-white font-medium" : ""
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#reviews" 
              className={`nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${
                activeSection === "reviews" ? "on !text-zinc-900 dark:!text-white font-medium" : ""
              }`}
            >
              Reviews
            </a>
          </li>
          <li>
            <a 
              href="#blog" 
              className={`nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${
                activeSection === "blog" ? "on !text-zinc-900 dark:!text-white font-medium" : ""
              }`}
            >
              Blog
            </a>
          </li>
          <li>
            <a 
              href="#Contact" 
              className={`nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${
                activeSection === "Contact" ? "on !text-zinc-900 dark:!text-white font-medium" : ""
              }`}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Action Button & Dark Mode Toggle */}
        <div className="flex items-center gap-3">
          
          {/* Tombol Toggle Dark Mode Bawaan Template */}
          <button 
            onClick={toggleDarkMode} 
            className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300"
            aria-label={isDark ? "Light mode" : "Dark mode"}
          >
            {isDark ? (
              /* Ikon Matahari (Muncul kalau lagi mode Dark) */
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
              </svg>
            ) : (
              /* Ikon Bulan (Muncul kalau lagi mode Light) */
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            )}
          </button>

          {/* Tombol Hire Me */}
          <a href="#Contact" className="hidden md:inline-flex items-center gap-2 shimmer bg-sky-500 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-sky-600 transition-colors">
            Hire me 
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>

        </div>
      </nav>
    </header>
  );
}