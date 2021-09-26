import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";

export const NewsCard = ({ url, title, image }) => (
    <Card 
        style={{ borderRadius: 10, height: 80, textOverflow: 'ellipsis', overflow: 'hidden', backgroundColor: '#f9f9f9' }} 
        onClick={() => window.open(url, '_blank')} variant='outlined' 
    >
        <CardActionArea >
            <Box display='flex' >
                <CardMedia
                    style={{ width: 130, height: 80, position: 'relative!important', objectFit: 'fill' }}
                    image={image}
                />
                <CardContent>
                    <Typography style={{height: 50, overflow: 'hidden'}} >{title}</Typography>
                </CardContent>
            </Box>
        </CardActionArea>
    </Card>
)