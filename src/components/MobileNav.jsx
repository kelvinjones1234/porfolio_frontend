import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  InstagramIcon,
} from "lucide-react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/img/4.svg";

const MobileNav = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    {
      icon: <InstagramIcon className="w-5 h-5" />,
      href: "#",
      label: "Instagram",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const body = document.body;
    if (menuToggle) {
      body.style.overflow = "hidden";
      body.style.paddingRight = "15px";
    } else {
      // Delay removing the styles to match the closing animation
      setTimeout(() => {
        body.style.overflow = "";
        body.style.paddingRight = "";
      }, 300);
    }
    return () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
    };
  }, [menuToggle]);

  const handleToggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "py-3 bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="px-4 flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo Section with animation */}
          <div className="flex items-center gap-x- transition-transform duration-300 ease-out">
            <img
              src={logo}
              alt="Logo"
              className={`h-10 w-auto transition-transform duration-300 ${
                scrolled ? "scale-90" : "scale-100"
              }`}
            />
            <h2 className="text-white text-xl font-bold transition-all duration-300">
              Praise<span className="text-">Media</span>
            </h2>
          </div>

          {/* Menu Toggle Button with smooth icon transition */}
          <button
            className="relative z-50 p-2 group transition-transform duration-300 ease-out"
            onClick={handleToggleMenu}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div
                className={`absolute transition-all duration-300 ${
                  menuToggle ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              >
                <RiMenu3Fill className="w-6 h-6 text-gray-400 group-hover:text-[#98e8cd] transition-colors duration-300" />
              </div>
              <div
                className={`absolute transition-all duration-300 ${
                  menuToggle ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              >
                <AiOutlineClose className="w-6 h-6 text-[#98e8cd] transition-colors duration-300" />
              </div>
            </div>
          </button>
        </div>
      </nav>

      {/* Overlay with smooth backdrop transition */}
      <div
        className={`fixed inset-0 backdrop-blur-sm transition-all duration-500 ease-in-out ${
          menuToggle
            ? "bg-black/60 opacity-100 z-40"
            : "bg-black/0 opacity-0 pointer-events-none -z-10"
        }`}
        onClick={handleToggleMenu}
      >
        {/* Menu Panel with smooth sliding animation */}
        <div
          className={`fixed right-0 top-0 bottom-0 w-72 bg-gray-900 shadow-2xl transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            menuToggle ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Menu Content with staggered animations */}
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto py-20 px-6">
              <div className="space-y-8">
                {menuItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block text-lg font-medium text-gray-400 hover:text-[#98e8cd] transition-all duration-300 transform ${
                      menuToggle
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${150 + index * 50}ms`,
                    }}
                    onClick={() => setMenuToggle(false)}
                  >
                    {item.name}
                  </a>
                ))}

                <button
                  className={`w-full px-6 py-3 mt-6 text-sm uppercase tracking-wider border border-[#98e8cd] text-[#98e8cd] rounded-full hover:bg-[#98e8cd] hover:text-black transition-all duration-300 transform ${
                    menuToggle
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "350ms" }}
                >
                  Download Resume
                </button>
              </div>
            </div>

            {/* Social Links with staggered fade-in */}
            <div
              className={`border-t border-gray-800 p-6 transition-all duration-500 transform ${
                menuToggle
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-sm text-gray-400 mb-4">Connect with me</p>
              <div className="grid grid-cols-4 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#98e8cd] hover:text-black transition-all duration-300 transform ${
                      menuToggle
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${450 + index * 50}ms` }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
