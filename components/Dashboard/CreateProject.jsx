const CreateProject = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md flex flex-col items-center gap-5">
                    <h1 className="text-5xl font-bold">Generate Design Systems</h1>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Create a new Project</span>
                        </div>
                        <input type="text" placeholder="Enter Project Name" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <button className="btn btn-info text-white">Create</button>
                </div>
            </div>
        </div>
    );
}

export default CreateProject;