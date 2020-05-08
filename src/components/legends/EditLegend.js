import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

import LegendEditBtns from "./LegendEditBtns"

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
}))

const EditLegend = ({ legend }) => {
  const classes = useStyles()
  const [title, setTitle] = useState(legend.title)
  const [description, setDescription] = useState(legend.content.join("\n\n"))
  const [img, setImg] = useState(legend.image)
  const id = legend._id

  const updateTitle = (e) => {
    setTitle(e.target.value)
  }

  const updateDescription = (e) => {
    setDescription(e.target.value)
  }

  return (
    <div>
      <div className={classes.text}>
        <LegendEditBtns title={title} />
      </div>

      <div className={classes.formContainer}>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={console.log("yo")}
        >
          <div>
            <TextField
              required
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
              required
              id="outlined-password-input"
              label="Treść"
              variant="outlined"
              defaultValue={description}
              onChange={updateDescription}
            />
          </div>
          <div className={classes.alert}>{console.log("content error")}</div>
          <div className={classes.btnContainer}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{
                fontFamily: "Raleway",
                fontSize: "1.4rem",
                fontWeight: "700",
                textTransform: "none",
                borderRadius: "30px",
                padding: "0.2rem 1.2rem",
                margin: "auto",
              }}
            >
              Zaloguj
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditLegend
