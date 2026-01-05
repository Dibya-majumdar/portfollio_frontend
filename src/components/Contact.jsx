import ProjectsCards from "../Cards/ProjectsCards";
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Link } from "react-router-dom";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact=()=>{
//----------------------------------gsap
 gsap.registerPlugin(ScrollTrigger);
const container = useRef();
useGSAP(() => {
	//gsap code here...
gsap.fromTo(
      "#box1",
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", 
        scrollTrigger: {
        trigger: "#getText",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true
      },
        
      }
    );
    
    gsap.fromTo(
      "#box2",
      { opacity: 0, x: 20 },  //y-40
      {
        opacity: 1,
        x: 0,  //y-0
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        delay:0.5,
        clearProps: "all", 
        scrollTrigger: {
        trigger: "#getText",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true
      },
        
      }
    );
    gsap.fromTo(
      "#contactText",
      { opacity: 0, y: 40 },  //y-40
      {
        opacity: 1,
        y: 0,  //y-0
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        delay:0.5,
        clearProps: "all", 
        scrollTrigger: {
        trigger: "#contact",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true
      },
        
      }
    );
    gsap.fromTo(
      "#getText",
      { opacity: 0, y: 40 },  //y-40
      {
        opacity: 1,
        y: 0,  //y-0
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        delay:0.5,
        clearProps: "all", 
        scrollTrigger: {
        trigger: "#contactText",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true
      },
        
      }
    );
     
	
 ScrollTrigger.refresh();
},{ scope: container });  //,{ scope: container }
//--------------------------------------------gsap




    return(
        <>
        <div ref={container}>
        <div  id="contact"  className="w-full  bg-black pt-28 pb-20  ">       {/*pt-28 */}
            <div id="contactText" className="text-center flex gap-3 justify-center flex-wrap">
                <div  className="text-white text-5xl sm:text-5xl md:text-7xl font-serif">Get In</div><div className=" bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text text-5xl sm:text-5xl md:text-7xl font-bold font-serif">Touch</div>
                
            </div>
            <div id="getText" className="text-center text-gray-400 text-sm sm:text-lg md:text-2xl mt-3"><p>Have a project in mind or want to collaborate? Let's create something <br></br> amazing together.</p></div>
                <div className=" bg-black flex flex-col md:flex-row gap-5 w-full  ">
                     <div id="box1" className="bg-[#0F0F11] w-full mr-2 md:mr-0 md:w-1/2 h-[24rem] ml-0 md:m-5 pt-10 pl-2 sm:pl-5 md:pl-10 rounded-2xl border border-gray-800" >
                     <h1 className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text text-4xl font-bold font-serif pb-5">Lets Connect</h1>
                     <div className="flex  text-center  gap-3   ">
                        <div className="bg-[#0C3D42] rounded-full  w-16 h-16 mb-3 flex justify-center items-center"><Mail  className="text-[#02E6FF]"/></div>
                        <div className=" text-center  h-16 flex   justify-center items-center md:items-center flex-wrap text-xs sm:text-lg md-text-lg lg:text-2xl font-bold text-white ">majumdardibya700@gmail.com</div>
                     </div>
                     <div className="flex text-center md:gap-3   ">
                        <div className="bg-[#3E0F31] rounded-full w-16 h-16 mb-3 flex justify-center items-center"><MapPin className="text-[#FF01AF]"/></div>
                        <div className="text-center w-16 h-16 flex justify-center items-center  font-bold  text-white text-xs sm:text-lg md-text-lg lg:text-2xl">India</div>
                     </div>
                   
                   
                     <div className="flex gap-5 mt-5 ">
                   <Link to={"https://github.com/Dibya-majumdar"}>  <div className="bg-[#22222A] rounded-full w-16 h-16 mb-3 flex justify-center items-center "><Github className="text-white" size={38}/></div></Link>
                   <Link to={"https://www.linkedin.com/in/dibya-majumdar-3879102a2/"} >  <div className="bg-[#22222A] rounded-full w-16 h-16 mb-3 flex justify-center items-center"><Linkedin className="text-white" size={38}/></div></Link>
                      <div className="bg-[#22222A] rounded-full w-16 h-16 mb-3 flex justify-center items-center"><Mail className="text-white" size={38}/></div>
                     </div>

                     </div>
                     <div id="box2" className="bg-[#0F0F11] w-full md:w-1/2 ml-0 md:m-5 mr-28 h-auto p-10 rounded-2xl border border-gray-800">
                        <div className="mt-2">
                            <p className="font-bold text-white text-xl mb-3">Name</p>
                            <input className="h-16 outline-none w-full pl-5 placeholder:text-xl rounded-2xl bg-[#22222A]" type="text" placeholder="Enter your name"/>
                        </div>
                        <div className="mt-2">
                            <p className="font-bold text-white text-xl mb-3 ">Email</p>
                            <input className="h-16 outline-none w-full pl-5 placeholder:text-xl rounded-2xl bg-[#22222A]" type="text" placeholder="your@email.com"/>
                        </div>
                        <div className="mt-2">
                            <p className=" font-bold text-white text-xl ">Message</p>
                            <textarea className="bg-[#22222A] h-40 px-3 outline-none resize-none w-full pl-5 placeholder:text-xl place-content-start mt-2 rounded-2xl" type="text" placeholder="Tell me about your project"/>
                        </div>
                        <div className="mt-12 bg-gradient-to-r from-cyan-400 to-purple-500 h-20 w-full text-center flex items-center justify-center rounded-full text-black text-lg xsm:text-2xl sm:text-2xl md:text-3xl font-bold">Send Message</div>
                     </div>
            </div>
        </div>
      
        </div>
        </>
    )
}
export default Contact;