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
    marginTop: "4rem",
  },
  table: {
    width: "100%",
  },
  tableHeader: {
    backgroundColor: "rgba(83, 198, 140, 0.7)",
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
    backgroundColor: "rgba(83, 198, 140, 0.06)",
    fontSize: "1rem",
    fontWeight: "700",
    color: "rgba(83, 198, 140, 1)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      fontWeight: "500",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.85rem",
    },
  },
}))

const PanelDB = ({
  legendsCount,
  tipsCount,
  funfactsCount,
  galleriesCount,
}) => {
  const classes = useStyles()

  function createData(name, value) {
    return { name, value }
  }

  const rows = [
    createData("Legendy:", legendsCount),
    createData("Porady:", tipsCount),
    createData("Ciekawostki:", funfactsCount),
    createData("Galerie:", galleriesCount),
  ]

  return (
    <div>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeader}>Baza danych</TableCell>
              <TableCell
                align="right"
                className={classes.tableHeader}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))}
            <TableRow key="Wszystkie dokumenty w bazie:">
              <TableCell
                component="th"
                scope="row"
                className={classes.tableSubheader}
              >
                Wszystkie dokumenty w bazie:
              </TableCell>
              <TableCell align="right" className={classes.tableSubheader}>
                {legendsCount + tipsCount + funfactsCount + galleriesCount}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default PanelDB
