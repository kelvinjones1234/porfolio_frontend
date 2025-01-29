import React, { useState } from "react";
import { useContext } from "react";
import emailjs from "emailjs-com";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { GeneralDataContext } from "../context/GeneralContext";

const Contact = () => {
  const { biodata, socials } = useContext(GeneralDataContext);
  const [formData, setFormData] = useState({
    name: "",
    email_from: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return !value ? "Please provide your name" : "";
      case "email_from":
        return !value
          ? "Please provide your email address"
          : !/\S+@\S+\.\S+/.test(value)
          ? "Please enter a valid email address"
          : "";
      case "message":
        return !value
          ? "Please include your message"
          : value.length < 0
          ? "Kindly add some text"
          : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: validateField(name, value) });
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const errors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) errors[field] = error;
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      showToast("Please complete all required fields correctly.", "error");
      return;
    }

    setIsLoading(true);

    emailjs
      .send(
        "service_ec4nozp",
        "template_1ekkykq",
        {
          ...formData,
          email_to: "chukwuemekagodwinpraise@gmail.com",
        },
        "DrNXDe2rxLRoITaMa"
      )
      .then(() => {
        showToast(
          "Thank you for your message. I will respond to your inquiry as soon as possible.",
          "success"
        );
        setFormData({ name: "", email_from: "", message: "", subject: "" });
        setFormErrors({});
      })
      .catch(() => {
        showToast(
          "We apologize, but there was an error sending your message. Please try again or contact me directly via email.",
          "error"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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

  const socialIcons = {
    github: <Github className="w-5 h-5" />,
    linkedin: <Linkedin className="w-5 h-5" />,
    twitter: <Twitter className="w-5 h-5" />,
    // instagram: <Instagram className="w-5 h-5" />,
  };

  return (
    <section className="w-full py-8 sm:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl text-white font-bold mb-6">
            Connect With <span className="text-[#98e8cd]">Me</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            I welcome opportunities for collaboration and professional
            discussions. Please feel free to reach out using the form below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gray-900 bg-opacity-50 p-4 sm:p-6 rounded-xl border border-gray-800">
            {toast.show && (
              <div
                className={`mb-4 flex items-center gap-2 p-4 rounded-lg text-white ${
                  toast.type === "success" ? "bg-[#98e8cd]" : "bg-red-600"
                }`}
              >
                {toast.type === "success" ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <XCircle className="w-5 h-5" />
                )}
                <span>{toast.message}</span>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full px-3 py-2 bg-gray-800 border rounded-lg focus:outline-none focus:border-[#98e8cd] text-white ${
                      formErrors.name ? "border-red-500" : "border-gray-700"
                    }`}
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {formErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email_from"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email_from"
                    name="email_from"
                    className={`w-full px-3 py-2 bg-gray-800 border rounded-lg focus:outline-none focus:border-[#98e8cd] text-white ${
                      formErrors.email_from
                        ? "border-red-500"
                        : "border-gray-700"
                    }`}
                    placeholder="john.doe@example.com"
                    value={formData.email_from}
                    onChange={handleChange}
                  />
                  {formErrors.email_from && (
                    <p className="mt-1 text-sm text-red-500">
                      {formErrors.email_from}
                    </p>
                  )}
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
                  name="subject"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#98e8cd] text-white"
                  placeholder="Brief subject of your message"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className={`w-full px-3 py-2 bg-gray-800 border rounded-lg focus:outline-none focus:border-[#98e8cd] text-white resize-none ${
                    formErrors.message ? "border-red-500" : "border-gray-700"
                  }`}
                  placeholder="Please provide details about your inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                />
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {formErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full font-medium bg-[#98e8cd] text-black py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-black border-t-transparent"></div>
                ) : (
                  "Submit Message"
                )}
              </button>
            </form>
          </div>

          <div className="space-y-6">
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

            <div>
              <h3 className="font-medium text-gray-400 mb-4">
                Professional Networks
              </h3>
              <div className="flex flex-wrap gap-3">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#98e8cd] hover:text-black transition-all duration-300"
                    aria-label={social.social_media}
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
