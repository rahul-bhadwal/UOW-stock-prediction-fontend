import axios from 'axios'
import { STOCK_API_KEY } from '../constants/common'

export const fetchStockData = () => axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=TLS&outputsize=full&apikey=${STOCK_API_KEY}`)