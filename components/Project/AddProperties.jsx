import PropertyTabs from "./Tabs/PropertyTabs";

const AddProperties = ({ properties, setProperties, setComponentProperties }) => {
    return (
        <PropertyTabs properties={properties} setProperties={setProperties} setComponentProperties={setComponentProperties} />
    );
}

export default AddProperties;