import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

import GalleryAddBtns from "./GalleryAddBtns"
import FileUpload from "../FileUpload"
import ConfirmGalleryAdd from "./ConfirmGalleryAdd"
import ImagesGrid from "./ImagesGrid"
import PrivateSwitch from "./PrivateSwitch"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "100%",
    },
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
  text: {
    ...theme.typography.tab,
    color: "#777",
    marginBottom: "0.5rem",
  },
  inputText: {
    fontSize: "3rem",
  },
  uploadContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  previewContainer: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  isPublic: {
    ...theme.typography.tab,
    color: "#777",
    marginBottom: "1rem",
  },
  preview: {
    height: "180px",
    width: "180px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  btnContainer: {
    ...theme.btnContainer,
  },
  btn: {
    ...theme.btn,
    ...theme.btnSmall,
  },
}))

const AddGalleryForm = ({ setLoading }) => {
  const classes = useStyles()
  const [description, setDescription] = useState("")
  const [images, setImages] = useState([])
  const [confirm, setConfirm] = useState(false)
  const [title, setTitle] = useState("Nowa kolekcja")
  const [isPublic, setIsPublic] = useState(false)

  const updateTitle = (e) => {
    setTitle(e.target.value)
  }

  const updateDescription = (e) => {
    setDescription(e.target.value)
  }

  const removeImage = (selected) => {
    console.log("remove image called", selected)
    let arr = [...images]
    console.log(arr)
    const newArr = arr.filter((img) => img !== selected)
    setImages(newArr)
  }

  const addImage = (selected) => {
    const arr = [...images, selected]
    setImages(arr)
  }

  const goConfirm = () => {
    setConfirm(true)
    window.scroll(0, 0)
  }

  const updatePrivate = (bool) => {
    setIsPublic(bool)
  }

  return confirm ? (
    <ConfirmGalleryAdd
      setLoading={setLoading}
      setConfirm={setConfirm}
      title={title}
      isPublic={isPublic}
      description={description}
      images={images}
    />
  ) : (
    <div>
      <div className={classes.text}>
        <GalleryAddBtns title={title} setConfirm={setConfirm} />
      </div>
      <div className={classes.flexContainer}>
        <div className={classes.flex1}>
          <div className={classes.isPublic}>
            <PrivateSwitch isPublic={isPublic} updatePrivate={updatePrivate} />
          </div>
          <div className={classes.formContainer}>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  style={{ margin: "auto", marginBottom: "30px" }}
                  autoFocus
                  id="outlined-required"
                  label="Tytuł"
                  defaultValue={title}
                  variant="outlined"
                  onChange={updateTitle}
                />
              </div>
              <div className={classes.alert} />
              <div>
                <TextField
                  style={{ margin: "auto", marginBottom: "30px" }}
                  multiline
                  id="outlined-password-input"
                  label="Opis kolekcji"
                  variant="outlined"
                  defaultValue={description}
                  onChange={updateDescription}
                />
              </div>
              <div className={classes.alert} />
            </form>
          </div>
          <div className={classes.uploadContainer}>
            <div className={classes.previewContainer}>
              <div
                className={classes.preview}
                alt={`preview`}
                style={{ backgroundImage: `url(${images[images.length - 1]})` }}
              />
            </div>
            <div className="fileUploadContainer">
              <FileUpload setImg={addImage} />
            </div>
          </div>
        </div>
        <div className={classes.flex2}>
          <ImagesGrid images={images} removeImage={removeImage} />
        </div>
      </div>
      <div className={classes.btnContainer}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.btn}
          onClick={goConfirm}
        >
          Dalej
        </Button>
      </div>
    </div>
  )
}

export default AddGalleryForm
