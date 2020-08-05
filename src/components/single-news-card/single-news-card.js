import React from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

import useStyles from './styles.js'


const SingleNewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i }) => {

  const classes = useStyles()

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea href={ url } target="_blank"> 

          <CardMedia className={classes.media} image={urlToImage || 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQx4TjZwHPgWDlsFiD0tcVUk5f9Zo4NMasJCA&usqp=CAU' }/>

          <div className={ classes.details }>
            <Typography variant="body2" color="textSecondary" component="h2"> {(new Date(publishedAt)).toDateString()} </Typography>
            <Typography variant="body2" color="textSecondary" component="h2">{ source.name }</Typography>
          </div>

          <Typography className={ classes.title } gutterBottom variant="h5"> { title } </Typography>

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p"> { description } </Typography>          
          </CardContent>

        </CardActionArea>

        <CardActions className={ classes.cardActions }>
          <Button size="small" color="primary"> Learn More </Button>
          <Typography variant="h5" color="textSecondary"> { i + 1 } </Typography>
        </CardActions>

      </Card>
    </div>
  )
}

export default SingleNewsCard;


/*  Laying out the sections of the Card element and assiging styles to each

    Card  = The whole card element that contains images/text/links etc
    CardActionArea = Part of the card element that is interactive/clickable
    CardMedia = Contains the images
    div > Typography = adding styling






*/