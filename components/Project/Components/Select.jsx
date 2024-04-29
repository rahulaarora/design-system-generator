const Select = ({ properties }) => {
    return (
        <>
            <h3 className="text-xl my-2">Select</h3>
            <select className="select select-bordered w-full max-w-xs" defaultValue={0} style={{
                color: properties.colors,
                borderRadius: properties.radius,
                margin: properties.spacing
            }}>
                <option disabled value={0}>select</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
            </select>
        </>
    );
}

export default Select;