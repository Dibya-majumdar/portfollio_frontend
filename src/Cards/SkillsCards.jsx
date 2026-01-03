import CircularProgress from "./CircularProgress";
import SkillBar from "./SkillBar";

const SkillsCards=({dibya})=>{
    return(
        <>
        <div className="transition hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.8)] rounded-3xl w-[18rem]  h-96 m-5 bg-[#0F1215] p-5 text-center border border-gray-800 outline-none ">
            <div className="font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text text-4xl">{dibya.techStack}</div>
            <div className="bg-[#0F1215] text-center w-auto   flex justify-center items-center">
                 <CircularProgress value={dibya.percentage} color={dibya.CircleColor}/>
              
                
            </div>
            <div className="text-gray-400 ">{dibya.skill0}</div>
            <div>
                <div>
                      <SkillBar name={dibya.skill1} level={dibya.level1} color={dibya.CircleColor} />
                <SkillBar name={dibya.skill2} level={dibya.level2} color={dibya.CircleColor}  />
                <SkillBar name={dibya.skill3} level={dibya.level3} color={dibya.CircleColor}  />
                </div>
            </div>
        </div>
        </>
    )
}
export default SkillsCards;