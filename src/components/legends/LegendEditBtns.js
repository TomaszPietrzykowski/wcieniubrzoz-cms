import React, { useContext, useState } from "react"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import Tooltip from "@material-ui/core/Tooltip"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"

import { NavContext } from "../../context/NavContext"

const useStyles = makeStyles((theme) => ({
  container: {
    height: "6rem",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: "1rem",
  },
  text: {
    ...theme.typography.tab,
    color: "#777",
    display: "flex",
    alignItems: "flex-end",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
  btn: {
    fontFamily: "Raleway",
    fontSize: "1.2rem",
    fontWeight: "700",
    textTransform: "none",
    borderRadius: "30px",
    padding: "0.2rem 1.3rem",
    color: "white",
    margin: "0.8rem",
  },
}))

const LegendEditBtns = ({ title, setEditedLegend, setActiveTab }) => {
  const classes = useStyles()
  const { trigger, runTrigger } = useContext(NavContext)
  const [open, setOpen] = useState(false)

  const goBack = () => {
    setActiveTab("list")
    setEditedLegend({})
  }

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(true)
  }

  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }))(Tooltip)

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h2 style={{ marginBottom: "0.5rem" }}>{title}</h2>
      </div>
      <div className={classes.buttons}>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <HtmlTooltip
              placement="top-end"
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={
                <React.Fragment>
                  <h3>Szybkie podpowiedzi:</h3>
                  <strong>{"Pola puste lub nie zmienione"}</strong>
                  <br />
                  {" ...nie zostaną nadpisane w bazie danych."}
                  <br />
                  <br />
                  <b>{"Wprowadzając treść"}</b>
                  <br />
                  {
                    " ...oddziel akapity Enterem. Możesz użyć pojedynczego Entera lub kilku, nie ma to znaczenia. Podział na akapity ma wpływ na to, jak treść będzie wyświetlana na stronie."
                  }
                  .<br />
                </React.Fragment>
              }
            >
              <IconButton color="primary" onClick={handleTooltipOpen}>
                <HelpOutlineIcon />
              </IconButton>
            </HtmlTooltip>
          </div>
        </ClickAwayListener>
        <Button
          variant="contained"
          color="secondary"
          className={classes.btn}
          onClick={console.log("bum")}
        >
          Dalej
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          onClick={goBack}
        >
          Powrót
        </Button>
      </div>
    </div>
  )
}

export default LegendEditBtns
