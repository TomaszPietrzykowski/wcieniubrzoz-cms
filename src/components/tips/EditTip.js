import React, { useState, useContext } from "react"
import axios from "axios"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Avatar from "@material-ui/core/Avatar"

import TipEditBtns from "./TipEditBtns"
import FileUpload from "../FileUpload"
import ConfirmTipEdit from "./ConfirmTipEdit"
import { AuthContext } from "../../context/AuthContext"

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

const EditTip = ({ tip, setActiveTab, setEditedTip, getTips, setLoading }) => {
  const classes = useStyles()
  const { loggedInUser } = useContext(AuthContext)
  const [title, setTitle] = useState(tip.title)
  const [description, setDescription] = useState(tip.content.join("\n\n"))
  const [img, setImg] = useState(tip.image)
  const [source, setSource] = useState(tip.source)
  const [sourceUrl, setSourceUrl] = useState(tip.source_url)
  const id = tip._id
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

  const deleteTip = async () => {
    setLoading(true)
    if (window.confirm(`Usunąć trwale: ${id} - ${title}?`)) {
      try {
        const token = loggedInUser.token
        const config = { headers: { Authorization: `Bearer ${token}` } }
        await axios.delete(
          `https://gardens.barracudadev.com/api/v1/tips/${id}`,
          config
        )
        deleteFromFTP(img)
        setLoading(false)
        window.alert(`Porada usunięta`)
      } catch (e) {
        if (e.response) {
          setLoading(false)
          window.alert(e.response.data.message)
        } else {
          window.alert(e)
          setLoading(false)
        }
      }
      getTips()
      setActiveTab("list")
      setEditedTip({})
    }
  }

  return confirm ? (
    <ConfirmTipEdit
      setConfirm={setConfirm}
      setActiveTab={setActiveTab}
      setEditedTip={setEditedTip}
      tip={tip}
      id={id}
      title={title}
      description={description}
      source={source}
      sourceUrl={sourceUrl}
      img={img}
      getTips={getTips}
      setLoading={setLoading}
    />
  ) : (
    <div>
      <div className={classes.text}>
        <TipEditBtns
          title={title}
          id={id}
          deleteTip={deleteTip}
          setEditedTip={setEditedTip}
          setActiveTab={setActiveTab}
          setConfirm={setConfirm}
        />
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

export default EditTip
