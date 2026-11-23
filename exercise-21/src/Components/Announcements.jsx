export const Announcements = () => {
  return (
    <div className="bg-white shadow-md p-6 w-full rounded-md flex gap-2 flex-col">
      <h1 className="font-bold text-xl py-2">Announcements</h1>
      <div className="border-l-4 border-blue-500 px-2">
        <h4 className="font-medium text-lg">New Course Available</h4>
        <p className="text-lg text-gray-500">
          Check out our new TypeScript course!
        </p>
        <span className="text-gray-500">2 hours ago</span>
      </div>
      <div className="border-l-4 border-blue-500 px-2">
        <h4 className="font-medium text-lg">Maintenance Notice</h4>
        <p className="text-lg text-gray-500">
          Platform updates scheduled to night
        </p>
        <span className="text-gray-500">5 hours ago</span>
      </div>
    </div>
  );
};
