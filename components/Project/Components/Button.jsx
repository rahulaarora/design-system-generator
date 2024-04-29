const Button = ({ properties }) => {
    return (
        <>
            <h3 className="text-xl my-2">Button</h3>
            <button className="btn" style={{
                color: properties.colors,
                borderRadius: properties.radius,
                margin: properties.spacing
            }}>Primary</button>
        </>
    );
}

export default Button;