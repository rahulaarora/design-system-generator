import { useState } from "react";

const TabContent = ({ activeTab, properties, setProperties, setComponentProperties }) => {

    const [showInputs, setShowInputs] = useState(false)
    const [label, setLabel] = useState('')
    const [value, setValue] = useState('')

    function addHandler() {
        setProperties({
            ...properties,
            [activeTab]: {
                ...properties[activeTab],
                [label.toString().trim()]: value.toString().trim()
            }
        })

        setShowInputs((prev) => !prev)
    }

    function showInputHandler() {
        if (showInputs) {
            return
        }
        setShowInputs((prev) => !prev)
    }

    function applyProperty(value) {
        setComponentProperties((prev) => ({
            ...prev,
            [activeTab]: value
        }))
    }

    return (
        <section>

            <button className="btn btn-outline btn-info my-5" onClick={showInputHandler}> Add {activeTab}</button>

            {
                properties[activeTab] &&
                Object.keys(properties[activeTab]).map((item, index) => {
                    const label = item;
                    const value = properties[activeTab][item];
                    return (
                        <div key={index} className="flex justify-between gap-2">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Label</span>
                                </div>
                                <div className="input input-bordered w-full max-w-xs flex items-center" value={label} >{label}</div>
                            </label>

                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Value</span>
                                </div>
                                <div className="input input-bordered w-full max-w-xs flex items-center" >{value}</div>
                            </label>

                            <label className="form-control w-full max-w-xs justify-end">
                                <button className="btn btn-outline btn-info" onClick={() => applyProperty(value)}>Apply</button>
                            </label>
                        </div>
                    )
                })
            }

            {showInputs && <div className="flex justify-between gap-2">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Label</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={label} onChange={(e) => {
                        setLabel(e.target.value)
                    }} />
                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Value</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={value} onChange={(e) => {
                        setValue(e.target.value)
                    }} />
                </label>

                <label className="form-control w-full max-w-xs justify-end">
                    <button className="btn btn-outline btn-info" onClick={addHandler}>Add</button>
                </label>
            </div>}
        </section>
    );
}

export default TabContent;