import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

const Naving = () => {

    return ( <
        >


        <
        nav className = 'navbar' >
        <
        ul >

        <
        li > < Link className = 'nav'
        to = '/home' > Home </Link></li >
        <
        li > < Link className = 'nav'
        to = '/about' > About Us </Link></li >
        <
        li > < Link className = 'nav'
        to = '/services' > Services </Link></li >
        <
        li > < Link className = 'nav'
        to = '/contact' > Contact Us </Link></li >

        </ul>

        </nav>

        </>
    )
}

export default Naving