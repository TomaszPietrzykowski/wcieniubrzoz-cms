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

const EditLegend = ({ legend, setActiveTab, setEditedLegend, getLegends }) => {
  const classes = useStyles()
  const [title, setTitle] = useState(legend.title)
  const [description, setDescription] = useState(legend.content.join("\n\n"))
  const [img, setImg] = useState(legend.image)
  const [source, setSource] = useState(legend.source)
  const [sourceUrl, setSourceUrl] = useState(legend.source_url)
  const id = legend._id
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
  const deleteLegend = () => {
    console.log(`DELETE: ${id} - ${title}`)
    // DELETE REQUEST HERE
  }

  return confirm ? (
    <ConfirmEdit
      setConfirm={setConfirm}
      setActiveTab={setActiveTab}
      setEditedLegend={setEditedLegend}
      legend={legend}
      id={id}
      title={title}
      description={description}
      source={source}
      sourceUrl={sourceUrl}
      img={img}
      getLegends={getLegends}
    />
  ) : (
    <div>
      <div className={classes.text}>
        <LegendEditBtns
          title={title}
          id={id}
          deleteLegend={deleteLegend}
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

export default EditLegend
