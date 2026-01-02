// import ProjectsCards from "../Cards/ProjectsCards";
import CircularProgress from "../Cards/CircularProgress";
import ProjectsCards from "../Cards/ProjectsCards";
import SkillImgTagUser from "../Cards/SkillImgTagUser";
import SkillsCards from "../Cards/SkillsCards";
const Skills=()=>{
    return(
        <>
         <div id="skill" className="w-full h-full bg-black pt-28 ">       {/*pt-28 */}
            <div className="text-center flex gap-3 justify-center">
                <div  className="text-white text-7xl font-serif">Technical</div><div className=" bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text text-7xl font-bold font-serif">Skills</div>
                
            </div>
            <div className="text-center text-gray-400 text-2xl mt-3"><p>A showcase of my work spanning full-stack development <br></br> web and AI</p></div>
              <div className=" bg-black flex gap-5 flex-wrap justify-center ">
                   <SkillsCards dibya={{techStack:"Frontend",percentage:95,CircleColor:"#00eaff",skill0:"React js",skill1:"Html",skill2:"css",skill3:"js",level1:70,level2:70,level3:90}}/>
                   <SkillsCards dibya={{techStack:"BackEnd",percentage:87,CircleColor:"#A655F7",skill0:"Node js",skill1:"ExpressJs",skill2:"Rest Apis",skill3:"Socket.io",level1:70,level2:70,level3:90}}/>
                   <SkillsCards dibya={{techStack:"DataBase",percentage:80,CircleColor:"#A655F7",skill0:"Mongoose",skill1:"Mysql",skill2:"sql",skill3:"oracle",level1:70,level2:70,level3:90}}/>
                   <SkillsCards dibya={{techStack:"AI/ML",percentage:60,CircleColor:"#FF00AA",skill0:"python",skill1:"tensorflow",skill2:"opencv",skill3:"yolo",level1:70,level2:70,level3:90}}/>
                   
            </div>
        </div>
          <div className="text-center  justify-center bg-black   flex-wrap pt-5">
             <div className="flex justify-center gap-5 pb-2">
                  <div  className="text-white text-5xl font-serif flex justify-center">Tech</div><div className=" bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text text-5xl font-bold font-serif">Arsenal</div>
            </div>
        
          <div className="flex gap-2   flex-wrap  justify-center px-60 ">
          <SkillImgTagUser props={{"img":"https://cdn-icons-png.flaticon.com/512/5968/5968267.png","name":"Html"}}/>
          <SkillImgTagUser props={{"img":"https://cdn-icons-png.flaticon.com/512/5968/5968242.png","name":"css"}}/>
          <SkillImgTagUser props={{"img":"https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png","name":"js"}}/>
          <SkillImgTagUser props={{"img":"https://raw.githubusercontent.com/nightwatchjs/nightwatch-plugin-react/main/.github/assets/react-logo.png","name":"react js"}}/>
          <SkillImgTagUser props={{"img":"https://www.svgrepo.com/show/303557/redux-logo.svg","name":"redux"}}/>
          <SkillImgTagUser props={{"img":"https://cdn-icons-png.flaticon.com/512/919/919825.png","name":"node js"}}/>
          <SkillImgTagUser props={{"img":"https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png","name":"expressjs"}}/>
          <SkillImgTagUser props={{"img":"https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-svg-download-png-2945120.png?f=webp","name":"mongodb"}}/>
          <SkillImgTagUser props={{"img":"https://cdn-icons-png.flaticon.com/512/919/919836.png","name":"mysql"}}/>
          <SkillImgTagUser props={{"img":"https://cdn-icons-png.flaticon.com/512/226/226777.png","name":"java"}}/>
          <SkillImgTagUser props={{"img":"https://cdn-icons-png.flaticon.com/512/6819/6819089.png","name":"c"}}/>
          <SkillImgTagUser props={{"img":"https://cdn-icons-png.flaticon.com/512/919/919841.png","name":"c++"}}/>
          <SkillImgTagUser props={{"img":"https://cdn-icons-png.flaticon.com/512/5968/5968350.png","name":"python"}}/>
          <SkillImgTagUser props={{"img":"https://cdn-icons-png.flaticon.com/512/8637/8637099.png","name":"Machine Learning"}}/>
          <SkillImgTagUser props={{"img":"https://cdn-icons-png.flaticon.com/512/8637/8637092.png","name":"Deep Learning"}}/>
         </div>
          </div>
        </>
    )
}
export default Skills;