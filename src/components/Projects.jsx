import React, { useState, useContext } from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Github, ExternalLink } from "lucide-react";
import { GeneralDataContext } from "../context/GeneralContext";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web App", "Frontend", "Full Stack"];

  // Use projects data from the context
  const { projects } = useContext(GeneralDataContext);

  if (!projects) {
    return <div>Loading projects...</div>; // Or a loading spinner
  }

  // Filter projects based on the active filter
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
                  src={`http://127.0.0.1:8000${project.image}`}
                  alt={project.project_title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.git_link}
                    className="p-2 bg-white rounded-full text-black hover:bg-[#98e8cd] transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.project_link}
                    className="p-2 bg-white rounded-full text-black hover:bg-[#98e8cd] transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {project.project_title}
                </h3>
                <p
                  className="text-gray-400 mb-4"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech_used.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-800 rounded-full text-[#98e8cd]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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
