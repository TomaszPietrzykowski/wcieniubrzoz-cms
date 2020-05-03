import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/ToolBar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import { makeStyles } from "@material-ui/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Button from "@material-ui/core/Button"

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
    marginBottom: "1em",
  },
  logo: {
    height: "5rem",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  btn: {
    ...theme.typography.estimate,
    borderRadius: "50px",
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
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab className={classes.tab} label="Home" />
              <Tab className={classes.tab} label="Legendy" />
              <Tab className={classes.tab} label="Porady" />
              <Tab className={classes.tab} label="Ciekawostki" />
              <Tab className={classes.tab} label="Wyloguj" />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.btn}
            >
              Free estimate
            </Button>
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}

export default Header
