import { Box, Divider, Typography } from "@material-ui/core"
import { StockList } from "../components/home/stockList"
import { PageWrapper } from "../components/pageWrapper"
import {Recommandation} from '../components/home/recommandation/recommandation'

export const HomePage = () => {

    return (
        <PageWrapper>
            <Box mt={2} mb={4}>
                <StockList />
            </Box>
            <Box mt={4}>
                <Recommandation />
            </Box>
        </PageWrapper>
    )
}