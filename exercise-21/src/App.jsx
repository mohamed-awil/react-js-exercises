import { Header } from "./Components/Header";
import { Stats } from "./Components/Stats";
import { CourseProgress } from "./Components/CourseProgress";
import { UpcomingAssignments } from "./Components/UpcomingAssignments";
import { Announcements } from "./Components/Announcements";

function App() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <Header />
      <Stats />
      <main className=" flex flex-col md:flex-row gap-4">
        <CourseProgress />
        <aside className=" w-full md:w-1/3 flex flex-col gap-4">
          <UpcomingAssignments />
          <Announcements />
        </aside>
      </main>
    </div>
  );
}

export default App;
