import React from "react"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"

import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
  btnContainer: {
    ...theme.btnContainer,
  },
  btn: {
    ...theme.btn,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
}))

const HelpBtn = () => {
  const classes = useStyles()

  return (
    <div className={classes.btnContainer}>
      <Button
        variant="contained"
        color="primary"
        className={classes.btn}
        component={Link}
        to="/help"
      >
        Pomoc
      </Button>
    </div>
  )
}

export default HelpBtn
