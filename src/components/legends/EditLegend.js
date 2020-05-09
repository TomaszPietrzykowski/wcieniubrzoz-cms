import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Avatar from "@material-ui/core/Avatar"

import LegendEditBtns from "./LegendEditBtns"
import FileUpload from "../FileUpload"
import ConfirmEdit from "./ConfirmEdit"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "100%",
      "&:hover": {
        color: "#f00",
      },
    },
  },
  text: {
    ...theme.typography.tab,
    color: "#777",
    marginBottom: "0.5rem",
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
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    fontFamily: "Raleway",
    fontSize: "1.2rem",
    fontWeight: "700",
    textTransform: "none",
    borderRadius: "30px",
    padding: "0.2rem 1.3rem",
    color: "white",
    margin: "0.8rem",
  },
}))

const EditLegend = ({ legend, setActiveTab, setEditedLegend }) => {
  const classes = useStyles()
  const [title, setTitle] = useState(legend.title)
  const [description, setDescription] = useState(legend.content.join("\n\n"))
  const [img, setImg] = useState(legend.image)
  const id = legend._id
  const [confirm, setConfirm] = useState(false)

  // POST REQUEST HERE

  const updateTitle = (e) => {
    setTitle(e.target.value)
  }

  const updateDescription = (e) => {
    setDescription(e.target.value)
  }

  const goConfirm = () => {
    setConfirm(true)
  }

  return confirm ? (
    <ConfirmEdit setConfirm={setConfirm} />
  ) : (
    <div>
      <div className={classes.text}>
        <LegendEditBtns
          title={title}
          setEditedLegend={setEditedLegend}
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
              autoFocus
              id="outlined-required"
              label="Tytuł"
              defaultValue={legend.title}
              variant="outlined"
              onChange={updateTitle}
            />
          </div>
          <div className={classes.alert}>{console.log("title error")}</div>
          <div>
            <TextField
              multiline
              id="outlined-password-input"
              label="Treść"
              variant="outlined"
              defaultValue={description}
              onChange={updateDescription}
            />
          </div>
          <div className={classes.alert}>{console.log("content error")}</div>
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

export default EditLegend
