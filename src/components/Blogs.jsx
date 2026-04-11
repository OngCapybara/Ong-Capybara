import { useState } from "react";

export default function Blogs() {
  // 1. Setup State untuk Halaman Aktif
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Mau nampilin berapa blog per halaman? Kita set 6 ya.

  const blogs = [
    { id: 1, title: "Tips Belajar Golang", date: "Jan 28, 2026", category: "Backend" },
    { id: 2, title: "Web Security 101", date: "Jan 25, 2026", category: "Cyber" },
    { id: 3, title: "Merakit VTOL Drone", date: "Jan 20, 2026", category: "Robotics" },
    { id: 4, title: "React State Management", date: "Jan 15, 2026", category: "Frontend" },
    { id: 5, title: "Bug Bounty Journey", date: "Jan 15, 2026", category: "Cyber" },
    { id: 6, title: "Database MySQL Optimization", date: "Jan 05, 2026", category: "Backend" },
    { id: 7, title: "Ardupilot Configuration", date: "Jan 02, 2026", category: "Robotics" },
    { id: 8, title: "Tailwind vs Bootstrap", date: "Dec 28, 2025", category: "Frontend" },
    { id: 9, title: "Networking Dasar", date: "Dec 20, 2025", category: "Network" },
    { id: 10, title: "Pentesting Mobile App", date: "Dec 15, 2025", category: "Cyber" },
  ];

  // 2. Logika Pemotongan Data (Pagination)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // 3. Hitung Total Halaman
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  return (
    <section id="Blog" className="w-full bg-white py-20">
      <div className="container mx-auto px-8 md:px-40 text-center">
        <h2 className="text-4xl font-black text-slate-900 mb-16 uppercase">Blogs</h2>

        {/* Blog Grid - Menampilkan hanya data yang sudah di-slice */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {currentBlogs.map((blog) => (
            <div key={blog.id} className="group cursor-pointer">
              <div className="w-full aspect-square bg-slate-200 rounded-[2rem] mb-6 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-sky-100 group-hover:-translate-y-2">
                <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-400 font-bold uppercase text-xs">
                  Cover Image
                </div>
              </div>
              <div className="text-left px-2">
                <span className="text-sky-500 font-bold text-sm uppercase">{blog.category}</span>
                <h3 className="text-xl font-black text-slate-800 mt-1 group-hover:text-sky-600 transition">{blog.title}</h3>
                <p className="text-slate-400 text-sm mt-2">{blog.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Tampilan Tombol Angka (Pagination) */}
        <div className="flex justify-center items-center gap-3">
          {/* Tombol Sebelumnya (Opsional) */}
          {currentPage > 1 && (
            <button 
              onClick={() => setCurrentPage(currentPage - 1)}
              className="w-10 h-10 rounded-xl bg-slate-200 text-slate-600 font-bold hover:bg-sky-500 hover:text-white transition"
            >
              {"<"}
            </button>
          )}

          {/* Mapping Angka Halaman */}
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-xl font-bold transition shadow-sm ${
                currentPage === index + 1 
                ? "bg-sky-500 text-white" 
                : "bg-slate-200 text-slate-600 hover:bg-slate-300"
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Simbol Titik-titik (Kalau halaman sudah sangat banyak) */}
          {totalPages > 3 && currentPage < totalPages && (
            <button className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 font-bold cursor-default">
              ...
            </button>
          )}
        </div>
      </div>
    </section>
  );
}