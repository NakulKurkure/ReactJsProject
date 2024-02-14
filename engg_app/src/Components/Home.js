import { useState } from "react";


function Home() {

    const [fname, setfname]= useState('');
    const [error,setError]=useState(false);

 function SubmitFreeTrial(){

if(fname==''){
    setfname="Enter your first Name ";
    setError(true);
}else{

    setError();
}

return setError;
}

    return (
     
        <main>
            <div className=" bg-black h-svh flex justify-center items-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQipJDLgGHgi0-MZ_bCmVQu1isfveuR7ZzVYA&usqp=CAU')] bg-no-repeat bg-cover">
                <div className="first h-4/6 w-1/2 m-5">
               <h3 className=" mt-3 text-white">AWASOME DESIGN</h3>
               <div className=" text-white mt-9 text-4xl font-bold ">
                    Digital Solutions and engaged inspire and make you think
               </div>
               <div className=" text-white text-xl mt-7">
               All publicly accessible websites collectively constitute the World Wide Web. There are also private websites that can only be accessed on a private network,
               </div>
        <div className="text-blue-500 mt-8 ml-5">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ml-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Started</button>
            <button type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ml-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View More</button>
        </div>
                </div>
                <div className="last h-4/6 w-1/3 bg-yellow-400 m-5">
        <h1 className="font-medium text-center text-white ml-4 text-xl">We are offering 14 days trial</h1>
        <div className=" text-center mt-9">
      
       <div className="m-0.5 ">
        First Name </div> 
        <input type="text" id="fname" className=" w-64 h-8"  placeholder="Enter your first name" required="Please Enter your First Name" onChange = {(e) => setfname(e.target.value)
                }/>
            

        <div className="mt-0.5">
        Last Name </div> 
        <input type="text" className="w-64 h-8" placeholder="Enter your last name" required="Please Enter your Last name"/>

        <div className="mt-0.5">
        Email </div> 
        <input type="text" className=" w-64 h-8" placeholder="Enter your email"/>

        <div className="mt-0.5">
        Password </div> 
        <input type="text" className=" w-64 h-8" placeholder="Enter your password"/>
    </div>

<div>
<button type="submit" className="p-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5 ml-44 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" placeholder="Enter your name " onSubmit={SubmitFreeTrial}>Free Trial</button>

</div>

    </div>
   
            </div>
        </main>
    );
  }
  
  export default Home;