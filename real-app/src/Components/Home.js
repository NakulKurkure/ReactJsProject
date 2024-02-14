import React from "react";
import './HomeCSS.css';
import { Link } from "react-router-dom";


const Home = () => {

    return ( <>

      <div className="contain">
        <div className="indiv1">
      <h3> INVEST IN REAL ESTATE
         FOR CREATING WEBPAGE </h3>
<div className="smalldiv">
image that is shown, is not positioned as we want.
         To position the image, we will use the object-position property.

        {/* <div className="btndiv"><button className="btn"> Start Investing </button></div>  */}
        <div className="btndiv"> <button> <Link className='btns' to="/startInvesting">  Start Investing </Link></button> </div>
        <p className="para"> #It's Possible Now </p>
</div>


        </div>
        <div className="indiv2">
      <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"></img>
        </div>
      </div>
        
        </>



    )
}

export default Home;