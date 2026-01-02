import ProjectsCards from "../Cards/ProjectsCards";
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Link } from "react-router-dom";

const Contact=()=>{
    return(
        <>
        <div id="contact"  className="w-full  bg-black pt-28 pb-20  ">       {/*pt-28 */}
            <div className="text-center flex gap-3 justify-center">
                <div className="text-white text-7xl font-serif">Get In</div><div className=" bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text text-7xl font-bold font-serif">Touch</div>
                
            </div>
            <div className="text-center text-gray-400 text-2xl mt-3"><p>Have a project in mind or want to collaborate? Let's create something <br></br> amazing together.</p></div>
                <div className=" bg-black flex gap-5 w-full  ">
                     <div className="bg-[#0F0F11] w-1/2 h-[24rem] m-5 pt-10 pl-10 rounded-2xl border border-gray-800" >
                     <h1 className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text text-4xl font-bold font-serif pb-5">Lets Connect</h1>
                     <div className="flex text-center gap-3   ">
                        <div className="bg-[#0C3D42] rounded-full w-16 h-16 mb-3 flex justify-center items-center"><Mail className="text-[#02E6FF]"/></div>
                        <div className="text-center  h-16 flex  justify-center items-center "><p className=" font-bold text-2xl text-white">majumdardibya700@gmail.com</p></div>
                     </div>
                     <div className="flex text-center gap-3   ">
                        <div className="bg-[#3E0F31] rounded-full w-16 h-16 mb-3 flex justify-center items-center"><MapPin className="text-[#FF01AF]"/></div>
                        <div className="text-center w-16 h-16 flex justify-center items-center">  <p className=" font-bold text-2xl text-white">India</p></div>
                     </div>
                   
                   
                     <div className="flex gap-5 mt-5 ">
                   <Link to={"https://github.com/Dibya-majumdar"}>  <div className="bg-[#22222A] rounded-full w-16 h-16 mb-3 flex justify-center items-center "><Github className="text-white" size={38}/></div></Link>
                   <Link to={"https://www.linkedin.com/in/dibya-majumdar-3879102a2/"} >  <div className="bg-[#22222A] rounded-full w-16 h-16 mb-3 flex justify-center items-center"><Linkedin className="text-white" size={38}/></div></Link>
                      <div className="bg-[#22222A] rounded-full w-16 h-16 mb-3 flex justify-center items-center"><Mail className="text-white" size={38}/></div>
                     </div>

                     </div>
                     <div className="bg-[#0F0F11] w-1/2 m-5 mr-28 h-auto p-10 rounded-2xl border border-gray-800">
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
                        <div className="mt-12 bg-gradient-to-r from-cyan-400 to-purple-500 h-20 w-full text-center flex items-center justify-center rounded-full text-black text-3xl font-bold">Send Message</div>
                     </div>
            </div>
        </div>
      
        
        </>
    )
}
export default Contact;