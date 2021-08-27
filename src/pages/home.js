import { Typography, Box, makeStyles, Paper } from "@material-ui/core"
import { Graph } from "../components/graph"
import { PageWrapper } from "../components/pageWrapper"
import { graphData, predictionGraphData, RechartsDummyData } from "../dummyData/data"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"
import { StockInfo } from "../components/home/stockIinfo"
import { Actions } from "../components/home/actions"

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

      <Box display='flex' gridGap={20} mb={5} mt={2} >
        <StockInfo />
        <Actions />
      </Box>

      <Typography variant='h4'>Forecasts</Typography>

      <Box height={15} />
      <Paper style={{width: 'fit-content', padding: 20, borderRadius: 10, paddingLeft: 0}} elevation={4} >
        <LineChart width={1000} height={300} data={RechartsDummyData}>
          {/* <Line type='linear' dataKey="y" stroke="#0070ff" strokeWidth={3} /> */}
          <Line type='linear' dataKey="y" stroke="#2b46a2" strokeWidth={3} />
          <Line type='basis' dataKey="pred" stroke="rgb(255 12 0 / 15%)" dot={false} strokeWidth={50} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis padding={{right: 75}} />
          <YAxis padding={{top: 50, bottom: 40}} width={52} />
          <Tooltip />
        </LineChart>
      </Paper>

      <Paper variant='outlined' style={{ borderRadius: 10, overflow: 'hidden', marginTop: 60, marginBottom: 80 }}>
        <Box height={400} display='flex' className={classes.graphContiner} >
          <Graph data={graphData} color='#192485' />
          <Graph data={predictionGraphData} lineWidth={50} type='basis' color='#ff00007a' />
        </Box>
      </Paper>

    </PageWrapper>
  )
}