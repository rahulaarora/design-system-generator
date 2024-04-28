import Button from "./Components/Button";
import Checkbox from "./Components/Input/Checkbox";
import Radio from "./Components/Input/Radio";
import Text from "./Components/Input/Text";
import Select from "./Components/Select";

const UserComponents = () => {
    return (
        <section className="my-5 mx-5">
            <h2 className="text-2xl font-bold my-5 mt-10">User Components</h2>
            <Button />
            <Text />
            <Radio />
            <Checkbox />
            <Select />
        </section>
    );
}

export default UserComponents;