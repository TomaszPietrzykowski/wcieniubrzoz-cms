import React from "react"
import SpeedIcon from "@material-ui/icons/Speed"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"
import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles((theme) => ({
  btnContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  icon: {
    fontSize: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
}))

const AdminBtn = () => {
  const classes = useStyles()
  return (
    <div className={classes.btnContainer}>
      <IconButton color="primary" component={Link} to="/admin">
        <SpeedIcon className={classes.icon} />
      </IconButton>
    </div>
  )
}

export default AdminBtn
