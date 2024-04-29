import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

const ProjectsDropdown = () => {
    const [projects, setProjects] = useState([])
    const { data: session } = useSession()

    const fetchAllProjects = useCallback(
        async () => {
            if (projects.length > 0) return
            const headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }

            const bodyContent = JSON.stringify({
                "userId": session.user.id,
            });

            const response = await fetch("/api/projects/fetch", {
                method: "POST",
                body: bodyContent,
                headers: headersList
            });

            let data = await response.json();

            if (!data.success) {
                console.error(data.error)
                toast.error("Failed to fetch projects")
                return
            }

            setProjects(data.projects)
        },
        [session.user.id],
    )

    useEffect(() => {
        fetchAllProjects()
    }, [fetchAllProjects])


    return (
        <div className="dropdown dropdown-hover dropdown-bottom p-0">
            <div tabIndex={0} role="button" className="btn m-0 btn-info text-white">Projects</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {
                    projects.length === 0 ? <li><a className="cursor-not-allowed">No Projects</a></li> : projects.map(project => (
                        <li key={project._id}><Link href={`/project/${project._id}`}>{project.title}</Link></li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ProjectsDropdown;