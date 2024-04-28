import PropertyTabs from "./Tabs/PropertyTabs";

const AddProperties = ({ properties, setProperties }) => {
    return (
        <PropertyTabs properties={properties} setProperties={setProperties} />
    );
}

export default AddProperties;