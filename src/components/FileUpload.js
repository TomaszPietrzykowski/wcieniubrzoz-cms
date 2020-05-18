import React, { useState, useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import axios from "axios"

import preview from "../assets/preview.png"
import Message from "./Message"
import { AuthContext } from "../context/AuthContext"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  btn: {
    ...theme.btn,
    ...theme.btnSmall,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
      margin: "0",
    },
  },
}))

const FileUpload = ({ setImg }) => {
  const { loggedInUser } = useContext(AuthContext)
  const classes = useStyles()
  const [file, setFile] = useState("")
  const [filename, setFilename] = useState("")
  const [uploadedFile, setUploadedFile] = useState({})
  const [changed, setChanged] = useState(false)
  const [msg, setMsg] = useState("")
  const [msgColor, setMsgColor] = useState("rgb(0,200,0)")

  const showSuccess = (string) => {
    setMsgColor("rgb(0,200,0)")
    setMsg(string)
    setTimeout(() => {
      setMsg("")
    }, 2500)
  }
  const showError = (string) => {
    setMsgColor("rgb(200,0,0)")
    setMsg(string)
    setTimeout(() => {
      setMsg("")
    }, 2500)
  }

  const onChange = (e) => {
    try {
      setFile(e.target.files[0])
      setFilename(e.target.files[0].name)
      setChanged(true)
      setImg(preview)
    } catch (err) {
      showError("Nie wybrano pliku")
      return
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("file", file)
    try {
      const res = await axios.post(
        "https://gardens.barracudadev.com/api/v1/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${loggedInUser.token}`,
          },
        }
      )
      const { fileName, filePath } = res.data

      setUploadedFile({ fileName, filePath })
      setImg(`https://gardens.barracudadev.com/uploads/${fileName}`)
      showSuccess(`Zapisano: ${fileName}`)
      setChanged(false)
    } catch (err) {
      if (!err.response || err.response.status === 500) {
        showError("Problem z serwerem")
        return
      } else {
        showError("Nieznany problem")
        return
      }
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className={classes.root}>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={onChange}
        />
        <label htmlFor="contained-button-file">
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            component="span"
          >
            Zmień
          </Button>
        </label>
        <label htmlFor="contained-button-file">
          <Button
            className={classes.btn}
            disabled={!changed}
            variant="contained"
            color="secondary"
            component="span"
            onClick={onSubmit}
          >
            Zapisz
          </Button>
        </label>
      </div>
      <Message msg={msg} msgColor={msgColor} />
    </form>
  )
}

export default FileUpload
