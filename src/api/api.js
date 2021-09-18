import axios from 'axios'
import { NEWS_API_KEY, STOCK_API_KEY } from '../constants/common'

export const fetchStockData = symbol => axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=full&apikey=${STOCK_API_KEY}`)

export const getNews = queryText => axios.get(`https://uniproject-test.netlify.app/news?q=${queryText}`)

export const fetchStockJson = async symbol => {
    const data = await axios.get(`/data/${symbol}.json`)
    return data.data
}