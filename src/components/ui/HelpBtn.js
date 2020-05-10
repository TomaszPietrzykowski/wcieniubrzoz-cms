import React from "react"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"

import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
  btnContainer: {
    height: "6rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
      marginBottom: "4rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
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
        style={{
          fontFamily: "Raleway",
          fontSize: "1.4rem",
          fontWeight: "700",
          textTransform: "none",
          borderRadius: "30px",
          padding: "0.3rem 1.5rem",
        }}
        component={Link}
        to="/help"
      >
        Pomoc
      </Button>
    </div>
  )
}

export default HelpBtn
