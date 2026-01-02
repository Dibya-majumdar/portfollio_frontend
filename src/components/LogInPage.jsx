import axios from "axios";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logInUser } from "../Stores/logInSlice";


const LogInPage=()=>{
const dispatch=useDispatch()


    const [exitLogIn,useexitLogIn]=useState(true);
    const[signUp,setSignUp]=useState(false);
     const navigate=useNavigate();
     const[mail,setMail]=useState("");
     const[pass,setPass]=useState("");
     const[apiData,setApiData]=useState("");
     const [adminKey,setAdminKey]=useState("");
     const[errorShow,setErrorShow]=useState("");

// {withCredentials:true}
const handleLogin=async()=>{
    console.log(mail);
    console.log(pass)
const backendData=await axios.post("http://localhost:3000/admin/login",{emailId:mail,password:pass},{withCredentials:true});
console.log(backendData.data.message);
console.log(backendData);
setApiData(backendData.data.message);
setErrorShow(backendData.data.message);
 if(backendData?.data?.data?.emailId==mail){
    dispatch(logInUser("Logout"));  
    navigate("/admin/works")
}
                                                 //--------------------->dispatchibg logout after login

}
const handleSignUp=async()=>{
    try{
        console.log(mail);
    console.log(pass)
const backendData=await axios.post("http://localhost:3000/admin/signup",{emailId:mail,password:pass,key:adminKey});
console.log(backendData.data.message);
setApiData(backendData.data.message);
setErrorShow(backendData.data.message);

// setSignUp(false);
    }catch(err){

    }
    
}
// navigate("/admin/works")


    return(
        <>
        {/* //absolute  top-52 left-52  */}
     
                   <div className="flex justify-center items-center">
        <div className="w-[500px]  bg-gradient-to-r from-cyan-400 to-purple-500  rounded-2xl cursor-pointer  mt-5">       
            <div className="flex justify-between">
                 <p className="p-10 text-4xl font-bold">{signUp==true?"sign up" :"LogIn"} </p>
            <p className="pt-4 pr-2 mr-2 text-3xl font-bold" onClick={()=>navigate("/")}>x</p>
            </div>
           
            <div className="pl-5 text-2xl font-bold pr-10">
                    <p>Enter gmail</p>
                    <input className="w-full rounded-lg outline-none p-3 my-3" type="text" placeholder="Enter gmail"  value={mail} onChange={(e)=>{
                        setErrorShow("");
                        setMail(e.target.value)
                        }}  ></input>
            </div>
             {signUp==true&& (<div className="pl-5 text-2xl font-bold pr-10">
               
                 <p className=" ">Enter Admin Key</p>
                <input className="w-full rounded-lg outline-none p-3 my-3" type="text" placeholder="enter admin key" value={adminKey} onChange={(e)=>{
                      setErrorShow("");
                    setAdminKey(e.target.value)
                    } } ></input>
            </div>)}
            <div className="pl-5 text-2xl font-bold pr-10">
               
                 <p className=" ">Enter password</p>
                <input className="w-full rounded-lg outline-none p-3 my-3" type="password" placeholder="enter password" value={pass} onChange={(e)=>{
                      setErrorShow("");
                    setPass(e.target.value)}} ></input>
            </div>
            {errorShow!="" && (<div className="px-6 text-lg"><p className="text-red-500">{apiData}</p></div>)}
            <div className="flex justify-center items-center mt-8 ">
                 <div className="w-40 h-[50px] bg-green-500 text-black font-bold border border-green-50 text-center items-center flex justify-center rounded-2xl text-2xl   " onClick={signUp ? handleSignUp : handleLogin} >{signUp==true ?"Sign Up":"Login"}</div>
            </div>
            <div className="text-white h-20 w-full  flex justify-center pt-5 " >
                <p className="text-white pr-2">{signUp==true ? "want to log in?":"Want to create a new admin account?"}</p> <p className="underline" onClick={()=>setSignUp(!signUp)}>{signUp==true ? "click here":"signup"}</p>
            </div>
           
         
           
         </div>
         </div>
   
 
        </>
    )
}

export default LogInPage;