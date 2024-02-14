import axios from "axios";
import { useState } from "react";
import { Link} from "react-router-dom";

function SignUp() {

  const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setpassword]=useState("");
    const [confpassword, setconfpassword]=useState("");

  async function ValidateForm(event){
    
    
     
        event.preventDefault();
        // setEmail(event.target.value);
        // let pass=setpassword(event.target.value);

        try {

            // setError(ValidateForm()); //Validation


            const res = await axios.post('http://localhost:8080/api/users/add', {
                name: name,    
                email: email,
                password: password,
               
                confpassword: confpassword,
            });
            console.log("Item Created" + res.data);
            console.log("Form is Submitted");
            // Navigate("/")
            alert("Added ");
            setEmail("");
            setName("");
           setpassword("");
           setconfpassword("");

            //
        } catch (error) {
            alert(error);
        }
      

    }

    return (
 
      <div className=" bg-yellow-100 h-screen flex justify-center ">
         <div className="mt-28">

        <form>
       <h1 className="text- font-semibold text-cyan-600 text-2xl mb-5 ml-5">SignUp</h1>

        <div className=" m-3">
       <input typeof="text" required className="w-96 p-2 rounded-full" placeholder="Name" onChange = {
                    (e) => setName(e.target.value)
                }></input>
       </div>
       <div className="  m-3">
      <input type="email" required className="w-96 p-2 rounded-full" placeholder="Email" onChange = {
                    (e) => setEmail(e.target.value)
                }></input>
       </div>
       <div className="  m-3 ">
       <input type="password" required className="w-96 p-2 rounded-full" placeholder="Password" onChange = {
                    (e) => setpassword(e.target.value)
                }></input>
       </div>
       <div className="  m-3">
     <input type="password" required className="w-96 p-2 rounded-full" placeholder="Confirm Password " onChange = {
                    (e) => setconfpassword(e.target.value)
                }></input>
       </div>
    <div className="m-3">
    <button type="submit"  placeholder="Sign Up" className="w-96 p-2 bg-blue-900 rounded-full font-semibold" onClick={ValidateForm}>Sign Up</button>

    </div>
    <div className="text-center ">
    <h5>Have an Account ?<Link className="text-blue-950 font-semibold mt-2" to="/Signin">SignIn</Link></h5>
    </div>
       
        </form>
        </div>
     </div>
    );
  }
  
  export default SignUp;
  