import React from 'react';
import './App.css';
import Sidebar from "./Sidebar.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main.js"
import Resume from "./Resume.js"


function App() {
  return (
    <div className="app">
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>}/>
              <Route path="/resume" element={<Resume/>}/>
              <Route path="/resume" element={<Resume/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <Sidebar />

    </div>
  );
}

export default App;
