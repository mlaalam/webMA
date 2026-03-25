import { motion } from "framer-motion";
import { Code, Globe, Rocket } from "lucide-react";

function Services() {
  const services = [
    {
      icon: <Code size={36} />,
      title: "Web Development",
      desc: "We build fast, scalable and modern websites using React, Laravel and the latest technologies.",
    },
    {
      icon: <Globe size={36} />,
      title: "Web Design",
      desc: "Beautiful and user-friendly UI/UX design that helps your brand stand out.",
    },
    {
      icon: <Rocket size={36} />,
      title: "Launch & Growth",
      desc: "We help you launch your product and grow your business fast 🚀",
    },
  ];

  return (
    <section
      id="services"
      data-theme="light"
      className="w-full  flex items-center justify-center px-4 sm:px-6 lg:px-10 py-16 md:py-24"
    >
      <div className="max-w-6xl w-full text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          Our <span className="text-[#00ff99]">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-12 md:mb-16"
        >
          Everything you need to build and grow your digital product 🚀
        </motion.p>

        {/* CARDS */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 md:gap-8
        ">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="
                group 
                p-6 sm:p-8 
                rounded-2xl md:rounded-3xl 
                border border-gray-200 
                hover:bg-[#00ff99]/10 
                transition-all duration-300
                hover:scale-[1.03] md:hover:scale-105 
                hover:shadow-xl
              "
            >
              {/* ICON */}
              <div className="mb-4 md:mb-6 text-[#00ff99] group-hover:scale-110 transition">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-500 text-sm sm:text-base">
                {service.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;