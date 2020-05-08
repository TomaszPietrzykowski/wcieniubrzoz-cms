import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Link, Redirect } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    height: 140,
  },
  cardButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}))

const DashboardTab = ({ img, title, description, add, edit, route }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} data-keystring={route}>
      <CardActionArea data-keystring={route}>
        <CardMedia
          data-keystring={route}
          className={classes.media}
          image={`https://barracudadev.com/uploads/${img}`}
          title={title}
        />
        <CardContent data-keystring={route}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            data-keystring={route}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            data-keystring={route}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardButtons}>
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
