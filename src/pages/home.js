import { Box, makeStyles } from "@material-ui/core"
import { PageWrapper } from "../components/pageWrapper"
import { StockInfo } from "../components/home/stockIinfo"
import { Actions } from "../components/home/actions"
import { StockChart } from "../components/stockChart"
import { NewsContainer } from "../components/home/news/newsContainer"

const useStyle = makeStyles({
  graphContiner: {
    '&>*': {
      flexShrink: 1
    }
  }
})

export const HomePage = () => {
  const classes = useStyle()

  return (
    <PageWrapper pageTitle='UOW deepnet' >

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