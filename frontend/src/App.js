import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Homepage from './pages/Homepage';
import Stories from './pages/Stories'
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/stories" element={<Stories />} />
          <Route exact path="/stories/:id" element={<Stories />} />
          <Route exact path="/portfolio/:id" element={<Portfolio />} />
        </Routes>
      </Router>
     
  
    </div>
  );
}

export default App;