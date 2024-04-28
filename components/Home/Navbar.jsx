import LoginBtn from "./LoginBtn";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">Design System Generator</a>
            </div>
            <div className="navbar-end">
                <LoginBtn />
            </div>
        </div>
    );
}

export default Navbar;