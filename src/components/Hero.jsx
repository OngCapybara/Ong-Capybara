import profileImg from "../assets/atmin/ongganteng.JPG";

export default function Hero() {
  return (
    <section className="w-full bg-[#E0F2FE] min-h-[80vh] flex items-center" id="Home">
      <div className="container mx-auto px-8 md:px-40 flex flex-col md:flex-row justify-between items-center gap-12">
        
        {/* Sisi Kiri: Teks */}
        <div className="max-w-xl order-2 md:order-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Hello!</h3>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            I'm Ong Azis Saliem
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            I break code to secure it, and write code to fly it. <br className="hidden md:block" />
            Specializing in <span className="font-bold text-sky-600">React</span>, 
            <span className="font-bold text-sky-600"> Golang</span>, and 
            <span className="font-bold text-sky-600"> VTOL Drones</span>.
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="bg-sky-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-sky-200 hover:bg-sky-600 transition">
              Download CV
            </button>
            <button className="border-2 border-sky-400 text-sky-500 px-8 py-3 rounded-xl font-bold hover:bg-sky-50 transition">
              See My Projects
            </button>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="w-[300px] h-[350px] md:w-[400px] md:h-[450px] rounded-lg overflow-hidden shadow-lg">
            <img 
              src={profileImg} 
              alt="Ong Azis Saliem" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}