import React from 'react';
import './App.css';
import Sidebar from "./Sidebar.js"
import Main from "./Main.js"

function App() {
  return (
    <div className="app">
        <Main/>
        <h1> whats up</h1>
        <Sidebar/>
    </div>
  );
}

export default App;
