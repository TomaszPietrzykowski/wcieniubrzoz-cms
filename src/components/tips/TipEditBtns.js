import React, { useContext, useState } from "react"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import Tooltip from "@material-ui/core/Tooltip"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import { NavContext } from "../../context/NavContext"
import { useMediaQuery } from "@material-ui/core"
import Hidden from "@material-ui/core/Hidden"

const useStyles = makeStyles((theme) => ({
  container: {
    height: "6rem",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      padding: "0",
      marginBottom: "2rem",
    },
  },
  text: {
    ...theme.typography.tab,
    color: "#777",
    display: "flex",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      fontSize: "0.9rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.75rem",
    },
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },

  btn: {
    ...theme.btn,
    ...theme.btnSmall,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  btnDel: {
    ...theme.btn,
    ...theme.btnSmall,
    background: "rgb(200,0,0)",
    "&:hover": {
      background: "rgb(160,0,0)",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
}))

const TipEditBtns = ({
  title,
  setEditedTip,
  setActiveTab,
  setConfirm,
  deleteTip,
}) => {
  const classes = useStyles()
  const { trigger, runTrigger } = useContext(NavContext)
  const [open, setOpen] = useState(false)

  const matchesXS = useMediaQuery("xs")

  const goBack = () => {
    setActiveTab("list")
    setEditedTip({})
  }

  const handleDelete = () => {
    // CONFIRMATION MODAL
    deleteTip()
    setActiveTab("list")
    setEditedTip({})
  }

  const nextStep = () => {
    setConfirm(true)
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
      color: "rgba(0, 73, 188, 1)",
      maxWidth: 300,
      fontSize: theme.typography.pxToRem(12),
      border: "3px solid rgba(0, 73, 188, 0.5)",
      borderRadius: "15px",
      padding: "1rem",
    },
  }))(Tooltip)

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h2 style={{ marginBottom: "0.5rem" }}>{title}</h2>
      </div>
      <div className={classes.buttons}>
        <Hidden xsDown>
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
        </Hidden>
        <Button
          variant="contained"
          color="secondary"
          className={classes.btn}
          onClick={nextStep}
        >
          Dalej
        </Button>
        <Button
          variant="contained"
          // color="transparent"
          className={classes.btnDel}
          onClick={handleDelete}
        >
          Usuń
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

export default TipEditBtns
