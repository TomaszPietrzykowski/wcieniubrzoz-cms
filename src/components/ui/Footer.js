import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import logo from "../../assets/logo.svg"

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
    height: "10rem",
    position: "relative",
    bottom: "0",
    left: "3rem",
    [theme.breakpoints.down("sm")]: {
      height: "8rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "7rem",
      left: "2rem",
    },
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 800 200">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M 0 0 L 0 150 Q 138 52 375 142 Q 630 237 800 150 L 800 0 Z"
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
