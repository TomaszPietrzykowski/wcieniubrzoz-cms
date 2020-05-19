import React, { useState, useContext } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import axios from "axios"

import { AuthContext } from "../context/AuthContext"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
  formContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1rem",
  },
  btnContainer: {
    ...theme.btnContainer,
  },
  btn: {
    ...theme.btn,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },
  alert: {
    width: "100%",
    minHeight: "2rem",
    fontSize: "0.8rem",
    color: "#f00",
    fontFamily: "Roboto",
    textAlign: "center",
  },
}))

const LoginForm = ({ setLoading }) => {
  const classes = useStyles()

  const { logIn, setUser } = useContext(AuthContext)
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const updateLogin = (e) => {
    setLogin(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmition = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axios.post(
        "https://gardens.barracudadev.com/api/v1/users/login",
        { login, password }
      )
      const userData = response.data.data
      const token = response.data.token
      const activeUser = { ...userData, token: token }
      setUser(activeUser)
      logIn()
    } catch (e) {
      if (e.response) {
        setLoading(false)
        window.alert(e.response.data.message)
      } else {
        window.alert("Autentykacja nieudana")
        setLoading(false)
      }
    }
  }

  return (
    <div className={classes.formContainer}>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmition}
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Login"
            defaultValue={login}
            variant="outlined"
            onChange={updateLogin}
          />
        </div>
        <div className={classes.alert} />
        <div>
          <TextField
            required
            id="outlined-password-input"
            label="Hasło"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={updatePassword}
          />
        </div>
        <div className={classes.alert} />
        <div className={classes.btnContainer}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.btn}
          >
            Zaloguj
          </Button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
