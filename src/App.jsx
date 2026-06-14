import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // 1. Inisialisasi state langsung dari localStorage / Media Query (Bebas Error Cascading)
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme === "dark" || (!savedTheme && prefersDark);
  });

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // 2. Efek ini SEKARANG cuma bertugas sinkronisasi ke DOM luar (Sesuai anjuran dokumen React)
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]); // Berjalan cuma kalau isDark berubah

  // 3. Fungsi toggle tema saat diklik
  // REVISI: Update fungsi ini di dalam file src/App.jsx kamu
  const toggleDarkMode = () => {
    if (isDark) {
      // 1. Hapus kelas dari tag HTML secara instan
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      // 2. Tambah kelas ke tag HTML secara instan
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  // 4. Logic Scroll Listener (Tetap sama seperti kemarin)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 60;
      if (atBottom) {
        setActiveSection("Contact"); // Sesuaikan id komponen kamu (Kapital/Kecil)
        return;
      }

      const ids = ["Contact", "blog", "reviews", "about", "Project", "services", "hero"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActiveSection(id);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 5. Logic Reveal on Scroll (Tetap sama seperti kemarin)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased min-h-screen transition-colors duration-300">
      <Navbar 
        isDark={isDark} 
        toggleDarkMode={toggleDarkMode} 
        scrolled={scrolled} 
        activeSection={activeSection} 
      />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Testimonials />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}