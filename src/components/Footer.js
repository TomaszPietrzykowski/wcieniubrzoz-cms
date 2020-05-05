import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import logo from "../assets/logo.svg"

const useStyles = makeStyles((theme) => ({
  footer: {
    margin: 0,
    background: theme.palette.common.gradient1,
    width: "100%",
  },
  footerContainer: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  footerLogo: {
    height: "7rem",
    position: "relative",
    bottom: "0",
    left: "3rem",
  },
  devLogo: {
    ...theme.typography.tab,
    color: "white",
    marginRight: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,192L40,176C80,160,160,128,240,117.3C320,107,400,117,480,133.3C560,149,640,171,720,186.7C800,203,880,213,960,186.7C1040,160,1120,96,1200,85.3C1280,75,1360,117,1400,138.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
        <div className={classes.footerContainer}>
          <img className={classes.footerLogo} src={logo} alt="C M S logo" />
          <h3 className={classes.devLogo}>Barracuda Development &copy; 2020</h3>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
