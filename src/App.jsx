import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import Komponen Halaman Depan
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

// Import Halaman Terpisah Proyek Kamu
import AllProjects from "./pages/AllProjects";
import AllBlogs from "./pages/AllBlogs";

// 1. BUAT KOMPONEN KONTEN UTAMA: Agar hook useLocation bisa dibaca dengan aman
function AppContent() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme === "dark" || (!savedTheme && prefersDark);
  });
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Hero");

  const location = useLocation(); // Mendeteksi status state pengiriman rute saat ini

  // 2. LOGIC SAKTI: Menangani auto-scroll otomatis lintas rute ke seksi kontak
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollToContact) {
      // Diberi sedikit jeda waktu (timeout) agar React selesai merender halaman utama
      setTimeout(() => {
        const contactSection = document.getElementById("Contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  // Sync class dark mode ke element html dasar
  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  // Efek pendeteksi scroll navbar & penentu status menu navigasi aktif
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 60;
      if (atBottom) { setActiveSection("Contact"); return; }
      const ids = ["Contact", "blog", "reviews", "about", "Project", "services", "Hero"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) { setActiveSection(id); return; }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased min-h-screen transition-colors duration-300">
      {/* Oper data ke komponen Navbar */}
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} scrolled={scrolled} activeSection={activeSection} />
      
      <Routes>
        {/* Rute Halaman Utama (Semua Section) */}
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <Projects />
            <Skills />
            <Testimonials />
            <Blogs />
            <Contact />
          </>
        } />

        {/* Rute Halaman Terpisah */}
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/blog" element={<AllBlogs />} />
      </Routes>

      <Footer />
    </div>
  );
}

// 3. EXPORT UTAMA APP: Membungkus komponen konten menggunakan Router tunggal
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}