import React from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <div className="bg-darkGray">
        <Intro />
        <Intro />

      </div>
      <Sidebar />
    </>



  );
}

export default App;
