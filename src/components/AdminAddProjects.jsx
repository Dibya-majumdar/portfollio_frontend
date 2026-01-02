
import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import ProjectsCards from "../Cards/ProjectsCards";





const AdminAddProject=()=>{
 

  const navigate=useNavigate();
  
   

  const [title,setTitle]=useState("");
    const [image,setImage]=useState( "");
    const [video,setVideo]=useState( "");
    const [live,setLive]=useState( "");
    const [github,setGithub]=useState("");
    const [usedTechs,setUsedTechs]=useState("");
    const [description,setDescription]=useState( "");


    const[errorText,setErrorText]=useState("");


const handleAddProject=async()=>{
    try{
        console.log("clicked");
         const data=await axios.post(`http://localhost:3000/projects`,{    title,
        description,
        image,
        video,
        liveLink: live,
        github,
        usedTechs,},{withCredentials:true})
    console.log(data);
    navigate("/admin/works")
    }catch(err){
       
        console.log(err.response.data.message);
        setErrorText(err.response.data.message)
    }
   }

    return(
        <>
{/* "title","description","image","video","liveLink","github","usedTechs" */}

<div className="bg-black  w-full pt-28 flex gap-10 pl-20 ">
    <div id="input_data" className="w-1/2 bg-black  mx-10   ">
        <h1 className="text-white text-4xl font-bold mb-2">Add a new project</h1>
        <div className="text-2xl text-white ">Title</div>
        <input placeholder="Enter Title" className="text-2xl w-full  rounded-lg mb-1 outline-none pl-2" value={title} onChange={(e)=>{
            setErrorText("");
            setTitle(e.target.value)}}></input>
       
        <div className="text-2xl text-white ">image</div>
        <input placeholder="Enter Title" className="text-2xl  rounded-lg w-full mb-1 outline-none pl-2"value={image} onClick={()=>{setErrorText("");}} onChange={(e)=> { setErrorText("");setImage(e.target.value)}}></input>
        <div className="text-2xl text-white ">video</div>
        <input placeholder="Enter Title" className="text-2xl pl-2 rounded-lg w-full mb-1 outline-none"value={video} onClick={()=>{setErrorText("");}} onChange={(e)=>  {setErrorText("");setVideo(e.target.value)}}></input>
        <div className="text-2xl text-white ">liveLink</div>
        <input placeholder="Enter Title" className="text-2xl pl-2 rounded-lg w-full mb-1 outline-none"value={live} onClick={()=>{setErrorText("");}} onChange={(e)=>{setErrorText("");setLive(e.target.value)}}></input>
        <div className="text-2xl text-white ">github</div>
        <input placeholder="Enter Title" className="text-2xl pl-2 rounded-lg w-full mb-1 outline-none"value={github} onClick={()=>{setErrorText("");}} onChange={(e)=>{  setErrorText("");setGithub(e.target.value)}}></input>
        <div className="text-2xl text-white ">usedTechs</div>
        <input placeholder="Enter Title" className="text-2xl pl-2 rounded-lg w-full mb-1 outline-none"value={usedTechs} onClick={()=>{setErrorText("");}} onChange={(e)=>{  setErrorText("");setUsedTechs(e.target.value)}}></input>
         <div className="text-2xl text-white ">description</div>
        <textarea placeholder="Enter Title" className="resize-none h-24 text-2xl pl-2 rounded-lg w-full outline-none"value={description} onClick={()=>{setErrorText("");}} onChange={(e)=>{  setErrorText("");setDescription(e.target.value)}}></textarea>
      { errorText!="" && <div className="text-red-500 text-2xl">{errorText}</div>}
        <div className="flex pt-2 ">
           <div className="w-32 h-10  text-2xl  rounded-xl bg-green-500 flex justify-center items-center" onClick={handleAddProject}>Save</div>
        </div>
         
        
    </div>
    <div id="actual_video_card" className="w-1/2 bg-black ">
    <div className="pt-16">
           {
          
        // apiData.length!=0 && (
            <ProjectsCards   argument={{
     title:title,
     description:description,
     github:github,
     liveLink:live,
     image:image,
     video:video,
     techTags:usedTechs.split(",")
}}  />
        // )
    }
    </div>
 
    
    
    </div>
</div>
        </>
    )
}

export default AdminAddProject;