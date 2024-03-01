import { Outlet } from "react-router-dom";
import NavDashboard from "../components/NavDashboard";

export default function Dashboard() {
    return (
        <main className="grid grid-cols-5">
            <NavDashboard />
            <Outlet />
        </main>
    )
}