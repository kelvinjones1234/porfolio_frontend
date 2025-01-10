import React from "react";
import Index from "./pages/Index";
import MoreProjectPage from "./pages/MoreProjectPage";

const App = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-gray-900 z-[-100] fixed inset-0 to-black">
        <div className="absolute top-0 right-0 w-1/2 h-[5000px] bg-gradient-to-l from-[#98e8cd1a] to-transparent" />
      </div>
      <Index />
      {/* <MoreProjectPage /> */}
    </div>
  );
};

export default App;
