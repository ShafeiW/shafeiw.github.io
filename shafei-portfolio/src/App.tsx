import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './styles/main.css';
import './styles/fonts.css';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <Resume />
                <Contact />
              </>
            } />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
