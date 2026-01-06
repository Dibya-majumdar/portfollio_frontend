import SkillsTags from "./SkillsTags";
import { Github } from 'lucide-react';
import { SquareArrowOutUpRight } from 'lucide-react';
import { Video } from 'lucide-react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FRONTEND_BASE_URL } from "../utils/constant";


const ProjectsCards=({argument})=>{
    const navigate=useNavigate();
    return(
        <>
        <div id="container" className="transition  hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]w-full xsm:w-[29rem] h-[100%]  bg-[#0F1215] rounded-[2rem] pt-2 pl-2 pr-2 border border-gray-800 outline-none  ">
            <div className="w-full bg-black bg-cover rounded-3xl overflow-hidden"><img className=" object-top object-fill w-full h-60  rounded-3xl" src={argument.image}></img></div>
            <div className="text-3xl font-bold text-white p-2">{argument.title}</div>
            <div className="text-md  text-gray-500 pl-2 pr-2 pb-2">{argument.description}</div>
            <div className="flex text-center flex-wrap ">

              {
                argument.techTags.map((val,index)=>{
                        return  <SkillsTags items={val} key={index}/>      
                })
              }
                {/* <SkillsTags items="reactjs"/>
                <SkillsTags items="reactjs"/>
                <SkillsTags items="reactjs"/> */}
            </div>
            <div className="flex  gap-3 my-5 ml-2 ">
                <Link to={argument.github}> <div className="rounded-full bg-[#0C3D42] h-10 w-10 flex justify-center items-center">  <Github className="text-[#02E6FF] text-center" /></div> </Link>
             <Link to={argument.liveLink}>  <div className="rounded-full bg-[#2D1F42] h-10 w-10 flex justify-center items-center "> <SquareArrowOutUpRight className="text-[#A953F8]" /></div></Link> 
            <div className="rounded-full bg-[#3E0F31] h-10 w-10 flex justify-center items-center" onClick={()=>navigate(`${FRONTEND_BASE_URL}projects/video/${argument.video?._id}/${argument.id}`)}> <Video className="text-[#FF01AF]" /></div> 
               
            </div>
        </div>
        </>
    )
}
export default ProjectsCards;

//  onClick={()=>navigate(`projects/video/${argument.video}`)}