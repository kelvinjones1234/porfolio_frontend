import React from "react";

const DecorativeCodeSnippet = () => {
  return (
    <div className="hidden relative md:block md:top-0 z-10">
      <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-800 transform rotate-3 hover:rotate-0 transition-transform duration-300">
        <pre className="text-sm lg:text-[1.5rem] lg:leading-[1.8rem] text-gray-400">
          <code>
            {`{
  name: "Godwin Praise",
  role: "Full Stack Developer",
  skills: [
    "Frontend",
    "Backend",
  ],
  passion: "Creating 
    exceptional Web Applications"
}`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default DecorativeCodeSnippet;