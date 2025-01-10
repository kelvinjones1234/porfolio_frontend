// import React, { useState, useEffect } from "react";
// import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
// import { RiMenu3Fill } from "react-icons/ri";
// import { AiOutlineClose } from "react-icons/ai";
// import logo from "../assets/img/4.svg";

// const MobileNav = () => {
//   const [menuToggle, setMenuToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const menuItems = [
//     { name: "Home", id: "/" },
//     { name: "About", id: "about" },
//     { name: "Projects", id: "projects" },
//     { name: "Contact", id: "contact" },
//   ];

//   const socialLinks = [
//     { icon: <Github className="w-5 h-5" />, to: "#", label: "GitHub" },
//     { icon: <Linkedin className="w-5 h-5" />, to: "#", label: "LinkedIn" },
//     { icon: <Twitter className="w-5 h-5" />, to: "#", label: "Twitter" },
//     { icon: <Instagram className="w-5 h-5" />, to: "#", label: "Instagram" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const body = document.body;
//     if (menuToggle) {
//       body.style.overflow = "hidden";
//       body.style.paddingRight = "15px";
//     } else {
//       setTimeout(() => {
//         body.style.overflow = "";
//         body.style.paddingRight = "";
//       }, 300);
//     }
//     return () => {
//       body.style.overflow = "";
//       body.style.paddingRight = "";
//     };
//   }, [menuToggle]);

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
//           scrolled
//             ? "py-3 bg-gray-900/95 backdrop-blur-md shadow-lg"
//             : "py-4 bg-transparent"
//         }`}
//       >
//         <div className="px-4 flex justify-between items-center max-w-7xl mx-auto">
//           <div className={`flex items-center `}>
//             <img
//               src={logo}
//               alt="Logo"
//               className={`h-10 w-auto transition-transform duration-300 ${
//                 scrolled ? "scale-90" : "scale-100"
//               }`}
//             />
//             <h2 className="text-white text-xl font-bold ml-2">
//               Praise<span className="text-[#98e8cd]">Media</span>
//             </h2>
//           </div>

//           <button
//             className="relative z-50 p-2 transition-transform duration-300 ease-out"
//             onClick={() => setMenuToggle(!menuToggle)}
//             aria-label="Toggle menu"
//           >
//             {menuToggle ? (
//               <AiOutlineClose className="w-6 h-6 text-[#98e8cd] transition-transform duration-300" />
//             ) : (
//               <RiMenu3Fill className="w-6 h-6 text-gray-400 hover:text-[#98e8cd] transition-colors duration-300" />
//             )}
//           </button>
//         </div>
//       </nav>

//       <div
//         className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
//           menuToggle ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//         style={{ zIndex: 40 }}
//         onClick={() => setMenuToggle(false)}
//       />

//       <aside
//         className={`fixed right-0 top-0 bottom-0 w-72 bg-gray-900 shadow-2xl transition-transform duration-300 ease-in-out ${
//           menuToggle ? "translate-x-0" : "translate-x-full"
//         }`}
//         style={{ zIndex: 45 }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex flex-col h-full">
//           <div className="flex-1 overflow-y-auto py-20 px-6">
//             <div className="space-y-8">
//               {menuItems.map((item, index) => (
//                 <a
//                   key={item.name}
//                   href={`#${item.id}`}
//                   className={`block text-lg font-medium text-gray-400 hover:text-[#98e8cd] transition-all duration-300 transform ${
//                     menuToggle
//                       ? "translate-x-0 opacity-100"
//                       : "translate-x-8 opacity-0"
//                   }`}
//                   style={{
//                     transitionDelay: menuToggle
//                       ? `${150 + index * 50}ms`
//                       : "0ms",
//                   }}
//                   onClick={() => setMenuToggle(false)}
//                 >
//                   {item.name}
//                 </a>
//               ))}

//               <button
//                 className={`w-full px-6 py-3 mt-6 text-sm uppercase tracking-wider border border-[#98e8cd] text-[#98e8cd] rounded-full hover:bg-[#98e8cd] hover:text-black transition-all duration-300 transform ${
//                   menuToggle
//                     ? "translate-x-0 opacity-100"
//                     : "translate-x-8 opacity-0"
//                 }`}
//                 style={{ transitionDelay: menuToggle ? "350ms" : "0ms" }}
//               >
//                 Download Resume
//               </button>
//             </div>
//           </div>

//           <div
//             className={`border-t border-gray-800 p-6 transition-all duration-500 transform ${
//               menuToggle
//                 ? "translate-y-0 opacity-100"
//                 : "translate-y-4 opacity-0"
//             }`}
//             style={{ transitionDelay: menuToggle ? "400ms" : "0ms" }}
//           >
//             <p className="text-sm text-gray-400 mb-4">Connect with me</p>
//             <div className="grid grid-cols-4 gap-3">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.to}
//                   className={`w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#98e8cd] hover:text-black transition-all duration-300 transform ${
//                     menuToggle
//                       ? "translate-y-0 opacity-100"
//                       : "translate-y-4 opacity-0"
//                   }`}
//                   style={{
//                     transitionDelay: menuToggle
//                       ? `${450 + index * 50}ms`
//                       : "0ms",
//                   }}
//                   aria-label={social.label}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default MobileNav;

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/img/4.svg";

const MobileNav = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Home", id: "" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, to: "#", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, to: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, to: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, to: "#", label: "Instagram" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

  return (
    <>
      {/* Menu Toggle Button - Positioned above everything */}
      <div className="fixed top-4 right-4" style={{ zIndex: 70 }}>
        <button
          className="p-2 rounded-lg transition-all duration-300 ease-out"
          onClick={() => setMenuToggle(!menuToggle)}
          aria-label="Toggle menu"
        >
          {menuToggle ? (
            <AiOutlineClose className="w-6 h-6 text-[#98e8cd]" />
          ) : (
            <RiMenu3Fill className="w-6 h-6 text-gray-400 hover:text-[#98e8cd]" />
          )}
        </button>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out ${
          scrolled
            ? "py-3 bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "py-4 bg-transparent"
        }`}
        style={{ zIndex: 40 }}
      >
        <div className="px-4 flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className={`h-10 w-auto transition-transform duration-300 ${
                scrolled ? "scale-90" : "scale-100"
              }`}
            />
            <h2 className="text-white text-xl font-bold ml-2">
              Praise<span className="text-[#98e8cd]">Media</span>
            </h2>
          </div>
          {/* Placeholder for spacing */}
          <div className="w-10 h-10" />
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          menuToggle ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 45 }}
        onClick={() => setMenuToggle(false)}
      />

      {/* Side Menu */}
      <aside
        className={`fixed right-0 top-0 bottom-0 w-72 bg-gray-900 shadow-2xl transition-transform duration-300 ease-in-out ${
          menuToggle ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-20 px-6">
            <div className="space-y-8">
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  className={`block text-lg font-medium text-gray-400 hover:text-[#98e8cd] transition-all duration-300 transform ${
                    menuToggle
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: menuToggle
                      ? `${150 + index * 50}ms`
                      : "0ms",
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
                style={{ transitionDelay: menuToggle ? "350ms" : "0ms" }}
              >
                Download Resume
              </button>
            </div>
          </div>

          <div
            className={`border-t border-gray-800 p-6 transition-all duration-500 transform ${
              menuToggle
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: menuToggle ? "400ms" : "0ms" }}
          >
            <p className="text-sm text-gray-400 mb-4">Connect with me</p>
            <div className="grid grid-cols-4 gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.to}
                  className={`w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#98e8cd] hover:text-black transition-all duration-300 transform ${
                    menuToggle
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: menuToggle
                      ? `${450 + index * 50}ms`
                      : "0ms",
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MobileNav;
