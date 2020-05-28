import React, { useState, useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import IconButton from "@material-ui/core/IconButton"
import ImageSearchIcon from "@material-ui/icons/ImageSearch"
import DeleteIcon from "@material-ui/icons/Delete"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"

import spinner from "../../assets/spinner.svg"

const useStyles = makeStyles({
  tableContainer: {
    marginTop: "4rem",
    marginBottom: "6rem",
  },
  table: {
    width: "100%",
  },
  tableHeader: {
    backgroundColor: "rgba(77, 0, 77, 0.5)",
    fontFamily: "Raleway",
    fontSize: "1.3rem",
    fontWeight: "700",
    letterSpacing: 1,
    color: "#fff",
  },
  tableSubheader: {
    backgroundColor: "rgba(77, 0, 77, 0.05)",
    fontSize: "1rem",
    fontWeight: "700",
    color: "rgba(77, 0, 77, 1)",
  },
  iconDelete: {
    color: "rgb(153, 0, 0)",
    fontSize: "1.2rem",
  },
  analizing: {
    color: "rgba(77, 0, 77, 0.7)",
  },
})

const PanelNoRef = ({ ftpTotal }) => {
  const classes = useStyles()
  const { loggedInUser } = useContext(AuthContext)
  const [noRefArray, setNoRefArray] = useState([])
  const [noRefCount, setNoRefCount] = useState(0)
  const [scanning, setScanning] = useState(false)

  const getRedundant = async () => {
    setScanning(true)
    setNoRefArray([])
    try {
      const token = loggedInUser.token
      const config = { headers: { Authorization: `Bearer ${token}` } }
      const bodyObj = { files: ftpTotal }
      const response = await axios.post(
        `https://gardens.barracudadev.com/api/v1/get_redundant`,
        bodyObj,
        config
      )

      const redundant = await response.data.data
      const redundantFiltered = redundant.filter(
        (el) => el.split(".").length > 1
      )
      setNoRefCount(redundantFiltered.length)
      setNoRefArray(redundantFiltered)
      setScanning(false)
    } catch (e) {
      if (e.response) {
        setScanning(false)
        window.alert(e.response.data.message)
      } else {
        window.alert(e)
        setScanning(false)
      }
    }
  }

  const handleDelete = (e) => {
    const id = e.target.id || e.target.parentElement.id
    window.alert(`Handle delete: ${id}`)
  }

  function createData(name, value) {
    return { name, value }
  }

  const rows = []
  noRefArray.forEach((img) => {
    rows.push(createData(img, "usuń"))
  })

  return (
    <div>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeader}>
                Pliki bez referencji
              </TableCell>
              <TableCell
                align="right"
                className={classes.tableHeader}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Szukaj nie używanych plików</TableCell>
              <TableCell align="right">
                {scanning ? (
                  <img
                    src={spinner}
                    alt="loading data"
                    style={{ height: "1.5rem" }}
                  />
                ) : (
                  <IconButton color="primary" onClick={getRedundant}>
                    <ImageSearchIcon className={classes.icon} />
                  </IconButton>
                )}
              </TableCell>
            </TableRow>
            {scanning ? (
              <TableRow>
                <TableCell className={classes.analizing}>
                  <strong>
                    Trwa analiza powiązań. Może to potrwać kilka minut...
                  </strong>
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            ) : noRefArray.length > 0 ? (
              <TableRow>
                <TableCell className={classes.tableSubheader}>
                  Pliki bez powiązań w bazie danych:
                </TableCell>
                <TableCell align="right" className={classes.tableSubheader}>
                  {noRefCount}
                </TableCell>
              </TableRow>
            ) : null}
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    color="primary"
                    id={row.name}
                    onClick={handleDelete}
                  >
                    <DeleteIcon className={classes.iconDelete} id={row.name} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <br />
    </div>
  )
}

export default PanelNoRef
