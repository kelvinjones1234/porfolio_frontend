import React, { useState } from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web App", "Frontend", "Full Stack"];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution with real-time inventory management and seamless payment integration.",
      tags: ["Web App", "Full Stack"],
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/600/400",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management Dashboard",
      description:
        "Collaborative project management tool with real-time updates and analytics dashboard.",
      tags: ["Web App", "Frontend"],
      tech: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
      image: "/api/placeholder/600/400",
      github: "#",
      live: "#",
    },
    {
      title: "Social Media Analytics",
      description:
        "Analytics platform providing insights and metrics for social media performance.",
      tags: ["Full Stack"],
      tech: ["React", "Python", "PostgreSQL", "AWS"],
      image: "/api/placeholder/600/400",
      github: "#",
      live: "#",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.tags.includes(activeFilter)
  );

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
      {/* Background Elements */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#98e8cd1a] to-transparent opacity-50" />
      <div className="absolute right-20 top-40 w-32 h-32 border border-[#98e8cd] opacity-10 rounded-full" />
      <div className="absolute right-40 bottom-20 w-24 h-24 border-2 border-[#98e8cd] opacity-10 transform rotate-45" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            My Recent <span className="text-[#98e8cd]">Work</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Here are some of my featured projects that showcase my skills and
            experience in building modern web applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 font-babas rounded-full text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#98e8cd] text-black"
                  : "border border-[#98e8cd] text-[#98e8cd] hover:bg-[#98e8cd] hover:text-black"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-[#98e8cd] transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="p-2 bg-white rounded-full text-black hover:bg-[#98e8cd] transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-white rounded-full text-black hover:bg-[#98e8cd] transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-800 rounded-full text-[#98e8cd]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                {/* <button className="group inline-flex items-center gap-2 text-[#98e8cd] hover:gap-4 transition-all duration-300">
                  <span>View Details</span>
                  <LiaLongArrowAltRightSolid size={20} />
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* See More Projects Button */}
        <div className="text-center mt-12">
          <button className="group font-babas hover:bg-[#98e8cd] hover:text-black transition-all duration-300 uppercase border-2 border-[#98e8cd] inline-flex text-sm rounded-full px-8 py-3 items-center gap-x-4 hover:gap-x-6">
            <span>See More Projects</span>
            <LiaLongArrowAltRightSolid
              className="transition-transform group-hover:translate-x-2"
              size={24}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
