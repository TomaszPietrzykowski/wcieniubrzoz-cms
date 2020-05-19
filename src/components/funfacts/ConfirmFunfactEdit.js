import React, { useContext } from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import axios from "axios"

import { AuthContext } from "../../context/AuthContext"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.btnContainer,
    justifyContent: "space-around",
  },
  btn: {
    ...theme.btn,
    ...theme.btnSmall,
    marginRight: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      margin: "0.3rem",
    },
  },
  subtitle: {
    fontFamily: "Raleway",
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#777",
    marginBottom: "2.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      marginTop: "2rem",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  preview: {
    color: "#777",
    fontFamily: "Roboto",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  avatar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}))

const ConfirmFunfactEdit = ({
  setConfirm,
  setActiveTab,
  setEditedFunfact,
  funfact,
  id,
  title,
  description,
  source,
  sourceUrl,
  img,
  getFunfacts,
  setLoading,
}) => {
  const classes = useStyles()
  const { loggedInUser } = useContext(AuthContext)
  const parsed = description.split("\n").filter((string) => string !== "")
  const newContent = parsed.length > 0 ? parsed : funfact.content
  const newTitle = title || funfact.title
  const newSource = source || funfact.source || "brak"
  const newSourceUrl = sourceUrl || funfact.source_url || "brak"

  const updated = {
    title: newTitle,
    content: newContent,
    image: img,
    source: newSource,
    source_url: newSourceUrl,
  }
  const executePatch = async () => {
    setLoading(true)
    try {
      const token = loggedInUser.token
      const config = { headers: { Authorization: `Bearer ${token}` } }
      await axios.patch(
        `https://gardens.barracudadev.com/api/v1/funfacts/${id}`,
        updated,
        config
      )
      window.alert("Sukces: Ciekawostka zaktualizowana :)")
    } catch (e) {
      if (e.response) {
        setLoading(false)
        window.alert(e.response.data.message)
      } else {
        window.alert(e)
        setLoading(false)
      }
    }
    getFunfacts()
    setActiveTab("list")
    setEditedFunfact({})
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

export default ConfirmFunfactEdit
