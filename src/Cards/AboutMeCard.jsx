const AboutMeCard=({date,heading,desc,position})=>{
    return(
        <>
        <div className="  bg-gray-900  rounded-2xl border border-gray-800 pb-3 pt-3 ">  
            {position=="left"?<div className="text-left text-cyan-400 text-2xl ml-4 font-bold">{date}</div>:<div className="font-bold text-right text-2xl mr-4 text-cyan-400">{date}</div>}
           {position=="left"?<div className="text-left text-white ml-4 text-3xl font-bold">{heading}</div>:<div className="font-bold text-right text-3xl mr-4 text-white">{heading}</div>}
           {position=="left"?<div className="text-left text-gray-500 ml-4 mr-2">{desc}</div>:<div className="text-right mr-4 ml-2 mb-2 text-gray-500">{desc}</div>}

        </div>
        </>
    )
}
export default AboutMeCard;