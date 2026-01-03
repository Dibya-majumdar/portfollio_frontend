const Home = () => {
   const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div id="home" className="relative pt-24  w-full  overflow-hidden ">

        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src="https://cdn.pixabay.com/video/2019/10/11/27770-365891067_large.mp4"
          autoPlay
          loop
          muted
        ></video>

        {/* CONTENT h-full*/}
        <div className="bg-black bg-opacity-50 w-full ">

          <div className="">
          <div className=" text-xl sm:text-2xl  pt-10 text-center text-[#00EAFF]">
              <p>Welcome to my universe</p>
            </div>
   
            {/* <div className="flex h-32 text-center ml-[35%]">
              <div className="text-white mt-5 text-8xl font-bold"><p>Hi, I'm</p></div>

              <div className="text-center ml-5 mt-5 text-8xl font-bold 
                bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                Dibya
              </div>
            </div>

            <div className="text-gray-300 text-8xl font-bold text-center">
              <p>MERN Developer & ML</p>
            </div>

            <div className="text-gray-300 text-center mt-5 text-8xl font-bold">
              <p>Explorer</p>
            </div>  */}
          
            <div className="w-full   text-4xl sm:text-5xl font-bold  text-white md:text-8xl  ">
              <div className="flex md:gap-5 flex-col sm:flex-row  ">
                 <p className="w-full  text-center sm:text-right leading-[1.3]">Hi,I'm</p> <p className="w-full  font-bold 
                bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text text-center  sm:text-left leading-[1.3]">Dibya</p>
              </div>
             
                <div className="text-center mb-1">MERN Developer & ML </div>
                <div className="text-center">Explorer</div>
                </div>


          </div>
          
         

          <div
            id="text_before_button"
            className="text-white text-xs sm:text-lg md:text-2xl mt-5 text-center opacity-50 mb-10"
          >
            <p>
              I build intelligent applications using React, Node.js, MongoDB, WebSockets,
              <br />
              AI/ML models, and computer vision technologies
            </p>
          </div>

          <div id="button" className="flex flex-col  xsm:flex-row   gap-4 justify-center items-center pb-14 ">
            <div className="rounded-full   sm:mt-0 sm:text-sm md:w-60 md:h-16 text-sm md:text-xl w-40  text-center h-12 flex justify-center items-center hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] text-black  font-bold bg-gradient-to-r from-cyan-400 to-purple-500 cursor-pointer hover:scale-105 transition" onClick={()=>scrollToSection("project")}>
              Explore My Work
            </div>

            <div className="rounded-full  sm:mt-0 sm:text-sm sm:px-2 md:w-60 md:h-16 text-sm md:text-xl w-40 text-center h-12 flex justify-center items-center hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] text-cyan-400 border border-cyan-400 cursor-pointer hover:bg-[#162A3B] hover:scale-105 transition font-bold " onClick={()=>scrollToSection("contact")}>
              Get In Touch
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;


