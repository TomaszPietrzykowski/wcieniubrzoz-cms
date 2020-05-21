import React, { useState } from "react"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"

const PrivateSwitch = ({ isPublic, updatePrivate }) => {
  const [isChecked, setIsChecked] = useState(isPublic)

  const handleChange = (event) => {
    setIsChecked(event.target.checked)
    updatePrivate(event.target.checked)
  }

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={isChecked}
            onChange={handleChange}
            color="secondary"
          />
        }
        label={!isPublic ? "Prywatna" : "Publiczna"}
      />
    </FormGroup>
  )
}

export default PrivateSwitch
