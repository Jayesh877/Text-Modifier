import './App.css';
import About from './components/About';
import Forms from './components/Forms';
import Navbar from './components/Navbar';
import React,{useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [Mode, setMode] = useState("Enable Dark Mode");
  const [color, setcolor] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert=(message,type)=>
  {
    setalert(
    {
      msg:message,
      type:type
    }
    )
  }
  setTimeout(() => {
    setalert(null)
  }, 2000);
  // const removeclass=()=>
  // {
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-secondary');
  // }
  const toggle=(cls)=>
  {
    // removeclass();
    // document.body.classList.add('bg-'+cls);
    if(color==='dark')
    {
      setcolor('light');
      document.body.style.backgroundColor='white';
      setMode("Enable Dark Mode");
      showalert("Light Mode has been enabled","success");
      
    }
    else{
      setcolor('dark');
      document.body.style.backgroundColor='rgb(10 41 66)';
      setMode("Enable Light Mode");
      showalert("Dark Mode has been enabled","success");
    }
  }
  
return (
    <>
  <Router>
  <Navbar title={"Text Modifier"} color={color} toggle={toggle} mode={Mode}/>

    <div>
      
  {/* <Link to ='/about'>Click me</Link> */}
    </div>
  
  <Alert alert={alert} />
  {/* <Link to ="/about"/> */}
    
  <Routes>
          <Route exact path="/about" element={<About color={color} />}>
          </Route>
          <Route exact path="/" element={<Forms showalert={showalert} color={color}/>}>        
  
          </Route>
        </Routes>
  </Router>
  </>
  );
}

export default App;
