import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  container: {
    height: "6rem",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: "1rem",
  },
  btn: {
    fontFamily: "Raleway",
    fontSize: "1.2rem",
    fontWeight: "700",
    textTransform: "none",
    borderRadius: "30px",
    padding: "0.2rem 1.3rem",
    color: "white",
    margin: "0.8rem",
  },
}))

const ConfirmEdit = ({ setConfirm }) => {
  const classes = useStyles()

  const goBack = () => {
    setConfirm(false)
  }

  return (
    <div>
      <h1>confirm</h1>
      <Button
        variant="contained"
        color="primary"
        className={classes.btn}
        onClick={goBack}
      >
        Powrót
      </Button>
    </div>
  )
}

export default ConfirmEdit
