export const Header = () => {
  return (
    <header className="flex justify-between bg-white shadow-md py-3 px-5 rounded-md items-center mb-6 w-full">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-3xl">Welcome, Back Student!</h1>
        <p className="text-gray-800 text-xl">
          Here's what's happeningg with your courses today.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center gap-3">
          <i className="fa-solid fa-bell text-rose-500 text-4xl"></i>
          <img
            src="https://avatars.githubusercontent.com/u/258605708?v=4"
            className="w-10.25 h-10.25 rounded-full"
          ></img>
        </div>
      </div>
    </header>
  );
};
