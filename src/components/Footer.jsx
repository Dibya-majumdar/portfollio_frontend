import { useNavigate } from "react-router-dom";

const Footer=()=>{
     const navigate=useNavigate();
       const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };
    return(
        <>
        <div className="w-full h-40 bg-[#0F0F11] border-t border-t-neutral-600">
            <div className=" h-30 flex justify-between pt-10 bg-[#0F0F11]">
                                              

                <div className="ml-24 mt-5 text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">DIBYA</div>
                   <div className=" text-gray-500 font-bold pt-10">Made by Dibya @2025 </div>
                <div className="flex gap-10 justify-end mr-24 mt-8">
                   
                    <div className="text-xl font-semibold text-gray-500 hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-4 hover:text-white
     transition-all duration-300" 
     
     onClick={()=>{
        navigate("/");
        try{
            scrollToSection("home")
        }catch(err){
            console.log("ignore")
        }
        }} 
        >Home</div>
               
                    <div className="text-xl font-semibold text-gray-500 hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-4 hover:text-white
     transition-all duration-300" onClick={() => scrollToSection("project")}>Projects</div>
                    <div className="text-xl font-semibold text-gray-500 hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-4 hover:text-white
     transition-all duration-300" onClick={() => scrollToSection("contact")}>contacts</div>
   
                  
                </div>
        </div>
        </div>
        

    
        </>
    )
}
export default Footer;