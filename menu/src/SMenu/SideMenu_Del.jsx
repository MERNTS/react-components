// SideMenu_Del.jsx

import Box from '@mui/system/Box';
import SideMenuItem from './_SideMenuItem.jsx';
import Divider from '@mui/material/Divider';
import SideMenuGroup from './_SideMenuGroup';
import { useSideMenuData, useSideMenuState } from './_SMenuHooks';
import { List } from '@mui/material';
import SideMenuHeader from "./_SideMenuHeader";

/**
 * 菜单的主体组件
 *
 * @returns
 */
function SideMenu_Del({
                      title,
                      logo,
                      hClick,
                      mClick,
                      footer,
                  }) {
    const menuData = useSideMenuData();
    const { open } = useSideMenuState();
    const openWidth = 300;
    const minWidth = 65;
    return (
        <Box
            className="d-flex overflow-hidden h-100"
            elevation={1}
            sx={{
                transition: "width 0.3s",
                width: open ? openWidth : minWidth,
                borderRight: 1,
                borderColor: "divider",
            }}
        >
            <Box className='d-flex flex-column'>
                <SideMenuHeader
                    title={title}
                    logo={logo}
                    onClick={hClick}
                />

                <Box
                    sx={{
                        flex: 1,
                        overflowY: "auto",
                        overflowX: "hidden",
                        width: open ? openWidth : minWidth,
                    }}
                >
                    <List sx={{width: openWidth}}>
                        {
                            menuData.map((item, index) => {
                                const subItemsData = item.children || null;
                                if (subItemsData == null) {
                                    return <SideMenuItem
                                        id={item.id}
                                        title={item.title}
                                        icon={item.icon}
                                        onClick={mClick}
                                        key={index}
                                    />
                                }

                                return <SideMenuGroup
                                    icon={item.icon}
                                    id={item.id}
                                    title={item.title}
                                    childrenData={item.children}
                                    onClick={mClick}
                                    key={index} />
                            })
                        }
                    </List>
                </Box>

                {
                    footer == null ?
                        null :
                        <>
                            <Divider />
                            {footer}
                        </>
                }
            </Box>
        </Box>
    );
}

export default SideMenu_Del;
