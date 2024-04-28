import PropertyTabs from "./Tabs/PropertyTabs";

const AddProperties = ({ data }) => {
    return (
        <PropertyTabs projectData={data} />
    );
}

export default AddProperties;

/*


project_data = {
   properties : {
     colors: {
        primary: "#FF0000",
        secondary: "#00FF00",
        tertiary: "#0000FF"
    },
    radius: {
        M: "0.5rem",
        L: "1rem",
    },
    spacing: {
        S: "0.5rem",
        M: "1rem",
        L: "2rem",
    },
   },
   components: {
        Button: {
            bgColor: "primary",
            textColor: "secondary",
            borderColor: "tertiary",
            borderRadius: "M",
            paddingX: "M",
            paddingY: "M",
        },
        Input: {
            bgColor: "primary",
            textColor: "secondary",
            borderColor: "tertiary",
            borderRadius: "M",
            paddingX: "M",
            paddingY: "M",
            type: "Text",
        },
        Radio: {
            bgColor: "primary",
            textColor: "secondary",
            borderColor: "tertiary",
            borderRadius: "M",
            paddingX: "M",
            paddingY: "M",
        },
        Checkbox: {
            bgColor: "primary",
            textColor: "secondary",
            borderColor: "tertiary",
            borderRadius: "M",
            paddingX: "M",
            paddingY: "M",
        },
        Select: {
            bgColor: "primary",
            textColor: "secondary",
            borderColor: "tertiary",
            borderRadius: "M",
            paddingX: "M",
            paddingY: "M",
        },
   }
   
      
}

*/