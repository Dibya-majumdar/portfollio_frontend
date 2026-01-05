import { Atom, Brain, CodeXml, Eye, Server } from "lucide-react";
import AboutMeCard from "../Cards/AboutMeCard";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Journey=()=>{

//------------------------------------------------------------------------------------>
  gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    const container = useRef();
useGSAP(
  () => {
   

    gsap.fromTo(
      "#aboutMeCard1",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", 
          scrollTrigger: {
        trigger: "#journeyText",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true
      },
        
      }
    );
 gsap.fromTo(
      "#aboutMeCard2",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", 
          scrollTrigger: {
        trigger: "#aboutMeCard1",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true
      },
        
      }
    );
     gsap.fromTo(
      "#aboutMeCard3",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", 
        scrollTrigger: {
        trigger: "#aboutMeCard1",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true
      },
        
      }
    );
     gsap.fromTo(
      "#aboutMeCard4",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", 
        scrollTrigger: {
        trigger: "#aboutMeCard2",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true
      },
        
      }
    );
     gsap.fromTo(
      "#aboutMeCard5",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", 
        scrollTrigger: {
        trigger: "#aboutMeCard3",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true
      },
        
      }
    );
     gsap.fromTo(
      "#res1",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", 
        scrollTrigger: {
        trigger: "#journeyText",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true
      },
        
      }
    );
     gsap.fromTo(
      "#res2",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", 
        scrollTrigger: {
        trigger: "#res1",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true
      },
        
      }
    );
     gsap.fromTo(
      "#res3",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", 
        scrollTrigger: {
        trigger: "#res2",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true
      },
        
      }
    );
     gsap.fromTo(
      "#res4",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", 
        scrollTrigger: {
        trigger: "#res3",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true
      },
        
      }
    );
     gsap.fromTo(
      "#res5",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", 
        scrollTrigger: {
        trigger: "#res4",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true
      },
        
      }
    );
     gsap.fromTo(
      "#journeyText",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", 
        scrollTrigger: {
        trigger: "#journey",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true
      },
        
      }
    );
     gsap.fromTo(
      "#journeyText2",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", 
        scrollTrigger: {
        trigger: "#journeyText",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true
      },
        
      }
    );
    ScrollTrigger.refresh();
  },
  { scope: container} 
);




    return(
        <>
        <div ref={container} >
        <div  id="journey" className="scroll-mt-28 bg-black">
         <div id="journeyText" className="bg-black text-center flex flex-wrap gap-3 justify-center w-full ">
                <div  className="text-white text-5xl sm:text-5xl md:text-7xl font-serif">My</div><div className=" bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text text-5xl sm:text-5xl md:text-7xl font-bold font-serif">Journey</div>
                
            </div>
             <div id="journeyText2" className="text-center flex justify-center items-center bg-black text-gray-400 text-sm sm:text-lg md:text-2xl pt-3"><p>A timeline of learning, building, and evolving across web and AI.</p></div>

             <div  className="hidden lg:flex  justify-center  pt-14 bg-black">       {/*   pb-20 */}    
               <div id="right_div" className="border-r-8 border-r-cyan-500 ">     {/*   pr-20 */}
                        {/* gol emoji portion */}
                          <div  className=" mb-40 w-full  md:w-[395px] flex justify-between gap-5 relative ">
                            <div id="aboutMeCard1">  <AboutMeCard date="2023" heading="Frontend" desc="Started journey with HTML, CSS, JavaScript" position="right" /></div>
                           
                          <div className=" rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 h-16 w-16 absolute right-[-9.10%] top-[20%] overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.8)]">       {/* hidden md:block removed .it actually does hidden by default and from medium block means vidible . */}
                                <div id="good" className=" transition-transform duration-100 ease-in-out  ml-3 mt-3 scale-110 hover:scale-110 hover:rotate-[720deg]   " >< CodeXml size={40} /></div> 
                                 </div>
                         </div>
                             <div className="mb-40 w-[395px] flex justify-between gap-5 relative">
                           <div id="aboutMeCard3"><AboutMeCard date="2023" heading="Backend" desc="Learn Nodejs,express js,mongodb ,jwt token " position="right" /></div>
                           
                             <div className=" rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 h-16 w-16 absolute right-[-9.10%] top-[20%] overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.8)]">
                                <div className=" transition-transform duration-100 ease-in-out  ml-3 mt-3 scale-110  hover:scale-110 hover:rotate-[720deg] "><  Server size={40} /></div> 
                                 </div>
                         </div>
                           
                           <div className="mb-10 w-[395px] flex justify-between gap-5 relative">
                            <div id="aboutMeCard5"> <AboutMeCard date="2024" heading="Deep Learning" desc="learn basics,CNN,RCNN adn other dl models" position="right" /></div>
                           
                       
                             
                             <div className=" rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 h-16 w-16 absolute right-[-9.10%] top-[20%] overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.8)]">
                                <div className=" transition-transform duration-100 ease-in-out  ml-3 mt-3 scale-110   hover:scale-110 hover:rotate-[720deg] ">< Eye size={40} /></div> 
                                 </div>
                         </div>
                         
                </div>
                <div className="pl-16 bg-black" >
                      <div className="mb-40  w-[395px] flex justify-between gap-5 relative">
                            <div id="aboutMeCard2" className="mt-40  w-[350px]"><AboutMeCard date="2023" heading="React & Redux" desc="Learn frontend library React js and Redux" position="left" /></div>
                           
                           
                              <div className=" rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 h-16 w-16 absolute right-[109.10%] top-[60%] overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.8)]">
                                <div className=" transition-transform duration-100 ease-in-out  ml-3 mt-3 scale-110  hover:scale-110 hover:rotate-[720deg]"><  Atom size={40} /></div> 
                                 </div>
                         </div>

                    {/* <div className="mt-40 mb-40 w-[350px]"><AboutMeCard date="2023" heading="React & Redux" desc="Learn frontend library React js and Redux" position="left" /></div> */}
                   
                              <div className="mb-40  w-[395px] flex justify-between gap-5 relative">
                             <div id="aboutMeCard4" className="mb-16 w-[350px]">
                        <AboutMeCard date="2024" heading="Machine Learning" desc="Learn basics, python,diff models ,diff algos " position="left" /></div>
                           
                          <div className=" rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 h-16 w-16 absolute right-[109.10%] top-[10%] overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.8)]">
                                <div className=" transition-transform duration-100 ease-in-out  ml-3 mt-3 scale-110  hover:scale-110 hover:rotate-[720deg] ">< Brain size={40} /></div> 
                                 </div>
                             
                         </div>   
                      
                          
                </div>
                      
                     
                        
            </div>
            {/* //why gsap not works welly for this ?  */}
            <div className="block lg:hidden  text-white bg-black">
              <div className="w-full flex flex-col gap-5 justify-center items-center">
                 <div id="res1" className="w-[25rem] flex justify-center mt-2"><AboutMeCard date="2023" heading="Frontend" desc="Started journey with HTML, CSS, JavaScript" position="right" /></div>
                  <div className="relative rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 h-16 w-16  overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.8)]">     
                                <div className=" transition-transform duration-100 ease-in-out  ml-3 mt-3 scale-110   hover:scale-110 hover:rotate-[720deg] ">< CodeXml size={40} /></div> 
                     </div> 
                    <div id="res2" className="w-[25rem] flex justify-center"> <AboutMeCard date="2023" heading="React & Redux" desc="Learn frontend library React js and Redux" position="left" /></div>
                     <div className=" rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 h-16 w-16  overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.8)]">
                                <div className=" transition-transform duration-100 ease-in-out  ml-3 mt-3 scale-110  hover:scale-110 hover:rotate-[720deg]"><  Atom size={40} /></div> 
                                 </div>
                    
                  <div id="res3" className="w-[25rem] flex justify-center"><AboutMeCard date="2023" heading="Backend" desc="Learn Nodejs,express js,mongodb ,jwt token " position="right" /></div>
                   <div className=" rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 h-16 w-16  overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.8)]">
                                <div className=" transition-transform duration-100 ease-in-out  ml-3 mt-3 scale-110  hover:scale-110 hover:rotate-[720deg] "><  Server size={40} /></div> 
                                 </div>
                     <div id="res4" className="w-[25rem] flex justify-center"><AboutMeCard date="2024" heading="Machine Learning" desc="Learn basics, python,diff models ,diff algos " position="left" /></div>
                       <div className=" rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 h-16 w-16  overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.8)]">
                                <div className=" transition-transform duration-100 ease-in-out  ml-3 mt-3 scale-110  hover:scale-110 hover:rotate-[720deg] ">< Brain size={40} /></div> 
                                 </div>

                  <div id="res5" className="w-[25rem] flex justify-center"> <AboutMeCard date="2024" heading="Deep Learning" desc="learn basics,CNN,RCNN adn other dl models" position="right" /></div>
                    <div className=" rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 h-16 w-16 overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.8)]">
                                <div className=" transition-transform duration-100 ease-in-out  ml-3 mt-3 scale-110   hover:scale-110 hover:rotate-[720deg] ">< Eye size={40} /></div> 
                                 </div>
               
                
              </div>
            </div>
          </div>
          </div>
        </>
    )
}

export default Journey;

//----------------------------------------------------------------------------------------------------------------------------->
