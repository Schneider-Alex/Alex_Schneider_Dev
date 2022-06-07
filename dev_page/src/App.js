import React from 'react';
import './App.css';
import Sidebar from "./Sidebar.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main.js"
import Projects from "./Projects.js"
import Contacts from "./Contacts.js"


function App() {
  return (
    <div className="app">
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="index" element={<Main/>}/>
            <Route path="/" element={<Main/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <Sidebar />

    </div>
  );
}

export default App;
