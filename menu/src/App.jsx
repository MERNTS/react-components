import SideMenuLeft from "./SMenu/SideMenuLeft.jsx";
import SideMenuProvider from "./SMenu/SideMenuProvider";
import sideMenuConfigData from "./SMenu/SideMenuData.jsx";

function App() {
    return (
        <SideMenuProvider menuData={sideMenuConfigData}>
            <SideMenuLeft />
        </SideMenuProvider>
    )
}

export default App;