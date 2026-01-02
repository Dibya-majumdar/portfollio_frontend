const CommentCard=({argu})=>{
    return(
        <>
        <div className="flex gap-1 m-2 mt-4"><img className="w-7 h-7 bg-black rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s"></img>
        <div className="flex justify-center items-center text-white ">{argu}</div>
        </div>
        </>
    )
}
export default CommentCard;