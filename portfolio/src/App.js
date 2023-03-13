import './App.css';
import NavigationBar from './Components/navBar/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/main/main.js';
import { Routes, Route } from "react-router-dom";
import Projects from './Components/projects/projects';




function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </>
  );
}

export default App;
