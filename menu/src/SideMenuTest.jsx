// SideMenuTest.jsx
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import Box from '@mui/material/Box';
import SideMenu from "./SMenu/SideMenu";
import SToggleButton from './SMenu/_SToggleButton';
import { useSideMenuBadgeUpdate } from './SMenu/_SMenuHooks';
import FullPage from './SLayout/FullPage';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ToggleThemeButton from './STheme/ToggleThemeButton';

function SideMenuTest() {
    const updateBadge = useSideMenuBadgeUpdate();
    const onClickHandler = (id, title, idPath, titlePath) => {
        console.log(id, title, idPath, titlePath);
        updateBadge(id, 0);
    }

    return (
        <FullPage
            sideMenu={<SideMenu
                title="侧边菜单测试系统"
                logo="/logo.png"
                hClick = {()=>{console.log("headerOnClick")}}
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
            <Box className="w-100 h-100 d-flex flex-grow-1 justify-content-center align-items-center">
                <Typography variant='h1'>欢迎来到码蚁基地</Typography>
            </Box>
        </FullPage>
    )
}

export default SideMenuTest;
