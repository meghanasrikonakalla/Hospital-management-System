import React from "react";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Patients from "./pages/Patients";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App(){
  return (
    <>
    <BrowserRouter>
    <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/patients/:id" element={<Patients/>}/>
        <Route path="*" element={<NotFound/>}/>
       </Routes>
      </BrowserRouter>
    </>
  )
}
export default App