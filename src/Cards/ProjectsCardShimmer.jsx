const ProjectsCardShimmer = () => {
  return (
    <div className="w-full xsm:w-[29rem] bg-[#0F1215] rounded-[2rem] pt-2 pl-2 pr-2 border border-gray-800 animate-pulse">

      {/* Image Skeleton */}
      <div className="w-full h-60 bg-gray-800 rounded-3xl" />

      {/* Title */}
      <div className="h-6 w-3/4 bg-gray-700 rounded-md mt-4 ml-2" />

      {/* Description */}
      <div className="h-4 w-[90%] bg-gray-700 rounded-md mt-3 ml-2" />
      <div className="h-4 w-[80%] bg-gray-700 rounded-md mt-2 ml-2" />

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mt-4 ml-2">
        {Array(4)
          .fill("")
          .map((_, i) => (
            <div
              key={i}
              className="h-6 w-16 bg-gray-700 rounded-full"
            />
          ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 my-5 ml-2">
        <div className="h-10 w-10 bg-gray-700 rounded-full" />
        <div className="h-10 w-10 bg-gray-700 rounded-full" />
        <div className="h-10 w-10 bg-gray-700 rounded-full" />
      </div>
    </div>
  );
};

export default ProjectsCardShimmer;
