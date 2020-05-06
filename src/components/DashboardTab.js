import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import theme from "./Theme"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}))

const DashboardTab = ({ img, title, description, add, edit }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://barracudadev.com/uploads/${img}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
            Legendy o kwiatach
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
            Dodaj nową legendę. Edytuj lub usuń istniejącą. Mozesz też zmienić
            grafikę ikony wyświtlanej przy legendzie
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={Link} to={`/${add}`}>
          Dodaj
        </Button>
        <Button size="small" color="primary" component={Link} to={`/${edit}`}>
          Edytuj lub usuń
        </Button>
      </CardActions>
    </Card>
  )
}

export default DashboardTab
