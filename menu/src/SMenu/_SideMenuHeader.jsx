import Box from '@mui/system/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/system/Stack';
import { useSideMenuState } from './_SMenuHooks';
import { redirect } from 'react-router-dom';

//菜单头
const SideMenuHeader = ({
                            logo, //图标
                            title, //标题
                            onClick //单击事件
                        }) => {
    const { open } = useSideMenuState();
    const clickEvent = () => {

        if (onClick == null) {
            redirect("/");
        } else {
            onClick();
            console.log("clickEvent");
        }
    }
    return (
        <Box className="p-3 border-bottom" >
            <Stack
                spacing={2}
                direction={"row"}
                justifyContent="start"
                alignItems={"center"}
                className="w-100"
            >
                <Avatar
                    sx={{
                        width: 35,
                        height: 35,
                        cursor: "pointer",
                        transition: '0.2s',
                        transform: open ? 'scale(1)' : 'scale(1.2)',
                    }}
                    src={logo}
                    variant="rounded"
                    alt={title}
                    onClick={clickEvent}
                >
                    {
                        title && title.substring(0, 1).toUpperCase()
                    }
                </Avatar>

                <Typography className="text-truncate" variant="h5" sx={{pl: 0.5}} > { title ||  "码蚁基地" } </Typography>
            </Stack>
        </Box>
    )
};

export default SideMenuHeader;
