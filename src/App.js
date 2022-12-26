import React from "react";

import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app bg-primary">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
