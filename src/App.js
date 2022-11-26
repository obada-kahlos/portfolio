import { BrowserRouter, Routes, Route, } from "react-router-dom";
import MainPage from './Pages/layout/layout';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Skills from './Pages/Skiils/Skill';
import Project from './Pages/Project/Project';
import './index.css'
import { ContextProvider } from "./Context/context";
import Cv from "./components/cv/cv";
import Something from "./Pages/something/something";
import { Helmet, HelmetProvider } from "react-helmet-async";
function App() {



  return (
    <HelmetProvider>
      <Helmet>
        <title> Design+Code - Learn to design and code React apps</title>
        <meta
          name="description"
          content="Learn design and code by building real apps with React. Complete courses about web development using CSS and React Hooks"
        />;
      </Helmet>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Cv />} />
            <Route path='/portfolio' element={<MainPage />}>
              <Route path='about-me' element={<About />} />
              <Route path='contact-me' element={<Contact />} />
              <Route path='skill' element={<Skills />} />
              <Route path='project' element={<Project />} />
              <Route path="something" element={<Something />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </HelmetProvider>

  );
}

export default App;
