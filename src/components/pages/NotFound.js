import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/styles"

import errorImg from "../../assets/logoerror.svg"
import HomeBtn from "../ui/HomeBtn"

const useStyles = makeStyles((theme) => ({
  errorText: {
    ...theme.typography.tab,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#F00",
    fontSize: "2rem",
  },
  errorContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "4rem",
  },
  errorImg: {
    height: "12rem",
    marginRight: "4rem",
  },
}))
const NotFound = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.errorContainer}>
        <div>
          <img src={errorImg} alt="error" className={classes.errorImg} />
        </div>
        <div className={classes.errorMsg}>
          <h1 className={classes.errorText}>Uups!..</h1>
          <br />
          <h1 className={classes.errorText}>404: Strona nie istnieje</h1>
        </div>
      </div>
      <br />
      <HomeBtn />
    </Fragment>
  )
}

export default NotFound
