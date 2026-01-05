import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../utils/constant";

const AdminMessageFromUsers=()=>{
    const [messageData,setMessageData]=useState([]);
    const apiFetch=async()=>{
  try{
            const data=await axios.get(`${BASE_URL}visitor/message`,{withCredentials:true});
            console.log(data);
            setMessageData(data?.data);
        }catch(err){
            console.log(err.message)
        }
    }
    useEffect(()=>{
      apiFetch()

    },[])
    return(
        <>
        <div className="h-screen bg-black">
            <div className="pt-28 text-white font-bold text-4xl flex justify-center items-center mb-2">Messages from Users !</div>
        <div className=" bg-black  flex gap-2  ">
            {messageData.length!=0 && messageData.map((val)=>{
                return  <>
                <div  className="mb-4 border border-gray-800 text-white px-4 p-4 "><div className="flex flex-wrap"><p className="text-green-500">UserName</p>: {val.userName}</div>
                <div className="flex flex-wrap"><p className="text-green-400">gmailId</p> : {val.emailId}</div>
                <div className="flex flex-wrap"><p className="text-green-500">message</p>{val.message}</div> </div>
                </>
            })}
            </div>
               
          
            

      </div>
        </>
    )
}
export default AdminMessageFromUsers