
import Navigation from "./Components/Navigation"; 
import  "./Components/Nav.css";
import Home from "./Components/Home";
import Homebody from './Components/Homebody';
import Realvideo from "./Components/Realvideo";
import FooterWeb from "./Components/FooterWeb.js";
import Address from "./Components/Address.js";
import { Route, Routes} from "react-router-dom";

import Explore from "./Components/Explore.js";
import Answer from "./Components/Answer.js";





function App() {
  
  return (
  
  <div className="App">


  
   
    {/* <Navigation/> */}

    
     
        <Navigation />
        <Routes>

          <Route index element={<Home/>}>
          </Route>

           <Route path="/explore" element={<Explore/>} />
           <Route path="/faqs" element={<Answer/>} />
       </Routes> 
      
   
    
{/*     
    <Routes>
    <Route exact path="/faqs" element={<faqs/>} />
    </Routes> */}
   
    {/* <Home/> */}
    {/* <Homebody/>
    <Realvideo/>
    <FooterWeb/>
    <Address/> */}
   </div> 
   
  //  </div>
   );
  
}

export default App;
