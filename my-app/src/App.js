// import {useState} from 'react';
import './App.css';

import Register from './components/Register.js';
import Naving from './components/Naving.js';
import Home from './components/Home.js';
// import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Layout } from "react-router-dom";
// import Switch from "react-router-dom";
// import { Route} from "react-router";
// import './components/form.css' another file in app.js
// import './components/Form.css';

// // import {form} from './components/form.js'; 
// import axios from 'axios';
// import { Navigate } from 'react-router-dom';
// // import {Sign} from './Services/user_service.js'


// Handle events
// Hooks
// State Set

function App() {



    return (
        // We can use jsx framents because of we can return one value only. 

        <div >


        <Naving / >
        <Routes > { /*  path="/home" if whatever you want to go there in Home Component */ } <
        Route path = "/home"
        element = { < Home / > }
        /> { /* <Route path="about" element={<About />} /> */ } </Routes> <
        Register / >
        </div>


    );

}
export default App;