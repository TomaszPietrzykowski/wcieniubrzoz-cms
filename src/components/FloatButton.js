import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    right: "2rem",
    bottom: "2rem",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

const FloatButton = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Fab
        color="secondary"
        aria-label="add"
        onClick={() => window.open("https://www.wcieniubrzoz.pl", "_blank")}
      >
        <ImportantDevicesIcon style={{ color: "white" }} />
      </Fab>
    </div>
  )
}

export default FloatButton
