const Project = () => {
    return (

        <div role="tablist" className="tabs tabs-boxed">
            <a role="tab" className="tab">Tab 1</a>
            <a role="tab" className="tab tab-active">Tab 2</a>
            <a role="tab" className="tab">Tab 3</a>
        </div>
    );
}

export default Project;

/*


List of HTML components that should be present to the user.
    1. Button
    2. Input
        1. Text
        2. Radio
        3. Checkbox
    3. Select

User should be able to change following styles of each component.
    1. Background color
    2. Text color
    3. Border color and radius.
        1. If any component don’t have border then please add border of width 1px.
    4. Padding in X and Y axis.


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