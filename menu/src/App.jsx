import SideMenuTest from "./SideMenuTest";
import SideMenuProvider from "./SMenu/SideMenuProvider";
import sideMenuConfigData from "./menuData";

function App() {
    return (
        <SideMenuProvider menuData={sideMenuConfigData}>
            <SideMenuTest />
        </SideMenuProvider>
    )
}

export default App;
