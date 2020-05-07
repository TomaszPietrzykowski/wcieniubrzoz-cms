import React, { useState, useContext } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

import { AuthContext } from "../context/AuthContext"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "30ch",
    },
  },
  formContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  btnContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2rem",
  },
}))

const LoginForm = () => {
  const classes = useStyles()
  const { logIn, users, setUser } = useContext(AuthContext)
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

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
        return
      }
    } else {
      // no such user
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
  )
}

export default LoginForm
