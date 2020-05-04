import React, { useState } from "react"
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
    height: "4rem",
    marginLeft: "1.5rem",
    marginRight: "1.5rem",
  },
  logotext: {
    fontSize: "2.5rem",
    fontFamily: "Roboto",
    fontWeight: 700,
    letterSpacing: 6,
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

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <ToolBar disableGutters>
            <img className={classes.logo} src={logo} alt="C M S logo" />
            <div className={classes.logotext}>CMS</div>
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
