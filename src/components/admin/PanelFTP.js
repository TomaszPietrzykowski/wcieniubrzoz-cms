import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginTop: "1rem",
  },
  table: {
    width: "100%",
  },
  tableHeader: {
    backgroundColor: "rgba(0, 163, 204, 0.7)",
    fontFamily: "Raleway",
    fontSize: "1.3rem",
    fontWeight: "700",
    letterSpacing: 2,
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      letterSpacing: 1,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.1rem",
    },
  },
  tableSubheader: {
    backgroundColor: "rgba(0, 163, 204, 0.06)",
    fontSize: "1rem",
    fontWeight: "700",
    color: "rgba(0, 163, 204, 1)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      fontWeight: "500",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.85rem",
    },
  },
}))

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
