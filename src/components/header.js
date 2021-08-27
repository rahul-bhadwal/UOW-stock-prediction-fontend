import { AppBar, Toolbar, Typography } from "@material-ui/core";

export const Header = ({ title }) => (
    <AppBar variant='outlined'>
        <Toolbar>
            <Typography variant='h6' >{title}</Typography>
        </Toolbar>
    </AppBar>
)