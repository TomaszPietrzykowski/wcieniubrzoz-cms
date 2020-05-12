import React, { useContext } from "react"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"
import { NavContext } from "../../context/NavContext"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
  btnContainer: {
    ...theme.btnContainer,
  },
  btn: {
    ...theme.btn,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },
}))

const HomeBtn = () => {
  const classes = useStyles()
  const { runTrigger } = useContext(NavContext)
  return (
    <div className={classes.btnContainer}>
      <Button
        variant="contained"
        color="primary"
        className={classes.btn}
        component={Link}
        to="/"
        onClick={runTrigger}
      >
        Strona główna
      </Button>
    </div>
  )
}

export default HomeBtn
