const ProjectsDropdown = () => {
    return (
        <div className="dropdown dropdown-hover dropdown-bottom p-0">
            <div tabIndex={0} role="button" className="btn m-0 btn-info text-white">Projects</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Project 1</a></li>
                <li><a>Project 2</a></li>
            </ul>
        </div>
    );
}

export default ProjectsDropdown;