export const UpcomingAssignments = () => {
  return (
    <div className="bg-white shadow-md p-6 w-full rounded-md">
      <h1 className="font-bold text-xl py-2">Upcoming assignments</h1>

      <div className="w-full flex flex-col gap-2">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2">
            <h4 className="font-medium text-lg">Build a Todo App</h4>
            <p className="text-lg text-gray-500">React Fundmentals</p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-red-500 bg-red-50 text-center rounded-full">
              Pending
            </span>
            <p className="text-gray-500">Date 2026-11-25</p>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2">
            <h4 className="font-medium text-lg">API Integration</h4>
            <p className="text-lg text-gray-500">JavaScript Advanced</p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-green-500 bg-green-50 text-center rounded-full">
              Completed
            </span>
            <p className="text-gray-500">Date 2026-11-20</p>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2">
            <h4 className="font-medium text-lg">Design System</h4>
            <p className="text-lg text-gray-500">UX/UX Design</p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-yellow-500 bg-yellow-50 text-center rounded-full">
              In Progress
            </span>
            <p className="text-gray-500">Date 2026-11-23</p>
          </div>
        </div>
      </div>
    </div>
  );
};
