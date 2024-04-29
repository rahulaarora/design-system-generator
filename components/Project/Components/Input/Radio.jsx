const Radio = ({ properties }) => {
    const styles = {
        accentColor: properties.colors,
        borderRadius: properties.radius,
        margin: properties.spacing
    }
    return (
        <>
            <h3 className="text-xl my-2">Radio Buttons</h3>
            <div className="flex gap-1">
                <input type="radio" name="radio-1" className="" defaultChecked style={styles} />
                <input type="radio" name="radio-1" className="" style={styles} />
            </div>
        </>
    );
}

export default Radio;