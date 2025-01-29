import React, { useState, useEffect, useContext } from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import logo from "../assets/img/4.svg";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink from react-scroll
import { GeneralDataContext } from "../context/GeneralContext";

const DesktopNav = () => {
  const {biodata} = useContext(GeneralDataContext)
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const menuItems = [
    { name: "Home", to: "home" }, // Use section IDs
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    // { icon: <Instagram className="w-5 h-5" />, href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-x-">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-x-1">
            {menuItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to} // Use react-scroll's `to` prop
                smooth={true} // Enable smooth scrolling
                duration={500} // Scroll duration in milliseconds
                offset={-80} // Offset for fixed header (adjust as needed)
                className={`relative px-4 py-2 text-sm uppercase tracking-wider transition-all duration-300 hover:text-[#98e8cd] cursor-pointer ${
                  activeSection === item.name
                    ? "text-[#98e8cd]"
                    : "text-gray-300"
                }`}
                onClick={() => setActiveSection(item.name)}
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-gray-800 hidden icon:flex rounded-lg items-center justify-center text-gray-400 hover:bg-[#98e8cd] hover:text-black transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
            <a
              href={`https://praisemediaportfolio.pythonanywhere.com/${
                biodata ? biodata.resume : ""
              }`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 font-babas px-4 py-2 text-sm hidden md:block uppercase tracking-wider border border-[#98e8cd] text-[#98e8cd] rounded-full hover:bg-[#98e8cd] hover:text-black transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Active Link Indicator - Appears when scrolled */}
      <div
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#98e8cd] to-transparent opacity-10 transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </nav>
  );
};

export default DesktopNav;
