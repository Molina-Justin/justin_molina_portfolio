import React from 'react';
import './App.css';
import About from './componets/about/About';
import Header from "./componets/header/Header";
import Home from "./componets/home/Home";
import Projects from './componets/projects/Projects';
import Qualification from './componets/qualification/Qualification';
const App = () => {
  return (
    <>
    <Header/>
    <main className="main">
      <Home/>
      <About/>
      <Qualification/>
      <Projects/>
    </main>
    </>
  )
}

export default App


