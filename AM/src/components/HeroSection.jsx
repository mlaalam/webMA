import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function HeroSection() {
  const texts = ["Websites", "Web Apps", "E-commerce", "SaaS"];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen py-24 flex items-center justify-center  text-white px-6 overflow-hidden">

      {/* Glow Background */}
      {/* <div className="absolute w-[300px] h-[300px] bg-[#00ff99]/20 blur-[120px] top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-blue-500/20 blur-[120px] bottom-10 right-10"></div> */}

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Welcome to{" "}
            <span className="bg-gradient-to-r from-[#00ff99] to-cyan-400 bg-clip-text text-transparent drop-shadow-md">
              Our Web Agency
            </span>
          </motion.h1>

          <motion.h2
            key={textIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-300"
          >
            We build{" "}
            <span className="text-[#00ff99] font-semibold drop-shadow-[0_0_8px_rgba(0,255,153,0.4)]">
              {texts[textIndex]}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-base md:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            Everything you want, you’ll find here.
            We create modern, fast, and scalable digital solutions 🚀
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
          >
            <button className="w-full sm:w-auto bg-[#00ff99] text-[#0f0f14] px-8 py-3.5 rounded-full font-bold shadow-[0_0_15px_rgba(0,255,153,0.3)] hover:shadow-[0_0_25px_rgba(0,255,153,0.5)] hover:-translate-y-1 hover:bg-[#00ff99] transition-all duration-300">
              Start Your Project
            </button>

            <button className="w-full sm:w-auto border border-[#00ff99]/50 bg-white/5 backdrop-blur-sm px-8 py-3.5 rounded-full text-[#00ff99] font-bold hover:bg-[#00ff99] hover:text-black transition-all duration-300">
              Our Work
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative mt-10 md:mt-0"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00ff99]/20 to-transparent blur-3xl -z-10 rounded-full animate-pulse"></div>

            <div className="p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
                alt="Web Agency"
                className="w-full max-w-[280px] sm:max-w-md md:max-w-lg rounded-[23px] shadow-2xl object-cover relative z-10"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;