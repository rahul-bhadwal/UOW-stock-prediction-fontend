import { makeStyles, Paper, Box, Typography, Divider, LinearProgress } from "@material-ui/core"
import { useEffect, useState } from "react"
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"
import { fetchStockData } from "../api/api"
import moment from 'moment'

const useStyles = makeStyles(theme => ({
  graph: {
    fontFamily: theme.typography.fontFamily,
    '&>svg>g>g>g>text>tspan': {
      fontSize: 13,
      opacity: 0.6
    }
  }
}))

export const StockChart = () => {
  const classes = useStyles()
  const [stockChartData, setStockChartData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStockData()
      .then(res => {
        const formattedData = Object.entries(res.data['Time Series (Daily)']).map(([date, dayRate]) => ({
          date,
          price: parseFloat(dayRate['1. open']),
          pred: parseFloat(dayRate['2. high'])
        }))
        setStockChartData(formattedData.reverse())
        setLoading(false)
      })
      .catch(e => console.log(e))
  }, [])

  const _handleDateTick = tick => moment(tick).format('DD MMM')

  //#2b46a2
  return (
    <Paper style={{ padding: 25, borderRadius: 10, paddingBottom: 20 }} elevation={4} variant='outlined' >
      <Typography variant='h5'>Forecasts</Typography>
      <Divider style={{ marginTop: 15 }} />
      <Box height='320px' >
        {!loading ? (<ResponsiveContainer width='100%' height='100%'>
          <LineChart data={stockChartData} className={classes.graph}>
            <Line type='linear' dataKey="price" stroke="#42435e" strokeWidth={3} dot={false} />
            <Line type='basis' dataKey="pred" stroke="rgb(255 12 0 / 15%)" dot={false} strokeWidth={50} />
            <XAxis padding={{ right: 30 }} dataKey='date' tickFormatter={_handleDateTick} />
            {/* <YAxis padding={{ top: 50, bottom: 40 }} width={45} /> */}
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>)
          :
          <LinearProgress color='secondary' style={{opacity: 0.3}} />
        }
      </Box>
    </Paper>
  )
}