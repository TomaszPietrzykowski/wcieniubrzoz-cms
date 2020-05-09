import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    ...theme.typography.tab,
    marginTop: "2rem",
    fontSize: "1rem",
  },
}))

const Message = ({ msg, msgColor }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <p className={classes.message} style={{ color: msgColor }}>
        {msg}
      </p>
    </div>
  )
}

export default Message
