import React, { useContext, useState } from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import IconButton from "@material-ui/core/IconButton"
import ZoomIn from "@material-ui/icons/ZoomIn"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import axios from "axios"

import { AuthContext } from "../../context/AuthContext"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.btnContainer,
    justifyContent: "space-around",
  },
  flexContainer: {
    display: "flex",
    marginTop: "5rem",
    marginBottom: "5rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginTop: "3rem",
      marginBottom: "3rem",
    },
  },
  flex1: {
    flex: 2,
    marginRight: "2rem",
    [theme.breakpoints.down("sm")]: {
      flex: "auto",
      margin: 0,
    },
  },
  flex2: {
    flex: 3,
    [theme.breakpoints.down("sm")]: {
      flex: "auto",
      margin: 0,
    },
  },
  btn: {
    ...theme.btn,
    ...theme.btnSmall,
    marginRight: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      margin: "0.3rem",
    },
  },
  subtitle: {
    fontFamily: "Raleway",
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#777",
    marginBottom: "2.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      marginTop: "2rem",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  preview: {
    color: "#777",
    fontFamily: "Roboto",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  avatar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}))

const ConfirmCollectionEdit = ({
  setConfirm,
  setActiveTab,
  setEditedCollection,
  collection,
  id,
  title,
  description,
  isPublic,
  images,
  getGallery,
  setLoading,
}) => {
  const classes = useStyles()
  const { loggedInUser } = useContext(AuthContext)
  const parsed = description.split("\n").filter((string) => string !== "")
  const newContent = parsed.length > 0 ? parsed : collection.description
  const newTitle = title || collection.title
  const [open, setOpen] = useState(false)
  const [currentImg, setCurrentImg] = useState("")
  const isMobile = useMediaQuery("(max-width:600px)")

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = (img) => {
    setCurrentImg(img)
    setOpen(true)
  }

  const updated = {
    title: newTitle,
    description: newContent,
    isPublic: isPublic,
    images: images,
  }
  const executePatch = async () => {
    setLoading(true)
    try {
      const token = loggedInUser.token
      const config = { headers: { Authorization: `Bearer ${token}` } }
      await axios.patch(
        `https://gardens.barracudadev.com/api/v1/gallery/${id}`,
        updated,
        config
      )
      window.alert("Sukces: Kolekcja zaktualizowana :)")
    } catch (e) {
      if (e.response) {
        setLoading(false)
        window.alert(e.response.data.message)
      } else {
        window.alert(e)
        setLoading(false)
      }
    }
    getGallery()
    setActiveTab("list")
    setEditedCollection({})
  }
  const goBack = () => {
    setConfirm(false)
  }

  return (
    <div>
      <div className={classes.subtitle}>Potwierdź zmiany:</div>
      <div className={classes.flexContainer}>
        <div className={classes.flex1}>
          <div className={classes.preview}>
            <h3 style={{ color: "#555" }}>{title}</h3>
            <h4>{isPublic ? "Publiczna" : "Prywatna"}</h4>
            <div className={classes.content}>
              {newContent.map((par) => (
                <p>
                  {par}
                  <br />
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.flex2}>
          <div>
            <GridList cols={isMobile ? 2 : 3}>
              {images.map((img, i) => (
                <GridListTile key={i}>
                  <img src={img} alt="" />
                  <GridListTileBar
                    title={img.split("/")[img.split("/").length - 1]}
                    key={i}
                    actionIcon={
                      <IconButton onClick={() => handleOpen(img)}>
                        <span style={{ color: "#FFFFFF" }}>
                          <ZoomIn />
                        </span>
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
            <Dialog modal={false} open={open} onClose={handleClose}>
              <img src={currentImg} alt="" style={{ width: "100%" }} />
              <DialogActions className={classes.dialogButtons}>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Zamknij
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>

      <div className={classes.container}>
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          onClick={goBack}
        >
          Powrót
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.btn}
          onClick={executePatch}
        >
          Wyślij
        </Button>
      </div>
    </div>
  )
}

export default ConfirmCollectionEdit
