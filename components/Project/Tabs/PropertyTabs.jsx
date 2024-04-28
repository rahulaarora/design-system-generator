
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import TabContent from "./TabContent";

const PropertyTabs = ({ projectData }) => {

    console.log(projectData);

    return (
        <Tabs className="mt-5 mx-5 ">
            <TabList>
                <Tab>Colors</Tab>
                <Tab>Radius</Tab>
                <Tab>Spacing</Tab>
            </TabList>

            <TabPanel>
                <TabContent activeTab="colors" />
            </TabPanel>
            <TabPanel>
                <TabContent activeTab="radius" />
            </TabPanel>
            <TabPanel>
                <TabContent activeTab="spacing" />
            </TabPanel>
        </Tabs>
    );
}

export default PropertyTabs;