export const Stats = () => {
  return (
    <div className="flex justify-around gap-4  flex-wrap md:flex-nowrap mb-6">
      <div className=" flex items-center gap-2  p-4 bg-white shadow-md rounded-md w-full">
        <div>
          <i className="fa-solid fa-chart-simple text-green-500 text-2xl"></i>
        </div>
        <div>
          <h3 className="text-gray-500 text-xl">Average Grade</h3>
          <span className="font-bold text-2xl">88%</span>
        </div>
      </div>
      <div className=" flex items-center gap-2 p-4 bg-white shadow-md rounded-md w-full">
        <div>
          <i className="fa-solid fa-book-open text-rose-500 text-2xl"></i>
        </div>
        <div>
          <h3 className="text-gray-500 text-xl">Courses</h3>
          <span className="font-bold text-2xl">3</span>
        </div>
      </div>
      <div className=" flex items-center gap-2  p-4 bg-white shadow-md rounded-md w-full">
        <div>
          <i className="fa-solid fa-clock text-blue-500 text-2xl"></i>
        </div>
        <div>
          <h3 className="text-gray-500 text-xl">Study Hours</h3>
          <span className="font-bold text-2xl">45h</span>
        </div>
      </div>
      <div className=" flex items-center gap-2  p-4 bg-white shadow-md rounded-md w-full">
        <div>
          <i className="fa-solid fa-pen text-yellow-500 text-2xl"></i>
        </div>
        <div>
          <h3 className="text-gray-500 text-xl">Assignments</h3>
          <span className="font-bold text-2xl">12</span>
        </div>
      </div>
    </div>
  );
};
