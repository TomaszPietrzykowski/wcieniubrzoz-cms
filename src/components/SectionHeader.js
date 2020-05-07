import React from "react"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
  sectionHeader: {
    ...theme.typography.sectionHeader,
    ...theme.palette.sectionHeader,
    marginTop: "6rem",
    marginBottom: "2rem",
  },
}))

const SectionHeader = ({ title }) => {
  const classes = useStyles()
  return <h1 className={classes.sectionHeader}>{title}</h1>
}

export default SectionHeader
