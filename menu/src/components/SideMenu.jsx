import { ReactNode } from 'react';
import Box from '@mui/system/Box';
import SideMenuItem from './_SideMenuItem.jsx';
import Divider from '@mui/material/Divider';
import SideMenuGroup from './_SideMenuGroup';
import { useSideMenuData, useSideMenuState } from './_SMenuHooks';
import { List } from '@mui/material';
import Paper from '@mui/material/Paper';

/**
 * 菜单的主体组件
 * @returns
 */
function SideMenu({
                      header,
                      footer,
                      onClick
                  }) {
    const menuData = useSideMenuData();
    const { open } = useSideMenuState();
    const openWidth = 300;
    const minWidth = 65;
    return (
        <Paper
            className="d-flex overflow-hidden h-100"
            elevation={1}
            sx={{
                transition: "width 0.3s",
                width: open ? openWidth : minWidth,
            }}
        >
            <Box className='d-flex flex-column'>
                {
                    header == null ?
                        null :
                        <>
                            { header }
                            <Divider />
                        </>
                }

                <Box sx={{ flex: 1, overflowY: "auto",  overflowX:"hidden", width: open ? openWidth : minWidth}}>
                    <List sx={{width: openWidth}}>
                        {
                            menuData.map((item, index) => {
                                const subItemsData = item.children || null;
                                if (subItemsData == null) {
                                    return <SideMenuItem
                                        id={item.id}
                                        title={item.title}
                                        icon={item.icon}
                                        onClick={onClick}
                                        key={index}
                                    />
                                }

                                return <SideMenuGroup
                                    icon={item.icon}
                                    id={item.id}
                                    title={item.title}
                                    childrenData={item.children}
                                    onClick={onClick}
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
        </Paper>
    );
}

export default SideMenu;
