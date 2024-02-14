import { useState } from 'react';
// import './App.css';
// import './components/form.css' another file in app.js
// import "./components/form.css";
// import {form} from './components/form.js'; 
import axios from 'axios';
// import { Navigate } from 'react-router-dom';
// import {Sign} from './Services/user_service.js'


// Handle events
// Hooks
// State Set

function Register() {

    // form email and paasword
    const [text, setText] = useState('Enter Address');
    const [email, setEmail] = useState('Enter Email');


    const [name, setName] = useState('Enter name');


    const [address, setaddress] = useState('Enter Address');
    // const [error,nameError] =useState('');
    // const [errors,emailError] =useState('');


    // var Clicked =()=> {
    //   let t=text.toUpperCase();
    //   setText(t);
    //   console.log("Your btn is clicked"+t);
    // }

    // function Clicked(){
    //   console.log("your btn is clicked")
    // }

    // function changed(){
    //   console.log("your Address is clicked"+text);
    //   // setText(event.ta)
    //   setText("Yes,Write your address");
    // }


    async function Validate(event) {
        event.preventDefault();
        // setEmail(event.target.value);
        // let pass=setpassword(event.target.value);

        try {

            // setError(ValidateForm()); //Validation


            const res = await axios.post('http://localhost:8081/add', {
                email: email,

                name: name,
                address: address,
            });
            console.log("Item Created" + res.data);
            // Navigate("/")
            alert("Added ");
            setEmail("");
            setName("");
            setaddress("");

            //
        } catch (error) {
            alert(error);
        }



        // alert("your form is submitted");

        //call server api for sending data




        // let val=event.target.value;


        // if(val==""){

        //   setError("Email is required");
        //   console.log("Email is cannot be null");
        //   // alert("Please fill Email");
        //   return false;
        // }else if(val===""){
        //   setpassword("Password is required");
        //   console.log("Password is cannot be null");
        //   alert("Please fill Password");

        // return false;
        // }
        // return true;
    }

    const changed = (event) => {
        console.log("Your address is clicked");
        setText(event.target.value);
    }

    const clearText = () => {
        setText("");

    }

    const ReverseText = () => {
        // Hello
        let str = "";

        let a = text.length - 1; //5
        while (a >= 0) { //5

            str = str + text.charAt(a); //""+o

            a--;
        }
        setText(str);
    }

    const change = (event) => {
        console.log("Your address is clicked");
        // When we have to change value inside email 
        // setEmail(event.target.value);

        setEmail(event.target.value);

        // let values=event.target.value;
        // if(values==""){
        //   setError("Enter valid Email");
        //   return false;
        // }
        // return true;


    }


    const changes = (event) => {
        console.log("Your Name is clicked");
        // When we have to change value inside email 
        // setEmail(event.target.value);

        setName(event.target.value);

        // let values=event.target.value;
        // if(values==""){
        //   setError("Enter valid Email");
        //   return false;
        // }
        // return true;


    }
    const changing = (event) => {
        console.log("Your Address is clicked");
        // When we have to change value inside email 
        // setEmail(event.target.value);

        setaddress(event.target.value);

        // let values=event.target.value;
        // if(values==""){
        //   setError("Enter valid Email");
        //   return false;
        // }
        // return true;


    }



    const click = () => {
        let str = email.toUpperCase();
        setEmail(str);
        let t = text.toUpperCase();
        setText(t);
        console.log(setEmail + "Btn is clicked" + str);
        //Validate form onClick Submit 
        //   const returnform = () => {
        //     let em = document.getElementById("email");
        //     if (em.value = "") {
        //         document.getElementById("emailError").innerHTML = "Please Insert Email";
        //         return false;
        //     }
        //     return true;
        // }

        // 

    }



    return (
        // We can use jsx framents because of we can return one value only. 
        <
        >

        <
        div className = "container" > { /* <form action='/' onSubmit={Validate}> */ } <
        div className = "first" >
        Email: < input type = "email"
        className = 'email'
        id = 'email'
        placeholder = 'Enter your email'
        onChange = { change }
        value = { email }
        /> <
        p className = 'Error'
        id = 'emailError' > < /p> < /
        div > <
        div className = "first" >
        Name: < input type = "text"
        className = 'name'
        id = 'name'
        placeholder = 'Enter your Name'
        required onChange = { changes }
        /> <
        p className = 'Error'
        id = 'passwordError' > {} < /p> < /
        div > <
        div className = "first" >
        Address: < textarea type = "text"
        className = 'area'
        id = 'area'
        onChange = { changing }
        placeholder = 'Enter your Text'
        value = { text }
        /> <
        p className = 'Error'
        id = 'areaError' > < /p> < /
        div > { /* onClick={Clicked}  in btn*/ } <
        button type = 'Submit'
        className = "btn"
        onClick = { Validate } > Sign In < /button> <
        button type = 'button'
        className = "btn"
        onClick = { click } > Convert UpperCase < /button> <
        button type = 'button'
        className = "btn"
        onClick = { clearText } > Clear Text < /button> <
        button type = 'button'
        className = "btn"
        onClick = { ReverseText } > Reverse Text < /button> { / * < /form> */
    } < /div>

    <
    div className = 'cont' >

        <
        p > < b > { text.split(" ").length }
    words < /b> and <b>{text.length} characters </b > < /p>  </div >

        <
        />
);


export default Register;