import React, { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, InstagramIcon } from "lucide-react";
import logo from "../assets/img/4.svg";

const DesktopNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <InstagramIcon className="w-5 h-5" />, href: "#" },
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
              {/* <h2 className="text-white text-xl font-bold">
                Praise<span className="text-">Media</span>
              </h2> */}
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-x-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm uppercase tracking-wider transition-all duration-300 hover:text-[#98e8cd] ${
                  activeSection === item.name
                    ? "text-[#98e8cd]"
                    : "text-gray-300"
                }`}
                onClick={() => setActiveSection(item.name)}
              >
                {item.name}
                {/* {activeSection === item.name && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#98e8cd] transform scale-x-100 transition-transform duration-300" />
                )} */}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden lg:flex items-center gap-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#98e8cd] hover:text-black transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
            <button className="ml-6 font-babas px-4 py-2 text-sm uppercase tracking-wider border border-[#98e8cd] text-[#98e8cd] rounded-full hover:bg-[#98e8cd] hover:text-black transition-all duration-300">
              Resume
            </button>
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
