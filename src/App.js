import logo from './logo.svg';
import './App.css';
import React from 'react';
import LandingPage from './pages/landingpage';
import AboutMe from './pages/aboutme';
import MySkills from './pages/myskillspage';
import MyProjects from './pages/myprojects';
import Contact from './pages/contact';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navigation2';
import ConnectingGrounds from './pages/connectinggrounds';
import ScrollToTop from './components/scrolltotop';
import TwisterHasbro from './pages/twisterhasbropage';
import WakeupMash from './pages/wakeupmashpage';
import GrundfosKollegiet from './pages/grundfoskollegietpage';


function App() {
  

  return (
    <main>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<><LandingPage /><AboutMe/><MySkills/><MyProjects/><Contact/></>}></Route>
        <Route path='/connectinggrounds#aboutme' element={<><LandingPage /><AboutMe/><MySkills/><MyProjects/><Contact/></>}></Route>
        <Route path='/connectinggrounds' element={<ConnectingGrounds/>}></Route>
        <Route path='/twisterhasbro' element={<TwisterHasbro/>}></Route>
        <Route path='/wakeupmash' element={<WakeupMash/>}></Route>
        <Route path='/grundfoskollegiet' element={<GrundfosKollegiet/>}></Route>
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
