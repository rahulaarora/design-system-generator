const TabContent = ({ activeTab }) => {
    return (
        <section>

            <h2>
                Add {activeTab}
            </h2>

            <div className="flex justify-between gap-2">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Label</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Value</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
            </div>

        </section>
    );
}

export default TabContent;