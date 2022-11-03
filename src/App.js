import { useState } from "react";
import { BrowserRouter , Routes, Route, } from "react-router-dom";
import MainPage from './Pages/layout/layout';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Skill from './Pages/Skiils/Skill';
import Project from './Pages/Project/Project';
import './index.css'
import { ContextProvider } from "./Context/context";
import Cv from "./components/cv/cv";

function App() {



  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Cv />} />
            <Route path='/about-me' element={<MainPage />}>
              <Route path='/about-me' element={<About />} />
              <Route path='contact-me' element={<Contact />}/>
              <Route path='skill' element={<Skill />}/>
              <Route path='project' element={<Project />}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>

  );
}

export default App;
