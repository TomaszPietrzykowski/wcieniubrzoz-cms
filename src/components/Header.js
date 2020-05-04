import React, { useState, useEffect } from "react"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/ToolBar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import { makeStyles } from "@material-ui/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"

import logo from "../assets/logo.svg"

function ElevationScroll(props) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  logo: {
    height: "4.5rem",
    marginLeft: "1.5rem",
    marginRight: "1.5rem",
  },
  logotext: {
    ...theme.typography.logotext,
    color: "white",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "30px",
  },
  btn: {
    ...theme.typography.logout,
    borderRadius: "40px",
    marginLeft: "50px",
    marginRight: "25px",
  },
}))

const Header = (props) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (e, value) => {
    setValue(value)
  }

  const resetTab = () => {
    setValue(0)
  }

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0)
    } else if (window.location.pathname === "/legends" && value !== 1) {
      setValue(1)
    } else if (window.location.pathname === "/tips" && value !== 2) {
      setValue(2)
    } else if (window.location.pathname === "/funfacts" && value !== 3) {
      setValue(3)
    } else if (window.location.pathname === "/login" && value !== 0) {
      setValue(0)
    }
  }, [value])

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <ToolBar disableGutters>
            <Button
              onClick={resetTab}
              component={Link}
              to="/"
              className={classes.logoContainer}
              disableRipple
            >
              <img className={classes.logo} src={logo} alt="C M S logo" />
              <div className={classes.logotext}>CMS</div>
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="secondary"
            >
              <Tab
                className={classes.tab}
                label="Home"
                component={Link}
                to="/"
              />
              <Tab
                className={classes.tab}
                label="Legendy"
                component={Link}
                to="/legends"
              />
              <Tab
                className={classes.tab}
                label="Porady"
                component={Link}
                to="/tips"
              />
              <Tab
                className={classes.tab}
                label="Ciekawostki"
                component={Link}
                to="/funfacts"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.btn}
              component={Link}
              to="/login"
              onClick={resetTab}
            >
              Wyloguj
            </Button>
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}

export default Header
