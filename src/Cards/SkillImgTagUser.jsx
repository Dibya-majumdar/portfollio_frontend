const SkillImgTagUser=({props})=>{
    return(
        <>
        <div className=" hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] overflow-hidden py-1 flex gap-2 border border-gray-700 bg-[#0F1215]   rounded-2xl outline-none mt-2">
            <div ><img  className="bg-black h-8 ml-2 " src={`${props.img}`}></img></div>
            <div className="mr-6 text-white flex justify-center items-center">{props.name}</div>
        </div>
        </>
    )
}
export default SkillImgTagUser;