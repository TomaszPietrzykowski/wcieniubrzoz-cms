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
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

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
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
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
    background: theme.palette.common.gradient3,
  },
  iconButtonContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menuIcon: {
    height: "32px",
    width: "40px",
    color: "white",
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    paddingTop: "0.2rem",
    paddingBottom: "0.2rem",
    paddingLeft: "1.2rem",
    paddingRight: "1.2rem",
    opacity: 0.7,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  drawerItemLogout: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
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

  const routes = [
    { name: "Home", path: "/", activeIndex: 0 },
    { name: "Legendy", path: "/legends", activeIndex: 1 },
    { name: "Porady", path: "/tips", activeIndex: 2 },
    { name: "Ciekawostki", path: "/funfacts", activeIndex: 3 },
    { name: "Galeria", path: "/gallery", activeIndex: 4 },
  ]

  useEffect(() => {
    routes.forEach((route) => {
      switch (window.location.pathname) {
        case `${route.path}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex)
          }
          break
        default:
          break
      }
    })
  }, [value, routes])

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            label={route.name}
            component={Link}
            to={route.path}
          />
        ))}
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
        anchor="right"
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              onClick={() => {
                setOpenDrawer(false)
                setValue(route.activeIndex)
              }}
              divider
              button
              component={Link}
              to={route.path}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            onClick={() => {
              setOpenDrawer(false)
              setValue(0)
            }}
            divider
            button
            component={Link}
            to="/login"
            classes={{ root: classes.drawerItemLogout }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Wyloguj
            </ListItemText>
          </ListItem>
        </List>
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
        <AppBar className={classes.appbar} position="fixed" color="primary">
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
