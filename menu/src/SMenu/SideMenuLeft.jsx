// SideMenuLeft.jsx
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import Box from '@mui/material/Box';
import SideMenu_Del from "./SideMenu_Del.jsx";
import SToggleButton from './_SToggleButton.jsx';
import { useSideMenuBadgeUpdate } from './_SMenuHooks.jsx';
import FullPage from '../SLayout/FullPage.jsx';
import Stack from '@mui/material/Stack';
import ToggleThemeButton from '../STheme/ToggleThemeButton.jsx';
import ChatBox from '@/components/ChatBox.jsx'; // Import the ChatBox component

function SideMenuLeft() {
    const updateBadge = useSideMenuBadgeUpdate();
    const onClickHandler = (id, title, idPath, titlePath) => {
        console.log(id, title, idPath, titlePath);        updateBadge(id, 0);    }

    return (
        <FullPage
            sideMenu={<SideMenu_Del
                title="Momento"
                logo="./src/assets/momento.png"
                hClick={() => { console.log("headerOnClick") }}
                mClick={onClickHandler} />
            }

            pageHeader={
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    className='w-100'
                >
                    <SToggleButton icon={<VerticalSplitIcon />} />
                    <ToggleThemeButton />
                </Stack>
            }
        >

            <Box className="w-100 h-100 d-flex" sx={{ height: '100vh', overflow: 'hidden' }}>
                <ChatBox />
            </Box>

        </FullPage>
    )
}

export default SideMenuLeft;
