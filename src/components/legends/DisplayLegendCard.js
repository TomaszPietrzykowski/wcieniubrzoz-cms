import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "140px",
    marginBottom: "0.5rem",
  },
  avatarContainer: {},
})

const DisplayLegendCard = ({ title, content, handleClick, id, img }) => {
  const classes = useStyles()

  const findTarget = (e) => {
    const keyString = e.target.dataset.keystring
    handleClick(keyString)
  }

  return (
    <Card className={classes.root} data-keystring={id} onClick={findTarget}>
      <CardActionArea
        data-keystring={id}
        style={{ display: "flex", alignItems: "flex-start" }}
      >
        <div className={classes.avatarContainer}>
          <Avatar
            style={{
              height: "3.5rem",
              width: "3.5rem",
              marginLeft: "0.8rem",
              marginTop: "0.8rem",
            }}
            alt={`avatar`}
            src={img}
          />
        </div>
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
