import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#fff'
        },
        secondary: {
            main: '#000'
        }
    },
    typography: {
        // fontFamily: ["-apple-system", "BlinkMacSystemFont", "Segoe UI","Roboto","Helvetica","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"],
        fontFamily: ['Roboto', 'sans-serif'],
        h3: {
            fontSize: 28,
            fontWeight: '900'
        },
        h4: {
            fontSize: 23,
            fontWeight: '500'
        },
        h5: {
            fontSize: 21,
            fontWeight: '500'
        },
        h6: {
            fontWeight: '900'
        }
    }
})