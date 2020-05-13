import React, { useState } from "react"
import axios from "axios"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Avatar from "@material-ui/core/Avatar"

import FunfactEditBtns from "./FunfactEditBtns"
import FileUpload from "../FileUpload"
import ConfirmFunfactEdit from "./ConfirmFunfactEdit"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "100%",
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
  avatarContainer: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  btnContainer: {
    ...theme.btnContainer,
  },
  btn: {
    ...theme.btn,
    ...theme.btnSmall,
  },
}))

const EditFunfact = ({
  funfact,
  setActiveTab,
  setEditedFunfact,
  getFunfacts,
  setLoading,
}) => {
  const classes = useStyles()
  const [title, setTitle] = useState(funfact.title)
  const [description, setDescription] = useState(funfact.content.join("\n\n"))
  const [img, setImg] = useState(funfact.image)
  const [source, setSource] = useState(funfact.source)
  const [sourceUrl, setSourceUrl] = useState(funfact.source_url)
  const id = funfact._id
  const [confirm, setConfirm] = useState(false)

  const updateTitle = (e) => {
    setTitle(e.target.value)
  }

  const updateDescription = (e) => {
    setDescription(e.target.value)
    console.log(description)
  }

  const updateSource = (e) => {
    setSource(e.target.value)
  }

  const updateSourceUrl = (e) => {
    setSourceUrl(e.target.value)
  }

  const goConfirm = () => {
    setConfirm(true)
    window.scroll(0, 0)
  }
  const deleteFunfact = async () => {
    setLoading(true)
    if (window.confirm(`Usunąć trwale: ${id} - ${title}?`)) {
      try {
        const response = await axios.delete(
          `https://barracudadev.com/api/v1/funfacts/${id}`
        )
        setLoading(false)
        window.alert(`Ciekawostka usunięta`)
      } catch (e) {
        setLoading(false)
        window.alert(`😱 Axios request failed: ${e}`)
      }
      getFunfacts()
      setActiveTab("list")
      setEditedFunfact({})
    }
  }

  return confirm ? (
    <ConfirmFunfactEdit
      setConfirm={setConfirm}
      setActiveTab={setActiveTab}
      setEditedFunfact={setEditedFunfact}
      funfact={funfact}
      id={id}
      title={title}
      description={description}
      source={source}
      sourceUrl={sourceUrl}
      img={img}
      getFunfacts={getFunfacts}
    />
  ) : (
    <div>
      <div className={classes.text}>
        <FunfactEditBtns
          title={title}
          id={id}
          deleteFunfact={deleteFunfact}
          setEditedFunfact={setEditedFunfact}
          setActiveTab={setActiveTab}
          setConfirm={setConfirm}
        />
      </div>

      <div className={classes.formContainer}>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={() => console.log("handle submition")}
        >
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
          <div className={classes.alert}>{console.log("title error")}</div>
          <div>
            <TextField
              style={{ margin: "auto", marginBottom: "30px" }}
              multiline
              id="outlined-password-input"
              label="Treść"
              variant="outlined"
              defaultValue={description}
              onChange={updateDescription}
            />
          </div>
          <div className={classes.alert}>{console.log("content error")}</div>
          <div>
            <TextField
              style={{ margin: "auto", marginBottom: "30px" }}
              id="outlined-required"
              label="Źródło"
              defaultValue={source || "źródło nieznane"}
              variant="outlined"
              onChange={updateSource}
            />
          </div>
          <div>
            <TextField
              style={{ margin: "auto" }}
              id="outlined-required"
              label="Link do żródła"
              defaultValue={sourceUrl || "brak"}
              variant="outlined"
              onChange={updateSourceUrl}
            />
          </div>
        </form>
      </div>
      <div className={classes.uploadContainer}>
        <div className={classes.avatarContainer}>
          <Avatar
            style={{
              height: "180px",
              width: "180px",
            }}
            alt={`avatar`}
            src={img}
          />
        </div>
        <div className="fileUploadContainer">
          <FileUpload setImg={setImg} />
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

export default EditFunfact
