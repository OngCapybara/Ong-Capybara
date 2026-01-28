export default function Contact() {
  return (
    <section id="Contact" className="w-full bg-white py-20">
      <div className="container mx-auto px-8 md:px-40">
        <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Sisi Kiri: Placeholder Gambar/Ilustrasi */}
          <div className="w-full md:w-1/2">
            <div className="w-full aspect-square bg-slate-200 rounded-[2.5rem] shadow-inner">
              {/* Kamu bisa masukkan ilustrasi atau foto tim VTOL Drone di sini */}
            </div>
          </div>

          {/* Sisi Kanan: Form Contact */}
          <div className="w-full md:w-1/2">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200 transition"
                  placeholder="Your Name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200 transition"
                  placeholder="your@email.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border-2 border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200 transition resize-none"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-fit bg-sky-500 text-white px-10 py-3 rounded-xl font-black hover:bg-sky-600 shadow-lg shadow-sky-100 transition active:scale-95"
              >
                Contact Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}