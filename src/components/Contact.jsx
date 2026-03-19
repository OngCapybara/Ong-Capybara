import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2"; // Import SweetAlert2
import MyGuwe from "../assets/atmin/sagiri.jpg";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // 1. Tampilkan Loading Alert
    Swal.fire({
      title: "Sending Message...",
      text: "Mohon tunggu sebentar ya!",
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });

    // 2. Proses Kirim Email
    emailjs
      .sendForm(
        "service_2bi2tge",      // Service ID kamu
        "template_1lh1f8t",     // Template ID kamu
        form.current,
        "R6iJ3xJj1S9cpR_6e"     // Public Key kamu
      )
      .then(
        (result) => {
          // 3. Alert Sukses
          Swal.fire({
            icon: "success",
            title: "Berhasil Terkirim!",
            text: "Pesanmu sudah sampai di email OngCapybara. Have a nice day! :D",
            confirmButtonColor: "#0ea5e9", // Warna sky-500
            timer: 3000,
          });
          form.current.reset(); // Reset form setelah sukses
        },
        (error) => {
          // 4. Alert Gagal
          Swal.fire({
            icon: "error",
            title: "Waduh, Gagal!",
            text: "Terjadi kesalahan teknis. Coba lagi nanti ya! :)",
            confirmButtonColor: "#ef4444",
          });
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <section id="Contact" className="w-full bg-white py-20">
      <div className="container mx-auto px-8 md:px-40">
        <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tight">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
          {/* Sisi Kiri: Gambar */}
          <div className="w-full md:w-[40%] flex justify-center">
            <div className="w-full aspect-square bg-slate-200 rounded-[2.5rem] shadow-inner overflow-hidden group">
              <img
                src={MyGuwe}
                alt="Contact Illustration"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Sisi Kanan: Form */}
          <div className="w-full md:w-1/2">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700 ml-1">Full Name</label>
                <input
                  name="user_name"
                  type="text"
                  required
                  className="w-full px-5 py-4 rounded-2xl border-2 border-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-100 transition-all placeholder:text-slate-300"
                  placeholder="Your Name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700 ml-1">Email</label>
                <input
                  name="user_email"
                  type="email"
                  required
                  className="w-full px-5 py-4 rounded-2xl border-2 border-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-100 transition-all placeholder:text-slate-300"
                  placeholder="your@email.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700 ml-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full px-5 py-4 rounded-2xl border-2 border-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-100 transition-all resize-none placeholder:text-slate-300"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-fit bg-sky-500 text-white px-12 py-4 rounded-2xl font-black hover:bg-sky-600 shadow-xl shadow-sky-200 transition-all active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}