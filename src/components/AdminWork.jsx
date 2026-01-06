import axios from "axios";
import { useEffect, useState } from "react";
import ProjectsCards from "../Cards/ProjectsCards";
import { Link, useNavigate } from "react-router-dom";
import deleteImge from "../delete.png";
import tabImg from "../tab.png";
import { BASE_URL } from "../utils/constant";
import ProjectsCardShimmer from "../Cards/ProjectsCardShimmer";

const AdminWork=()=>{
    const [deleteP,setDeleteP]=useState(false);
    const navigate=useNavigate();
    const [projectData,setProjectData]=useState([]);
    const callingApi=async()=>{
        try{
            const jsonData=await axios.get(`${BASE_URL}projects`,{withCredentials:true});
console.log(jsonData.data);
setProjectData(jsonData.data);
        }catch(err){
                console.log(err.Message);
                return navigate("/");
        }

}
useEffect(()=>{
callingApi();
},[deleteP])
const handleDelete=async(id)=>{
    console.log("deleted");
    const data=await axios.delete(`${BASE_URL}projects/${id}`,{withCredentials:true})
    setDeleteP(!deleteP);
}
    return(
        <>
       
         <div className=" bg-black pt-28 h-full ">
            <div className="flex gap-4 h-full flex-wrap">
               <div className=" justify-between ml-0 md:ml-20 sm:w-[29rem] h-[5rem] pl-5  bg-[#0F1215] rounded-[2rem] text-2xl  pr-2 border border-gray-800 outline-none text-white flex">
             <div className="pt-5  ">Add A new Project</div>
           <Link to={"/admin/works/AddProjects"} > <img src={tabImg} alt="addProject" className="w-14 h-14 cursor-pointer mt-3 mr-5" /></Link>
           
            </div>
             <Link to={"/admin/works/message"} ><div className="text-white text-2xl bg-[#0F1215] flex justify-center items-center px-5 rounded-[2rem] h-[5rem] border border-gray-800">usersMessages</div></Link> 
          </div>
             <h1 className="text-3xl text-white font-bold md:ml-20 mt-2">Existing Projects</h1>
             <div className="bg-black flex gap-5 pb-36  flex-wrap justify-center   pt-2 ">
                                 { projectData.length!=0 ?(
projectData.map((val )=>{ 
return <>
<div className="mt-5 mb-5">
 {/* <Link to={`/admin/works/projects/${val._id}`}>                            */}
<ProjectsCards   argument={{
     title:val.title,
     description:val.description,
     github:val.github,
     liveLink:val.liveLink,
     image:val.image,
     video:val.video,
  techTags: val.usedTechs.length === 1 && val.usedTechs[0].includes(",")? val.usedTechs[0].split(",").map(t => t.trim()): val.usedTechs             //val.usedTechs 
}}  key={val._id}/>
{/* </Link> */}
<div className="mt-2 flex gap-5 ml-3">
     <Link to={`/admin/works/projects/${val._id}`}><div className="text-black w-40 bg-[#0F1215] h-12 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text border border-gray-800 outline-none text-center text-3xl rounded-xl pt-1 font-bold mb-5">Edit</div></Link>
    <div className="">   <img src={deleteImge} alt="delete" className="w-10 h-10 cursor-pointer"  onClick={()=>handleDelete(val._id)}/></div>
 

   
</div>
</div>
</>




})
               ) :(<div> 
                <div className="text-white flex justify-center items-center pb-2">Actually i am using Render for backend so it takes first 40 to 50s to load.so pls wait ! </div>
                <div className="flex flex-wrap">    <ProjectsCardShimmer/>
 <ProjectsCardShimmer/>
 <ProjectsCardShimmer/></div>
            </div>)}
               </div>


              
        </div>
        </>
    )
}
export default AdminWork;