import React, { useState, useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import ListItemText from "@material-ui/core/ListItemText"
import ListItem from "@material-ui/core/ListItem"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import CloseIcon from "@material-ui/icons/Close"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import Slide from "@material-ui/core/Slide"
import axios from "axios"

import { AuthContext } from "../../context/AuthContext"

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    fontFamily: "Raleway",
    fontSize: "1.5rem",
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  ico: {
    fontSize: "2.5rem",
    color: "#777",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
    },
  },
  text: {
    color: "#777",
  },
  orderBtncontainer: {
    marginTop: "2rem",
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  orderBtn: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function FullScreenDialog({ getGallery, gallery, setLoading }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [ordered, setOrdered] = useState([])
  const { loggedInUser } = useContext(AuthContext)

  const handleClickOpen = () => {
    let tmp = [...gallery]
    setOrdered(tmp)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = async () => {
    setLoading(true)
    setOpen(false)
    await Promise.all(
      ordered.map(async (col, i) => {
        const orderI = i + 1
        const id = col._id
        try {
          const token = loggedInUser.token
          const config = { headers: { Authorization: `Bearer ${token}` } }
          await axios.patch(
            `https://gardens.barracudadev.com/api/v1/gallery/${id}`,
            { order: orderI },
            config
          )
        } catch (err) {
          window.elert(err.errmessage)
        }
      })
    )
    getGallery()
    setLoading(false)
  }

  const findIndex = (e) => {
    const index =
      e.target.id ||
      e.target.parentElement.id ||
      e.target.parentElement.parentElement.id ||
      e.target.parentElement.parentElement.parentElement.id ||
      e.target.parentElement.parentElement.parentElement.id
    const output = parseInt(index)
    return output
  }
  const swapInArray = (array, iA, iB) => {
    const workingArr = [...array]
    const tmp = workingArr[iA]
    workingArr[iA] = array[iB]
    workingArr[iB] = tmp
    return workingArr
  }
  const handleUp = (e) => {
    const index = findIndex(e)
    if (index > 0) {
      const indexPrev = index - 1
      const array = swapInArray(ordered, index, indexPrev)
      setOrdered(array)
    } else {
      window.alert("ta kolekcja jest już na pierwszym miejscu")
      return
    }
  }
  const handleDown = (e) => {
    const index = findIndex(e)
    if (index < ordered.length - 1) {
      const indexNext = index + 1
      const array = swapInArray(ordered, index, indexNext)
      setOrdered(array)
    } else {
      window.alert("ta kolekcja jest już na ostatnim miejscu")
      return
    }
  }

  return (
    <div>
      <div className={classes.orderBtncontainer}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
          className={classes.orderBtn}
        >
          Zmień kolejność kolekcji
        </Button>
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        style={{ zIndex: 99999 }}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Zmień kolejność kolekcji
            </Typography>
            <Button autoFocus color="inherit" onClick={handleChange}>
              zapisz
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          {ordered.map((col, i) => (
            <div key={col._id}>
              <ListItem>
                <ListItemText primary={col.title} className={classes.text} />
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={handleUp}
                  id={i}
                >
                  <KeyboardArrowUpIcon className={classes.ico} id={i} />
                </IconButton>
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={handleDown}
                  id={i}
                >
                  <KeyboardArrowDownIcon className={classes.ico} id={i} />
                </IconButton>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </Dialog>
    </div>
  )
}
