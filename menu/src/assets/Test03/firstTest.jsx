import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

export default function ButtonUsage() {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                这是H3标题, variant的值 = h1 ~ h6, 和html中的h1 ~ h6对应
            </Typography>

            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </Box>
    )
}
