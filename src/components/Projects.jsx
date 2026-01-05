import { useEffect,useState } from "react";
import ProjectsCards from "../Cards/ProjectsCards";
import axios from "axios";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects=()=>{
    const [projectData,setProjectData]=useState([]);
//---------------scrollTrigger
//   gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    const container = useRef();
//using gsap
useGSAP(
  () => {
    if (!projectData.length) return;

    gsap.fromTo(
      ".projectCard",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", // 🔥 fixes dim cards
        scrollTrigger: {
          trigger: "#proejctDiv", // 🔥 key fix
        //   trigger: ".projectCard:first-child", // 🔥 key fix
          start: "top 60%",
          toggleActions: "play none none reverse",
        //   markers: true
        },
      }
    );
    gsap.fromTo(
      "#proejctDiv",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", // 🔥 fixes dim cards
        scrollTrigger: {
          trigger: "#project", // 🔥 key fix
        //   trigger: ".projectCard:first-child", // 🔥 key fix
          start: "top 60%",
          toggleActions: "play none none reverse",
          // markers: true
        },
      }
    );
    gsap.fromTo(
      "#projectText",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", // 🔥 fixes dim cards
        scrollTrigger: {
          trigger: "#proejctDiv", // 🔥 key fix
        //   trigger: ".projectCard:first-child", // 🔥 key fix
          start: "top 60%",
          toggleActions: "play none none reverse",
          // markers: true
        },
      }
    );

    ScrollTrigger.refresh();
  },
  { scope: container, dependencies: [projectData] }
);

//scrollTrigger-----------------------------------------------------------------------------------




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
     <div ref={container}>
            <div id="project"  className="w-full h-full bg-black pb-20 pt-28">       {/*pt-28 */}
            <div id="proejctDiv" className="text-center flex flex-wrap gap-2 md:gap-3 justify-center">
                <div   className="text-white text-5xl sm:text-5xl md:text-7xl font-serif">Featured</div><div className=" bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text text-5xl sm:text-5xl md:text-7xl font-bold font-serif">Projects</div>
                
            </div>
            <div id="projectText" className="text-center text-gray-400 text-sm sm:text-lg md:text-2xl mt-3"><p>A showcase of my work spanning full-stack development <br></br> web and AI</p></div>
            <div className=" bg-black flex gap-14 pt-6  flex-wrap justify-center ">
                { projectData.length!=0 &&(
projectData.map((val )=><div className="projectCard"> <ProjectsCards   argument={{
     id:val._id,
     title:val.title,
     description:val.description,
     github:val.github,
     liveLink:val.liveLink,
     image:val.image,
     video:val.video,
     techTags:val.usedTechs.length === 1 && val.usedTechs[0].includes(",")? val.usedTechs[0].split(",").map(t => t.trim()): val.usedTechs  
}}  key={val._id}/></div>)
               ) }

 </div>
</div>
     </div>

        </>
    )
}
export default Projects;