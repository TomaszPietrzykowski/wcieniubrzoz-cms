import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles({
  tableContainer: {
    marginTop: "4rem",
  },
  table: {
    width: "100%",
  },
  tableHeader: {
    backgroundColor: "rgba(0, 163, 204, 1)",
    fontFamily: "Raleway",
    fontSize: "1.3rem",
    fontWeight: "700",
    letterSpacing: 1,
    color: "#fff",
  },
  tableSubheader: {
    backgroundColor: "rgba(0, 163, 204, 0.05)",
    fontSize: "1rem",
    fontWeight: "700",
    color: "rgba(0, 163, 204, 1)",
  },
})

const PanelFTP = ({ filesCount, totalSize }) => {
  const classes = useStyles()

  return (
    <div>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeader}>Serwer FTP</TableCell>
              <TableCell
                align="right"
                className={classes.tableHeader}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="Ilość zdjęć na serwerze:">
              <TableCell component="th" scope="row">
                Ilość zdjęć na serwerze:
              </TableCell>
              <TableCell align="right">{filesCount}</TableCell>
            </TableRow>

            <TableRow key="Zajęta przestrzeń:">
              <TableCell
                component="th"
                scope="row"
                className={classes.tableSubheader}
              >
                Zajęta przestrzeń:
              </TableCell>
              <TableCell align="right" className={classes.tableSubheader}>
                {totalSize}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default PanelFTP
