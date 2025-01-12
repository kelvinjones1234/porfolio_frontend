import React from "react";
import { useContext } from "react";
import { GeneralDataContext } from "../context/GeneralContext";

const About = () => {
  const { biodata, technicalExpertise, credits } =
    useContext(GeneralDataContext);

  console.log(technicalExpertise);

  const skills = [
    {
      stack: "Frontend",
      items: [],
    },
    {
      stack: "Backend",
      items: [],
    },
    {
      stack: "Tools",
      items: [],
    },
  ];

  // Populate skills based on technicalExpertise
  technicalExpertise.forEach((expertise) => {
    const category = skills.find((skill) => skill.stack === expertise.stack);
    if (category) {
      category.items.push(expertise.name);
    }
  });

  return (
    <section className="relative pt-[6rem] md:pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Elements */}
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-[#98e8cd1a] to-transparent opacity-50" />
      <div className="absolute -left-10 top-40 w-24 h-24 border border-[#98e8cd] opacity-10 rounded-full" />
      <div className="absolute left-20 bottom-20 w-32 h-32 border-2 border-[#98e8cd] opacity-10 transform rotate-45" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column - Image */}
        <div className="relative">
          <div className="aspect-square w-full max-w-md mx-auto relative">
            {/* Placeholder for profile image */}
            <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
              <img
                src="/api/placeholder/400/400"
                alt="Godwin Praise"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-[#98e8cd] rounded-2xl -z-10" />
            <div className="absolute -left-4 -top-4 w-full h-full bg-[#98e8cd] opacity-10 rounded-2xl -z-10" />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            About <br className="md:hidden" />{" "}
            <span className="text-[#98e8cd]">
              {biodata ? biodata.full_name : ""}
            </span>
          </h2>

          <div className="space-y-6 text-gray-300">
            <p
              className="text-lg leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: biodata ? biodata.about : "",
              }}
            />

            {/* Skills Section */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Technical Expertise
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((category) => (
                  <div
                    key={category.stack}
                    className="bg-gray-900 bg-opacity-50 p-4 rounded-lg border border-gray-800"
                  >
                    <h4 className="text-[#98e8cd] font-medium mb-3">
                      {category.stack}
                    </h4>
                    <ul className="space-y-2">
                      {category.items.map((item, index) => (
                        <li
                          key={index}
                          className="text-gray-400 flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-[#98e8cd] rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
              {[
                {
                  number: biodata ? biodata.experience : "",
                  label: "Years Experience",
                },
                {
                  number: credits ? credits.project_completed : "",
                  label: "Projects Completed",
                },
                {
                  number: credits ? credits.happy_clients : "",
                  label: "Happy Clients",
                },
                {
                  number: credits ? credits.success_rate : "",
                  label: "Success Rate",
                },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold font-babas text-[#98e8cd]">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
