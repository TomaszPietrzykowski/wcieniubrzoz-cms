import React, { useState, useEffect } from "react"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/ToolBar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import { makeStyles } from "@material-ui/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Button from "@material-ui/core/Button"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import MenuIcon from "@material-ui/icons/Menu"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"

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
    [theme.breakpoints.down("sm")]: {
      height: "4rem",
      marginLeft: "1rem",
      marginRight: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3.5rem",
      marginLeft: "0.8rem",
      marginRight: "0.8rem",
    },
  },
  logotext: {
    ...theme.typography.logotext,
    color: "white",
    fontFamily: "Roboto",
    fontSize: "2.5rem",
    fontWeight: 700,
    letterSpacing: 6,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      letterSpacing: 4,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
      letterSpacing: 2,
    },
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
  iconButtonContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menuIcon: {
    height: "40px",
    width: "40px",
  },
}))

const Header = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const [openDrawer, setOpenDrawer] = useState(false)
  const [value, setValue] = useState(0)

  const handleChange = (e, newValue) => {
    setValue(newValue)
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

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="secondary"
      >
        <Tab className={classes.tab} label="Home" component={Link} to="/" />
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
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        Example drawer
      </SwipeableDrawer>
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
    </React.Fragment>
  )

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
            {matches ? drawer : tabs}
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}

export default Header
