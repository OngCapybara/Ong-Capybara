import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // 1. Tampilkan Pop-up Loading
    Swal.fire({
      title: "Sending Message...",
      text: "Mohon tunggu sebentar ya!",
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });

    // 2. Eksekusi Pengiriman via EmailJS
    emailjs
      .sendForm(
        "service_2bi2tge",      // Service ID kamu
        "template_1lh1f8t",     // Template ID kamu
        form.current,
        "R6iJ3xJj1S9cpR_6e"     // Public Key kamu
      )
      .then(
        () => {
          // 3. Pop-up Sukses Berhasil Terkirim
          Swal.fire({
            icon: "success",
            title: "Berhasil Terkirim!",
            text: "Pesanmu sudah sampai di email Ong. Have a nice day! :D",
            confirmButtonColor: "#0ea5e9", // Warna sky-500
            timer: 3000,
          });
          form.current.reset(); // Mengosongkan form kembali setelah sukses
        },
        (error) => {
          // 4. Pop-up Gagal Terkirim
          Swal.fire({
            icon: "error",
            title: "Waduh, Gagal!",
            text: "Terjadi kesalahan teknis. Coba lagi nanti ya!",
            confirmButtonColor: "#ef4444",
          });
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <section id="Contact" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Decorative Blur Backgrounds */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-start">

            {/* Sisi Kiri: Informasi Sosial / Teks */}
            <div>
              <p className="text-xs font-medium text-sky-500 tracking-widest uppercase mb-3">Get in touch</p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-5">
                Let's work<br />together
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Saya terbuka untuk kolaborasi pengerjaan proyek full-stack web, otomasi sistem mikrokontroler, ataupun riset hardware/software. Jika butuh kawan diskusi atau pengerjaan sistem, mari mengobrol!
              </p>

              {/* Tautan Kontak Sosial */}
              <div className="flex flex-col gap-4">
                <a href="mailto:ongazissaliem.sama@gmail.com" className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                  <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-sky-500/20 transition-colors shrink-0">
                    <svg className="w-4 h-4 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </span>
                  <span className="text-sm">ongazissaliem.sama@gmail.com</span>
                </a>
                
                <a href="https://linkedin.com/in/ong-azis-saliem" rel="noopener noreferrer" target="_blank" className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                  <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-sky-500/20 transition-colors shrink-0">
                    <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </span>
                  <span className="text-sm">linkedin.com/in/ong-azis-saliem</span>
                </a>
                
                <a href="https://instagram.com/ong_capy?" rel="noopener noreferrer" target="_blank" className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                  <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-sky-500/20 transition-colors shrink-0">
                    <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </span>
                  <span className="text-sm">instagram.com/ong_capy</span>
                </a>

                <a href="https://github.com/OngCapybara" rel="noopener noreferrer" target="_blank" className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                  <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-sky-500/20 transition-colors shrink-0">
                    <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </span>
                  <span className="text-sm">github.com/OngCapybara</span>
                </a>
              </div>
            </div>

            {/* Sisi Kanan: Form Pengiriman Email */}
            <div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col gap-4">
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fname" className="block text-xs font-medium text-zinc-400 mb-1.5">Name <span aria-hidden="true">*</span></label>
                      <input 
                        type="text" 
                        id="fname" 
                        name="user_name" 
                        placeholder="Your Name" 
                        required 
                        autoComplete="name"
                        className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="femail" className="block text-xs font-medium text-zinc-400 mb-1.5">Email <span aria-hidden="true">*</span></label>
                      <input 
                        type="type" 
                        id="femail" 
                        name="user_email" 
                        placeholder="your@email.com" 
                        required 
                        autoComplete="email"
                        className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="fsubject" className="block text-xs font-medium text-zinc-400 mb-1.5">Subject</label>
                    <input 
                      type="text" 
                      id="fsubject" 
                      name="subject" 
                      placeholder="Project inquiry"
                      className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="fmessage" className="block text-xs font-medium text-zinc-400 mb-1.5">Message <span aria-hidden="true">*</span></label>
                    <textarea 
                      id="fmessage" 
                      name="message" 
                      rows="4" 
                      placeholder="Tell me about your project..." 
                      required
                      className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="shimmer w-full bg-sky-500 hover:bg-sky-600 text-white font-display font-bold text-sm py-3.5 rounded-xl transition-colors active:scale-[0.98]"
                  >
                    Send message →
                  </button>

                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}