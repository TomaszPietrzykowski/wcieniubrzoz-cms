import React, { useState, useContext } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

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
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    fontFamily: "Raleway",
    fontSize: "1.4rem",
    fontWeight: "700",
    textTransform: "none",
    borderRadius: "30px",
    padding: "0.3rem 1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
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

const LoginForm = () => {
  const classes = useStyles()
  const { logIn, users, setUser } = useContext(AuthContext)
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const updateLogin = (e) => {
    setLogin(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmition = (e) => {
    e.preventDefault()
    const userCheck = users.filter((user) => user.login === login)[0]
    if (userCheck) {
      if (userCheck.password === password) {
        setUser(userCheck)
        logIn()
      } else {
        // invalid password
        setPasswordError("Nieprawidłowe hasło")
        setTimeout(() => {
          setPasswordError("")
        }, 3000)
        return
      }
    } else {
      // no such user
      setLoginError(`Użytkownik ${login} nie istnieje`)
      setTimeout(() => {
        setLoginError("")
      }, 3000)
      return
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
        <div className={classes.alert}>{loginError}</div>
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
        <div className={classes.alert}>{passwordError}</div>
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
