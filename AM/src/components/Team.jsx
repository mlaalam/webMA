import { motion } from "framer-motion";
import { FaGithub ,FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import mouadImage from "../assets/images/imag.jpg";
import ayoubImage from "../assets/images/ayoub.PNG";

const teamMembers = [
  {
    name: "Mouad Laalam",
    role: "Full-Stack Engineer",
    description: "Architecting scalable backend systems and high-performance React applications.",
    image: mouadImage
  },
  {
    name: "Ayoub",
    role: "SEO Specialist",
    description: "Optimizing web architecture for maximum visibility and driving organic growth through data-driven strategies.",
    image: ayoubImage
  }
];

function Team() {
  return (
    <section id="team-content" className="w-full relative min-h-screen py-24 flex items-center justify-center">
      {/* 
        Intentionally removed the dedicated local cyan glow.
        The background here is now completely transparent to blend perfectly with the global App interface background. 
      */}
      
      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tighter"
          >
            Behind The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff99] to-cyan-400">Code</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 mt-6 max-w-xl mx-auto text-lg"
          >
            The engineers driving the autonomous web experience.
          </motion.p>
        </div>

        {/* Modern Immersive Team Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="group relative h-[450px] sm:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl"
            >
              {/* Image Background */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Overlay Gradient */}
              {/* Very dark at the bottom, fading to transparent at the top to make text perfectly readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Thin Glass Border */}
              <div className="absolute inset-0 border border-white/10 rounded-[2rem] group-hover:border-[#00ff99]/30 transition-colors duration-500"></div>

              {/* Content Box */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight drop-shadow-md">
                  {member.name}
                </h3>
                
                <p className="text-[#00ff99] font-['JetBrains_Mono'] text-sm tracking-widest uppercase mb-4 opacity-90 group-hover:opacity-100 transition-opacity drop-shadow">
                  {member.role}
                </p>
                
                {/* Description Appears on Hover */}
                <p className="text-gray-300 leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {member.description}
                </p>

                {/* Socials Appear on Hover */}
                <div className="flex gap-5 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-4 group-hover:translate-y-0">
                  <a href="#" className="p-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-gray-300 hover:text-white hover:bg-white/20 hover:border-white transition-all duration-300">
                    <FaGithub size={20} />
                  </a>
                  <a href="#" className="p-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-gray-300 hover:text-[#00ff99] hover:bg-[#00ff99]/20 hover:border-[#00ff99] transition-all duration-300">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="p-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400 transition-all duration-300">
                    <FaSquareXTwitter size={20} />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Team;
