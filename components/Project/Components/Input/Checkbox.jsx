const Checkbox = ({ properties }) => {
    return (
        <>
            <h3 className="text-xl my-2">Checkbox</h3>
            <input type="checkbox" defaultChecked className="" style={{
                borderRadius: properties.radius,
                margin: properties.spacing,
                accentColor: properties.colors,
            }} />
        </>
    );
}

export default Checkbox;