import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    height: "auto",
    cursor: "pointer",
  },
  thumbnailsContainer: {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    marginTop: "1rem",
  },
  thumbnail: {
    height: "100px",
    width: "auto",
    marginLeft: "0.8rem",
    marginTop: "0.8rem",
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      height: "60px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "90px",
    },
  },
  h2: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  private: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    marginBottom: "0.8rem",
  },
  p: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.75rem",
    },
  },
}))

const DisplayCollectionTile = ({
  title,
  isPublic,
  description,
  handleClick,
  id,
  images,
}) => {
  const classes = useStyles()

  const thumbnailIterArray = [1, 2, 3, 4, 5, 6]

  const findTarget = (e) => {
    const keyString = e.target.dataset.keystring
    handleClick(keyString)
  }

  return (
    <Card className={classes.root} data-keystring={id} onClick={findTarget}>
      <CardContent data-keystring={id}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          data-keystring={id}
        >
          <span data-keystring={id} className={classes.h2}>
            {title}
          </span>
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          data-keystring={id}
        >
          <span data-keystring={id} className={classes.private}>
            <span
              style={{
                color: isPublic
                  ? "rgba(0, 204, 0, 1)"
                  : "rgba(162, 0, 26, 0.7)",
              }}
            >
              <strong>{isPublic ? "Publiczna" : "Prywatna"}</strong>
            </span>
          </span>
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          data-keystring={id}
        >
          <span data-keystring={id} className={classes.p}>
            {description}
          </span>
        </Typography>
        <div className={classes.thumbnailsContainer} data-keystring={id}>
          {thumbnailIterArray.map((tn, i) => (
            <div
              key={i}
              className={classes.thumbnail}
              data-keystring={id}
              style={{ backgroundImage: `url(${images[i]})` }}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default DisplayCollectionTile
