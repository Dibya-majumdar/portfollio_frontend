import { Atom, Brain, CodeXml, Eye, Server } from "lucide-react";
import AboutMeCard from "../Cards/AboutMeCard";

const Journey=()=>{
    return(
        <>
        <div  id="journey" className="scroll-mt-28">
         <div className="bg-black text-center flex gap-3 justify-center ">
                <div  className="text-white text-7xl font-serif">My</div><div className=" bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text text-7xl font-bold font-serif">Journey</div>
                
            </div>
             <div className="text-center flex justify-center items-center bg-black text-gray-400 text-2xl pt-3"><p>A timeline of learning, building, and evolving across web and AI.</p></div>

             <div  className="flex justify-center  pt-14 bg-black">       {/*   pb-20 */}    
               <div id="right_div" className="border-r-8 border-r-cyan-500 ">     {/*   pr-20 */}
                        {/* gol emoji portion */}
                          <div className="mb-40 w-[395px] flex justify-between gap-5 relative">
                            <div>  <AboutMeCard date="2023" heading="Frontend" desc="Started journey with HTML, CSS, JavaScript" position="right" /></div>
                           
                             <div className="rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 h-16 w-16 absolute right-[-9.10%] top-[20%] overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.8)]">
                                <div className=" transition-transform duration-100 ease-in-out  ml-3 mt-3 scale-110   hover:scale-110 hover:rotate-[720deg] ">< CodeXml size={40} /></div> 
                                 </div>
                         </div>
                             <div className="mb-40 w-[395px] flex justify-between gap-5 relative">
                           <div className=" "><AboutMeCard date="2023" heading="Backend" desc="Learn Nodejs,express js,mongodb ,jwt token " position="right" /></div>
                           
                             <div className="rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 h-16 w-16 absolute right-[-9.10%] top-[20%] overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.8)]">
                                <div className=" transition-transform duration-100 ease-in-out  ml-3 mt-3 scale-110  hover:scale-110 hover:rotate-[720deg] "><  Server size={40} /></div> 
                                 </div>
                         </div>
                           
                           <div className="mb-10 w-[395px] flex justify-between gap-5 relative">
                            <div className=""> <AboutMeCard date="2024" heading="Deep Learning" desc="learn basics,CNN,RCNN adn other dl models" position="right" /></div>
                           
                       
                             
                             <div className="rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 h-16 w-16 absolute right-[-9.10%] top-[20%] overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.8)]">
                                <div className=" transition-transform duration-100 ease-in-out  ml-3 mt-3 scale-110   hover:scale-110 hover:rotate-[720deg] ">< Eye size={40} /></div> 
                                 </div>
                         </div>
                         
                </div>
                <div className="pl-16 bg-black" >
                      <div className="mb-40  w-[395px] flex justify-between gap-5 relative">
                            <div className="mt-40  w-[350px]"><AboutMeCard date="2023" heading="React & Redux" desc="Learn frontend library React js and Redux" position="left" /></div>
                           
                           
                              <div className="rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 h-16 w-16 absolute right-[109.10%] top-[60%] overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.8)]">
                                <div className=" transition-transform duration-100 ease-in-out  ml-3 mt-3 scale-110  hover:scale-110 hover:rotate-[720deg]"><  Atom size={40} /></div> 
                                 </div>
                         </div>

                    {/* <div className="mt-40 mb-40 w-[350px]"><AboutMeCard date="2023" heading="React & Redux" desc="Learn frontend library React js and Redux" position="left" /></div> */}
                   
                              <div className="mb-40  w-[395px] flex justify-between gap-5 relative">
                             <div className="mb-16 w-[350px]">
                        <AboutMeCard date="2024" heading="Machine Learning" desc="Learn basics, python,diff models ,diff algos " position="left" /></div>
                           
                          <div className="rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 h-16 w-16 absolute right-[109.10%] top-[10%] overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.8)]">
                                <div className=" transition-transform duration-100 ease-in-out  ml-3 mt-3 scale-110  hover:scale-110 hover:rotate-[720deg] ">< Brain size={40} /></div> 
                                 </div>
                             
                         </div>   
                      
                          
                </div>
                      
                     
                        
            </div>
          </div>
        </>
    )
}

export default Journey;