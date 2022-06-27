

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

const [darkMode, setdarkMode] = useState('light') ;
const [alert, setalert] = useState(null);

const showAlert = (message , type)=>{
setalert({
  msg : message ,
  type : type 
})

setTimeout(() => {
  setalert(null);
}, 1500);
}

const ToggleMode = ()=>{
  if(darkMode === 'light'){
    setdarkMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark Mode has been enabled", "success");
  }
  else{
    setdarkMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled", "success");
  }
}

  return (
    <>
    <Router>
      <Navbar title="Text Utilities For You" About="About Us" mode ={darkMode} toggleMode={ToggleMode}/>
      <Alert myalert = {alert} />
      <div className="container my-3">
      <Routes>
        <Route index
        element = {<TextForm showAlert = {showAlert} mode={darkMode}/>}
       />
          <Route path="about"
            element = {<About mode = {darkMode} />}>
         </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
