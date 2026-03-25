import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ["home", "services", "about", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
        w-[90%] lg:w-[70%] 
        flex fixed left-1/2 -translate-x-1/2 z-50
        items-center justify-between px-8 py-4
        transition-all duration-300 rounded-full border
        ${
          isScrolled
            ? "mt-3 bg-white/5 backdrop-blur-xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] text-white"
            : "mt-5 bg-transparent border-transparent text-white"
        }
      `}
      >
        {/* LOGO */}
        <div className="font-bold text-xl font-serif z-50 text-white">
          Web
          <span className="text-[#00ff99] font-['JetBrains_Mono'] italic">
            AM
          </span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 font-['JetBrains_Mono']">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={800}
                spy={true}
                offset={-100}
                activeClass="text-[#00ff99] drop-shadow-[0_0_8px_rgba(0,255,153,0.8)]"
                className="cursor-pointer capitalize transition-all duration-300 text-gray-300 hover:text-[#00ff99] hover:drop-shadow-[0_0_8px_rgba(0,255,153,0.8)]"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* BUTTON */}
        <button className="hidden md:block px-6 py-2 rounded-full font-bold transition-all bg-[#00ff99] text-[#1c1c22] hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105">
          Need Help?
        </button>

        {/* MOBILE MENU ICON */}
        <div
          className="md:hidden flex items-center cursor-pointer z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="space-y-1.5 relative w-6 h-5">
            <span
              className={`absolute block w-6 h-0.5 transition-all duration-300 bg-white ${
                isMobileMenuOpen ? "rotate-45 top-2" : "top-0"
              }`}
            ></span>
            <span
              className={`absolute block w-6 h-0.5 transition-all duration-300 bg-white ${
                isMobileMenuOpen ? "opacity-0 top-2" : "top-2"
              }`}
            ></span>
            <span
              className={`absolute block w-6 h-0.5 transition-all duration-300 bg-white ${
                isMobileMenuOpen ? "-rotate-45 top-2" : "top-4"
              }`}
            ></span>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
        fixed inset-0 z-40 bg-[#0f172a]/95 backdrop-blur-2xl flex flex-col items-center justify-center
        transition-all duration-500 ease-in-out md:hidden text-white
        ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }
      `}
      >
        <ul className="flex flex-col items-center gap-8 text-2xl mt-10 font-['JetBrains_Mono']">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={800}
                offset={-100}
                onClick={() => setIsMobileMenuOpen(false)}
                activeClass="text-[#00ff99] font-bold drop-shadow-[0_0_8px_rgba(0,255,153,0.8)]"
                className="cursor-pointer capitalize text-gray-300 hover:text-[#00ff99] transition-all"
              >
                {item}
              </Link>
            </li>
          ))}

          <button
            className="mt-8 px-8 py-3 rounded-full font-bold transition-all bg-[#00ff99] text-[#1c1c22] hover:bg-white hover:scale-105"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Need Help?
          </button>
        </ul>
      </div>
    </>
  );
}

export default Navbar;