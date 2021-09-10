import { Box, IconButton, makeStyles } from "@material-ui/core"
import { useParams, useHistory } from "react-router-dom"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { PageWrapper } from "../components/pageWrapper"
import { StockInfo } from "../components/stock/stockIinfo"
import { Actions } from "../components/stock/actions"
import { StockChart } from "../components/stockChart"
import { NewsContainer } from "../components/stock/news/newsContainer"
import { StockData } from "../dummyData/stock"

const useStyle = makeStyles({
  graphContiner: {
    '&>*': {
      flexShrink: 1
    }
  },
  backBtn: {
    position: 'fixed',
    left: 30,
    marginTop: 5,
    backgroundColor: '#e0e0e07d',
    border: '1.5px solid transparent',
    '&:hover': {
      border: '1.5px solid #cecece'
    }
  }
})

export const StockPage = () => {
  const classes = useStyle()
  const { symbol } = useParams()
  const history = useHistory()

  const stock = StockData[symbol]

  return (
    <PageWrapper>

      <IconButton className={classes.backBtn} color='secondary' onClick={() => history.goBack()}>
        <ArrowBackIcon />
      </IconButton>

      <Box display='flex' gridGap={20} mb={3} mt={1} >
        <StockInfo stock={stock} />
        <Actions />
      </Box>

      <StockChart symbol={symbol} />

      <NewsContainer stockName={stock.name} />
      
      <Box mb={5} />

    </PageWrapper>
  )
}