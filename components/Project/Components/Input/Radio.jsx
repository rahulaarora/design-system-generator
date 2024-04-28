const Radio = () => {
    return (
        <>
            <h3 className="text-xl my-2">Radio Buttons</h3>
            <div className="flex gap-1">
                <input type="radio" name="radio-1" className="radio" checked />
                <input type="radio" name="radio-1" className="radio" />
            </div>
        </>
    );
}

export default Radio;