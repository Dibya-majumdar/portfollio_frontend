const SkillsTags=(props)=>{
    const {items}=props;
    return(
        <>
        <div className="rounded-full text-[#8B8C94] text-bold bg-[#22222A]  px-3 flex-wrap mx-1 my-1">
                   <p className="opacity-100 ">{items}</p> 
        </div>
        </>
    )
}
export default SkillsTags;