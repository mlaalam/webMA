import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  return (
    <section id="contact-content" className="w-full relative min-h-screen py-24 flex items-center justify-center overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#00ff99]/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(0,255,153,0.1)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#00ff99] animate-pulse"></span>
            <span className="text-gray-300 text-sm font-['JetBrains_Mono'] uppercase tracking-wider">Initialize Connection</span>
          </motion.div> */}
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff99] to-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,153,0.3)]">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto"
          >
            Ready to deploy your next digital project? Send us a securely encrypted transmission and our agents will respond immediately.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Contact Info (Left Side - 2 columns span) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md space-y-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff99]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-3xl font-bold text-white relative z-10">Contact Details</h3>
              
              <div className="space-y-6 relative z-10">
                
                <div className="flex items-center gap-5 group/item cursor-pointer">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-[#00ff99] group-hover/item:bg-[#00ff99]/10 group-hover/item:border-[#00ff99]/30 transition-all duration-300 shadow-xl group-hover/item:scale-110">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 font-['JetBrains_Mono'] uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-white font-medium text-lg">hello@webam.agent</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group/item cursor-pointer">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-cyan-400 group-hover/item:bg-cyan-400/10 group-hover/item:border-cyan-400/30 transition-all duration-300 shadow-xl group-hover/item:scale-110">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 font-['JetBrains_Mono'] uppercase tracking-widest mb-1">Comm-Link</h4>
                    <p className="text-white font-medium text-lg">+1 (555) 019-8372</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group/item cursor-pointer">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-[#00ff99] group-hover/item:bg-[#00ff99]/10 group-hover/item:border-[#00ff99]/30 transition-all duration-300 shadow-xl group-hover/item:scale-110">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 font-['JetBrains_Mono'] uppercase tracking-widest mb-1">Server Location</h4>
                    <p className="text-white font-medium text-lg">Cyber City, Digital Sector</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right Side - 3 columns span) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form className="p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent shadow-2xl relative w-full group">
              <div className="absolute inset-0 bg-[#00ff99]/5 blur-2xl -z-10 rounded-[30px] opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="bg-[#1c1c22]/90 backdrop-blur-xl border border-white/5 rounded-[23px] overflow-hidden p-8 sm:p-10 relative h-full">
                
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-['JetBrains_Mono'] text-gray-400 uppercase tracking-widest">Identify (Name)</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-black/30 border border-white/5 rounded-2xl px-5 py-4 outline-none focus:border-[#00ff99]/50 focus:ring-1 focus:ring-[#00ff99]/50 transition-all text-white placeholder-gray-600 focus:bg-white/5 shadow-inner"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-['JetBrains_Mono'] text-gray-400 uppercase tracking-widest">Routing (Email)</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-black/30 border border-white/5 rounded-2xl px-5 py-4 outline-none focus:border-[#00ff99]/50 focus:ring-1 focus:ring-[#00ff99]/50 transition-all text-white placeholder-gray-600 focus:bg-white/5 shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-['JetBrains_Mono'] text-gray-400 uppercase tracking-widest">Subject Vector</label>
                    <input 
                      type="text" 
                      placeholder="Project deployment inquiry"
                      className="w-full bg-black/30 border border-white/5 rounded-2xl px-5 py-4 outline-none focus:border-[#00ff99]/50 focus:ring-1 focus:ring-[#00ff99]/50 transition-all text-white placeholder-gray-600 focus:bg-white/5 shadow-inner"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-['JetBrains_Mono'] text-gray-400 uppercase tracking-widest">Payload (Message)</label>
                    <textarea 
                      rows="6"
                      placeholder="Initialize transmission here..."
                      className="w-full bg-black/30 border border-white/5 rounded-2xl px-5 py-4 outline-none focus:border-[#00ff99]/50 focus:ring-1 focus:ring-[#00ff99]/50 transition-all text-white placeholder-gray-600 resize-none z-10 relative focus:bg-white/5 shadow-inner"
                    ></textarea>
                  </div>

                  <button 
                    type="button"
                    className="w-full mt-6 flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00ff99] to-cyan-400 text-[#1c1c22] font-bold text-lg hover:from-white hover:to-white transition-all duration-500 shadow-[0_0_20px_rgba(0,255,153,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] group/btn"
                  >
                    <span>Transmit Data</span>
                    <Send size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>

                </div>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
