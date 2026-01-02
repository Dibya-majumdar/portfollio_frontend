import { useEffect,useState } from "react";
import ProjectsCards from "../Cards/ProjectsCards";
import axios from "axios";

const Projects=()=>{
const [projectData,setProjectData]=useState([]);
    const callingApi=async()=>{
        try{
            const jsonData=await axios.get("http://localhost:3000/projectsWithoutAuth");
console.log(jsonData.data);
setProjectData(jsonData.data);
        }catch(err){
                console.log(err.Message);
        }

}
useEffect(()=>{
callingApi();
},[])



    return(
        <>
        {/* <div> */}
            <div id="project" className="w-full h-full bg-black pb-20 pt-28">       {/*pt-28 */}
            <div className="text-center flex gap-3 justify-center">
                <div  className="text-white text-7xl font-serif">Featured</div><div className=" bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text text-7xl font-bold font-serif">Projects</div>
                
            </div>
            <div className="text-center text-gray-400 text-2xl mt-3"><p>A showcase of my work spanning full-stack development <br></br> web and AI</p></div>
            <div className=" bg-black flex gap-14 pt-6  flex-wrap justify-center ">
                { projectData.length!=0 &&(
projectData.map((val )=> <ProjectsCards   argument={{
     id:val._id,
     title:val.title,
     description:val.description,
     github:val.github,
     liveLink:val.liveLink,
     image:val.image,
     video:val.video,
     techTags:val.usedTechs.length === 1 && val.usedTechs[0].includes(",")? val.usedTechs[0].split(",").map(t => t.trim()): val.usedTechs  
}}  key={val._id}/>)
               ) }

 </div>
</div>
     

        </>
    )
}
export default Projects;