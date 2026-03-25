import { motion } from "framer-motion";
import { Terminal, Shield, Zap } from "lucide-react";

function About() {
  return (
    <section
      className="w-full relative min-h-screen py-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/3 -right-64 w-96 h-96 bg-[#00ff99]/10 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff99] to-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,153,0.3)]">WebAM</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Visual / Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00ff99]/20 to-transparent blur-2xl -z-10 rounded-3xl animate-pulse"></div>
            <div className="p-1 rounded-3xl bg-gradient-to-br from-[#00ff99]/40 to-white/5 shadow-[0_0_30px_rgba(0,255,153,0.15)] h-full w-full">
              <div className="w-full h-full rounded-[23px] overflow-hidden relative group">
                {/* Overlay Gradient to blend bottom portion seamlessly */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c22] via-[#1c1c22]/10 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Two developers working together" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <p className="text-xl leading-relaxed text-gray-300 font-light">
              We are a specialized web agency created by two visionary developers. We don't just build websites; we engineer <strong className="text-white font-semibold">autonomous digital experiences</strong> that scale and perform seamlessly.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-400">
              Our mission is to arm businesses with high-performance architectures, intelligent UI/UX, and bleeding-edge web technologies. We focus on speed, precision, and impeccably clean code.
            </p>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {[
                { icon: <Terminal size={24} className="text-[#00ff99]" />, title: "Modern Stack", desc: "React, VITE, Tailwind" },
                { icon: <Zap size={24} className="text-cyan-400" />, title: "High Performance", desc: "Optimized delivery" },
                { icon: <Shield size={24} className="text-[#00ff99]" />, title: "Secure & Scalable", desc: "Built for the future" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 shadow-[0_0_10px_rgba(0,0,0,0.2)] group-hover:bg-white/10 group-hover:border-[#00ff99]/30 transition-all duration-300 group-hover:-translate-y-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Facts / Stats */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-8 mt-2 border-t border-white/10">
              <div className="text-center sm:text-left">
                <h3 className="text-4xl lg:text-5xl font-extrabold text-white mb-1 tracking-tighter drop-shadow-md">
                  20<span className="text-[#00ff99]">+</span>
                </h3>
                <p className="text-xs font-['JetBrains_Mono'] text-gray-400 uppercase tracking-widest">Projects</p>
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-4xl lg:text-5xl font-extrabold text-white mb-1 tracking-tighter drop-shadow-md">
                  2<span className="text-[#00ff99]">x</span>
                </h3>
                <p className="text-xs font-['JetBrains_Mono'] text-gray-400 uppercase tracking-widest">Developers</p>
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-4xl lg:text-5xl font-extrabold text-white mb-1 tracking-tighter drop-shadow-md">
                  100<span className="text-cyan-400">%</span>
                </h3>
                <p className="text-xs font-['JetBrains_Mono'] text-gray-400 uppercase tracking-widest">Satisfaction</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;