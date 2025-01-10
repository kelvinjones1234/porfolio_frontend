import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  InstagramIcon,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "chukwuemekagodwinpraise@gmail.com",
      link: "mailto:chukwuemekagodwinpraise@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "tel:+234-814-1772-672",
      link: "tel:+234-814-1772-672",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Abuja, Nigeria",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <InstagramIcon className="w-5 h-5" />, href: "#" },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
      {/* Background Elements */}
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-[#98e8cd1a] to-transparent opacity-50" />
      <div className="absolute -left-10 top-40 w-24 h-24 border border-[#98e8cd] opacity-10 rounded-full" />
      <div className="absolute left-40 bottom-20 w-32 h-32 border-2 border-[#98e8cd] opacity-10 transform rotate-45" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Get In <span className="text-[#98e8cd]">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="bg-gray-900 bg-opacity-50 p-8 rounded-xl border border-gray-800">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#98e8cd] text-white"
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#98e8cd] text-white"
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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#98e8cd] text-white"
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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#98e8cd] text-white resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#98e8cd] text-black font-medium py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-12">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group flex items-center gap-6 bg-gray-900 bg-opacity-50 p-6 rounded-xl border border-gray-800 hover:border-[#98e8cd] transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#98e8cd] bg-opacity-10 rounded-lg flex items-center justify-center text-[#98e8cd] group-hover:bg-[#98e8cd] group-hover:text-black transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-400">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-medium text-white mb-4">
                Connect with me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#98e8cd] hover:text-black transition-all duration-300"
                  >
                    {social.icon}
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