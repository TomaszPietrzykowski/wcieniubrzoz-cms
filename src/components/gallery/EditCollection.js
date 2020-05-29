import React, { useState, useContext } from "react"
import axios from "axios"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { AuthContext } from "../../context/AuthContext"

import CollectionEditBtns from "./CollectionEditBtns"
import FileUpload from "../FileUpload"
import ImagesGrid from "./ImagesGrid"
import PrivateSwitch from "./PrivateSwitch"
import ConfirmCollectionEdit from "./ConfirmCollectionEdit"

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
  imgCount: {
    fontSize: "1rem",
    color: "#777",
    fontFamily: "Roboto",
    textAlign: "left",
    marginBottom: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  text: {
    ...theme.typography.tab,
    color: "#777",
    marginBottom: "0.5rem",
  },
  isPublic: {
    ...theme.typography.tab,
    color: "#777",
    marginBottom: "1rem",
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

const EditCollection = ({
  collection,
  setActiveTab,
  setEditedCollection,
  getGallery,
  setLoading,
}) => {
  const classes = useStyles()
  const { loggedInUser } = useContext(AuthContext)
  const [title, setTitle] = useState(collection.title)
  const [isPublic, setIsPublic] = useState(collection.isPublic)
  const [deleteMe, setDeleteMe] = useState([])
  const [description, setDescription] = useState(
    collection.description.join("\n\n")
  )
  const [images, setImages] = useState(collection.images)
  const id = collection._id
  const [confirm, setConfirm] = useState(false)

  const updateTitle = (e) => {
    setTitle(e.target.value)
  }

  const updateDescription = (e) => {
    setDescription(e.target.value)
  }

  const removeImage = async (selected) => {
    let arr = [...images]

    const newArr = arr.filter((img) => img !== selected)
    setImages(newArr)
    let deleteArr = [...deleteMe, selected]
    setDeleteMe(deleteArr)
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

  const deleteFromFTP = async (filePath) => {
    const token = loggedInUser.token
    const config = { headers: { Authorization: `Bearer ${token}` } }
    const fileName = filePath.split("/")[filePath.split("/").length - 1]
    const bodyObj = { file: fileName }
    await axios.post(
      `https://gardens.barracudadev.com/api/v1/delete`,
      bodyObj,
      config
    )
  }

  const deleteCollection = async () => {
    setLoading(true)
    if (window.confirm(`Usunąć trwale kolekcję: ${title}?`)) {
      try {
        const token = loggedInUser.token
        const config = { headers: { Authorization: `Bearer ${token}` } }
        await axios.delete(
          `https://gardens.barracudadev.com/api/v1/gallery/${id}`,
          config
        )
        images.forEach((string) => {
          deleteFromFTP(string)
        })
        setLoading(false)
        window.alert(`Galeria usunięta`)
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
  }

  return confirm ? (
    <ConfirmCollectionEdit
      setConfirm={setConfirm}
      setActiveTab={setActiveTab}
      setEditedCollection={setEditedCollection}
      collection={collection}
      id={id}
      title={title}
      isPublic={isPublic}
      description={description}
      images={images}
      getGallery={getGallery}
      setLoading={setLoading}
      deleteMe={deleteMe}
      deleteFromFTP={deleteFromFTP}
    />
  ) : (
    <div>
      <div className={classes.text}>
        <CollectionEditBtns
          title={title}
          id={id}
          deleteCollection={deleteCollection}
          deleteFromFTP={deleteFromFTP}
          setEditedCollection={setEditedCollection}
          setActiveTab={setActiveTab}
          setConfirm={setConfirm}
        />
      </div>
      <div className={classes.flexContainer}>
        <div className={classes.flex1}>
          <div className={classes.imgCount}>
            Zdjęć w kolekcji: {images.length}
          </div>
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

export default EditCollection
