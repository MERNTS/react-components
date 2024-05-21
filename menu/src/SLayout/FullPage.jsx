// SLayout/FullPage.jsx

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function FullPage({ sideMenu, pageHeader , children }) {
    return (
        <Paper className='d-flex overflow-hidden position-absolute w-100 h-100 p-0 m-0'>
            <Box className='h-100'>
                {
                    sideMenu
                }
            </Box>

            <Box className='d-flex overflow-hidden position-relative flex-grow-1'>
                <Box className="d-flex flex-column overflow-auto p-0 m-0 position-relative flex-grow-1 flex-nowrap">
                    <Box
                        className="w-100 p-3 border-bottom"
                        sx={{ height: 68 }}
                    >
                        { pageHeader }
                    </Box>
                    <Box className="p-0 w-100 h-100">
                        {children }
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}

export default FullPage;
