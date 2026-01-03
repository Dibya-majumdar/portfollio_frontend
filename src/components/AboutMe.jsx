import AboutMeCard from "../Cards/AboutMeCard";
import { CodeXml } from 'lucide-react';
import { Server } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Eye } from 'lucide-react';
import { Atom } from 'lucide-react';

const AboutMe=()=>{
    return(
        <>
        {/* <div></div> */}
        <div id="about" className="w-full  bg-black pt-28">
            <div className="text-center flex gap-3 justify-center">
                <div  className="text-white text-5xl sm:text-5xl md:text-7xl font-serif">About</div><div className=" bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text text-5xl sm:text-5xl md:text-7xl font-bold font-serif">Me</div>
                
            </div>
            <div className="text-center text-gray-400 text-sm md:text-2xl mt-1 md:mt-3"><p>A passionate developer crafting intelligent solutions at the intersection of <br></br> web and AI</p></div>
           <div className="flex flex-col md:flex-row mx-2 md:mx-28">
            <div className=" w-full  lg:w-[60%] text-sm sm:text-lg md:text-2xl mt-6 md:mt-0  text-gray-400  text-center leading-[1.8] md:pl-5  lg:pl-20 flex justify-center items-center">Hi, I’m Dibya, a Computer Science Engineering student and a Full Stack MERN Developer who enjoys building scalable, real-world web applications. I work across the frontend, backend, and databases, with hands-on experience in HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and MySQL.
I focus on creating clean user interfaces and reliable backend APIs. Apart from webdev i am also exploring AI ML & Deep learning </div>
            <div className=" w-full  md:w-[40%]  flex justify-center items-center "><img className="shadow-[0_0_60px_rgba(59,130,246,0.8)] mx-5   h-[25rem] rounded-3xl mt-10 animate-float" src="https://i.ibb.co/BHH1VRyc/01b3ce52-6aa0-4a9b-857c-1679f16ef907.png"></img></div>
           </div>
           
       

        </div>
        </>
    )
}
export default AboutMe;