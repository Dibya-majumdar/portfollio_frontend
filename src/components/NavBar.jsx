// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {useSelector} from "react-redux";
// import {useDispatch} from "react-redux";
// import axios from "axios";

// import { logInUser,logOutUser } from "../Stores/logInSlice";
// import { Menu } from "lucide-react";


// const NavBar=()=>{
//   const [refresh,setRefresh]=useState(false);
//   const[threeLine,setThreeLine]=useState(true);
// const handleLogout=async()=>{
//   try{
//     const data=await axios.post("http://localhost:3000/logout",{},{withCredentials:true})
// console.log(data);
// dispatch(logOutUser());
// navigate("/")
//   }catch(err){
//     console.log(err.message);
//   }

// }


//   const dispatch=useDispatch();
// //subscribing the store------------------------------------------------------------------>
// const loginSubScribe=useSelector((store)=>{
// return store.adminCart;
// })
// console.log(loginSubScribe )

//   // const[admin,setAdmin]=useState(false);
//     //for scroling and reach to the section
//   const scrollToSection = (id) => {
//     document.getElementById(id).scrollIntoView({
//       behavior: "smooth",
//     });
//   };


//    const navigate=useNavigate();
//     return(
//         <>
//         <div  className="bg-black fixed w-full  top-0 left-0  z-50 ">
//         <div id="navbarContainer" className="bg-[#0B0E11] flex justify-between h-24  border border-gray-800 rounded-3xl opa ">

//                 <div className="ml-24 mt-5 text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text ">DIBYA</div>
//                 {/* fgsfsdkfd */}
//                  <div className=" flex gap-7 justify-end mr-24 mt-8">
//                     <div className="text-xl font-semibold text-gray-500 hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-4 hover:text-white
//      transition-all duration-300" 
     
//      onClick={()=>{
//         navigate("/");
//         try{
//                 setTimeout(()=>{
//             scrollToSection("home");
//           },200)
//         }catch(err){
//             console.log("ignore")
//         }
//         }} 
     
     
     
     
//      >Home</div>
    
//                     <div className="text-xl font-semibold text-gray-500 hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-4 hover:text-white
//      transition-all duration-300 "  onClick={()=>{
//         navigate("/");
//         try{
//           setTimeout(()=>{
//             scrollToSection("about");
//           },200)
            
//         }catch(err){
//             console.log("ignore")
//         }
//         }}>About me</div>
//                     <div className="text-xl font-semibold text-gray-500 hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-4 hover:text-white
//      transition-all duration-300"  onClick={()=>{
//         navigate("/");
//         try{
//           setTimeout(()=>{
//             scrollToSection("skill");
//           },200)
            
//         }catch(err){
//             console.log("ignore")
//         }
//         }}>Skills</div>
//                     <div className="text-xl font-semibold text-gray-500 hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-4 hover:text-white
//      transition-all duration-300"  onClick={()=>{
//         navigate("/");
//         try{
//           setTimeout(()=>{
//             scrollToSection("project");
//           },200)
            
//         }catch(err){
//             console.log("ignore")
//         }
//         }}>Projects</div>
//                     <div className="text-xl font-semibold text-gray-500 hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-4 hover:text-white
//      transition-all duration-300"  onClick={()=>{
//         navigate("/");
//         try{
//           setTimeout(()=>{
//             scrollToSection("journey");
//           },200)
            
//         }catch(err){
//             console.log("ignore")
//         }
//         }}>Journey</div>
//                     <div className="text-xl font-semibold text-gray-500 hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-4 hover:text-white
//      transition-all duration-300"  onClick={()=>{
//         navigate("/");
//         try{
//           setTimeout(()=>{
//             scrollToSection("contact");
//           },200)
            
//         }catch(err){
//             console.log("ignore")
//         }
//         }}>contacts</div>
//      <div className="text-xl font-semibold text-gray-500 hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-4 hover:text-white
//      transition-all duration-300" onClick={()=>{
//       if(loginSubScribe=="Logout"){
//          navigate("/admin/works")
//       }else{
//            navigate("/admin")
//       }
 
   
//     }
//       }>Admin</div>
//      {loginSubScribe=="Logout" && (<div className="text-xl font-semibold text-gray-500 hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-4 hover:text-white
//      transition-all duration-300" onClick={handleLogout}>{loginSubScribe}</div>)} 
                  
//                 </div>
              
//         </div>
//         </div>
//         </>
//     )
// }
// export default NavBar;







//--------------------------------------------------------------------------------------------------------------------------------------->
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Menu, X } from "lucide-react";

import { logOutUser } from "../Stores/logInSlice";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NavBar = () => {
//----------------------------------gsap
 gsap.registerPlugin(ScrollTrigger);
const container = useRef();
useGSAP(() => {
	//gsap code here...
gsap.fromTo(
      "#dibya",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        delay:0.1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", 
      //   scrollTrigger: {
      //   trigger: "#getText",
      //   start: "top 60%",
      //   toggleActions: "play none none reverse",
      //   // markers:true
      // },
        
      }
    );
gsap.fromTo(
      "#navText",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay:0.4,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", 
       }
    );
gsap.fromTo(
      "#hamburger",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        delay:0.7,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all", 
       }
    );

     
	
 ScrollTrigger.refresh();
},{ scope: container });  //,{ scope: container }
//--------------------------------------------gsap



  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux subscribe
  const loginSubScribe = useSelector((store) => store.adminCart);

  // Scroll helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  // Unified navigation handler
  const handleNav = (section) => {
    navigate("/");
    setMenuOpen(false);
    setTimeout(() => scrollToSection(section), 200);
  };

  // Logout
  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3000/logout",
        {},
        { withCredentials: true }
      );
      dispatch(logOutUser());
      navigate("/");
      setMenuOpen(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
    {/* //changed from w-full to w-screen 👇 */}
      <div ref={container} className="bg-black fixed w-screen top-0 left-0 z-50">   
        {/* MAIN NAVBAR */}
        <div className="bg-[#0B0E11] flex justify-between items-center h-24 border border-gray-800 rounded-3xl px-10">

          {/* LOGO */}
          <div id="dibya"
            className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text cursor-pointer"
            onClick={() => handleNav("home")}
          >
            DIBYA
          </div>

          {/* DESKTOP MENU */}
          <div id="navText" className="hidden md:flex gap-7 text-xl font-semibold text-gray-500">
            <NavItem text="Home" onClick={() => handleNav("home")} />
            <NavItem text="About me" onClick={() => handleNav("about")} />
            <NavItem text="Skills" onClick={() => handleNav("skill")} />
            <NavItem text="Projects" onClick={() => handleNav("project")} />
            <NavItem text="Journey" onClick={() => handleNav("journey")} />
            <NavItem text="Contacts" onClick={() => handleNav("contact")} />

            <NavItem
              text="Admin"
              onClick={() =>
                loginSubScribe === "Logout"
                  ? navigate("/admin/works")
                  : navigate("/admin")
              }
            />

            {loginSubScribe === "Logout" && (
              <NavItem text="Logout" onClick={handleLogout} />
            )}
          </div>

          {/* MOBILE HAMBURGER */}
          <div id="hamburger" className="md:hidden text-white">
            {menuOpen ? (
              <X size={32} onClick={() => setMenuOpen(false)} />
            ) : (
              <Menu size={32} onClick={() => setMenuOpen(true)} />
            )}
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div   className="md:hidden bg-[#0B0E11] border border-gray-800 rounded-2xl mx-5 mt-2 p-6 flex flex-col gap-6 text-lg text-gray-400">
            <MobileItem text="Home" onClick={() => handleNav("home")} />
            <MobileItem text="About me" onClick={() => handleNav("about")} />
            <MobileItem text="Skills" onClick={() => handleNav("skill")} />
            <MobileItem text="Projects" onClick={() => handleNav("project")} />
            <MobileItem text="Journey" onClick={() => handleNav("journey")} />
            <MobileItem text="Contacts" onClick={() => handleNav("contact")} />

            <MobileItem
              text="Admin"
              onClick={() => {
                setMenuOpen(false);
                loginSubScribe === "Logout"
                  ? navigate("/admin/works")
                  : navigate("/admin");
              }}
            />

            {loginSubScribe === "Logout" && (
              <MobileItem text="Logout" onClick={handleLogout} />
            )}
          </div>
        )}
      </div>
    </>
  );
};

/* ---------- Reusable Components ---------- */

const NavItem = ({ text, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer hover:text-white hover:underline hover:decoration-cyan-400 hover:underline-offset-4 transition-all duration-300"
  >
    {text}
  </div>
);

const MobileItem = ({ text, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer hover:text-white transition"
  >
    {text}
  </div>
);

export default NavBar;
