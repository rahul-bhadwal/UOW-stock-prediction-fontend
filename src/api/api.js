import axios from 'axios'
import { NEWS_API_KEY, STOCK_API_KEY } from '../constants/common'

export const fetchStockData = () => axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=TLSYY&outputsize=full&apikey=${STOCK_API_KEY}`)

export const getNews = queryText => axios.get(`https://newsapi.org/v2/everything?q=${queryText}&apiKey=${NEWS_API_KEY}`)