import React from 'react';
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills';
import './App.css';
import Home from './components/Home';
import WorkSection from './components/WorkSection';
import Contact from './components/Contact'
function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <WorkSection/>    
      <Contact/>
    </div>
  );
}
export default App;


