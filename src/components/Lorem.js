import React from "react"
import Typography from "@material-ui/core/Typography"

const Lorem = ({ vol }) => {
  const arr = []
  const p =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, voluptatum animi quis, placeat voluptatem nihil, error vero nostrum ex velit sequi. Tempora voluptatibus eaque error odit nulla quaerat facilis voluptate autem a iure mollitia dolor, consequuntur incidunt adipisci et assumenda."
  for (let v = vol; v > 0; v--) {
    arr.push(p)
  }
  return (
    <Typography>
      <React.Fragment>
        {arr.map((par, i) => (
          <p key={i}>{par}</p>
        ))}
      </React.Fragment>
    </Typography>
  )
}

export default Lorem
