import { Box, Divider, Paper, Typography } from "@material-ui/core";
import { Skeleton } from '@material-ui/lab';

export const Actions = () => (
    <Box flexGrow={1} display='flex' >
        <Paper variant='outlined' style={{borderRadius: 10, padding: 20, paddingTop: 25, width: '100%'}}>
            <Box>
                <Typography variant='h5'>Recommanded actions</Typography>
            </Box>
            <Divider style={{marginTop: 15}} />
            
            <Box mt={1}>
                <Skeleton height={70} style={{borderRadius: 10}} />
                <Skeleton height={100} style={{borderRadius: 10}} />
            </Box>
        </Paper>
    </Box>
)