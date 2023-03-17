import './App.css';
import NavigationBar from './Components/navBar/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/main/main.js';
import { Routes, Route } from "react-router-dom";
import Projects from './Components/projects/projects';
import Skills from './Components/skills/skills';
import { DarkModeContextProvider } from './context/contextDarkMode';
import { useState } from 'react';




function App() {
  const [reload, setReload] = useState(false)
  return (
    <>
    <DarkModeContextProvider>
      <NavigationBar reload={reload} setReload={setReload}/>      
      <Routes>      
        <Route path='/' element={ <Main reload={reload}/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/skills' element={<Skills/>}/>       
      </Routes>
      </DarkModeContextProvider>
    </>
  );
}

export default App;
