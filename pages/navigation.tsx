import BottomNavigations from "../components/navigation/BottomNavigations";
import Breadcrumbs from "../components/navigation/Breadcrumbs";
import Links from "../components/navigation/Links";
import Menus from "../components/navigation/Menus";
import Navbars from "../components/navigation/Navbars";
import Paginations from "../components/navigation/Paginations";
import Steps from "../components/navigation/Steps";
import Tabs from "../components/navigation/Tabs";

const Navigation = () => {
  return (
    <>
      <BottomNavigations />
      <Breadcrumbs />
      <Links />
      <Menus />
      <Navbars />
      <Paginations />
      <Steps />
      <Tabs />
    </>
  );
};

export default Navigation;
