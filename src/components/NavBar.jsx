import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import axios from "axios";

import { logInUser,logOutUser } from "../Stores/logInSlice";


const NavBar=()=>{
  const [refresh,setRefresh]=useState(false);
const handleLogout=async()=>{
  try{
    const data=await axios.post("http://localhost:3000/logout",{},{withCredentials:true})
console.log(data);
dispatch(logOutUser());
navigate("/")
  }catch(err){
    console.log(err.message);
  }

}


  const dispatch=useDispatch();
//subscribing the store------------------------------------------------------------------>
const loginSubScribe=useSelector((store)=>{
return store.adminCart;
})
console.log(loginSubScribe )

  // const[admin,setAdmin]=useState(false);
    //for scroling and reach to the section
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };


   const navigate=useNavigate();
    return(
        <>
        <div  className="bg-black fixed w-full  top-0 left-0  z-50 ">
        <div id="navbarContainer" className="bg-[#0B0E11] flex justify-between h-24  border border-gray-800 rounded-3xl opa ">

                <div className="ml-24 mt-5 text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">DIBYA</div>
                <div className="flex gap-7 justify-end mr-24 mt-8">
                    <div className="text-xl font-semibold text-gray-500 hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-4 hover:text-white
     transition-all duration-300" 
     
     onClick={()=>{
        navigate("/");
        try{
                setTimeout(()=>{
            scrollToSection("home");
          },200)
        }catch(err){
            console.log("ignore")
        }
        }} 
     
     
     
     
     >Home</div>
    
                    <div className="text-xl font-semibold text-gray-500 hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-4 hover:text-white
     transition-all duration-300 "  onClick={()=>{
        navigate("/");
        try{
          setTimeout(()=>{
            scrollToSection("about");
          },200)
            
        }catch(err){
            console.log("ignore")
        }
        }}>About me</div>
                    <div className="text-xl font-semibold text-gray-500 hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-4 hover:text-white
     transition-all duration-300"  onClick={()=>{
        navigate("/");
        try{
          setTimeout(()=>{
            scrollToSection("skill");
          },200)
            
        }catch(err){
            console.log("ignore")
        }
        }}>Skills</div>
                    <div className="text-xl font-semibold text-gray-500 hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-4 hover:text-white
     transition-all duration-300"  onClick={()=>{
        navigate("/");
        try{
          setTimeout(()=>{
            scrollToSection("project");
          },200)
            
        }catch(err){
            console.log("ignore")
        }
        }}>Projects</div>
                    <div className="text-xl font-semibold text-gray-500 hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-4 hover:text-white
     transition-all duration-300"  onClick={()=>{
        navigate("/");
        try{
          setTimeout(()=>{
            scrollToSection("journey");
          },200)
            
        }catch(err){
            console.log("ignore")
        }
        }}>Journey</div>
                    <div className="text-xl font-semibold text-gray-500 hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-4 hover:text-white
     transition-all duration-300"  onClick={()=>{
        navigate("/");
        try{
          setTimeout(()=>{
            scrollToSection("contact");
          },200)
            
        }catch(err){
            console.log("ignore")
        }
        }}>contacts</div>
     <div className="text-xl font-semibold text-gray-500 hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-4 hover:text-white
     transition-all duration-300" onClick={()=>{
      if(loginSubScribe=="Logout"){
         navigate("/admin/works")
      }else{
           navigate("/admin")
      }
 
   
    }
      }>Admin</div>
     {loginSubScribe=="Logout" && (<div className="text-xl font-semibold text-gray-500 hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-4 hover:text-white
     transition-all duration-300" onClick={handleLogout}>{loginSubScribe}</div>)} 
                  
                </div>
        </div>
        </div>
        </>
    )
}
export default NavBar;