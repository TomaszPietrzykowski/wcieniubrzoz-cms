import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "140px",
    marginBottom: "0.5rem",
  },
})

const DisplayLegendCard = ({ title, content, handleClick, id }) => {
  const classes = useStyles()

  const findTarget = (e) => {
    const keyString = e.target.dataset.keystring
    handleClick(keyString)
  }

  return (
    <Card className={classes.root} data-keystring={id} onClick={findTarget}>
      <CardActionArea data-keystring={id}>
        <CardContent data-keystring={id}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            data-keystring={id}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            data-keystring={id}
          >
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default DisplayLegendCard
