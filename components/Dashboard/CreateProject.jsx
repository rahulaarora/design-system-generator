import { useState } from "react";
import { useSession } from "next-auth/react";

import { useRouter } from "next/router";
import { toast } from "react-toastify";

const CreateProject = () => {
    const [projectName, setProjectName] = useState('')
    const { data: session } = useSession();
    const router = useRouter()

    const handleCreateProject = async () => {
        const headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        const bodyContent = JSON.stringify({
            "title": projectName.trim(),
            "userId": session.user.id,
        });

        const response = await fetch("/api/projects/create", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        const data = await response.json();

        if (!data.success) {
            console.error(data.error)
            toast.error("Failed to create project")
        }

        if (data.success) {
            toast.success("Project created successfully")
            router.push(`/project/${data.project._id}`)
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md flex flex-col items-center gap-5">
                    <h1 className="text-5xl font-bold">Generate Design Systems</h1>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Create a new Project</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter Project Name"
                            className="input input-bordered w-full max-w-xs"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                        />
                    </label>
                    <button className="btn btn-info text-white" onClick={handleCreateProject}>Create</button>
                </div>
            </div>
        </div>
    );
}

export default CreateProject;