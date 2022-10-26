import Checkboxes from "../components/data-input/Checkboxes";
import Radios from "../components/data-input/Radios";
import Ranges from "../components/data-input/Ranges";
import Ratings from "../components/data-input/Ratings";
import Selects from "../components/data-input/Selects";
import TextAreas from "../components/data-input/TextAreas";
import TextInputs from "../components/data-input/TextInputs";
import Toggles from "../components/data-input/Toggles";

const DataInput = () => {
  return (
    <main>
      <Checkboxes />
      <Radios />
      <Ranges />
      <Ratings />
      <Selects />
      <TextAreas />
      <TextInputs />
      <Toggles />
    </main>
  );
};

export default DataInput;
