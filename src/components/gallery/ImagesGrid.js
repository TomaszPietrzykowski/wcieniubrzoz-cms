import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import IconButton from "@material-ui/core/IconButton"
import ZoomIn from "@material-ui/icons/ZoomIn"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    width: "100%",
  },
  dialogButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}))

const ImagesGrid = ({ images, removeImage }) => {
  const classes = useStyles()
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

  const handleDelete = (img) => {
    if (window.confirm("Usunąć trwale to zdjęcie?")) {
      removeImage(img)
      setOpen(false)
      setCurrentImg("")
    } else {
      setOpen(false)
      setCurrentImg("")
    }
  }

  return (
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
      <Dialog open={open} onClose={handleClose}>
        <img src={currentImg} alt="" style={{ width: "100%" }} />
        <DialogActions className={classes.dialogButtons}>
          <Button onClick={() => handleDelete(currentImg)}>
            <span style={{ color: "#FF0000" }}>Usuń</span>
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Zamknij
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ImagesGrid
