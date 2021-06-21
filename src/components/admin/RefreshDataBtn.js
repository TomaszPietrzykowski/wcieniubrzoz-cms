import React from "react"
import UpdateIcon from "@material-ui/icons/Update"
import { makeStyles } from "@material-ui/styles"
import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles((theme) => ({
  btnContainer: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "flex-end",
  },
  icon: {
    fontSize: "3rem",
    color: "rgb(151, 202, 239)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
}))

const RefreshDataBtn = ({ reload, setReload }) => {
  const classes = useStyles()
  return (
    <div className={classes.btnContainer}>
      <IconButton onClick={() => setReload(!reload)} to="/admin">
        <UpdateIcon className={classes.icon} />
      </IconButton>
    </div>
  )
}

export default RefreshDataBtn
