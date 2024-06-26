
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import TabContent from "./TabContent";

const PropertyTabs = ({ properties, setProperties, setComponentProperties }) => {
    return (
        <Tabs className="mt-5 mx-5 ">
            <TabList>
                <Tab>Colors</Tab>
                <Tab>Radius</Tab>
                <Tab>Spacing</Tab>
            </TabList>

            <TabPanel>
                <TabContent activeTab="colors" properties={properties} setProperties={setProperties} setComponentProperties={setComponentProperties} />
            </TabPanel>
            <TabPanel>
                <TabContent activeTab="radius" properties={properties} setProperties={setProperties} setComponentProperties={setComponentProperties} />
            </TabPanel>
            <TabPanel>
                <TabContent activeTab="spacing" properties={properties} setProperties={setProperties} setComponentProperties={setComponentProperties} />
            </TabPanel>
        </Tabs>
    );
}

export default PropertyTabs;