import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Route, Routes} from "react-router-dom";
import About from './Components/About';
import SignUp from './Components/SignUp';



function App() {
  return (
   
    // <div>
    //   <Navbar/>
    //    <Home/>
    // </div>
    <div>
    <Navbar />
    <Routes>

      <Route index element={<Home/>}>
      </Route>

       <Route path="/about" element={<About/>} />
       <Route path="/signup" element={<SignUp/>} />
       
   </Routes> 
   </div>
  );
}

export default App;
