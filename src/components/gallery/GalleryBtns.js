import React, { useContext } from "react"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"

import { NavContext } from "../../context/NavContext"

const useStyles = makeStyles((theme) => ({
  container: {
    height: "6rem",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      height: "8rem",
      marginBottom: "2rem",
      padding: "0",
    },
  },
  text: {
    ...theme.typography.tab,
    color: "#777",
    display: "flex",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
      fontWeight: "500",
    },
  },
  buttons: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
  },
  btn: {
    ...theme.btn,
    ...theme.btnSmall,
    marginRight: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      margin: "0",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
}))

const GalleryBtns = () => {
  const classes = useStyles()
  const { trigger, runTrigger } = useContext(NavContext)

  const forceTab = () => {
    runTrigger(!trigger)
  }

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h3 style={{ marginBottom: "0.5rem" }}>Wybierz kolekcję do edycji:</h3>
      </div>
      <div className={classes.buttons}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.btn}
          component={Link}
          to="/addtip"
        >
          Dodaj
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          component={Link}
          to="/"
          onClick={forceTab}
        >
          Powrót
        </Button>
      </div>
    </div>
  )
}

export default GalleryBtns
