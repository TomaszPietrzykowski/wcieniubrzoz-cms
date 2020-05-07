import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Divider from "@material-ui/core/Divider"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}))

const UserPanel = () => {
  const user = "Dana"
  const classes = useStyles()
  return (
    <div style={{ width: "100%", marginTop: "3rem" }}>
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              style={{ height: "3.5rem", width: "3.5rem", marginRight: "1rem" }}
              alt={`${user}'s avatar`}
              src="https://barracudadev.com/uploads/avatars/avatar1.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary={`Zalogowany jako ${user}`}
            secondary={`Witaj ${user}. Zabierzmy się do pracy...`}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </div>
  )
}

export default UserPanel
