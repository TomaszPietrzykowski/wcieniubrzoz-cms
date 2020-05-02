import React from "react"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/ToolBar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"

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

const Header = (props) => {
  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <ToolBar>W cieniu brzóz...</ToolBar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Header
