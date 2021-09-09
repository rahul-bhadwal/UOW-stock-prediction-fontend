import { Box, Typography } from "@material-ui/core"
import { StockList } from "../components/home/stockList"
import { PageWrapper } from "../components/pageWrapper"
import {Recommandation} from '../components/home/recommandation/recommandation'

export const HomePage = () => {

    return (
        <PageWrapper>
            <Box>
                <Recommandation />
            </Box>
            <Box mt={4}>
                {/* <Typography variant='h5' style={{marginBottom: 15}}>Predicted analysis</Typography> */}
                <StockList />
            </Box>
        </PageWrapper>
    )
}