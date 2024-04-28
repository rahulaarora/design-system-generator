import ProjectsDropdown from "../Dashboard/ProjectsDropdown";
import LoginBtn from "./LoginBtn";
import { useSession } from "next-auth/react";

const Navbar = () => {
    const { data: session } = useSession()

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                {session && <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40 gap-1">
                        <li><button className="btn btn-outline btn-info hover:!text-white">Save Project</button></li>
                        <li>
                            <ProjectsDropdown />
                        </li>
                    </ul>
                </div>}
                <a className="btn btn-ghost text-lg xl:text-xl">Design System Generator</a>
            </div>
            {session && <div div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                    <li><button className="btn btn-outline btn-info hover:!text-white">Save Project</button></li>
                    <li>
                        <ProjectsDropdown />
                    </li>
                </ul>
            </div>}
            <div className="navbar-end">
                <LoginBtn />
            </div>
        </div >
    );
}

export default Navbar;