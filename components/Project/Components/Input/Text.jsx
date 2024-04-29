const Text = ({ properties }) => {
    return (
        <>
            <h3 className="text-xl my-2">Textbox</h3>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" style={{
                color: properties.colors,
                borderRadius: properties.radius,
                margin: properties.spacing
            }} />
        </>
    );
}

export default Text;