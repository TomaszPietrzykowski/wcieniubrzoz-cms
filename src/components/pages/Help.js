import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/styles"

import errorImg from "../../assets/logoerror.svg"
import HomeBtn from "../ui/HomeBtn"

const useStyles = makeStyles((theme) => ({
  errorContainer: {
    // minHeight: "30vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "4rem",
  },
  errorImg: {
    height: "10rem",
    marginRight: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: "8rem",
      marginRight: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "7rem",
      marginRight: "1.5rem",
    },
  },
  errorText: {
    ...theme.typography.tab,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    color: "#F00",
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },
}))
const Help = () => {
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
          <h1 className={classes.errorText}>Pomoc wkrótce dostepna</h1>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <HomeBtn />
    </Fragment>
  )
}

export default Help
