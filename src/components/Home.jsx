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

        {/* CONTENT */}
        <div className="bg-black bg-opacity-50 w-full h-full">

          <div className="">
            <div className="text-2xl pt-10 text-center text-[#00EAFF]">
              <p>Welcome to my universe</p>
            </div>

            <div className="flex h-32 text-center ml-[35%]">
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
            </div>
          </div>

          <div
            id="text_before_button"
            className="text-white text-2xl mt-10 text-center opacity-50 mb-10"
          >
            <p>
              I build intelligent applications using React, Node.js, MongoDB, WebSockets,
              <br />
              AI/ML models, and computer vision technologies
            </p>
          </div>

          <div id="button" className="flex gap-10 justify-center pb-14">
            <div className="rounded-full w-60 h-16 text-center flex justify-center items-center hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] text-black text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 cursor-pointer hover:scale-105 transition" onClick={()=>scrollToSection("project")}>
              Explore My Work
            </div>

            <div className="rounded-full w-60 h-16 text-center flex justify-center items-center hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] text-cyan-400 border border-cyan-400 cursor-pointer hover:bg-[#162A3B] hover:scale-105 transition font-bold text-xl" onClick={()=>scrollToSection("contact")}>
              Get In Touch
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
