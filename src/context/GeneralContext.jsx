import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GeneralDataContext = createContext();

const GeneralDataContextProvider = ({ children }) => {
  const [biodata, setBiodata] = useState(null);
  const [stacks, setStacks] = useState([]);
  const [technicalExpertise, setTechnicalExpertise] = useState([]);
  const [socials, setSocials] = useState([]);
  const [credits, setCredits] = useState(null);
  const [projects, setProjects] = useState(null);

  const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    timeout: 20000, // Request timeout
    headers: {
      "Content-Type": "application/json",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make the GET request
        const response = await api.get("/all-data/  ");
        const data = response.data;

        setBiodata(data.biodata);
        setStacks(data.stacks);
        setTechnicalExpertise(data.technical_expertise);
        setSocials(data.socials);
        setCredits(data.credits);
        setProjects(data.projects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("projects", projects);

  const contextData = {
    biodata,
    stacks,
    technicalExpertise,
    socials,
    credits,
    projects,
    api,
  };

  return (
    <GeneralDataContext.Provider value={contextData}>
      {children}
    </GeneralDataContext.Provider>
  );
};

export default GeneralDataContextProvider;
