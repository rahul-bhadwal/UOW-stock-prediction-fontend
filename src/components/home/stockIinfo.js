import { Box, Divider, Paper, Typography } from "@material-ui/core";

export const StockInfo = () => (
    <Box width='70%'>
        <Paper style={{ borderRadius: 10, paddingTop: 10, paddingLeft: 25, paddingRight: 25, paddingBottom: 20 }} elevation={3} variant='outlined' >
            <Typography variant='body1' style={{ marginTop: 10, opacity: 0.5 }} >ASX:TLS</Typography>
            <Box display='flex' alignItems='center' mb={2} mt={2} >
                <img src='./assets/telstra.png' style={{ width: 30, marginRight: 10 }} />
                <Typography variant='h3'>Telstra</Typography>
            </Box>

            <Typography variant='body1' style={{ opacity: 0.7 }}>Telstra Corporation Limited provides telecommunications and information services to businesses, governments, and individuals in Australia and internationally.</Typography>
        </Paper>
    </Box>
)