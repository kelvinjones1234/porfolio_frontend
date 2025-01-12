import React from "react";
import { useContext } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  InstagramIcon,
} from "lucide-react";

import { GeneralDataContext } from "../context/GeneralContext";

const Contact = () => {
  const { biodata, socials } = useContext(GeneralDataContext);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: biodata?.email || "",
      link: `mailto:${biodata?.email || ""}`,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: biodata?.tel || "",
      link: `tel:${biodata?.tel || ""}`,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: biodata?.address || "",
      link: "#",
    },
  ];

  // Map social media icons to their respective components
  const socialIcons = {
    github: <Github className="w-5 h-5" />,
    linkedin: <Linkedin className="w-5 h-5" />,
    twitter: <Twitter className="w-5 h-5" />,
    instagram: <InstagramIcon className="w-5 h-5" />,
  };

  return (
    <section className="w-full py-8 sm:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl text-white font-bold mb-6">
            Get In <span className="text-[#98e8cd]">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-900 bg-opacity-50 p-4 sm:p-6 rounded-xl border border-gray-800">
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#98e8cd] text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#98e8cd] text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#98e8cd] text-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#98e8cd] text-white resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full font-babas bg-[#98e8cd] text-black font-medium py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group flex flex-wrap sm:flex-nowrap items-center gap-4 bg-gray-900 bg-opacity-50 p-4 rounded-xl border border-gray-800 hover:border-[#98e8cd] transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#98e8cd] bg-opacity-10 rounded-lg flex items-center justify-center text-[#98e8cd] group-hover:bg-[#98e8cd] group-hover:text-black transition-all duration-300">
                    {info.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-white mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-400 text-sm break-all">
                      {info.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-babas font-medium text-gray-400 mb-4">
                Connect with me
              </h3>
              <div className="flex flex-wrap gap-3">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#98e8cd] hover:text-black transition-all duration-300"
                  >
                    {socialIcons[social.social_media.toLowerCase()]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
