import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Chatscreen from "../components/Chatscreen"


function Layout() {
  return (
    <div className="flex">
        
      <Sidebar/>
      <Outlet/>
      <Chatscreen/>
    </div>
  )
}

export default Layout
