import { Box } from "@material-ui/core"
import { StockListItem } from "./stockListItem"

export const StockList = () => {
    const stocks = [
        {
            name: 'Telstra',
            logo: 'telstra.png',
            prediction: 1
        },
        {
            name: 'Qantas',
            logo: 'qantas.png',
            prediction: 0
        },
    ]

    return (
        <Box>
            <Box display='grid' gridTemplateColumns='auto auto auto auto auto auto auto auto auto' gridGap={20}>
                {stocks.map((stock, index) => <StockListItem key={index} item={stock} />)}
            </Box>
        </Box>
    )
}