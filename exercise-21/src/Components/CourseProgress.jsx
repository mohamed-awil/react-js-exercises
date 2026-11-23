export const CourseProgress = () => {
  return (
    <div className="bg-white shadow-md w-full md:w-2/3 rounded-md mb-6 max-h-112">
      <div className="p-4 flex flex-col gap-2">
        <h1 className="font-bold text-xl py-2">Course Progress</h1>
        <div className="bg-gray-50 p-4 flex flex-col gap-2 rounded-md">
          <div className="flex justify-between">
            <h4 className=" text-xl font-medium">React Fundmentals</h4>{" "}
            <span className="text-gray-500">75%</span>
          </div>
          <div className="w-full h-2 rounded-md bg-gray-300">
            <div className="w-[75%] h-full rounded-md bg-green-500"></div>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Next: Components and Props</p>{" "}
            <p className="text-gray-500">Sarah Wilson</p>
          </div>
        </div>
        <div className="bg-gray-50 p-4 flex flex-col gap-2 rounded-md">
          <div className="flex justify-between">
            <h4 className=" text-xl font-medium">JavaScript Advanced</h4>{" "}
            <span className="text-gray-500">45%</span>
          </div>
          <div className="w-full h-2 rounded-md bg-gray-300">
            <div className="w-[45%] h-full rounded-md bg-rose-500"></div>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Next: Async/Awit</p>{" "}
            <p className="text-gray-500">Mike Johnson</p>
          </div>
        </div>
        <div className="bg-gray-50 p-4 flex flex-col gap-2 rounded-md">
          <div className="flex justify-between">
            <h4 className=" text-xl font-medium">UX/UX Design</h4>{" "}
            <span className="text-gray-500">90%</span>
          </div>
          <div className="w-full h-2 rounded-md bg-gray-300">
            <div className="w-[90%] h-full rounded-md bg-blue-500"></div>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Next: Color Theory</p>{" "}
            <p className="text-gray-500">Emly Chen</p>
          </div>
        </div>
      </div>
    </div>
  );
};
