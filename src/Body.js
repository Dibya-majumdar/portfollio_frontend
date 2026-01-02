import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import {Provider, useDispatch} from  "react-redux";
import myStore from "./Stores/mystore";
import axios from "axios";
import { logInUser } from "./Stores/logInSlice";
import { useEffect } from "react";

const Body=()=>{
    const dispatch=useDispatch()
    const userCheck=async()=>{
        try{
               const data=await axios.get("http://localhost:3000/user",{withCredentials:true});
                 dispatch(logInUser("Logout")); 
        }catch(err){
            console.log(err.message);
        }
     

    }
    useEffect(()=>{
        userCheck();
    },[])
    return(
        <>
       
        <div>
        <NavBar/>
        <Outlet/>
        </div>
    
      
        </>
    )
}
export default Body;
