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
        <div className="w-full  bg-[#0F0F11] border-t border-t-neutral-600">
            <div className="  h-30 flex justify-between pt-5 bg-[#0F0F11] ">
                                              

                <div className="ml-2 xsm:ml-5 sm:ml-10 md:ml-24 mt-5 text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">DIBYA</div>
                   {/* <div className=" text-gray-500 font-bold pt-10">Made by Dibya @2025 </div> */}
                <div className="flex flex-col gap-2 md:gap-10 md:flex-row justify-end mr-24 mt-0 md:mt-8">
                   
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
          <div className=" text-gray-500 font-bold pt-10 flex justify-center pb-4">Made by Dibya @2025 </div>
        </div>
        

    
        </>
    )
}
export default Footer;