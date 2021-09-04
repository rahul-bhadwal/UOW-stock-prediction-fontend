import { Paper, Box, Divider, Typography, Card, CardActionArea, CardMedia } from "@material-ui/core"
import { useEffect, useState } from "react"
import { getNews } from "../../../api/api"
import { NewsCard } from "./newsCard"

export const NewsContainer = () => {
    const [newsList, setNewsList] = useState()

    useEffect(() => {
        getNews('telstra')
            .then(res => setNewsList(res.data.articles))
            .catch(e => console.log(e))
    }, [])

    return (
        <Paper style={{ padding: 25, borderRadius: 10, paddingBottom: 0, marginTop: 24 }} elevation={4} variant='outlined'>
            <Typography variant='h5'>News headlines</Typography>
            <Divider style={{ marginTop: 15 }} />
            <Box display='grid' gridTemplateColumns='auto auto' gridGap={20} height='70vh' overflow='scroll' >
                <Box height={3} />
                <Box height={3} />
                {newsList?.map(news => <NewsCard title={news.title} image={news.urlToImage} url={news.url} />)}
                <Box height={3} />
                <Box height={3} />
            </Box>
        </Paper>
    )
}