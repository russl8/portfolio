import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <div>
        <Intro />
        <About />
        <Projects/>
      </div>
      <Sidebar />
    </>



  );
}

export default App;
