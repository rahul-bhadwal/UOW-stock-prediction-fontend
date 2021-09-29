import { Box, useMediaQuery } from "@material-ui/core"
import { useParams } from "react-router-dom"
import { PageWrapper } from "../components/pageWrapper"
import { StockInfo } from "../components/stock/stockIinfo"
import { RealtimePrediction } from "../components/stock/realtimePrediction"
import { StockChart } from "../components/stockChart"
import { NewsContainer } from "../components/stock/news/newsContainer"
import { StockData } from "../dummyData/stock"

// const useStyle = makeStyles({
//   graphContiner: {
//     '&>*': {
//       flexShrink: 1
//     }
//   },
//   backBtn: {
//     position: 'fixed',
//     left: 30,
//     marginTop: 5,
//     backgroundColor: '#e0e0e07d',
//     border: '1.5px solid transparent',
//     '&:hover': {
//       border: '1.5px solid #cecece'
//     }
//   }
// })

export const StockPage = () => {
  const { symbol } = useParams()
  const isMobileView = useMediaQuery('(max-width:600px)')

  const stock = StockData[symbol]

  return (
    <PageWrapper withBackBtn>

      <Box 
        display='flex'
        gridGap={20} 
        mb={isMobileView ? 2 : 3} 
        mt={isMobileView ? -0.8 : 1} 
        flexDirection={isMobileView ? 'column' : 'row'}
      >
        <StockInfo stock={stock} />
        {/* {!isMobileView && <RealtimePrediction />} */}
        {<RealtimePrediction />}
      </Box>

      <StockChart symbol={symbol} />

      <NewsContainer stockName={stock.name} />
      
      <Box mb={5} />

    </PageWrapper>
  )
}