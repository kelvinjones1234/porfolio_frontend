import React from "react";
import Navbar from "../components/Navbar";
import MoreProjects from "../components/MoreProject";
import Contact from "../components/Contact";

const MoreProjectPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[5rem]">
        <MoreProjects />
      </div>
      <Contact />
    </>
  );
};

export default MoreProjectPage;
