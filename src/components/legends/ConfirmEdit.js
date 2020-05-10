import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import axios from "axios"

const useStyles = makeStyles((theme) => ({
  container: {
    height: "6rem",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
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
  subtitle: {
    fontFamily: "Raleway",
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#777",
    marginBottom: "2.5rem",
  },
  preview: {
    color: "#777",
    fontFamily: "Roboto",
  },
  avatar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}))

const ConfirmEdit = ({
  setConfirm,
  setActiveTab,
  setEditedLegend,
  legend,
  id,
  title,
  description,
  source,
  sourceUrl,
  img,
  getLegends,
}) => {
  const classes = useStyles()
  const parsed = description.split("\n").filter((string) => string !== "")
  const newContent = parsed.lenght > 0 ? parsed : legend.content
  const newTitle = title || legend.title
  const newSource = source || legend.source || "brak"
  const newSourceUrl = sourceUrl || legend.source_url || "brak"

  const executePatch = async () => {
    const updated = {
      title: newTitle,
      content: newContent,
      image: img,
      source: newSource,
      source_url: newSourceUrl,
    }

    try {
      const response = await axios.patch(
        `https://barracudadev.com/api/v1/legends/${id}`,
        updated
      )
      console.log(response)
      window.alert("Sukces: legenda zaktualizowana :)")
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`)
    }
    // Show confirmation
    // .............timeout
    getLegends()
    setActiveTab("list")
    setEditedLegend({})
    // ___________________________________________________________________________________
  }
  const goBack = () => {
    setConfirm(false)
  }

  return (
    <div>
      <div className={classes.subtitle}>Potwierdź zmiany:</div>
      <div className={classes.preview}>
        <h3 style={{ color: "#555" }}>{title}</h3>
        <div className={classes.content}>
          {newContent.map((par) => (
            <p>
              {par}
              <br />
            </p>
          ))}
        </div>
        <div className={classes.source}>
          <p>{`Źródło: ${newSource}`}</p>
          <p>{`Link do źródła: ${newSourceUrl}`}</p>
        </div>
        <div className={classes.avatar}>
          <p>Aktualna grafika:</p>
          <br />
          <Avatar
            style={{
              height: "180px",
              width: "180px",
            }}
            alt={`avatar`}
            src={img}
          />
          <br />
        </div>
      </div>
      <div className={classes.container}>
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          onClick={goBack}
        >
          Powrót
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.btn}
          onClick={executePatch}
        >
          Wyślij
        </Button>
      </div>
    </div>
  )
}

export default ConfirmEdit
