import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import Step from "./components/step/Step";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create" element={<Step />} />
      </Routes>
    </div>
  );
}

export default App;
