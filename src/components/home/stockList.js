import { Box, makeStyles } from "@material-ui/core"
import { StockListItem } from "./stockListItem"

const useStyles = makeStyles({
    scrollContainer: {
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        scrollbarWidth: 'none'
    }
})

export const StockList = () => {
    const classes = useStyles()
    const stocks = [
        {
            name: 'Telstra',
            logo: 'telstra.png',
            symbol: 'TLSYY',
            prediction: 1
        },
        {
            name: 'Qantas',
            logo: 'qantas.png',
            symbol: 'QABSY',
            prediction: 0
        },
    ]

    return (
        <Box>
            <Box className={classes.scrollContainer} display='flex' gridGap={20} overflow='scroll' padding={1.5} margin={-1.5} >
                {stocks.map((stock, index) => <StockListItem key={index} item={stock} />)}
            </Box>
        </Box>
    )
}