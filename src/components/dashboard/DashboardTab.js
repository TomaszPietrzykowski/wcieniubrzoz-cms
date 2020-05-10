import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Link } from "react-router-dom"

import { NavContext } from "../../context/NavContext"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 310,
      fontSize: "0.5rem",
    },
  },
  media: {
    height: 130,
    [theme.breakpoints.down("xs")]: {
      height: 120,
    },
  },
  cardButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tabTitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.1rem",
    },
  },
}))

const DashboardTab = ({ img, title, description, add, edit }) => {
  const classes = useStyles()
  const { runTrigger } = useContext(NavContext)

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/${edit}`} onClick={runTrigger}>
        <CardMedia
          className={classes.media}
          image={`https://barracudadev.com/uploads/${img}`}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <span className={classes.tabTitle}>{title}</span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
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
