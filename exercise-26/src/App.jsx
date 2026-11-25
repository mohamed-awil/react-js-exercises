import { Outlet } from "react-router-dom"
import { Header } from "./Components/Header"

function App() {
return (
    <div className="p-6 bg-gray-100 min-h-screen">
     <Header/>
      <Outlet/>
    </div>
  )
}

export default App
