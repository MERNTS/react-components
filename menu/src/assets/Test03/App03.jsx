// https://blog.csdn.net/zxmatline/article/details/135694509?spm=1001.2014.3001.5502

import '../App.css'
import '../style.css'
import ButtonUsage from './firstTest.jsx'
import Profile from './profile.jsx'
import ButtonClickTest from "./buttonClickTest.jsx";
import ButtonClickTest2 from "./buttonClickTestShareState.jsx";

function App() {
    return (
        <>
            <ButtonUsage />
            <Profile/>
            <ButtonClickTest/>
            <ButtonClickTest2/>
        </>
    )
}

export default App
