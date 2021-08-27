import { Box, Divider, Paper, Typography } from "@material-ui/core";
import { Skeleton } from '@material-ui/lab';

export const Actions = () => (
    <Box flexGrow={1}  >
        <Paper variant='outlined' style={{borderRadius: 10, padding: 20, paddingTop: 25}}>
            <Box>
                <Typography variant='h5'>Recommanded actions</Typography>
            </Box>
            <Divider style={{marginTop: 15}} />
            
            <Box mt={2}>
                <Skeleton height={70.7} style={{borderRadius: 10}} />
            </Box>
        </Paper>
    </Box>
)