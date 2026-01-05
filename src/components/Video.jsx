import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CommentCard from "../Cards/CommentCard";
import { Github, SquareArrowOutUpRight, ThumbsDown, ThumbsUp } from "lucide-react";
const Video=()=>{
const[like,setLike]=useState(false);
const[disLike,setDisLike]=useState(false);



    const {id}=useParams();
    const {pid}=useParams();
    // console.log(id);
    const [videoUrl,setVideoUrl]=useState("");
    const[commentsArray,setCommentsArray]=useState([]);
    const[addComment,setAddComment]=useState("");
    const[change,setChange]=useState(false);
    const[title,setTitle]=useState("");
    const[github,setGithub]=useState("");
    const[lievLink,setLiveLink]=useState("");
const projectContent=async()=>{
    try{
         const projectData=await axios.get(`http://localhost:3000/projectsWithoutAuth/${pid}`,{withCredentials:true});
        console.log(projectData.data[0]);
        setTitle(projectData.data[0].title);
        setGithub(projectData.data[0].github);
        setLiveLink(projectData.data[0].liveLink);
    }catch(err){
        console.log(err.message);
    }
   
}

const handlecomment=async()=>{
    try{
        const data=await axios.post(`http://localhost:3000/video/comments/${id}`,{comment:addComment},{withCredentials:true});
        setChange(!change);

    }catch(err){
        console.log(err.message);
    }
}

const videoFunc=async()=>{
    try{
        const data=await axios.get(`http://localhost:3000/video/${id}` ,{withCredentials:true});
// console.log(data.data.Comments);
setVideoUrl(data?.data?.videoUrl);
setCommentsArray(data?.data?.Comments);
    }catch(err){
        console.log(err);
    }



}
useEffect(()=>{
videoFunc();
projectContent();
},[change])


// https://res.cloudinary.com/dhrew4lp8/video/upload/v1767355588/Screen_Recording_2025-03-03_234511_gyvh2r.mp4


    return(
        <>
        {id== "undefined" ? (<div className="text-white font-bold text-2xl pt-28  w-full bg-black lg:flex justify-center  sm:w-96 ">Video will come. so pls Go back for now!</div>):
        (<div className="text-white bg-black pt-28 lg:h-screen h-full w-full">
            <div className="lg:flex gap-2  h-full">

{/* lg:h-[35rem] */}

                <div className="lg:w-full sm:w-full  md:ml-20 rounded-2xl p-2 ">   {/*lg:w-[52%]*/}
                     <div className="lg:w-full h-[30rem] bg-[#0F1215] border border-gray-800 rounded-2xl p-2">
                       {videoUrl !="" ? (<video className="h-full w-full rounded-xl" src={videoUrl} controls/>) :(<div className="text-white font-bold text-2xl">Video will come. so pls Go back for now!</div>)}
                        </div>
                 <div className="flex justify-between mr-10 w-full   ">       {/*  mr-10 bg-green-500 */}
                         <div className="mt-2 text-3xl  pl-2 font-bold">{title} </div>
                        <div className="flex gap-5 p-2 justify-center items-center ">
                           <Link to={github}> <div className="rounded-full bg-[#0C3D42] h-10 w-10 flex justify-center items-center">  <Github className="text-[#02E6FF] text-center" /></div></Link>
                             <Link to={lievLink} >  <div className="rounded-full bg-[#2D1F42] h-10 w-10 flex justify-center items-center "> <SquareArrowOutUpRight className="text-[#A953F8]" /></div></Link> 
                            {like==true?(<div className="p-3 rounded-full bg-green-600 text-black cursor-pointer overflow-hidden flex gap-1 justify-center items-center" onClick={()=>{setLike(!like);setDisLike(false)}}> <ThumbsUp className=" " />{like}</div>):(<div className=" cursor-pointer overflow-hidden flex gap-1 justify-center items-center"  onClick={()=>{setLike(!like);setDisLike(false)}} > <ThumbsUp className=" " /></div>)}
                            {disLike==true?(<div className="rounded-full p-3 bg-red-600 text-black flex justify-center items-center gap-1"  onClick={()=>{setDisLike(!disLike);setLike(false)}}> <ThumbsDown /></div>):(<div className="flex justify-center items-center gap-1 " onClick={()=>{setDisLike(!disLike);setLike(false)}}> <ThumbsDown /></div>)}
                        </div>
                     </div>
                    
                     
                </div>
                
                <div className="bg-[#0F1215] lg:h-[35rem] md:h-full lg:mr-10 rounded-2xl border border-gray-800 p-2 font-bold">
                    <div className="text-4xl pl-2">Comments</div>
                    <div className="flex gap-3">
                        <input className=" bg-[#0F1215] outline-none border-b border-white w-[80%]" placeholder="write anything... " value={addComment} onChange={(e)=>setAddComment(e.target.value)}></input>
                        <div className="bg-[#0F1215] p-2 rounded-2xl border border-gray-800 px-4" onClick={()=>{
                           handlecomment()
                            setAddComment("");
                        }}>comment</div>
                    </div>
                    <div className=" h-[85%]  overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent scrollbar-thumb-rounded-full hover:scrollbar-thumb-gray-400 scroll-smooth">
                        {commentsArray.length!=0 && commentsArray.map((val,index)=>{
                          
                             return <CommentCard argu={val}/>
                        })}
                        
                       
                    
                    </div>
                </div>
            </div>
           
        </div>)}
        </>
    )
}
export default Video;