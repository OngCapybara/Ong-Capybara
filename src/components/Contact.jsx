import MyGuwe from "../assets/atmin/sagiri.jpg";

export default function Contact() {
  return (
    <section id="Contact" className="w-full bg-white py-20">
      <div className="container mx-auto px-8 md:px-40">
        {/* Title */}
        <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tight">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Sisi Kiri: Tampilan Gambar */}
          <div className="w-full md:w-1/2">
            <div className="w-full aspect-square bg-slate-200 rounded-[2.5rem] shadow-inner overflow-hidden group">
              <img 
                src={MyGuwe} 
                alt="Contact Illustration" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
          </div>

          {/* Sisi Kanan: Form Contact */}
          <div className="w-full md:w-1/2">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700 ml-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-5 py-4 rounded-2xl border-2 border-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-100 transition-all placeholder:text-slate-300"
                  placeholder="Your Name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700 ml-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-5 py-4 rounded-2xl border-2 border-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-100 transition-all placeholder:text-slate-300"
                  placeholder="your@email.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700 ml-1">Message</label>
                <textarea 
                  rows="4"
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