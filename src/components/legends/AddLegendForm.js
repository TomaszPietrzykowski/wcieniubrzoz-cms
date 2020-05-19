import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Avatar from "@material-ui/core/Avatar"

import LegendAddBtns from "./LegendAddBtns"
import FileUpload from "../FileUpload"
import ConfirmAdd from "./ConfirmAdd"

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

const AddLegendForm = ({ setLoading }) => {
  const classes = useStyles()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [img, setImg] = useState(
    "https://gardens.barracudadev.com/uploads/placeholder.svg"
  )
  const [source, setSource] = useState("")
  const [sourceUrl, setSourceUrl] = useState("")
  const [confirm, setConfirm] = useState(false)

  const updateTitle = (e) => {
    setTitle(e.target.value)
  }

  const updateDescription = (e) => {
    setDescription(e.target.value)
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

  return confirm ? (
    <ConfirmAdd
      setLoading={setLoading}
      setConfirm={setConfirm}
      title={title}
      description={description}
      source={source}
      sourceUrl={sourceUrl}
      img={img}
    />
  ) : (
    <div>
      <div className={classes.text}>
        <LegendAddBtns title={title} setConfirm={setConfirm} />
      </div>

      <div className={classes.formContainer}>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              required={true}
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
              required={true}
              style={{ margin: "auto", marginBottom: "30px" }}
              multiline
              id="outlined-password-input"
              label="Treść"
              variant="outlined"
              defaultValue={description}
              onChange={updateDescription}
            />
          </div>
          <div className={classes.alert} />
          <div>
            <TextField
              style={{ margin: "auto", marginBottom: "30px" }}
              id="outlined-required"
              label="Źródło"
              defaultValue={source}
              variant="outlined"
              onChange={updateSource}
            />
          </div>
          <div>
            <TextField
              style={{ margin: "auto" }}
              id="outlined-required"
              label="Link do żródła"
              defaultValue={sourceUrl}
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

export default AddLegendForm
