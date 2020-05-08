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
  },
  text: {
    ...theme.typography.tab,
    color: "#777",
    display: "flex",
    alignItems: "flex-end",
  },
  buttons: {},
  btn: {
    fontFamily: "Raleway",
    fontSize: "1.2rem",
    fontWeight: "700",
    textTransform: "none",
    borderRadius: "30px",
    padding: "0.2rem 1.3rem",
    color: "white",
    marginRight: "2rem",
  },
}))

const LegendListBtns = () => {
  const classes = useStyles()
  const { trigger, runTrigger } = useContext(NavContext)

  const forceTab = () => {
    runTrigger(!trigger)
  }

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h3 style={{ marginBottom: "0.5rem" }}>
          Wybierz z listy aby edytować lub usunąć:
        </h3>
      </div>
      <div className={classes.buttons}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.btn}
          component={Link}
          to="/addlegend"
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

export default LegendListBtns
