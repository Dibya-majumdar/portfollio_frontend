// import ProjectsCards from "../Cards/ProjectsCards";
import CircularProgress from "../Cards/CircularProgress";
import ProjectsCards from "../Cards/ProjectsCards";
import SkillImgTagUser from "../Cards/SkillImgTagUser";
import SkillsCards from "../Cards/SkillsCards";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Skills=()=>{
  // gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    const container = useRef();

useGSAP(() => {
	//gsap code here...
  gsap.fromTo(
      "#skill",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", 
        scrollTrigger: {
        trigger: "#ref",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true
      },
        
      }
    );
  gsap.fromTo(
      "#skill2",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", 
        scrollTrigger: {
        trigger: "#ref",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true
      },
        
      }
    );
gsap.fromTo(
      ".skillCard",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", 
        scrollTrigger: {
        trigger: "#skill",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true
      },
        
      }
    );
    gsap.fromTo(
      ".skillTag",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        clearProps: "all", 
        scrollTrigger: {
        trigger: "#skillTag",
        start: "top 75%",
        toggleActions: "play none none reverse",
        // markers:true
      },
        
      }
    );
     
	
 ScrollTrigger.refresh();
},{ scope: container });  //,{ scope: container }


    return(
        <>
        <div  ref={container}>
         <div  id="ref"  className="w-full h-full bg-black pt-28 ">       {/*pt-28 */}
            <div id="skill" className="text-center flex flex-wrap gap-3 justify-center">
                <div   className="text-white  text-5xl sm:text-5xl md:text-7xl font-serif">Technical</div><div className=" bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text  text-5xl sm:text-5xl md:text-7xl font-bold font-serif">Skills</div>
                
            </div>
            <div id="skill2" className="text-center text-gray-400 text-sm sm:text-lg md:text-2xl mt-3"><p>A showcase of my work spanning full-stack development <br></br> web and AI</p></div>
              <div className=" bg-black flex gap-5 flex-wrap justify-center ">
                  <div className="skillCard"> <SkillsCards  dibya={{techStack:"Frontend",percentage:95,CircleColor:"#00eaff",skill0:"React js",skill1:"Html",skill2:"css",skill3:"js",level1:70,level2:70,level3:90}}/></div>
                   <div className="skillCard"> <SkillsCards dibya={{techStack:"BackEnd",percentage:87,CircleColor:"#A655F7",skill0:"Node js",skill1:"ExpressJs",skill2:"Rest Apis",skill3:"Socket.io",level1:70,level2:70,level3:90}}/></div>
                    <div className="skillCard"><SkillsCards dibya={{techStack:"DataBase",percentage:80,CircleColor:"#A655F7",skill0:"Mongoose",skill1:"Mysql",skill2:"sql",skill3:"oracle",level1:70,level2:70,level3:90}}/></div>
                    <div className="skillCard"><SkillsCards dibya={{techStack:"AI/ML",percentage:60,CircleColor:"#FF00AA",skill0:"python",skill1:"tensorflow",skill2:"opencv",skill3:"yolo",level1:70,level2:70,level3:90}}/></div>
                   
            </div>
        </div>
          <div id="skillTag" className="text-center  justify-center bg-black   flex-wrap pt-5">
             <div  className="flex justify-center gap-2 md:gap-5 pb-2">
                  <div   className="text-white  text-2xl sm:text-3xl md:text-5xl font-serif flex justify-center">Tech</div><div className=" bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text text-2xl sm:text-3xl md:text-5xl font-bold font-serif">Arsenal</div>
            </div>
        
          <div  className="flex gap-2   flex-wrap  justify-center ">
         <div className="skillTag"><SkillImgTagUser props={{"img":"https://cdn-icons-png.flaticon.com/512/5968/5968267.png","name":"Html"}}/></div>
          <div className="skillTag"> <SkillImgTagUser props={{"img":"https://cdn-icons-png.flaticon.com/512/5968/5968242.png","name":"css"}}/></div>
          <div className="skillTag"> <SkillImgTagUser props={{"img":"https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png","name":"js"}}/></div>
           <div className="skillTag"><SkillImgTagUser props={{"img":"https://raw.githubusercontent.com/nightwatchjs/nightwatch-plugin-react/main/.github/assets/react-logo.png","name":"react js"}}/></div>
           <div className="skillTag"><SkillImgTagUser props={{"img":"https://www.svgrepo.com/show/303557/redux-logo.svg","name":"redux"}}/></div>
           <div className="skillTag"><SkillImgTagUser props={{"img":"https://cdn-icons-png.flaticon.com/512/919/919825.png","name":"node js"}}/></div>
           <div className="skillTag"><SkillImgTagUser props={{"img":"https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png","name":"expressjs"}}/></div>
           <div className="skillTag"><SkillImgTagUser props={{"img":"https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-svg-download-png-2945120.png?f=webp","name":"mongodb"}}/></div>
           <div className="skillTag"><SkillImgTagUser props={{"img":"https://cdn-icons-png.flaticon.com/512/919/919836.png","name":"mysql"}}/></div>
           <div className="skillTag"><SkillImgTagUser props={{"img":"https://cdn-icons-png.flaticon.com/512/226/226777.png","name":"java"}}/></div>
           <div className="skillTag"><SkillImgTagUser props={{"img":"https://cdn-icons-png.flaticon.com/512/6819/6819089.png","name":"c"}}/></div>
           <div className="skillTag"><SkillImgTagUser props={{"img":"https://cdn-icons-png.flaticon.com/512/919/919841.png","name":"c++"}}/></div>
           <div className="skillTag"><SkillImgTagUser props={{"img":"https://cdn-icons-png.flaticon.com/512/5968/5968350.png","name":"python"}}/></div>
           <div className="skillTag"><SkillImgTagUser props={{"img":"https://cdn-icons-png.flaticon.com/512/8637/8637099.png","name":"Machine Learning"}}/></div>
          <div className="skillTag"> <SkillImgTagUser props={{"img":"https://cdn-icons-png.flaticon.com/512/8637/8637092.png","name":"Deep Learning"}}/></div>
         </div>
          </div>
          </div>
        </>
    )
}
export default Skills;