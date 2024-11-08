import SideBar from "./SideBar"
import { Outlet } from "react-router-dom"
export default function Body() {
    return (
        <div className="flex">
            <SideBar />
            <Outlet /> 
        </div>
    );
}