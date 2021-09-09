import { Box, makeStyles } from "@material-ui/core"
import { PageWrapper } from "../components/pageWrapper"
import { StockInfo } from "../components/stock/stockIinfo"
import { Actions } from "../components/stock/actions"
import { StockChart } from "../components/stockChart"
import { NewsContainer } from "../components/stock/news/newsContainer"

const useStyle = makeStyles({
  graphContiner: {
    '&>*': {
      flexShrink: 1
    }
  }
})

export const StockPage = () => {
  const classes = useStyle()

  return (
    <PageWrapper>

      <Box display='flex' gridGap={20} mb={3} mt={2} >
        <StockInfo />
        <Actions />
      </Box>

      <StockChart />

      <NewsContainer />
      
      <Box mb={5} />

    </PageWrapper>
  )
}