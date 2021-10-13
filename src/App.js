import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null); 
    }, 1500)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';  
      showAlert("Dark Mode Hass been Enabled", "success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';  
      showAlert("Light mode Hass been Enabled", "success")
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <Alert alert={alert}/>
      <TextForm heading="Enter the text to analyze Below" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;