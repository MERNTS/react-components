import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import SvgIcon from '@mui/material/SvgIcon';

import { useSideMenuState, useSideMenuStateUpdate, useSideMenuBadge } from './_SMenuHooks';
import SMenuSubItem from './_SideMenuSubItem';

/**
 * 含有子菜单的菜单项
 * @param props
 * @returns
 */
function SideMenuGroup({
                           id, //菜单项的ID名称
                           icon = null, //图标
                           title, //标题
                           childrenData, //子菜单
                           onClick, //单击事件
                       }) {
    const { hoverItemId, open } = useSideMenuState();
    const updateMenuState = useSideMenuStateUpdate();
    const badgeCount = useSideMenuBadge();
    const handleClick = () => {
        updateMenuState({hoverItemId: hoverItemId === id ? null : id})
    };

    return (
        <React.Fragment>
            <ListItemButton onClick={handleClick}>
                <Tooltip title={open ? null : title} arrow placement="right">
                    <Badge badgeContent={badgeCount[id]} color="error">
                        <ListItemIcon
                            sx={{
                                '& svg': {
                                    transition: '0.2s',
                                    transform: open ? 'scale(1)' : 'scale(1.2)',
                                },

                                '&:hover, &:focus': {
                                    '& svg:first-of-type': {
                                        transform: open ? 'scale(1)' : 'scale(1.3)',
                                    }
                                },
                            }}>
                            {
                                icon == null ?
                                    <Avatar
                                        sx={{
                                            width: 30,
                                            height: 30,
                                            fontSize: 18,
                                            transition: '0.2s',
                                            transform: open ? 'scale(1)' : 'scale(1.2)'
                                        }}
                                        variant="rounded"
                                    >
                                        {title.substring(0, 1).toUpperCase()}
                                    </Avatar> :
                                    <SvgIcon component={icon} />
                            }
                        </ListItemIcon>
                    </Badge>
                </Tooltip>

                <ListItemText primary={title} />
                {hoverItemId === id ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={ hoverItemId === id } timeout="auto" unmountOnExit>
                <List component="div" dense={true} disablePadding>
                    {
                        childrenData === undefined ? null :
                            childrenData.map(function (itemData, index) {
                                return <SMenuSubItem
                                    icon = { itemData.icon }
                                    title = { itemData.title }
                                    id = {itemData.id}
                                    groupId = {id}
                                    groupTitle={title}
                                    onClick={onClick}
                                    key={index} />
                            })
                    }
                </List>
            </Collapse>
        </React.Fragment>
    );
}

export default SideMenuGroup;
