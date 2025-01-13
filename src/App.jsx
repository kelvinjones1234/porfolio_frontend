import React from "react";
import Index from "./pages/Index";
import GeneralDataContextProvider from "./context/GeneralContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoreProjectPage from "./pages/MoreProjectPage";

const App = () => {
  return (
    <BrowserRouter>
      <GeneralDataContextProvider>
        <div>
          <div className="bg-gradient-to-br from-gray-900 z-[-100] fixed inset-0 to-black">
            <div className="absolute top-0 right-0 w-1/2 h-[5000px] bg-gradient-to-l from-[#98e8cd1a] to-transparent" />
          </div>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/more-projects" element={<MoreProjectPage />} />{" "}
          </Routes>
        </div>
      </GeneralDataContextProvider>
    </BrowserRouter>
  );
};

export default App;
