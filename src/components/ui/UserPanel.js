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
  userPanelContainer: {
    width: "100%",
    marginTop: "3rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
    },
  },
  listItemAvatar: {
    height: "3.5rem",
    width: "3.5rem",
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      height: "3.2rem",
      width: "3.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "2.8rem",
      width: "2.8rem",
    },
  },
  textPrimary: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
}))

const UserPanel = ({ user }) => {
  const classes = useStyles()

  return (
    <div className={classes.userPanelContainer}>
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              className={classes.listItemAvatar}
              alt={`${user}'s avatar`}
              src={`${user.avatar}`}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <span
                className={classes.textPrimary}
              >{`Zalogowany jako ${user.name}`}</span>
            }
            secondary={
              <span
                className={classes.textPrimary}
              >{`Witaj ${user.name}. Zabierzmy się do pracy...`}</span>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </div>
  )
}

export default UserPanel
