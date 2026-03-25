import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaGithub ,FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative py-12 border-t border-white/5 bg-[#0f0f14]/80 backdrop-blur-xl overflow-hidden mt-10">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#00ff99]/50 to-transparent"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#00ff99]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <div className="font-bold text-3xl font-serif text-white mb-2">
            Web<span className="text-[#00ff99] font-['JetBrains_Mono'] italic">AM</span>
          </div>
          <p className="text-sm font-['JetBrains_Mono'] text-gray-500 uppercase tracking-widest">
            Autonomous Digital Experiences
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a href="#" className="p-3 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-[#00ff99] hover:bg-[#00ff99]/10 hover:border-[#00ff99]/30 transition-all duration-300">
            <FaSquareXTwitter size={20} />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300">
            <FaGithub size={20} />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-[#00ff99] hover:bg-[#00ff99]/10 hover:border-[#00ff99]/30 transition-all duration-300">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300">
            <BiSolidMessageSquareDetail size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 pt-6 border-t border-white/5 text-center relative z-10 max-w-7xl mx-auto px-6">
        <p className="text-xs text-gray-600 font-['JetBrains_Mono'] uppercase tracking-widest">
          &copy; {currentYear} WebAM Agency. All Systems Operational.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
