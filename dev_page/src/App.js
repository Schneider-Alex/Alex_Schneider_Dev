import React from 'react';
import './App.css';
import Sidebar from "./Sidebar.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main.js"
import Projects from "./Projects.js"
import Contacts from "./Contacts.js"
import Header from "./Header.js"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


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
        {/* <Footer/> */}
      </div>
      
    </div>
  );
}

export default App;
