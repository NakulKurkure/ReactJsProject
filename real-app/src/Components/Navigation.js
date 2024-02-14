import React from 'react';
import { Link } from 'react-router-dom'
import "./Nav.css";
const Navigation = () => {

    return ( <>
<nav>
        <div className='container'>
            <h2>RealX</h2>
        <ul className='ul'>

            <li><Link className='nav' to="/faqs">FAQS</Link></li>
            <li> <Link className='nav' to="/explore">Explore</Link></li>
            <li><Link className='nav' to="/associateWithUs"> Associate With US</Link></li>
            <li><button><Link className='nav' to="/login"> Login / SignUp</Link></button></li>
            <li>Select Langauge</li>
        </ul>
        </div>
</nav>


        </>
    )
}

export default Navigation;