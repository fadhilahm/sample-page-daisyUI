import Alerts from "../components/data-display/Alerts";
import Avatars from "../components/data-display/Avatars";
import Badges from "../components/data-display/Badges";
import Cards from "../components/data-display/Cards";
import Carousels from "../components/data-display/Carousels";
import Collapses from "../components/data-display/Collapses";
import Countdown from "../components/data-display/Countdowns";
import Kbds from "../components/data-display/Kbds";
import Progresses from "../components/data-display/Progresses";
import RadialProgresses from "../components/data-display/RadialProgresses";
import Stats from "../components/data-display/Stats";
import Tables from "../components/data-display/Tables";
import Tooltips from "../components/data-display/Tooltips";

const DataDisplay = () => {
  return (
    <main>
      <Alerts />
      <Avatars />
      <Badges />
      <Cards />
      <Carousels />
      <Collapses />
      <Countdown />
      <Kbds />
      <Progresses />
      <RadialProgresses />
      <Stats />
      <Tables />
      <Tooltips />
    </main>
  );
};

export default DataDisplay;
