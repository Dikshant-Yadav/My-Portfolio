// src/App.jsx
import React from 'react';
import './index.css';
import Navbar from './components/Navbar';

import About from './sections/About';
import TechStack from './sections/Techstack';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { useEffect ,useState} from 'react';
import Loader from './components/Loader'
import More from './sections/More';
function App() {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
  
  }, [])
  if(isLoading){
    return <Loader/>
  }
  return (
    
    <>
   
      <Navbar />
      <main>
        <section id="about"><About /></section>
        <section id="techstack"><TechStack /></section>
        <section id="projects"><Projects /></section>
        <section id="resume"><Resume /></section>
        {/* <section id="More"><More /></section> */}
        <section id="Footer"><Footer /></section>

      </main>
    </>
  );
}

export default App;
