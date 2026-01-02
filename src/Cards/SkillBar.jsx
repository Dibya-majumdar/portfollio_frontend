


const SkillBar = ({ name, level, color }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-white mb-1">
        <span>{name}</span>
        <span>{level}%</span>
      </div>

      <div className="w-full h-2 bg-gray-700 rounded-full">
        <div
          className={`h-2 rounded-full`}
          style={{
            width: `${level}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
};
export default SkillBar
